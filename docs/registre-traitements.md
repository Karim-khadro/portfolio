# Registre des traitements

Document d'une page, à jour au moment du déploiement. C'est ce qu'un DPO client
demande, et c'est ce que l'APD attend d'un responsable de traitement.

**Responsable du traitement** : Karim Khadro, Jemeppe (Liège), Belgique — BCE : *(à compléter)* — karim@karimkhadro.be

## 1. Demandes de contact (formulaire)

| | |
|---|---|
| Finalité | Répondre à une demande commerciale et préparer une proposition |
| Base légale | Consentement (case non pré-cochée, non groupée) |
| Catégories de personnes | Prospects, dirigeants de PME |
| Catégories de données | Nom, entreprise, e-mail, téléphone, budget, échéance, message libre |
| Destinataires | Resend (envoi de l'e-mail), boîte mail professionnelle |
| Transfert hors UE | Resend (États-Unis) — DPA et clauses contractuelles types |
| Conservation | 24 mois dans la boîte mail, puis suppression |
| Sécurité | HTTPS, pas de base de données, accès à la boîte mail par mot de passe et 2FA |

**Pas de table `leads` en phase 1.** La politique de conservation est « ma boîte
mail », la surface de fuite est la boîte mail, et aucun outillage de réponse aux
demandes d'accès n'est dû. À revoir au-delà d'environ 10 demandes par mois.

## 2. Prise de rendez-vous (Cal.com)

| | |
|---|---|
| Finalité | Réserver un appel de découverte |
| Base légale | Consentement (l'iframe ne se charge qu'au clic) |
| Données | Nom, e-mail, créneau |
| Sous-traitant | Cal.com |
| Conservation | Selon la politique de Cal.com ; suppression sur demande |

## 3. Démos d'IA

| | |
|---|---|
| Finalité | Démontrer le produit |
| Base légale | Intérêt légitime (démonstration à la demande explicite du visiteur) |
| Données | Le texte saisi par le visiteur, transmis à Anthropic |
| Conservation | **Aucune.** Le contenu des messages n'est pas journalisé ; seuls le nombre de jetons et les codes de statut sont comptés |
| Mesure | Avertissement affiché sous chaque champ : ne pas saisir de données personnelles |

## 4. Mesure d'audience

Vercel Analytics — sans cookie, sans identifiant personnel, données agrégées.
Aucun bandeau de consentement n'est requis, et aucun n'est affiché.

## 5. Limitation d'abus

Adresses IP hachées avec un sel (SHA-256, tronqué) avant d'être utilisées comme
clé de limitation. L'adresse IP en clair n'est jamais stockée. Turnstile
(Cloudflare) est sans cookie.

## Sous-traitants

Vercel (hébergement, région Francfort) · Resend (e-mail) · Cal.com (rendez-vous)
· Cloudflare (Turnstile) · Upstash (limitation de débit) · Anthropic (démos).
