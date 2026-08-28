import type {z} from 'zod';
import type {aboutSchema} from '../schema';

export const about: z.infer<typeof aboutSchema> = {
  headline: 'Une seule personne, du premier appel à la mise en ligne',
  intro: [
    'Je m’appelle Karim Khadro. Je construis des sites, des applications web et des outils d’IA pour des entreprises de 1 à 15 personnes, dans la région de Liège.',
    'Je fais du développement depuis 2019 : d’abord un travail de fin d’études qui consistait à filtrer les données privées avant qu’elles n’atteignent un chatbot dans le cloud, ensuite de la cartographie et de la donnée géographique, et aujourd’hui des applications web et une infrastructure cloud de production dont je suis le seul responsable.',
    'Ce qui vous intéresse, vous, c’est ce que ça donne : vous parlez à la personne qui conçoit, qui construit, qui met en ligne et qui répond au téléphone ensuite. Il n’y a pas de commercial qui promet, puis de développeur qui découvre.'
  ],
  commitments: [
    'Je réponds à vos messages sous 24 heures ouvrables. Toujours.',
    'On peut se parler par téléphone en soirée à partir de 18 h, sur l’heure de midi, ou le samedi matin. Vous choisissez.',
    'Je prends deux projets à la fois, maximum. Quand c’est complet, je vous le dis et je vous donne une date honnête plutôt qu’un délai que je ne tiendrai pas.',
    'Un site vitrine, c’est trois à quatre semaines chez moi. En échange, vous avez la même personne du premier appel à la mise en ligne.'
  ],
  wontSell: [
    'Une IA qui décide à votre place. L’outil propose, un humain valide — surtout quand il y a un client ou de l’argent au bout.',
    'De l’IA sur des données médicales de patients. Sur ces dossiers-là, je travaille sur l’administratif et je laisse le dossier patient tranquille.',
    'Un chatbot sur votre site parce que « ça fait moderne ». S’il ne répond à aucune vraie question, il agace vos clients et vous coûte de l’argent.',
    'Un abonnement dont vous ne pouvez plus sortir. Les comptes et le code sont à votre nom.',
    'Un chiffre inventé. Je ne vous promettrai pas « +40 % de conversions » : personne ne peut le savoir avant de l’avoir mesuré chez vous.'
  ],
  humanLine:
    'En dehors du travail : la Formula 1, les voyages, et une tendance assumée à passer trop de temps sur des détails que personne d’autre ne remarque.'
};
