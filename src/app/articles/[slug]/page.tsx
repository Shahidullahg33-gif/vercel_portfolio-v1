import { getArticle } from '@/data/articles'
import { notFound } from 'next/navigation'
import DOMPurify from 'isomorphic-dompurify'

interface Params { slug: string }

export default function ArticleDetail({ params }: { params: Params }) {
  const article = getArticle(params.slug)
  if(!article) return notFound()
  return (
    <main className="max-w-3xl mx-auto px-6 py-24 article-content">
      <h1 className="text-4xl font-bold mb-4 text-gradient">{article.title}</h1>
      <p className="text-sm text-gray-400 mb-8">{new Date(article.published).toLocaleDateString()} · {article.readingMinutes} min read</p>
      <div dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(article.body)}} />
    </main>
  )
}
