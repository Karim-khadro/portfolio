import {ImageResponse} from 'next/og';

export const ogSize = {width: 1200, height: 630};
export const ogContentType = 'image/png';

/**
 * Shared OG template. No font is fetched from Google inside the route — that is
 * the classic flaky build — so this uses the runtime's bundled default face.
 *
 * This matters because SMB owners forward links over WhatsApp, where a bare
 * card looks broken.
 */
export function renderOgImage({
  title,
  subtitle,
  accent = '#0f5f5c'
}: {
  title: string;
  subtitle: string;
  accent?: string;
}) {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          backgroundColor: '#faf8f5',
          padding: 72,
          borderBottom: `24px solid ${accent}`
        }}
      >
        <div style={{display: 'flex', flexDirection: 'column'}}>
          <div style={{fontSize: 28, color: accent, letterSpacing: 2}}>
            KARIM KHADRO
          </div>
          <div
            style={{
              marginTop: 32,
              fontSize: 62,
              lineHeight: 1.1,
              color: '#1b1a17',
              maxWidth: 960
            }}
          >
            {title}
          </div>
        </div>
        <div style={{fontSize: 30, color: '#4d4a44', maxWidth: 960}}>{subtitle}</div>
      </div>
    ),
    ogSize
  );
}
