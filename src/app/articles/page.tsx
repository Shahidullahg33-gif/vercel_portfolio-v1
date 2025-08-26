'use client'
import Link from 'next/link'
import { articles } from '@/data/articles'

export default function ArticlesPage() {
  const tags = Array.from(new Set(articles.flatMap(a=>a.tags))).sort()
  return (
    <main className="max-w-5xl mx-auto px-6 py-24">
      <h1 className="text-4xl font-bold mb-8 text-gradient">Articles</h1>
      <div className="flex flex-wrap gap-2 mb-10">
        {tags.map(t=> <span key={t} className="text-xs px-3 py-1 rounded-full bg-white/10 backdrop-blur border border-white/15 text-gray-200">{t}</span>)}
      </div>
      <ul className="space-y-10">
        {articles.map(a => (
          <li key={a.slug} className="card-hover p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-2"><Link href={`/articles/${a.slug}`}>{a.title}</Link></h2>
            <p className="text-gray-300 mb-2 max-w-prose">{a.description}</p>
            <div className="flex flex-wrap gap-2 text-xs text-gray-400">{a.tags.map(t=> <span key={t}>{t}</span>)}</div>
          </li>
        ))}
      </ul>
    </main>
  )
}
