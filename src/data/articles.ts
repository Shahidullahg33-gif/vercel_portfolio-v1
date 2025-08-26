export interface ArticleMeta {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  published: string; // ISO date
  readingMinutes: number;
  accent?: string; // optional per-article accent override
  difficulty?: 'easy' | 'intermediate' | 'deep';
  keywords?: string[]; // for highlight toggle
}

export interface Article extends ArticleMeta {
  body: string; // markdown or HTML string for now
}

export const articles: Article[] = [
  {
    slug: 'evergreen-seo-framework',
    title: 'An Evergreen SEO Framework for Sustainable Traffic',
    description: 'A practical layered model for building compounding organic visibility across languages.',
    tags: ['SEO', 'Strategy', 'Localization'],
    published: '2025-08-01',
    readingMinutes: 7,
    accent: 'hsl(190 70% 45%)',
  difficulty: 'intermediate',
  keywords: ['framework','semantic','intent'],
    body: `<p class="lede">Search algorithms evolve — user intent patterns persist. This framework distills repeatable pillars you can adapt for each market.</p>
<h2>1. Foundation</h2><p>Technical cleanliness, crawl budgets, structured data…</p>
<blockquote>Consistency compounds. Small, habitual optimizations beat sporadic overhauls.</blockquote>
<h2>2. Semantic Clusters</h2><p>Map intent layers: informational → evaluative → transactional.</p>`
  },
  {
    slug: 'brand-voice-system',
    title: 'Designing a Multilingual Brand Voice System',
    description: 'Methods for codifying tone so translators and writers achieve consistent nuance.',
    tags: ['Brand', 'Systems', 'Writing'],
    published: '2025-07-18',
    readingMinutes: 6,
  difficulty: 'easy',
  keywords: ['voice','system','tone'],
    body: `<p class='lede'>Voice systems reduce subjective debate and accelerate execution velocity.</p><p>Start with axis mapping...</p>`
  },
];

export const getArticle = (slug: string) => articles.find(a => a.slug === slug);
