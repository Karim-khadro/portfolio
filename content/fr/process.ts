import type {ProcessStep} from '../schema';

export const process: ProcessStep[] = [
  {
    order: 1,
    title: 'Un appel de 20 minutes, gratuit',
    description:
      'Vous m’expliquez ce qui vous embête. Je vous dis franchement si je suis la bonne personne. Si je ne le suis pas, je vous oriente ailleurs — c’est arrivé et ça arrivera encore.',
    duration: '20 minutes',
    clientEffort: 'Répondre au formulaire, puis décrocher.'
  },
  {
    order: 2,
    title: 'Le diagnostic',
    description:
      'Quatre-vingt-dix minutes structurées, une revue de vos outils, puis un rapport écrit de 4 à 6 pages : trois pistes classées par effort et impact, ce qu’il ne faut pas faire, un budget par option.',
    duration: '1 semaine',
    clientEffort: '1 h 30 d’entretien et l’accès en lecture à vos outils actuels.'
  },
  {
    order: 3,
    title: 'Une proposition chiffrée, avec ce qui n’est pas compris',
    description:
      'Un périmètre écrit, un prix, une date, et la liste explicite de ce qui n’est pas inclus. Vous savez exactement ce que vous achetez avant de signer.',
    duration: '2 à 3 jours',
    clientEffort: 'Lire, poser des questions, décider.'
  },
  {
    order: 4,
    title: 'La construction, avec un point chaque semaine',
    description:
      'Vous recevez un lien vers une version en ligne dès la première semaine et vous suivez l’avancement. Pas d’effet tunnel : vous ne découvrez pas le résultat à la fin.',
    duration: '3 à 6 semaines selon le forfait',
    clientEffort: 'Un point de 30 minutes par semaine, et vos retours.'
  },
  {
    order: 5,
    title: 'La mise en ligne et la formation',
    description:
      'On met en service, à votre nom. Une heure de formation, la documentation, et tous les accès vous sont remis.',
    duration: '1 journée',
    clientEffort: 'Une heure, avec les personnes qui utiliseront l’outil.'
  },
  {
    order: 6,
    title: 'Trente jours de corrections, puis vous choisissez',
    description:
      'Pendant 30 jours, je corrige ce qui ne va pas, sans supplément. Ensuite, la maintenance est une option — pas une condition. Le code et les comptes sont à vous dans tous les cas.',
    duration: '30 jours',
    clientEffort: 'Me signaler ce qui coince.'
  }
];
