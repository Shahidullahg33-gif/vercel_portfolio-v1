export const metadata = { title: 'About - Content Writer' }

export default function AboutPage(){
  return (
    <section className="py-28 max-w-4xl mx-auto px-6 prose prose-invert">
      <h1 className="text-5xl font-serif mb-6 reveal">About</h1>
      <p className="lead reveal">I craft strategic, story‑driven content that converts curiosity into committed readership.</p>
      <p className="reveal" style={{transitionDelay:'80ms'}}>Over the past decade I have partnered with B2B SaaS, climate tech, and creator economy brands to articulate positioning, surface narrative resonance, and build sustainable content systems.</p>
      <p className="reveal" style={{transitionDelay:'140ms'}}>My process blends qualitative customer insight, competitive language mapping, and editorial experimentation to find repeatable growth levers while maintaining an authentic brand voice.</p>
      <h2 className="mt-12 text-3xl font-semibold reveal" style={{transitionDelay:'200ms'}}>Principles</h2>
      <ul className="reveal" style={{transitionDelay:'260ms'}}>
        <li>Clarity before cleverness</li>
        <li>Reader empathy, always</li>
        <li>Evidence powered narrative arcs</li>
        <li>Accessible, inclusive language</li>
        <li>Measurable iterative improvement</li>
      </ul>
      <h2 className="mt-12 text-3xl font-semibold reveal" style={{transitionDelay:'320ms'}}>Capabilities</h2>
      <p className="reveal" style={{transitionDelay:'380ms'}}>Long‑form articles, case studies, product storytelling, SEO briefs, editorial calendars, narrative positioning, thought leadership ghostwriting.</p>
    </section>
  )
}