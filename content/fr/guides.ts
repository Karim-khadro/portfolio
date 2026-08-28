import type {Guide} from '../schema';

/**
 * No blog: no dates, no feed, no "derniers articles". Undated guides don't rot,
 * and each one answers a question he would otherwise repeat on a call.
 */
export const guides: Guide[] = [
  {
    slug: 'prix-site-internet-belgique',
    title: 'Combien coûte un site internet en Belgique ? Les fourchettes réelles',
    summary:
      'Ce que coûte vraiment un site en Belgique selon qui le fait, et pourquoi l’écart entre 900 € et 7 000 € n’est pas une question de marge.',
    readingMinutes: 6,
    sections: [
      {
        heading: 'Les quatre fourchettes',
        body: [
          'Un site fait soi-même sur un outil en ligne coûte entre 500 et 900 €, essentiellement en abonnement et en temps. C’est une option honnête si vous avez le temps et que le site n’a pas à faire venir des clients.',
          'Un indépendant facture entre 1 500 et 4 000 € pour un site vitrine sur mesure. Une agence facture entre 3 000 et 7 000 € pour le même périmètre, avec un chef de projet en plus et, souvent, un stagiaire en moins.',
          'En dessous de 1 200 €, vous n’achetez pas un site : vous achetez un gabarit rempli. Ce n’est pas une insulte, c’est une description. Parfois, c’est exactement ce qu’il vous faut.'
        ]
      },
      {
        heading: 'Où part l’argent',
        body: [
          'La conception graphique et le développement représentent moins de la moitié du prix. Le reste, c’est le travail sur vos textes, la mise en place du référencement local, la configuration technique, la formation et les corrections après la mise en ligne.',
          'C’est précisément ce qui disparaît d’un devis à 900 €. Le site existe, mais personne ne le trouve et vous n’avez personne à appeler.'
        ]
      },
      {
        heading: 'Les coûts récurrents que personne ne vous annonce',
        body: [
          'Nom de domaine : 15 à 30 € par an. Hébergement : de 0 à 30 € par mois selon la technologie. Maintenance : de 0 à 100 € par mois selon ce que vous voulez déléguer.',
          'Demandez toujours qui est propriétaire du domaine et de l’hébergement. Si ce n’est pas vous, ce n’est pas votre site.'
        ]
      },
      {
        heading: 'Comment décider',
        body: [
          'Posez-vous une seule question : combien vous rapporte un nouveau client ? Si un client vaut 500 €, un site à 1 900 € est remboursé par quatre clients. Si un client vaut 40 €, la réponse est probablement une bonne fiche Google et pas un site.',
          'Je vous dirai laquelle des deux, gratuitement, en vingt minutes.'
        ]
      }
    ]
  },
  {
    slug: 'ia-pme-usages-concrets',
    title: 'L’IA pour une PME : 6 usages concrets, et 3 où ça ne sert à rien',
    summary:
      'Six tâches où un outil d’IA fait gagner des heures dans une entreprise de moins de quinze personnes — et trois où c’est une dépense inutile.',
    readingMinutes: 7,
    sections: [
      {
        heading: 'La règle à retenir',
        body: [
          'Un modèle d’IA est très bon pour rédiger, résumer, classer et retrouver de l’information. Il est mauvais pour compter, pour décider à votre place, et pour garantir qu’il ne se trompe pas.',
          'Tous les usages qui marchent découlent de cette phrase. Tous ceux qui échouent aussi.'
        ]
      },
      {
        heading: 'Les six qui marchent',
        body: [
          'Répondre aux questions répétitives des clients à partir de vos informations. Trier et préparer les demandes de devis. Transformer une note vocale ou une photo de carnet en document propre. Classer et renommer des documents entrants en extrayant les montants. Chercher en langage courant dans vos procédures internes. Rédiger un premier jet de vos réponses écrites récurrentes.',
          'Le point commun : le résultat est du texte, un humain le relit, et la tâche revient plusieurs fois par semaine.'
        ]
      },
      {
        heading: 'Les trois où ça ne sert à rien',
        body: [
          'La comptabilité au sens strict : un modèle de langage ne calcule pas de façon fiable. Un tableur, si.',
          'Les décisions à conséquence directe — accorder un délai de paiement, valider un dossier. La proposition, oui ; la décision, non.',
          'Le chatbot posé sur un site qui ne contient aucune information utile. Il ne fabrique pas ce que vous n’avez pas écrit ; il agace vos visiteurs et vous coûte un abonnement.'
        ]
      }
    ]
  },
  {
    slug: 'vos-donnees-et-l-ia',
    title: 'Vos données et l’IA : ce qui part vraiment dans le cloud',
    summary:
      'Ce qui sort réellement de votre entreprise quand vous utilisez un outil d’IA, et les trois façons de réduire ce qui sort.',
    readingMinutes: 6,
    sections: [
      {
        heading: 'Ce qui part, concrètement',
        body: [
          'Quand un outil d’IA répond à une question, deux choses partent chez le fournisseur du modèle : la question posée, et les extraits de vos documents que l’outil a jugés utiles pour y répondre. Rien d’autre. Pas votre base de données entière, pas vos fichiers.',
          'Ce qui compte, donc, c’est ce que vous laissez l’outil aller chercher. C’est une décision de conception, prise avant de coder — pas un réglage à cocher après.'
        ]
      },
      {
        heading: 'Trois façons de réduire ce qui sort',
        body: [
          'Filtrer avant l’envoi : remplacer les noms, adresses et numéros par des étiquettes neutres, et les remettre à l’arrivée. C’était exactement mon travail de fin d’études, en 2019.',
          'Ne pas envoyer ce qui est inutile : la plupart des questions ne nécessitent pas la donnée personnelle, seulement le contexte métier.',
          'Choisir un hébergement européen quand la fonctionnalité le permet, et signer un accord de sous-traitance avec le fournisseur.'
        ]
      },
      {
        heading: 'Ce qu’on peut honnêtement écrire',
        body: [
          '« Hébergé en Europe » est défendable. « Vos données ne quittent jamais l’Union européenne » ne l’est presque jamais, dès qu’un modèle américain est appelé.',
          'Méfiez-vous d’un prestataire qui vous promet la seconde phrase sans conditions. Soit il ne l’a pas vérifié, soit il compte sur le fait que vous ne vérifierez pas.'
        ]
      }
    ]
  },
  {
    slug: 'chatbot-utile-ou-gadget',
    title: 'Chatbot sur votre site : utile ou gadget ?',
    summary:
      'Quatre conditions à remplir avant d’installer un chatbot. Si trois ne sont pas remplies, n’en installez pas.',
    readingMinutes: 4,
    sections: [
      {
        heading: 'Les quatre conditions',
        body: [
          'Vous recevez plusieurs fois par semaine les mêmes questions. Les réponses existent déjà quelque part par écrit. Une réponse fausse n’a pas de conséquence grave et immédiate. Et vous avez quelqu’un pour reprendre la main quand l’outil ne sait pas.',
          'Trois conditions sur quatre : ça vaut la peine. Deux sur quatre : mettez une page « questions fréquentes » et gardez votre argent.'
        ]
      },
      {
        heading: 'Ce qui fait la différence entre les deux',
        body: [
          'Un chatbot utile ne répond qu’à partir de vos documents, cite sa source, et dit « je ne sais pas, je transmets » plutôt que d’inventer un prix ou un délai.',
          'Un chatbot gadget répond à tout, avec assurance, y compris à côté. C’est le second qui a donné mauvaise réputation au premier.'
        ]
      }
    ]
  },
  {
    slug: 'preparer-refonte-site',
    title: 'Ce qu’il faut préparer avant de faire refaire son site',
    summary:
      'Sept choses à rassembler avant le premier rendez-vous. Elles font gagner deux semaines sur le projet.',
    readingMinutes: 5,
    sections: [
      {
        heading: 'Les accès, d’abord',
        body: [
          'Qui est propriétaire du nom de domaine, et chez qui ? Qui a les accès à l’hébergement et à la boîte mail professionnelle ? C’est la première cause de retard sur une refonte, très loin devant tout le reste.',
          'Si vous ne savez pas, cherchez maintenant : retrouver un accès perdu peut prendre plusieurs semaines.'
        ]
      },
      {
        heading: 'Le contenu',
        body: [
          'Vos photos en haute résolution, votre logo dans un format vectoriel si vous l’avez, vos tarifs à jour, et la liste réelle de ce que vous vendez — pas celle du site actuel.',
          'Vous n’avez pas besoin d’écrire les textes. C’est mon travail de les structurer avec vous.'
        ]
      },
      {
        heading: 'La décision',
        body: [
          'Deux questions à trancher avant de commencer : que doit faire un visiteur sur ce site — appeler, réserver, commander, se déplacer ? Et qui, chez vous, valide ? Un projet à trois décideurs sans arbitre prend deux fois plus de temps.'
        ]
      }
    ]
  }
];
