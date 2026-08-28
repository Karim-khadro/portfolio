import type {CvContent} from '../schema';

/**
 * Facts come from the CV PDF, not the old texts.js (which was stale and had
 * typos: Ourgée, Sprint boot, Beck-end, Hight school…).
 * No star ratings, no birth date, no crypto project.
 */
export const cv: CvContent = {
  headline: 'Développeur full stack & cloud',
  summary:
    'Développeur depuis 2019 : applications web et mobiles, infrastructure AWS de production dont je suis le seul responsable, et intégration de modèles de langage dans de vrais produits. Java/Spring Boot et Angular au quotidien, Next.js et Python en dehors.',
  location: 'Jemeppe (Liège), Belgique',
  education: [
    {
      institution: 'Université de Liège',
      title: 'Master en sciences informatiques, orientation systèmes intelligents',
      location: 'Liège',
      period: '2020 — 2021',
      description:
        'Première année suivie, interrompue pour entrer en entreprise. Apprentissage machine, apprentissage profond, et approfondissement de la programmation.'
    },
    {
      institution: 'Haute École de la Province de Liège',
      title: 'Bachelier en informatique de gestion',
      location: 'Seraing',
      period: '2016 — 2020',
      description:
        'Programmation en C puis principalement en Java, ainsi que SQL, PHP, MVC, UML, C# et JavaScript. Spécialisation en gestion, avec une ouverture sur le traitement de gros volumes de données.'
    },
    {
      institution: 'Don Bosco Verviers',
      title: 'Technicien en informatique',
      location: 'Verviers',
      period: '2015 — 2016',
      description:
        'Premiers pas en programmation web, matériel et réparation, réseaux et administration de petits réseaux.'
    }
  ],
  work: [
    {
      company: 'Unisensor',
      title: 'Développeur full stack & Android',
      location: 'Ougrée',
      period: 'Nov 2022 — aujourd’hui',
      bullets: [
        'Maintenance et développement de nouvelles fonctionnalités sur deux applications web Java (Spring Boot) et AngularJS, déployées sur AWS.',
        'Conception et développement d’une application web Java et Angular, déployée sur AWS.',
        'Conception et développement d’une application Android complète en Kotlin et Jetpack Compose, publiée sur le Play Store.',
        'Maintenance et évolution d’une application de bureau JavaFX.',
        'Seul responsable de l’infrastructure AWS : EC2, S3, RDS, VPC, IAM, mise à l’échelle, supervision CloudWatch, gouvernance des coûts, audits de sécurité et revues d’accès.',
        'Provisionnement automatisé en Python (Boto3) et chaîne CI/CD sur Bitbucket Pipelines.'
      ],
      stack: [
        'Java',
        'Spring Boot',
        'Angular',
        'Kotlin',
        'Jetpack Compose',
        'JavaFX',
        'AWS',
        'SQL',
        'MongoDB'
      ]
    },
    {
      company: 'Geo Solutions',
      title: 'Développeur & développeur SIG',
      location: 'Namur',
      period: 'Mai 2022 — Nov 2022',
      bullets: [
        'Développement d’applications cartographiques et full stack hébergées dans le cloud.',
        'Publication de couches WMS et WFS via GeoServer, intégrées à des interfaces Angular pour des cartes dynamiques.',
        'Chaînes de traitement de données géographiques en R (sf, terra), orchestrées avec Airflow.'
      ],
      stack: [
        'OpenLayers',
        'Leaflet',
        'GeoServer',
        'Angular',
        'Node.js',
        'R Shiny',
        'C#',
        'Azure',
        'Spring Boot'
      ]
    },
    {
      company: 'I-Pulses',
      title: 'Développeur analyste (job étudiant)',
      location: 'Blegny',
      period: 'Oct 2019 — Déc 2019',
      bullets: [
        'Prolongation du stage : mise en service complète du chatbot et ajout de fonctionnalités (back-end Node.js, front-end React).',
        'Connexion du chatbot aux services web du client (C#), puis déploiement.'
      ],
      stack: ['Node.js', 'React', 'C#']
    },
    {
      company: 'I-Pulses',
      title: 'Stage de fin de bachelier',
      location: 'Blegny',
      period: 'Fév 2019 — Mai 2019',
      bullets: [
        'Construction d’un intermédiaire protégeant la vie privée des utilisateurs d’un chatbot hébergé dans le cloud.',
        'IBM Watson comme moteur de compréhension, Microsoft Bot Framework en intermédiaire auto-hébergeable, interface React.',
        'Filtrage en Node.js de tout contenu privé avant son envoi vers le cloud.'
      ],
      stack: ['Node.js', 'React', 'IBM Watson', 'Microsoft Bot Framework']
    }
  ],
  skillGroups: [
    {
      group: 'Back-end',
      items: ['Java', 'Spring Boot', 'Node.js', 'Python', 'C#', 'REST', 'SQL', 'NoSQL']
    },
    {
      group: 'Front-end',
      items: ['Angular', 'React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'HTML/CSS']
    },
    {
      group: 'Cloud & DevOps',
      items: [
        'AWS (EC2, S3, RDS, VPC, IAM, CloudWatch)',
        'CI/CD',
        'Docker',
        'Linux',
        'Boto3',
        'Supervision et alertes'
      ]
    },
    {group: 'Mobile', items: ['Kotlin', 'Android Jetpack Compose', 'Play Store']},
    {
      group: 'Données & IA',
      items: [
        'Intégration de modèles de langage',
        'Recherche sémantique',
        'Postgres',
        'Neo4j',
        'R (sf, terra)',
        'Airflow',
        'GeoServer, WMS/WFS'
      ]
    }
  ],
  languages: [
    {name: 'Français', level: 'Langue maternelle'},
    {name: 'Arabe', level: 'Langue maternelle'},
    {name: 'Anglais', level: 'C1 — usage professionnel quotidien'}
  ],
  tools: [
    'VS Code',
    'IntelliJ / Visual Studio',
    'Android Studio',
    'Git & Git Flow',
    'Jira / Atlassian',
    'Docker',
    'Figma',
    'Scrum'
  ],
  sideProjects: [
    {
      name: 'Détection de panneaux routiers',
      description:
        'Application d’apprentissage profond détectant et classant plus de 80 types de panneaux de signalisation.',
      url: 'https://github.com/Karim-khadro/DL-Traffic-sign-detection'
    }
  ]
};
