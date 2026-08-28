import type {Service} from '../schema';

export const services: Service[] = [
  {
    slug: 'ia-pme',
    title: 'L’IA pour une petite entreprise, expliquée sans jargon',
    tagline: 'Un outil qui fait une tâche précise, bien, et sous votre contrôle.',
    problem:
      'Vous entendez parler d’intelligence artificielle partout, sans jamais savoir ce que ça donnerait chez vous, ni ce que ça coûterait, ni où partiraient vos données.',
    outcomes: [
      'Vous récupérez des heures sur les tâches de texte répétitives : répondre, trier, recopier, résumer.',
      'Vous répondez le jour même aux demandes qui arrivent par mail, par WhatsApp ou par Messenger.',
      'Vos réponses restent les vôtres : l’outil propose, votre équipe valide.',
      'Vous savez noir sur blanc ce qui sort de chez vous et ce qui n’en sort pas.'
    ],
    deliverables: [
      'Un cas d’usage unique, choisi pendant le diagnostic parce qu’il est celui qui vous coûte le plus de temps.',
      'Un outil connecté à vos vraies données : contenu du site, tarifs, PDF, boîte mail, tableur.',
      'Une étape de validation humaine, prévue dès la conception.',
      'Une note d’une page décrivant le trajet de vos données.',
      'Une formation de vos collaborateurs et 30 jours de réglages après la mise en service.'
    ],
    forWho: [
      'Une entreprise de 3 à 15 personnes qui noie une partie de sa semaine dans du texte répétitif.',
      'Un patron qui veut comprendre avant d’acheter.',
      'Un métier où une erreur se voit : on met donc un humain avant l’envoi.'
    ],
    typicalTimeline: '4 à 6 semaines',
    startingPrice: 2900,
    relatedPackages: ['diagnostic', 'assistant-ia'],
    relatedCaseStudies: ['ookto', 'i-pulses'],
    faq: [
      {
        question: 'Est-ce que ça va remplacer mon personnel ?',
        answer:
          'Je m’attaque à la partie que personne n’aime : recopier, trier, chercher, rédiger dix fois la même réponse. Dans une entreprise de 3 à 15 personnes, le problème n’est pas d’avoir trop de monde. L’outil propose, votre équipe valide.'
      },
      {
        question: 'Et si ça raconte n’importe quoi ?',
        answer:
          'Ça arrive. Trois garde-fous : l’outil ne répond qu’à partir de vos documents, il cite d’où vient l’information, et il dit « je ne sais pas, je transmets » plutôt que d’inventer. Sur les tâches sensibles, un humain valide avant l’envoi.'
      }
    ],
    seo: {
      title: 'Intégration de l’IA dans une PME — Liège',
      description:
        'Intégration d’outils d’IA et d’agents dans les petites entreprises de la région de Liège : six usages concrets, prix affichés, et une explication claire de ce qui arrive à vos données.'
    }
  },
  {
    slug: 'site-vitrine',
    title: 'Un site vitrine qui travaille pour vous',
    tagline: 'Quatre à six pages qui font sonner le téléphone, pas une brochure.',
    problem:
      'Vous n’avez pas de site, ou vous en avez un que vous n’osez plus montrer : illisible sur téléphone, introuvable sur Google, et personne ne sait plus qui a le mot de passe.',
    outcomes: [
      'Un client qui vous cherche vous trouve, et comprend en trente secondes ce que vous faites.',
      'Le site est lisible et rapide sur un téléphone, là où arrivent la plupart de vos visiteurs.',
      'Vous êtes présent correctement sur Google Maps et dans les recherches de votre commune.',
      'Les demandes arrivent dans votre boîte mail, pas dans un formulaire que personne ne relève.'
    ],
    deliverables: [
      '4 à 6 pages en français (version anglaise en option, 490 €).',
      'Textes construits avec vous — je ne vous laisse pas devant une page blanche.',
      'Formulaire de contact ou de prise de rendez-vous.',
      'Fiche Google Business Profile créée ou remise d’aplomb, bases du référencement local.',
      'Statistiques de fréquentation, hébergement à votre nom, 1 h de formation, 30 jours de corrections.'
    ],
    forWho: [
      'Artisans, cabinets, restaurants, petits commerces.',
      'Une entreprise dont le site date des années 2010 et n’a jamais été remis à jour.'
    ],
    typicalTimeline: '3 à 4 semaines',
    startingPrice: 1900,
    relatedPackages: ['site-vitrine'],
    relatedCaseStudies: ['ookto'],
    faq: [
      {
        question: 'Est-ce que je pourrai modifier le site moi-même ?',
        answer:
          'Oui pour les contenus qui bougent (horaires, tarifs, actualités) : on met en place ce qu’il faut et je vous forme une heure. Pour le reste, une modification me prend quelques minutes et je préfère la faire correctement.'
      },
      {
        question: 'À qui appartient le site ?',
        answer:
          'À vous. Le nom de domaine, l’hébergement et les accès sont à votre nom dès le départ. Si un jour vous voulez travailler avec quelqu’un d’autre, vous partez avec tout.'
      }
    ],
    seo: {
      title: 'Création de site internet — Liège, Seraing, Herstal',
      description:
        'Création de site vitrine pour artisans et petites entreprises de la région liégeoise : 4 à 6 pages, mobile, référencement local, hébergement à votre nom. À partir de 1 900 €.'
    }
  },
  {
    slug: 'application-web',
    title: 'Une application web de A à Z',
    tagline: 'Quand le processus tourne sur Excel et par mail, et que ça craque.',
    problem:
      'Un processus important de votre entreprise vit dans un tableur partagé, une boîte mail et la tête de deux personnes. Ça a tenu longtemps. Ça ne tient plus.',
    outcomes: [
      'Un outil interne qui correspond à votre façon de travailler, pas l’inverse.',
      'Chacun voit ce qu’il doit voir : les rôles et les accès sont définis avec vous.',
      'Plus de version « finale_v3_ok.xlsx ».',
      'Le code et les accès vous appartiennent : aucun enfermement chez moi.'
    ],
    deliverables: [
      'Cadrage et parcours utilisateurs (maquettes Figma) avant la moindre ligne de code.',
      'Architecture, développement, authentification et gestion des rôles.',
      'Déploiement cloud avec intégration continue, tests, supervision et alertes.',
      'Documentation de reprise et transfert du dépôt de code.'
    ],
    forWho: [
      'Une PME dont un processus métier a dépassé ce qu’un tableur sait faire.',
      'Une entreprise qui veut un interlocuteur unique du premier appel à la mise en production.'
    ],
    typicalTimeline: '8 à 14 semaines, vendues par phases',
    startingPrice: 9500,
    relatedPackages: ['application-web'],
    relatedCaseStudies: ['unisensor-cloud', 'unisensor-livraison'],
    faq: [
      {
        question: 'Pourquoi ne pas annoncer un prix ferme tout de suite ?',
        answer:
          'Parce qu’un prix ferme sur un projet de trois mois qu’on n’a pas encore cadré est une fiction, pour vous comme pour moi. On commence par un cadrage payant (1 500 €) qui produit les maquettes et le périmètre ; la phase 1 est ensuite chiffrée fermement.'
      }
    ],
    seo: {
      title: 'Application web sur mesure — développeur freelance à Liège',
      description:
        'Développement d’applications web internes sur mesure pour PME : cadrage, développement, déploiement cloud, tests et reprise. Projets vendus par phases, code transféré.'
    }
  },
  {
    slug: 'diagnostic',
    title: 'Diagnostic IA & digital',
    tagline: 'Pour ceux qui disent « je ne sais pas ce qu’il me faut ». C’est la majorité.',
    problem:
      'Vous sentez qu’il y a quelque chose à gagner, mais chaque prestataire vous vend sa spécialité et vous n’avez aucun moyen de trancher.',
    outcomes: [
      'Vous savez quelles sont vos trois meilleures pistes, classées par effort et par gain.',
      'Vous savez surtout ce qu’il ne faut pas faire, et pourquoi.',
      'Vous avez un budget par option, avant de vous engager sur quoi que ce soit.',
      'Le rapport est à vous : rien ne vous oblige à travailler avec moi ensuite.'
    ],
    deliverables: [
      'Un appel structuré de 90 minutes.',
      'Une revue de vos outils actuels, de votre site et de votre organisation.',
      'Un rapport écrit de 4 à 6 pages : 3 opportunités classées, ce qu’il ne faut pas faire, un budget par option, la première étape recommandée.',
      'Un débriefing de 30 minutes.'
    ],
    forWho: [
      'Toute entreprise de 1 à 15 personnes qui hésite entre cinq idées.',
      'Un dirigeant qui veut un avis indépendant avant d’investir.'
    ],
    typicalTimeline: '1 semaine',
    startingPrice: 690,
    relatedPackages: ['diagnostic'],
    relatedCaseStudies: [],
    faq: [
      {
        question: 'Et si la conclusion est qu’il n’y a rien à faire ?',
        answer:
          'Alors je vous l’écris. Il m’arrive de conclure qu’il n’y a pas d’IA à mettre nulle part et qu’il faut d’abord remettre d’aplomb votre fiche Google. Un diagnostic qui vous évite une dépense de 3 000 € a payé ses 690 €.'
      },
      {
        question: 'Les 690 € sont-ils perdus si je continue avec vous ?',
        answer:
          'Non. Ils sont intégralement déduits de tout forfait démarré dans les 60 jours.'
      }
    ],
    seo: {
      title: 'Diagnostic IA & digital pour PME — 690 €',
      description:
        'Un diagnostic indépendant en une semaine : 90 minutes d’entretien, un rapport écrit de 4 à 6 pages, trois pistes classées par effort et impact, et ce qu’il ne faut pas faire.'
    }
  }
];
