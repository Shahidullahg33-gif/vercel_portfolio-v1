import { services } from '@/data/services'

export default function ServicesPage(){
  return (
    <main className="max-w-5xl mx-auto px-6 py-24">
      <h1 className="text-4xl font-bold mb-10 text-gradient">Services</h1>
  <div className="services-grid grid md:grid-cols-3 gap-8 cv-auto">
        {services.map(s => (
          <div key={s.id} className="card-hover p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-2">{s.title}</h2>
            <p className="text-sm text-gray-300 mb-4">{s.summary}</p>
            <ul className="text-xs space-y-1 text-gray-400 list-disc pl-4">
              {s.points.map(p=> <li key={p}>{p}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </main>
  )
}
