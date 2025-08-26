export interface Service {
  id: string;
  title: string;
  summary: string;
  points: string[];
  accent?: string;
}

export const services: Service[] = [
  {
    id: 'content-strategy',
    title: 'Content Strategy',
    summary: 'Editorial roadmaps that align audience intent with business outcomes.',
    points: [
      'Audits & Gap Analysis',
      'Messaging Architecture',
      'Quarterly Editorial OKRs',
      'Localization Planning'
    ]
  },
  {
    id: 'brand-story',
    title: 'Brand Story & Voice',
    summary: 'Codified narrative frameworks + tone systems for consistent global storytelling.',
    points: ['Voice Guidelines', 'Narrative Pillars', 'Message Hierarchy', 'Founder Story Distillation']
  },
  {
    id: 'conversion-copy',
    title: 'Conversion Copy',
    summary: 'Landing pages, onboarding flows & lifecycle emails engineered to move metrics.',
    points: ['Landing / Sales Pages', 'Funnel Experiments', 'Lifecycle Email Sequences', 'A/B Narrative Variants']
  }
];
