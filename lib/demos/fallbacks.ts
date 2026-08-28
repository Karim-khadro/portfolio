import type {Locale} from '@/i18n/routing';

/**
 * Canned transcripts, written before the API was wired.
 *
 * They play through the exact same streaming UI when: the API key is missing
 * (local dev, preview deploys), the rate limit trips, any 5xx, or the global
 * daily budget is exceeded. Consequence: the marketing page is never broken by
 * an outage, and the demo UI was fully clickable before a token was spent.
 */
export const replyDrafterFallback: Record<Locale, string> = {
  fr: `[COMPRIS]
Client : particulier, ne donne pas son nom.
Demande : bruit au freinage sur une Golf de 2015, depuis lundi.
Urgence : moyenne — le véhicule roule, mais le freinage est concerné.
Informations manquantes : kilométrage, numéro de plaque, disponibilité du client.
[REPONSE]
Bonjour,

Merci pour votre message. Un bruit au freinage sur une Golf de 2015, c’est le plus souvent l’usure des plaquettes, parfois les disques. Ce n’est pas à laisser traîner.

Je peux prendre la voiture cette semaine. Un contrôle du système de freinage prend une trentaine de minutes. Si ce sont les plaquettes avant, comptez entre 140 et 220 € pièces et main-d’œuvre comprises ; si les disques sont à remplacer aussi, on monte à 320-420 €. Je ne vous donne le montant exact qu’après avoir vu la voiture, et rien n’est fait sans votre accord.

Pouvez-vous me dire votre kilométrage approximatif et vos disponibilités ? Je vous réserve un créneau.

Bien à vous,`,
  en: `[COMPRIS]
Customer: private individual, no name given.
Request: braking noise on a 2015 Golf, since Monday.
Urgency: medium — the car is drivable, but the brakes are involved.
Missing information: mileage, registration, customer availability.
[REPONSE]
Hello,

Thank you for your message. A noise when braking on a 2015 Golf is most often worn pads, sometimes the discs. It is not something to leave for long.

I can take the car this week. A brake system check takes about thirty minutes. If it is the front pads, expect €140–220 including parts and labour; if the discs need replacing too, €320–420. I only give an exact figure after seeing the car, and nothing is done without your approval.

Could you tell me your approximate mileage and when you are available? I will hold a slot for you.

Kind regards,`
};

export const siteAssistantFallback: Record<Locale, string> = {
  fr: `Un site vitrine démarre à 1 900 € et prend trois à quatre semaines. Ce prix comprend 4 à 6 pages en français, une conception pensée pour le téléphone d’abord, les textes structurés avec vous, un formulaire de contact, la fiche Google Business Profile, les bases du référencement local, l’hébergement à votre nom, une heure de formation et 30 jours de corrections.

La version anglaise est une option à 490 €, et la maintenance est à 35 € par mois — optionnelle, jamais imposée.

Si vous ne savez pas encore ce qu’il vous faut, le diagnostic à 690 € est fait pour ça : il est entièrement déduit si vous démarrez un forfait dans les 60 jours.
[SOURCES]
Tarifs — Site vitrine qui travaille pour vous | Services — Un site vitrine qui travaille pour vous`,
  en: `A website starts at €1,900 and takes three to four weeks. That covers 4 to 6 pages, a mobile-first design, copy structured with you, a contact form, the Google Business Profile, local SEO basics, hosting in your name, an hour of training and 30 days of fixes.

A second language is a €490 option, and maintenance is €35 a month — optional, never imposed.

If you do not yet know what you need, the €690 diagnostic exists for exactly that, and it is credited in full if you start a package within 60 days.
[SOURCES]
Pricing — A website that works for you | Services — A website that actually works for you`
};
