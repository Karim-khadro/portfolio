import type {CaseStudy} from '../schema';

export const caseStudies: CaseStudy[] = [
  {
    slug: 'ookto',
    label: 'personnel',
    title: 'Building a complete product alone, trade-off by trade-off',
    oneLiner:
      'I designed, built and shipped an entire web product — alone, with no team and no operations budget.',
    situation:
      'Ookto is my own product. Nobody to do the infrastructure, nobody to do the design, nobody to pick the work back up the next day. Every technical decision was paid for in evenings, and every badly spent evening did not come back.',
    constraint:
      'The constraint was not technical, it was budgetary and human: one person, a few hours a week, zero operations budget. So every building block had to run unattended and demand no maintenance. That is exactly the constraint of a small company with no IT department.',
    whatIDid: [
      'Server-rendered pages so they load fast and are findable on Google, rather than an application that looks empty to a search engine.',
      'An off-the-shelf database and authentication layer rather than hand-rolled plumbing: three weeks saved on work nobody ever sees.',
      'A graph database for recommendations, because the relational model made every query painful to write and slow to run.',
      'AI features in production: content generation, search by meaning rather than by keyword, contextual recommendations.',
      'Media storage separated from the application, and hosting that scales with load on its own.'
    ],
    technicalDetail: [
      'Next.js + Tailwind, SSR/SSG for search visibility.',
      'Supabase: Postgres, auth, realtime.',
      'Neo4j for the recommendation graph.',
      'LLM integration for generation, semantic search and recommendation.',
      'S3 media storage, Elastic Beanstalk deployment with auto-scaling.'
    ],
    outcome:
      'The product is live and working. I will not publish traffic figures: there is no commercial result to sell you here, there is a demonstration of end-to-end capability.',
    buyerTranslation:
      'On your project, I have already made every trade-off you are about to ask me to make — with my own money on the line. And I have shipped AI features in a real product, not a tutorial.',
    stack: ['Next.js', 'Tailwind', 'Supabase', 'Postgres', 'Neo4j', 'AWS', 'LLM'],
    role: 'Sole designer, developer and operator',
    year: '2023 — present'
  },
  {
    slug: 'unisensor-cloud',
    label: 'en-poste',
    title: 'Becoming the sole owner of a production cloud infrastructure',
    oneLiner:
      'I took over, alone, the cloud infrastructure behind production applications: deployment, monitoring, security and cost control.',
    situation:
      'In my employed role, the cloud infrastructure hosting applications used every day was handed to me. Sole owner: if it falls over, that is me; if the bill runs away, also me.',
    constraint:
      'A production environment does not pause while you improve it. Every change had to be reversible, and the hand-made modifications — the ones nobody can reproduce six months later — had to be replaced by scripts.',
    whatIDid: [
      'Took over and structured the servers, storage, databases, networking and access rights.',
      'Set up dashboards and alerts, so problems announce themselves before a user calls.',
      'Ran cost governance — understanding line by line what is billed and why, and cutting what is no longer used.',
      'Ran security audits and access reviews: who may do what, and is it still justified.',
      'Automated resource provisioning by script rather than by hand.',
      'Built the CI/CD pipeline: code reaches production the same way every time.'
    ],
    technicalDetail: [
      'AWS: EC2, S3, RDS, VPC, IAM, security groups, load balancers, auto-scaling.',
      'CloudWatch dashboards and alarms.',
      'Scripted provisioning in Python (Boto3).',
      'Continuous integration and deployment via Bitbucket Pipelines.'
    ],
    outcome:
      'A production environment run, monitored and documented by one person — without permanent on-call, because the monitoring does the work.',
    buyerTranslation:
      'Your application will not depend on my mood or on my laptop: it deploys, monitors and alerts on its own. That is the difference between a site delivered and a site run.',
    stack: ['AWS', 'EC2', 'RDS', 'S3', 'IAM', 'CloudWatch', 'Python / Boto3', 'CI/CD'],
    role: 'Sole infrastructure owner',
    year: '2022 — present'
  },
  {
    slug: 'unisensor-livraison',
    label: 'en-poste',
    title: 'From an empty server to production',
    oneLiner:
      'Several applications taken from the first line of code to production, across web, mobile and desktop.',
    situation:
      'In my employed roles I have delivered and maintained web applications used internally every day, an Android application published on the Play Store, and an existing desktop application to extend.',
    constraint:
      'These applications are used by people whose job is not IT. A regression is not a ticket, it is somebody’s lost working day. Hence the automated tests and the deployment pipeline — not out of a taste for tooling.',
    whatIDid: [
      'Stood up a complete platform from an empty server: application foundation, identity and role management, production release.',
      'Built a web front end from scratch with a reusable component library — so the product is consistent from screen to screen.',
      'Developed a full Android application, published on the Play Store.',
      'Took over an existing desktop application and extended it without breaking daily use.',
      'Put in place the automated tests that run on every change.'
    ],
    technicalDetail: [
      'Java / Spring Boot and Angular (JHipster foundation, identity via Keycloak).',
      'A Next.js application where server rendering and search visibility were precisely the point.',
      'Kotlin and Jetpack Compose for Android.',
      'JavaFX for the desktop application.',
      'JUnit, Mockito and Pytest in the CI pipeline.'
    ],
    outcome:
      'Applications in production, used daily, updated without service interruption.',
    buyerTranslation:
      '"End to end" is not a sales phrase here: the empty server, the login screen, the roles, the tests, the release and the maintenance — I have done all of them, several times.',
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
    role: 'Full stack and Android developer',
    year: '2022 — present'
  },
  {
    slug: 'geo-solutions',
    label: 'en-poste',
    title: 'Making complex data readable',
    oneLiner:
      'Heavy geographic datasets turned into maps a non-specialist can read and use.',
    situation:
      'At Geo Solutions the work was geographic data: large datasets that municipalities, engineering consultancies and agriculture or environmental organisations need to consult without being GIS specialists.',
    constraint:
      'Geographic data is large and slow by nature. The whole game is computing only what is displayed, and publishing it in standard formats so the client is not locked to one piece of software.',
    whatIDid: [
      'Published map layers in the standard formats of the field and wired them into a web interface to produce dynamic maps.',
      'Built processing pipelines to prepare and clean the data before publication.',
      'Automated the periodic execution of those pipelines, so the map stays current without intervention.'
    ],
    technicalDetail: [
      'GeoServer, WMS and WFS layers.',
      'Angular, OpenLayers and Leaflet for web mapping.',
      'Processing in R (sf and terra packages).',
      'Pipeline orchestration with Airflow.'
    ],
    outcome:
      'Maps usable by people who are not GIS specialists, fed by pipelines that run on their own.',
    buyerTranslation:
      'If you are a municipality, an engineering consultancy or an agricultural or environmental organisation with geographic data on your hands: very few freelancers can handle that niche, and I know it.',
    stack: ['GeoServer', 'WMS / WFS', 'Angular', 'OpenLayers', 'Leaflet', 'R', 'Airflow'],
    role: 'Developer and GIS developer',
    year: '2022'
  },
  {
    slug: 'i-pulses',
    label: 'en-poste',
    title: 'Keeping private data out of a cloud chatbot — in 2019',
    oneLiner:
      'My final-year project was building the filter that holds personal data back before it reaches an online AI service.',
    situation:
      'Bachelor’s placement, then continued as a student job. A client wanted a chatbot whose intelligence came from an online service, without their users’ data reaching that provider.',
    constraint:
      'The whole difficulty fits in one sentence: the online service had to understand the question without ever receiving anything identifying the person. That forces a middleware you control, sitting between the user and the provider.',
    whatIDid: [
      'Built a middleware, hosted at the client, through which every message passes.',
      'Filtered private content before anything was sent to the online AI service.',
      'Connected the chatbot to the client’s existing web services, then took it to production.',
      'Later took the project back to make it fully operational and add functionality.'
    ],
    technicalDetail: [
      'IBM Watson as the comprehension engine.',
      'Microsoft Bot Framework as the middleware, chosen because it is open source and self-hostable.',
      'Filtering in Node.js; web interface in React.',
      'Connection to existing web services in C#.'
    ],
    outcome:
      'A chatbot in service whose AI provider never received users’ private data.',
    buyerTranslation:
      'In 2019, my first real project was precisely about filtering private data before it reached a cloud chatbot. The question of where your data goes is not one I am discovering today.',
    stack: ['Node.js', 'React', 'C#', 'IBM Watson', 'Microsoft Bot Framework'],
    role: 'Placement student, then analyst developer',
    year: '2019'
  }
];
