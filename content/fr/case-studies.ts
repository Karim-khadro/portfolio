import type {CaseStudy} from '../schema';

/**
 * Claim rules (§7): what he personally built, technologies, scope, mechanisms.
 * No revenue, traffic, uptime or cost-saving figure from an employer, no client
 * names, no screenshots, nothing implying these were freelance engagements.
 */
export const caseStudies: CaseStudy[] = [
  {
    slug: 'ookto',
    label: 'personnel',
    title: 'Construire seul un produit complet, arbitrage après arbitrage',
    oneLiner:
      'J’ai conçu, développé et mis en ligne un produit web entier — seul, sans équipe et sans budget d’exploitation.',
    situation:
      'Ookto est mon propre produit. Personne pour faire l’infrastructure, personne pour faire le design, personne pour reprendre le travail le lendemain. Chaque choix technique se payait en soirées, et chaque soirée mal dépensée ne revenait pas.',
    constraint:
      'La contrainte n’était pas technique, elle était budgétaire et humaine : une seule personne, quelques heures par semaine, et zéro budget d’exploitation. Il fallait donc que chaque brique choisie fonctionne sans surveillance et ne demande pas d’entretien. C’est exactement la contrainte d’une PME qui n’a pas de service informatique.',
    whatIDid: [
      'Un site rendu côté serveur pour que les pages soient rapides et trouvables sur Google, plutôt qu’une application vide aux yeux d’un moteur de recherche.',
      'Une base de données et une authentification prêtes à l’emploi plutôt que codées à la main : trois semaines de plomberie économisées, sur un travail que personne ne voit.',
      'Une base de données orientée graphe pour les recommandations, parce que le modèle relationnel rendait chaque requête pénible à écrire et lente à exécuter.',
      'Des fonctionnalités d’IA en production : génération de contenu, recherche par le sens plutôt que par mot-clé, recommandations contextuelles.',
      'Un stockage des médias séparé de l’application et un hébergement qui s’ajuste automatiquement à la charge.'
    ],
    technicalDetail: [
      'Next.js + Tailwind, rendu SSR/SSG pour le référencement.',
      'Supabase : Postgres, authentification, temps réel.',
      'Neo4j pour le graphe de recommandations.',
      'Intégration de modèles de langage pour la génération, la recherche sémantique et la recommandation.',
      'Stockage S3, déploiement Elastic Beanstalk avec mise à l’échelle automatique.'
    ],
    outcome:
      'Le produit est en ligne et fonctionne. Je ne publierai pas de chiffres de fréquentation : je n’ai pas de résultat commercial à vous vendre ici, j’ai une démonstration de capacité à construire de bout en bout.',
    buyerTranslation:
      'Sur votre projet, j’ai déjà pris chaque arbitrage que vous allez me demander de prendre — et je les ai pris avec mon propre argent au bout. Et j’ai mis des fonctionnalités d’IA dans un vrai produit, pas dans un tutoriel.',
    stack: ['Next.js', 'Tailwind', 'Supabase', 'Postgres', 'Neo4j', 'AWS', 'LLM'],
    role: 'Seul concepteur, développeur et responsable de l’exploitation',
    year: '2023 — aujourd’hui'
  },
  {
    slug: 'unisensor-cloud',
    label: 'en-poste',
    title: 'Devenir le seul responsable d’une infrastructure cloud de production',
    oneLiner:
      'J’ai repris, seul, l’infrastructure cloud d’applications en production : déploiement, surveillance, sécurité et maîtrise des coûts.',
    situation:
      'Dans le cadre de mon emploi, l’infrastructure cloud hébergeant des applications utilisées quotidiennement m’a été confiée. Seul responsable : si ça tombe, c’est moi ; si la facture dérape, c’est moi aussi.',
    constraint:
      'Une infrastructure de production ne se met pas en pause pour être améliorée. Chaque changement devait être réversible, et les modifications faites à la main — celles qu’on ne sait plus reproduire six mois plus tard — devaient disparaître au profit de scripts.',
    whatIDid: [
      'Repris et structuré les serveurs, le stockage, les bases de données, le réseau et les droits d’accès.',
      'Mis en place des tableaux de bord et des alertes : le problème se signale avant que l’utilisateur n’appelle.',
      'Fait la gouvernance des coûts — comprendre ligne par ligne ce qui est facturé et pourquoi, et couper ce qui ne sert plus.',
      'Conduit des audits de sécurité et des revues d’accès : qui a le droit de faire quoi, et est-ce encore justifié.',
      'Automatisé la création des ressources par script plutôt qu’à la main.',
      'Construit la chaîne d’intégration continue : le code part en production par un chemin identique à chaque fois.'
    ],
    technicalDetail: [
      'AWS : EC2, S3, RDS, VPC, IAM, groupes de sécurité, répartiteurs de charge, mise à l’échelle automatique.',
      'CloudWatch : tableaux de bord et alarmes.',
      'Provisionnement scripté en Python (Boto3).',
      'Intégration et déploiement continus via Bitbucket Pipelines.'
    ],
    outcome:
      'Un environnement de production tenu, surveillé et documenté par une seule personne — sans astreinte permanente, parce que la surveillance fait le travail.',
    buyerTranslation:
      'Votre application ne dépendra ni de mon humeur ni de mon PC : elle se déploie, se surveille et s’alerte toute seule. C’est la différence entre un site livré et un site tenu.',
    stack: ['AWS', 'EC2', 'RDS', 'S3', 'IAM', 'CloudWatch', 'Python / Boto3', 'CI/CD'],
    role: 'Seul responsable de l’infrastructure',
    year: '2022 — aujourd’hui'
  },
  {
    slug: 'unisensor-livraison',
    label: 'en-poste',
    title: 'Du serveur vide à la mise en production',
    oneLiner:
      'Plusieurs applications menées de la première ligne de code jusqu’à la mise en production, sur le web, le mobile et le poste de travail.',
    situation:
      'Dans le cadre de mes emplois, j’ai livré et maintenu des applications web utilisées tous les jours en interne, une application Android publiée sur le Play Store, et une application de bureau existante à faire évoluer.',
    constraint:
      'Ces applications sont utilisées par des gens dont ce n’est pas le métier de faire de l’informatique. Une régression n’est pas un ticket, c’est une journée de travail perdue pour quelqu’un. D’où les tests automatisés et la chaîne de déploiement, pas par goût de l’outillage.',
    whatIDid: [
      'Monté une plateforme complète depuis un serveur vide : socle applicatif, gestion des identités et des rôles, mise en production.',
      'Construit une interface web à partir de rien, avec une bibliothèque de composants réutilisables — donc un produit cohérent d’un écran à l’autre.',
      'Développé une application Android complète, publiée sur le Play Store.',
      'Repris et fait évoluer une application de bureau existante sans casser l’usage quotidien.',
      'Mis en place les tests automatisés exécutés à chaque modification.'
    ],
    technicalDetail: [
      'Java / Spring Boot et Angular (socle JHipster, identités via Keycloak).',
      'Une application Next.js où le rendu serveur et le référencement étaient précisément l’objectif.',
      'Kotlin et Jetpack Compose pour Android.',
      'JavaFX pour l’application de bureau.',
      'JUnit, Mockito et Pytest dans la chaîne d’intégration continue.'
    ],
    outcome:
      'Des applications en production, utilisées quotidiennement, mises à jour sans interruption de service.',
    buyerTranslation:
      '« De A à Z » n’est pas une formule commerciale chez moi : le serveur vide, l’écran de connexion, les rôles, les tests, la mise en ligne et la maintenance, je les ai tous faits, plusieurs fois.',
    stack: [
      'Java',
      'Spring Boot',
      'Angular',
      'Next.js',
      'Kotlin',
      'Jetpack Compose',
      'JavaFX',
      'Keycloak'
    ],
    role: 'Développeur full stack et Android',
    year: '2022 — aujourd’hui'
  },
  {
    slug: 'geo-solutions',
    label: 'en-poste',
    title: 'Rendre lisible une donnée complexe',
    oneLiner:
      'Des données géographiques lourdes transformées en cartes qu’un non-spécialiste peut lire et utiliser.',
    situation:
      'Chez Geo Solutions, le travail portait sur la donnée cartographique : de gros jeux de données géographiques que des communes, des bureaux d’études et des acteurs de l’agriculture et de l’environnement doivent pouvoir consulter sans être géomaticiens.',
    constraint:
      'Une donnée géographique est volumineuse et lente par nature. Tout l’enjeu est de ne calculer que ce qui est affiché, et de le publier dans des formats standards pour que le client ne dépende pas d’un logiciel unique.',
    whatIDid: [
      'Publié des couches cartographiques dans les formats standards du domaine, et les ai reliées à une interface web pour produire des cartes dynamiques.',
      'Construit des chaînes de traitement pour préparer et nettoyer la donnée avant publication.',
      'Automatisé l’exécution périodique de ces traitements, pour que la carte reste à jour sans intervention.'
    ],
    technicalDetail: [
      'GeoServer, couches WMS et WFS.',
      'Angular, OpenLayers et Leaflet pour la cartographie web.',
      'Traitements en R (paquets sf et terra).',
      'Orchestration des traitements avec Airflow.'
    ],
    outcome:
      'Des cartes consultables par des utilisateurs qui ne sont pas géomaticiens, alimentées par des traitements qui tournent seuls.',
    buyerTranslation:
      'Si vous êtes une commune, un bureau d’études ou une entreprise agricole ou environnementale avec de la donnée cartographique sur les bras : c’est une niche que très peu d’indépendants savent traiter, et je la connais.',
    stack: ['GeoServer', 'WMS / WFS', 'Angular', 'OpenLayers', 'Leaflet', 'R', 'Airflow'],
    role: 'Développeur et développeur SIG',
    year: '2022'
  },
  {
    slug: 'i-pulses',
    label: 'en-poste',
    title: 'Empêcher des données privées d’atteindre un chatbot dans le cloud — en 2019',
    oneLiner:
      'Mon travail de fin d’études consistait à construire le filtre qui retient les données personnelles avant qu’elles ne partent vers un service d’IA en ligne.',
    situation:
      'Stage de fin de bachelier, puis prolongation en job étudiant. Un client voulait un chatbot dont l’intelligence était fournie par un service en ligne, sans que les données de ses utilisateurs ne partent chez ce fournisseur.',
    constraint:
      'Toute la difficulté tient en une phrase : le service en ligne devait comprendre la question sans jamais recevoir ce qui permettait d’identifier la personne. Cela impose un intermédiaire que l’on maîtrise, placé entre l’utilisateur et le fournisseur.',
    whatIDid: [
      'Construit un intermédiaire, hébergé chez le client, par lequel passe chaque message.',
      'Filtré le contenu privé avant l’envoi vers le service d’IA en ligne.',
      'Relié le chatbot aux services web existants du client, puis mené la mise en production.',
      'Repris ensuite le projet pour le rendre pleinement opérationnel et lui ajouter des fonctionnalités.'
    ],
    technicalDetail: [
      'IBM Watson comme moteur de compréhension.',
      'Microsoft Bot Framework en intermédiaire, choisi parce qu’il est open source et hébergeable chez le client.',
      'Filtrage en Node.js ; interface web en React.',
      'Connexion aux services web existants en C#.'
    ],
    outcome:
      'Un chatbot en service, dont le fournisseur d’IA n’a jamais reçu les données privées des utilisateurs.',
    buyerTranslation:
      'En 2019, mon premier vrai projet consistait précisément à filtrer les données privées avant qu’elles n’atteignent un chatbot dans le cloud. La question de vos données, je ne la découvre pas aujourd’hui.',
    stack: ['Node.js', 'React', 'C#', 'IBM Watson', 'Microsoft Bot Framework'],
    role: 'Stagiaire puis développeur analyste',
    year: '2019'
  }
];
