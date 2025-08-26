export interface CaseStudy {
  slug: string;
  title: string;
  excerpt: string;
  impact: string[];
  tags: string[];
  metrics?: { label: string; value: string }[];
}

export const caseStudies: CaseStudy[] = [
  {
    slug: 'brand-voice-reframe',
    title: 'Reframing a SaaS Brand Voice for Global Expansion',
    excerpt: 'Built a multilingual voice system adopted across 6 regional teams.',
    impact: ['+35% activation email CTR', '50% reduction in revision cycles'],
    tags: ['Brand', 'Localization'],
    metrics: [
      { label: 'Markets', value: '6' },
      { label: 'Voice Guide Pages', value: '48' }
    ]
  },
  {
    slug: 'evergreen-seo-library',
    title: 'Evergreen SEO Content Library',
    excerpt: 'Cluster-based pillar model producing compounding organic traffic.',
    impact: ['+280% organic sessions YoY', 'Bounce rate -18%'],
    tags: ['SEO', 'Strategy']
  }
];
