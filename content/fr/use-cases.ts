import type {UseCase} from '../schema';

/** The spine of /services/ia-pme: name the boring thing, then the hour it gives back. */
export const useCases: UseCase[] = [
  {
    id: 'boulangerie',
    sector: 'Boulangerie, restaurant',
    painPoint:
      'Les mêmes questions toute la journée, au téléphone et sur Messenger : les horaires, les allergènes, si vous faites des commandes pour vingt personnes, si vous êtes ouvert le 15 août.',
    whatAiDoes:
      'Un assistant répond à partir de vos informations à vous — carte, horaires, tarifs — et transmet à un humain dès qu’il ne sait pas.',
    whatItChanges: 'Le téléphone sonne moins pendant le coup de feu.',
    priceFrom: 2900
  },
  {
    id: 'garage',
    sector: 'Garage, atelier',
    painPoint:
      'Les demandes de devis arrivent par mail et par WhatsApp, en vrac, et vous les traitez le soir. Parfois deux jours plus tard, et le client est déjà parti ailleurs.',
    whatAiDoes:
      'Chaque demande est lue et rangée : marque, modèle, problème, urgence. Un brouillon de réponse et une fourchette de prix vous sont proposés ; vous validez en un clic.',
    whatItChanges:
      'On répond le jour même, donc on gagne des jobs qu’on perdait par lenteur.',
    priceFrom: 2900
  },
  {
    id: 'cabinet',
    sector: 'Kiné, cabinet paramédical',
    painPoint:
      'Les rendez-vous non honorés, les questions administratives qui coupent les séances, et un formulaire d’admission que personne n’a le temps de relire avant.',
    whatAiDoes:
      'Rappels automatiques, réponses aux questions administratives, et résumé du formulaire d’admission avant la séance. Les données médicales du patient, elles, restent en dehors : je recommande explicitement de ne pas y toucher.',
    whatItChanges:
      'Moins de créneaux perdus, et une séance qui commence sans dix minutes de paperasse.',
    priceFrom: 2900
  },
  {
    id: 'construction',
    sector: 'Construction, chantier',
    painPoint:
      'Le rapport de chantier se fait le soir, de mémoire, à partir d’un carnet et de photos. Ou ne se fait pas.',
    whatAiDoes:
      'Quarante secondes de note vocale, ou la photo d’une page de carnet, deviennent un rapport de chantier propre et des lignes de devis à valider.',
    whatItChanges: 'Deux heures de paperasse en moins le soir.',
    priceFrom: 2900
  },
  {
    id: 'fiduciaire',
    sector: 'Comptable, fiduciaire',
    painPoint:
      'Les documents des clients arrivent dans tous les formats et il faut les lire, les renommer, les classer et ressaisir les montants.',
    whatAiDoes:
      'Les documents sont lus, classés, renommés, et les montants extraits pour vérification humaine.',
    whatItChanges: 'La saisie devient de la relecture.',
    priceFrom: 2900
  },
  {
    id: 'pme',
    sector: 'N’importe quelle PME',
    painPoint:
      'Les procédures, les tarifs et les contrats sont quelque part sur le serveur. Le nouveau collaborateur pose la question à tout le monde.',
    whatAiDoes:
      'Une recherche en langage courant dans vos documents internes, avec la source citée à chaque réponse.',
    whatItChanges: 'Le nouveau ne vient plus poser la question à tout le monde.',
    priceFrom: 2900
  }
];
