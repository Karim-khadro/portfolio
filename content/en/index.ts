import type {Content} from '../schema';
import {about} from './about';
import {caseStudies} from './case-studies';
import {cv} from './cv';
import {faq} from './faq';
import {guides} from './guides';
import {packages} from './packages';
import {process} from './process';
import {services} from './services';
import {useCases} from './use-cases';

export const en: Content = {
  services,
  packages,
  caseStudies,
  process,
  faq,
  useCases,
  testimonials: [],
  about,
  cv,
  guides
};
