import type {Package} from '../schema';

export const packages: Package[] = [
  {
    slug: 'diagnostic',
    name: 'Diagnostic IA & digital',
    priceFrom: 690,
    billing: 'prix fixe, entièrement déduit de tout forfait démarré dans les 60 jours',
    bestFor: 'Vous savez que quelque chose doit changer, sans savoir quoi.',
    includes: [
      'Appel structuré de 90 minutes',
      'Revue de vos outils, de votre site et de votre organisation actuelle',
      'Rapport écrit de 4 à 6 pages : 3 opportunités classées par effort et impact',
      'Ce qu’il ne faut pas faire, et pourquoi',
      'Un budget par option et la première étape recommandée',
      'Débriefing de 30 minutes'
    ],
    excludes: [
      'Aucun développement à ce stade',
      'Aucune obligation de poursuivre avec moi'
    ],
    deliveryWeeks: '1 semaine',
    ctaKey: 'bookDiagnostic',
    highlight: true
  },
  {
    slug: 'site-vitrine',
    name: 'Site vitrine qui travaille pour vous',
    priceFrom: 1900,
    billing: '40 % à la commande, 60 % à la mise en ligne',
    bestFor: 'Artisans, cabinets, restaurants et petits commerces sans site, ou avec un site mort.',
    includes: [
      '4 à 6 pages en français (version anglaise : +490 €)',
      'Conception mobile d’abord',
      'Textes structurés avec vous',
      'Formulaire de contact ou de prise de rendez-vous',
      'Fiche Google Business Profile et bases du référencement local',
      'Statistiques de fréquentation',
      'Hébergement et nom de domaine à votre nom',
      '1 h de formation et 30 jours de corrections'
    ],
    excludes: [
      'Boutique en ligne et paiement',
      'Rédaction complète de tous les textes sans votre participation',
      'Photographies professionnelles et logo'
    ],
    deliveryWeeks: '3 à 4 semaines',
    ctaKey: 'bookCall',
    recurring: 'maintenance 35 €/mois'
  },
  {
    slug: 'assistant-ia',
    name: 'Assistant IA sur mesure',
    priceFrom: 2900,
    billing: '40 % à la commande, 60 % à la mise en service',
    bestFor: 'Une entreprise qui se noie dans du travail de texte répétitif.',
    includes: [
      'Un cas d’usage précis, choisi pendant le diagnostic',
      'Connexion à vos vraies données : contenu du site, tarifs, PDF, boîte mail, tableur',
      'Une étape de validation humaine, prévue dès la conception',
      'Une note écrite décrivant ce qui sort de chez vous',
      'Hébergement européen quand c’est techniquement possible',
      'Formation de vos collaborateurs',
      '30 jours de réglages après la mise en service'
    ],
    excludes: [
      'Toute décision automatique sans relecture humaine',
      'Le traitement de données médicales de patients',
      'Les coûts d’API du modèle, facturés séparément et à prix coûtant'
    ],
    deliveryWeeks: '4 à 6 semaines',
    ctaKey: 'bookDiagnostic',
    highlight: true,
    recurring: '150 €/mois (hébergement, supervision, réglages mensuels, API au réel)'
  },
  {
    slug: 'application-web',
    name: 'Application web de A à Z',
    priceFrom: 9500,
    billing: 'vendue par phases : cadrage payant 1 500 €, puis phase par phase',
    bestFor: 'Un processus qui tourne sur Excel et par mail et qui a besoin d’un vrai outil.',
    includes: [
      'Cadrage, parcours utilisateurs et maquettes Figma',
      'Architecture et développement',
      'Authentification et gestion des rôles',
      'Déploiement cloud avec intégration continue',
      'Tests automatisés et supervision',
      'Documentation de reprise',
      'Transfert de la propriété du code et du dépôt'
    ],
    excludes: [
      'Un prix ferme sur l’ensemble du projet avant le cadrage',
      'Les licences et abonnements tiers',
      'La reprise de données non structurées sans analyse préalable'
    ],
    deliveryWeeks: '8 à 14 semaines',
    ctaKey: 'bookCall',
    recurring: 'maintenance à partir de 250 €/mois'
  }
];

export const addOns = [
  {
    name: 'Reprise ou sauvetage d’un projet existant',
    price: 690,
    note: 'audit d’abord, devis ensuite'
  },
  {
    name: 'Audit AWS et coûts cloud',
    price: 1200,
    note: 'gouvernance des coûts et revue des accès'
  },
  {
    name: 'Formation IA pour votre équipe (demi-journée)',
    price: 690,
    note: 'sur vos cas réels, pas des exemples génériques'
  },
  {
    name: 'Version anglaise d’un site vitrine',
    price: 490,
    note: 'traduction et adaptation, pas du mot à mot'
  }
];
