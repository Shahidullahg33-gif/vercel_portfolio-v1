export interface CaseStudy {
  slug: string;
  title: string;
  excerpt: string;
  impact: string[];
  tags: string[];
  metrics?: { label: string; value: string }[];
  body?: string; // HTML body
  client?: string;
  timeline?: string;
  role?: string;
  outcomesMarkdown?: string;
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
    ],
    client: 'SaaS Platform',
    role: 'Lead Content Strategist',
    timeline: 'Q1–Q3 2024',
    body: `<p>Global expansion demanded a consistent yet culturally adaptable voice. I conducted comparative discourse analysis across competitor messaging, then facilitated workshops with six regional teams to surface linguistic friction points.</p>
    <h2>Approach</h2>
    <ul><li>Voice spectrum mapping (warm↔authoritative)</li><li>Localization guardrails with rationale</li><li>Example library with before/after rewrites</li></ul>
    <h2>Enablement</h2>
    <p>Delivered a modular 48‑page guide plus Figma snippet components enabling faster onboarding.</p>`
  },
  {
    slug: 'evergreen-seo-library',
    title: 'Evergreen SEO Content Library',
    excerpt: 'Cluster-based pillar model producing compounding organic traffic.',
    impact: ['+280% organic sessions YoY', 'Bounce rate -18%'],
    tags: ['SEO', 'Strategy'],
    client: 'B2B Analytics',
    role: 'Content Architect',
    timeline: '6 months',
    body: `<p>Architected a 3‑tier pillar / cluster model targeting mid‑funnel intent gaps using SERP feature analysis + internal search logs.</p>
    <h2>Content System</h2>
    <ul><li>Intent gap matrix of 120 opportunities</li><li>Editorial calendar automation (Airtable)</li><li>Brief template with entity coverage checklist</li></ul>
    <h2>Results</h2>
    <p>Compounding traffic lift sustained after publishing cadence normalized, indicating durable topical authority.</p>`
  }
];

export function getCaseStudy(slug: string){
  return caseStudies.find(c => c.slug === slug)
}
