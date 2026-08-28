import type {CvContent} from '../schema';

export const cv: CvContent = {
  headline: 'Full stack & cloud developer',
  summary:
    'Building since 2019: web and mobile applications, a production AWS infrastructure I am the sole owner of, and LLM features shipped in real products. Java/Spring Boot and Angular daily, Next.js and Python outside.',
  location: 'Jemeppe (Liège), Belgium',
  education: [
    {
      institution: 'University of Liège',
      title: 'MSc Computer Science, intelligent systems',
      location: 'Liège',
      period: '2020 — 2021',
      description:
        'First year completed, then interrupted to join the industry. Machine learning, deep learning, and deeper programming work.'
    },
    {
      institution: 'Haute École de la Province de Liège',
      title: 'BSc Computer Science and Management',
      location: 'Seraing',
      period: '2016 — 2020',
      description:
        'Programming in C then mainly Java, alongside SQL, PHP, MVC, UML, C# and JavaScript. Management specialisation, with an introduction to large-scale data.'
    },
    {
      institution: 'Don Bosco Verviers',
      title: 'Computer technician',
      location: 'Verviers',
      period: '2015 — 2016',
      description:
        'First steps in web programming, hardware and repair, networking and small network administration.'
    }
  ],
  work: [
    {
      company: 'Unisensor',
      title: 'Full stack & Android developer',
      location: 'Ougrée',
      period: 'Nov 2022 — present',
      bullets: [
        'Maintaining and extending two Java (Spring Boot) and AngularJS web applications deployed on AWS.',
        'Designed and built a Java and Angular web application deployed on AWS.',
        'Designed and built a complete Android application in Kotlin and Jetpack Compose, released on the Play Store.',
        'Maintaining and extending a JavaFX desktop application.',
        'Sole owner of the AWS infrastructure: EC2, S3, RDS, VPC, IAM, auto-scaling, CloudWatch monitoring, cost governance, security audits and access reviews.',
        'Automated provisioning in Python (Boto3) and CI/CD on Bitbucket Pipelines.'
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
      title: 'Developer & GIS developer',
      location: 'Namur',
      period: 'May 2022 — Nov 2022',
      bullets: [
        'Built cloud-hosted mapping and full stack applications.',
        'Published WMS and WFS layers through GeoServer, integrated into Angular front ends for dynamic maps.',
        'Geographic data pipelines in R (sf, terra), orchestrated with Airflow.'
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
      title: 'Analyst developer (student job)',
      location: 'Blegny',
      period: 'Oct 2019 — Dec 2019',
      bullets: [
        'Continuation of the placement: made the chatbot fully operational and added functionality (Node.js back-end, React front-end).',
        'Connected the chatbot to the client’s web services (C#), then deployed it.'
      ],
      stack: ['Node.js', 'React', 'C#']
    },
    {
      company: 'I-Pulses',
      title: 'Bachelor’s placement',
      location: 'Blegny',
      period: 'Feb 2019 — May 2019',
      bullets: [
        'Built middleware protecting the privacy of users of a cloud-hosted chatbot.',
        'IBM Watson as the comprehension engine, Microsoft Bot Framework as self-hostable middleware, React interface.',
        'Node.js filtering of all private content before it left for the cloud.'
      ],
      stack: ['Node.js', 'React', 'IBM Watson', 'Microsoft Bot Framework']
    }
  ],
  skillGroups: [
    {
      group: 'Backend',
      items: ['Java', 'Spring Boot', 'Node.js', 'Python', 'C#', 'REST', 'SQL', 'NoSQL']
    },
    {
      group: 'Frontend',
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
        'Monitoring and alerting'
      ]
    },
    {group: 'Mobile', items: ['Kotlin', 'Android Jetpack Compose', 'Play Store']},
    {
      group: 'Data & AI',
      items: [
        'LLM integration',
        'Semantic search',
        'Postgres',
        'Neo4j',
        'R (sf, terra)',
        'Airflow',
        'GeoServer, WMS/WFS'
      ]
    }
  ],
  languages: [
    {name: 'French', level: 'Native'},
    {name: 'Arabic', level: 'Native'},
    {name: 'English', level: 'C1 — daily professional use'}
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
      name: 'Traffic sign detection',
      description:
        'Deep learning application detecting and classifying over 80 types of traffic sign.',
      url: 'https://github.com/Karim-khadro/DL-Traffic-sign-detection'
    }
  ]
};
