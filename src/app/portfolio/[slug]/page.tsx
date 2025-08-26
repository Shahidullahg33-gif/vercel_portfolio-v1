import { getCaseStudy } from '@/data/caseStudies'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'

interface Params { slug: string }

export function generateMetadata({ params }: { params: Params }): Metadata {
  const cs = getCaseStudy(params.slug)
  if(!cs) return { title: 'Case Study Not Found' }
  return {
    title: `${cs.title} – Case Study`,
    description: cs.excerpt,
  openGraph: { title: cs.title, description: cs.excerpt, images: [`/og/portfolio-${cs.slug}.png`] },
    alternates: { canonical: `/portfolio/${cs.slug}` }
  }
}

export default function CaseStudyDetail({ params }: { params: Params }) {
  const cs = getCaseStudy(params.slug)
  if(!cs) return notFound()
  const jsonLd = {
    '@context':'https://schema.org',
    '@type':'CreativeWork',
    'headline': cs.title,
    'about': cs.tags,
    'description': cs.excerpt,
    'creator': 'Content Writer',
    'genre': 'Case Study'
  }
  return (
    <main className="max-w-3xl mx-auto px-6 py-24 article-content">
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(jsonLd)}} />
      <a href="/portfolio" className="text-sm underline hover:no-underline opacity-70">← Back</a>
      <h1 className="text-4xl font-bold mt-4 mb-4 text-gradient">{cs.title}</h1>
      <p className="text-xs uppercase tracking-wide mb-6 text-gray-400">{cs.timeline} · {cs.role}</p>
      {cs.metrics && (
        <div className="flex flex-wrap gap-4 mb-8 text-sm">
          {cs.metrics.map(m=> <div key={m.label} className="px-3 py-2 rounded bg-white/5 border border-white/10">{m.label}: <strong>{m.value}</strong></div>)}
        </div>
      )}
      <div className="prose prose-invert" dangerouslySetInnerHTML={{__html: cs.body || ''}} />
      <div className="mt-10 flex flex-wrap gap-2 text-xs">{cs.tags.map(t=> <span key={t} className="px-2 py-1 rounded bg-white/10">{t}</span>)}</div>
    </main>
  )
}