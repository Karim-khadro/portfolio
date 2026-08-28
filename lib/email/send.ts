import 'server-only';
import {Resend} from 'resend';
import {site} from '@/lib/site';

/**
 * The entire email vendor surface lives in this file.
 *
 * Resend is US-based, which sits awkwardly next to a "your data stays in
 * Europe" pitch. Swapping to Brevo (French, GDPR-native) if EU residency
 * becomes part of the sales pitch is then a one-file change — that is the
 * whole reason for this boundary.
 */
export type Lead = {
  name: string;
  company?: string;
  email: string;
  phone?: string;
  needs: string[];
  message: string;
  budget: string;
  timing: string;
  locale: string;
};

function renderText(lead: Lead) {
  return [
    `Nom          : ${lead.name}`,
    `Entreprise   : ${lead.company || '—'}`,
    `E-mail       : ${lead.email}`,
    `Téléphone    : ${lead.phone || '—'}`,
    `Besoin       : ${lead.needs.join(', ') || '—'}`,
    `Budget       : ${lead.budget}`,
    `Échéance     : ${lead.timing}`,
    `Langue       : ${lead.locale}`,
    '',
    'Message :',
    lead.message
  ].join('\n');
}

export async function sendLead(lead: Lead) {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL ?? site.email;

  if (!apiKey) {
    // Local dev and preview deploys without a key: the form still validates and
    // still redirects, so the flow is testable end to end.
    console.info('[intake] RESEND_API_KEY not set — lead not sent:\n', renderText(lead));
    return {delivered: false};
  }

  const resend = new Resend(apiKey);

  const {error} = await resend.emails.send({
    from: `Site karimkhadro.be <formulaire@karimkhadro.be>`,
    to,
    // Replies go straight to the lead from his normal inbox.
    replyTo: lead.email,
    subject: `Demande — ${lead.name}${lead.company ? ` (${lead.company})` : ''} — ${lead.budget}`,
    text: renderText(lead)
  });

  if (error) {
    throw new Error(error.message);
  }

  return {delivered: true};
}
