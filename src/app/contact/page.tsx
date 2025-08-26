import { personalInfo } from '@/data/personal'

export const metadata = { title: 'Contact - Content Writer' }

export default function ContactPage(){
  return (
    <section className="py-28 max-w-3xl mx-auto px-6 reveal">
      <h1 className="text-5xl font-serif mb-8">Contact</h1>
      <p className="mb-6 max-w-prose">Interested in collaborating or need a strategic content partner? Reach out and I’ll respond within one business day.</p>
      <div className="grid gap-6 md:grid-cols-2">
        <div className="p-6 rounded-lg bg-[var(--c-surface)]/60 border border-[var(--c-border)] backdrop-blur-sm">
          <h2 className="font-semibold mb-2">Direct</h2>
          <a href={`mailto:${personalInfo.email}`} className="underline hover:no-underline text-[var(--c-accent)]">{personalInfo.email}</a>
        </div>
        <div className="p-6 rounded-lg bg-[var(--c-surface)]/60 border border-[var(--c-border)] backdrop-blur-sm">
          <h2 className="font-semibold mb-2">Social</h2>
          <ul className="space-y-1 text-sm">
            <li><a className="hover:underline" href={personalInfo.social.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            <li><a className="hover:underline" href={personalInfo.social.twitter} target="_blank" rel="noopener noreferrer">Twitter</a></li>
            <li><a className="hover:underline" href={personalInfo.social.github} target="_blank" rel="noopener noreferrer">GitHub</a></li>
          </ul>
        </div>
      </div>
      <form className="mt-12 grid gap-4 max-w-xl" aria-label="Contact form">
        <div className="grid gap-1">
          <label htmlFor="name" className="text-sm font-medium">Name</label>
          <input id="name" name="name" required className="px-3 py-2 rounded-md bg-[var(--c-surface)] border border-[var(--c-border)] focus:outline-none focus:ring-2 focus:ring-[var(--c-accent)]" />
        </div>
        <div className="grid gap-1">
          <label htmlFor="email" className="text-sm font-medium">Email</label>
          <input id="email" type="email" name="email" required className="px-3 py-2 rounded-md bg-[var(--c-surface)] border border-[var(--c-border)] focus:outline-none focus:ring-2 focus:ring-[var(--c-accent)]" />
        </div>
        <div className="grid gap-1">
          <label htmlFor="message" className="text-sm font-medium">Message</label>
          <textarea id="message" name="message" rows={5} required className="px-3 py-2 rounded-md bg-[var(--c-surface)] border border-[var(--c-border)] focus:outline-none focus:ring-2 focus:ring-[var(--c-accent)]" />
        </div>
        <button type="submit" className="inline-flex justify-center items-center px-5 py-2.5 rounded-md bg-[var(--c-accent)] text-white font-medium shadow hover:opacity-90 transition-opacity">Send</button>
      </form>
    </section>
  )
}