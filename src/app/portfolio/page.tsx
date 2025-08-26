import { caseStudies } from '@/data/caseStudies'
import Link from 'next/link'

export default function PortfolioPage(){
  return (
    <main className="max-w-6xl mx-auto px-6 py-24 relative">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <span data-parallax="0.3" className="decor absolute top-10 -left-20 text-8xl font-black opacity-[0.03] select-none">WRITING</span>
        <span data-parallax="0.5" className="decor absolute bottom-10 -right-16 text-7xl font-black opacity-[0.025] select-none">IMPACT</span>
      </div>
      <h1 className="text-4xl font-bold mb-12 text-gradient">Case Studies</h1>
  <div className="case-grid grid gap-10 cv-auto">
        {caseStudies.map(cs => (
          <article key={cs.slug} className="card-hover p-6 rounded-lg tilt">
            <h2 className="text-2xl font-semibold mb-3">{cs.title}</h2>
            <p className="text-gray-300 mb-4 max-w-prose">{cs.excerpt}</p>
            <ul className="text-xs text-gray-400 mb-4 space-y-1">
              {cs.impact.map(i=> <li key={i}>• {i}</li>)}
            </ul>
            {cs.metrics && (
              <div className="flex gap-4 text-xs text-gray-400">{cs.metrics.map(m=> <span key={m.label}>{m.label}: <strong className="text-gray-200">{m.value}</strong></span>)}</div>
            )}
            <div className="mt-4 text-xs flex gap-2 flex-wrap">{cs.tags.map(t=> <span key={t} className="px-2 py-1 bg-white/10 rounded-full">{t}</span>)}</div>
            <Link href={`/portfolio/${cs.slug}`} className="mt-6 inline-block text-sm text-pink-400 hover:text-pink-300">Read more →</Link>
          </article>
        ))}
      </div>
    </main>
  )
}
