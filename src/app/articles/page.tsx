'use client'
import Link from 'next/link'
import { articles } from '@/data/articles'
import { useState, useMemo } from 'react'

export default function ArticlesPage() {
  const tags = useMemo(()=>Array.from(new Set(articles.flatMap(a=>a.tags))).sort(), [])
  const [query,setQuery] = useState('')
  const [activeTags,setActiveTags] = useState<string[]>([])

  const filtered = articles.filter(a => {
    const q = query.toLowerCase()
    const matchesQuery = !q || a.title.toLowerCase().includes(q) || a.description.toLowerCase().includes(q)
    const matchesTags = activeTags.length===0 || activeTags.every(t => a.tags.includes(t))
    return matchesQuery && matchesTags
  })

  function toggleTag(tag:string){
    setActiveTags(t => t.includes(tag)? t.filter(x=>x!==tag): [...t, tag])
  }

  return (
    <main className="max-w-5xl mx-auto px-6 py-24">
      <h1 className="text-4xl font-bold mb-8 text-gradient">Articles</h1>
      <div className="mb-6 flex flex-col md:flex-row gap-4 md:items-center">
        <input
          type="search"
          placeholder="Search articles..."
          value={query}
          onChange={e=>setQuery(e.target.value)}
          className="w-full md:w-72 px-3 py-2 rounded-md bg-white/5 border border-white/15 focus:outline-none focus:ring-2 focus:ring-[var(--c-accent)]"
          aria-label="Search articles"
        />
        {activeTags.length>0 && (
          <button onClick={()=>setActiveTags([])} className="text-xs text-gray-300 underline ml-auto">Clear filters</button>
        )}
      </div>
      <div className="flex flex-wrap gap-2 mb-10" aria-label="Filter by tag">
        {tags.map(t=> {
          const on = activeTags.includes(t)
          return (
            <button
              key={t}
              onClick={()=>toggleTag(t)}
              className={`text-xs px-3 py-1 rounded-full border backdrop-blur transition-colors ${on? 'bg-[var(--c-accent)] text-white border-[var(--c-accent)]':'bg-white/5 border-white/15 text-gray-300 hover:bg-white/10'}`}
              aria-pressed={on}
            >{t}</button>
          )
        })}
      </div>
  <p className="text-sm text-gray-400 mb-4" aria-live="polite" role="status">{filtered.length} result{filtered.length!==1 && 's'}</p>
  <ul className="space-y-10 cv-auto">
        {filtered.map(a => (
          <li key={a.slug} className="card-hover p-6 rounded-lg reveal">
            <h2 className="text-2xl font-semibold mb-2"><Link href={`/articles/${a.slug}`}>{a.title}</Link></h2>
            <p className="text-gray-300 mb-2 max-w-prose">{a.description}</p>
            <div className="flex flex-wrap gap-2 text-xs text-gray-400">{a.tags.map(t=> <span key={t}>{t}</span>)}</div>
          </li>
        ))}
      </ul>
    </main>
  )
}
