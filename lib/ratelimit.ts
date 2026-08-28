import 'server-only';
import {createHash} from 'crypto';
import {Ratelimit} from '@upstash/ratelimit';
import {Redis} from '@upstash/redis';

/**
 * Every limit degrades open into the scripted fallback rather than into a 500.
 * When Upstash is not configured (local dev, first preview deploy) nothing here
 * blocks — the Anthropic Workspace spend cap set in the Console is the limit
 * that cannot be bypassed by a bug in this file.
 */
const hasRedis = Boolean(
  process.env.UPSTASH_REDIS_REST_URL && process.env.UPSTASH_REDIS_REST_TOKEN
);

const redis = hasRedis ? Redis.fromEnv() : null;

/** GDPR minimisation: the raw IP is never stored, only a salted hash. */
export function hashIp(ip: string) {
  const salt = process.env.IP_HASH_SALT ?? 'karimkhadro-local-salt';
  return createHash('sha256').update(`${salt}:${ip}`).digest('hex').slice(0, 32);
}

export function getClientIp(request: Request) {
  const forwarded = request.headers.get('x-forwarded-for');
  return forwarded?.split(',')[0]?.trim() ?? '0.0.0.0';
}

const demoShortLimiter = redis
  ? new Ratelimit({
      redis,
      limiter: Ratelimit.slidingWindow(4, '10 m'),
      prefix: 'demo:short'
    })
  : null;

const demoDailyLimiter = redis
  ? new Ratelimit({
      redis,
      limiter: Ratelimit.slidingWindow(12, '1 d'),
      prefix: 'demo:day'
    })
  : null;

const intakeLimiter = redis
  ? new Ratelimit({
      redis,
      limiter: Ratelimit.slidingWindow(3, '1 h'),
      prefix: 'intake'
    })
  : null;

export async function checkDemoRateLimit(ipHash: string) {
  if (!demoShortLimiter || !demoDailyLimiter) return {success: true};

  const short = await demoShortLimiter.limit(ipHash);
  if (!short.success) return {success: false};

  const daily = await demoDailyLimiter.limit(ipHash);
  return {success: daily.success};
}

export async function checkIntakeRateLimit(ipHash: string) {
  if (!intakeLimiter) return {success: true};
  return intakeLimiter.limit(ipHash);
}

/**
 * The circuit breaker: a global estimated-token counter per day.
 * Over threshold, both demos fall back to their recorded transcripts.
 */
const DAILY_TOKEN_BUDGET = Number(process.env.DEMO_DAILY_TOKEN_BUDGET ?? 2_000_000);

function budgetKey() {
  return `demo:budget:${new Date().toISOString().slice(0, 10)}`;
}

export async function isBudgetExceeded() {
  if (!redis) return false;

  const used = await redis.get<number>(budgetKey());
  return (used ?? 0) > DAILY_TOKEN_BUDGET;
}

export async function recordTokenUsage(tokens: number) {
  if (!redis || tokens <= 0) return;

  const key = budgetKey();
  await redis.incrby(key, tokens);
  // Two days of TTL is enough for a per-day key and survives clock skew.
  await redis.expire(key, 60 * 60 * 48);
}
