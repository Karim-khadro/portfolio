import type {FaqItem} from '../schema';

export const faq: FaqItem[] = [
  {
    id: 'cost-for-nothing',
    category: 'ai',
    question: 'Ça va coûter cher pour rien.',
    answer:
      'On commence par un diagnostic à 690 €, qui vous dit ce que ça rapporterait avant d’investir. Si aucune piste ne tient debout, je vous le dis, par écrit. Et les 690 € sont déduits si vous poursuivez.'
  },
  {
    id: 'where-data-goes',
    category: 'ai',
    question: 'Mes données vont où ?',
    answer:
      'On liste ensemble ce qui sort de chez vous, avant de coder. Beaucoup de choses n’ont pas besoin de sortir. Hébergement européen quand c’est possible, accord de sous-traitance signé, et un document d’une page décrivant le trajet de vos données. Vos données ne servent pas à entraîner un modèle.'
  },
  {
    id: 'replace-staff',
    category: 'ai',
    question: 'Ça va remplacer mon personnel.',
    answer:
      'Je m’attaque à la partie que personne n’aime : recopier, trier, chercher, rédiger dix fois la même réponse. Dans une entreprise de 3 à 15 personnes, le problème n’est pas d’avoir trop de monde. L’outil propose, votre équipe valide.'
  },
  {
    id: 'hallucination',
    category: 'ai',
    question: 'Ça raconte n’importe quoi.',
    answer:
      'Oui, ça arrive. Trois garde-fous : l’outil ne répond qu’à partir de vos documents, il cite d’où vient l’information, et il dit « je ne sais pas, je transmets » plutôt que d’inventer. Sur les tâches sensibles, un humain valide avant l’envoi.'
  },
  {
    id: 'gdpr',
    category: 'legal',
    question: 'Et le RGPD ?',
    answer:
      'Une contrainte, pas un obstacle. On ne collecte que l’utile, on documente le traitement, on informe vos clients quand ils parlent à un système automatisé, et vous gardez la possibilité de tout effacer. Je fournis les documents pour votre registre.'
  },
  {
    id: 'too-small',
    category: 'ai',
    question: 'Je suis trop petit pour ça.',
    answer:
      'Trois personnes et une boîte mail, c’est déjà assez. Les gros projets d’IA échouent souvent ; les petits, ciblés sur une tâche précise, marchent presque toujours.'
  },
  {
    id: 'why-not-cheaper',
    category: 'pricing',
    question: 'J’ai eu un devis à 900 €. Pourquoi cet écart ?',
    answer:
      'Parce qu’à 900 € on vend un gabarit rempli à la va-vite, sans travail sur vos textes, sans référencement local et sans personne au bout du fil trois mois plus tard. Si votre budget est de 900 €, je préfère vous le dire honnêtement : ce n’est pas moi qu’il vous faut. Si le budget est serré mais sérieux, on réduit le périmètre — trois pages à 1 400 € — plutôt que la qualité.'
  },
  {
    id: 'payment-terms',
    category: 'pricing',
    question: 'Comment se passe le paiement ?',
    answer:
      '40 % à la commande, 60 % à la livraison, à 15 jours. Pas d’acompte sur le diagnostic : il est payé à la remise du rapport.'
  },
  {
    id: 'capacity',
    category: 'process',
    question: 'Vous êtes disponible quand ?',
    answer:
      'Je prends deux projets en parallèle, maximum. Quand c’est complet, je le dis et je vous donne une date honnête plutôt qu’un délai que je ne tiendrai pas. Je réponds à vos messages sous 24 heures ouvrables, et on peut se parler en soirée à partir de 18 h, sur l’heure de midi, ou le samedi matin.'
  },
  {
    id: 'ownership',
    category: 'tech',
    question: 'Si on arrête de travailler ensemble, je perds tout ?',
    answer:
      'Non. Le nom de domaine, l’hébergement et les comptes sont à votre nom depuis le premier jour, et le code d’une application sur mesure vous est transféré. Il n’y a rien à récupérer chez moi.'
  },
  {
    id: 'meet-in-person',
    category: 'process',
    question: 'On peut se rencontrer ?',
    answer:
      'Oui. Je suis à Jemeppe, près de Liège, et je me déplace volontiers dans la région — Seraing, Herstal, Ans, Flémalle, Huy, Verviers. Pour un premier contact, vingt minutes au téléphone suffisent généralement.'
  },
  {
    id: 'vat',
    category: 'legal',
    question: 'Y a-t-il de la TVA sur vos factures ?',
    answer:
      'Non, pas actuellement : je relève du régime de la franchise de TVA. Mes prix sont donc les prix que vous payez. Pour un client qui ne récupère pas la TVA — un cabinet paramédical, certains commerces — c’est 21 % de moins qu’une agence, à prestation égale.'
  }
];
