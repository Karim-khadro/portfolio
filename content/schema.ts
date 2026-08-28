import {z} from 'zod';

const seoSchema = z.object({
  title: z.string().min(5),
  description: z.string().min(50).max(200)
});

export const serviceSchema = z.object({
  slug: z.string(),
  title: z.string(),
  tagline: z.string(),
  problem: z.string(),
  outcomes: z.array(z.string()).min(1),
  deliverables: z.array(z.string()).min(1),
  forWho: z.array(z.string()).min(1),
  typicalTimeline: z.string(),
  startingPrice: z.number().optional(),
  relatedPackages: z.array(z.string()),
  relatedCaseStudies: z.array(z.string()),
  faq: z.array(z.object({question: z.string(), answer: z.string()})),
  seo: seoSchema
});

export const packageSchema = z.object({
  slug: z.string(),
  name: z.string(),
  priceFrom: z.number(),
  billing: z.string(),
  bestFor: z.string(),
  includes: z.array(z.string()).min(1),
  excludes: z.array(z.string()).min(1),
  deliveryWeeks: z.string(),
  ctaKey: z.string(),
  highlight: z.boolean().optional(),
  recurring: z.string().optional()
});

export const caseStudySchema = z.object({
  slug: z.string(),
  label: z.enum(['personnel', 'en-poste', 'client']),
  title: z.string(),
  oneLiner: z.string(),
  situation: z.string(),
  constraint: z.string(),
  whatIDid: z.array(z.string()).min(1),
  technicalDetail: z.array(z.string()),
  outcome: z.string(),
  buyerTranslation: z.string(),
  stack: z.array(z.string()),
  role: z.string(),
  year: z.string()
});

export const processStepSchema = z.object({
  order: z.number().int().positive(),
  title: z.string(),
  description: z.string(),
  duration: z.string(),
  clientEffort: z.string()
});

export const faqItemSchema = z.object({
  id: z.string(),
  question: z.string(),
  answer: z.string(),
  category: z.enum(['ai', 'pricing', 'process', 'legal', 'tech'])
});

export const useCaseSchema = z.object({
  id: z.string(),
  sector: z.string(),
  painPoint: z.string(),
  whatAiDoes: z.string(),
  whatItChanges: z.string(),
  priceFrom: z.number()
});

export const testimonialSchema = z.object({
  author: z.string(),
  role: z.string(),
  company: z.string().optional(),
  quote: z.string(),
  // Publishing a name requires written permission. No consent, no render.
  consentOnFile: z.boolean()
});

export const aboutSchema = z.object({
  headline: z.string(),
  intro: z.array(z.string()).min(1),
  commitments: z.array(z.string()).min(1),
  wontSell: z.array(z.string()).min(1),
  humanLine: z.string()
});

export const cvSchema = z.object({
  headline: z.string(),
  summary: z.string(),
  location: z.string(),
  education: z.array(
    z.object({
      institution: z.string(),
      title: z.string(),
      location: z.string(),
      period: z.string(),
      description: z.string()
    })
  ),
  work: z.array(
    z.object({
      company: z.string(),
      title: z.string(),
      location: z.string(),
      period: z.string(),
      bullets: z.array(z.string()).min(1),
      stack: z.array(z.string())
    })
  ),
  // Grouped and deliberately unrated — star ratings publish weaknesses for free.
  skillGroups: z.array(z.object({group: z.string(), items: z.array(z.string())})),
  languages: z.array(z.object({name: z.string(), level: z.string()})),
  tools: z.array(z.string()),
  sideProjects: z.array(
    z.object({name: z.string(), description: z.string(), url: z.string().url()})
  )
});

export const guideSchema = z.object({
  slug: z.string(),
  title: z.string(),
  summary: z.string(),
  readingMinutes: z.number().int().positive(),
  sections: z.array(z.object({heading: z.string(), body: z.array(z.string())}))
});

export const contentSchema = z.object({
  services: z.array(serviceSchema).min(1),
  packages: z.array(packageSchema).min(1),
  caseStudies: z.array(caseStudySchema).min(1),
  process: z.array(processStepSchema).min(1),
  faq: z.array(faqItemSchema).min(1),
  useCases: z.array(useCaseSchema).min(1),
  testimonials: z.array(testimonialSchema),
  about: aboutSchema,
  cv: cvSchema,
  guides: z.array(guideSchema)
});

export type Content = z.infer<typeof contentSchema>;
export type Service = z.infer<typeof serviceSchema>;
export type Package = z.infer<typeof packageSchema>;
export type CaseStudy = z.infer<typeof caseStudySchema>;
export type ProcessStep = z.infer<typeof processStepSchema>;
export type FaqItem = z.infer<typeof faqItemSchema>;
export type UseCase = z.infer<typeof useCaseSchema>;
export type Testimonial = z.infer<typeof testimonialSchema>;
export type CvContent = z.infer<typeof cvSchema>;
export type Guide = z.infer<typeof guideSchema>;
