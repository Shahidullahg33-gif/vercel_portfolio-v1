import { getArticle } from '@/data/articles'
import { notFound } from 'next/navigation'
import DOMPurify from 'isomorphic-dompurify'
import type { Metadata } from 'next'

interface Params { slug: string }

export function generateMetadata({ params }: { params: Params }): Metadata {
  const article = getArticle(params.slug)
  if(!article) return { title: 'Article Not Found' }
  return {
    title: article.title,
    description: article.description,
    openGraph: { title: article.title, description: article.description, type: 'article', images: [`/og/article-${article.slug}.png`] },
    alternates: { canonical: `/articles/${article.slug}` }
  }
}

export default function ArticleDetail({ params }: { params: Params }) {
  const article = getArticle(params.slug)
  if(!article) return notFound()
  const jsonLd = {
    '@context':'https://schema.org',
    '@type':'Article',
    'headline': article.title,
    'datePublished': article.published,
    'author': {'@type':'Person','name':'Content Writer'},
    'keywords': article.tags.join(', '),
    'description': article.description
  }
  return (
    <main className="max-w-3xl mx-auto px-6 py-24 article-content">
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(jsonLd)}} />
      <h1 className="text-4xl font-bold mb-4 text-gradient flex flex-wrap items-center gap-3">{article.title} {article.difficulty && <span className={`badge difficulty-${article.difficulty}`}>{article.difficulty}</span>}</h1>
      <p className="text-sm text-gray-400 mb-6">{new Date(article.published).toLocaleDateString()} · {article.readingMinutes} min read</p>
      {article.keywords && article.keywords.length>0 && (
        <button
          type="button"
          onClick={()=>{
            const root=document.getElementById('article-body');
            if(!root) return;
            const active = root.dataset.kw==='on';
            if(active){
              root.dataset.kw='off';
              // unwrap spans
              root.querySelectorAll('span.kw-highlight').forEach(s=>{ const parent=s.parentNode!; while(s.firstChild) parent.insertBefore(s.firstChild,s); parent.removeChild(s); });
            } else {
              root.dataset.kw='on';
              const terms = article.keywords!.map(k=>k.toLowerCase());
              const walker=document.createTreeWalker(root,NodeFilter.SHOW_TEXT); let node; const regex=new RegExp('('+terms.map(t=>t.replace(/[-/\\^$*+?.()|[\]{}]/g,'\\$&')).join('|')+')','gi');
              while(node=walker.nextNode()){
                const text=node.nodeValue||''; if(regex.test(text)){ const frag=document.createDocumentFragment(); let lastIndex=0; text.replace(regex,(m,p1,offset)=>{ if(offset>lastIndex) frag.appendChild(document.createTextNode(text.slice(lastIndex,offset))); const span=document.createElement('span'); span.className='kw-highlight'; span.textContent=m; frag.appendChild(span); lastIndex=offset+m.length; return m;}); if(lastIndex<text.length) frag.appendChild(document.createTextNode(text.slice(lastIndex))); node.parentNode!.replaceChild(frag,node); }
              }
            }
          }}
          className="btn-outline text-xs mb-8"
          aria-pressed="false"
        >Toggle Keyword Highlights</button>
      )}
      <div id="article-body" dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(article.body)}} />
    </main>
  )
}
