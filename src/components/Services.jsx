import React from 'react'

const SERVICES = [
  { key: 'Deep Cleaning', desc: 'Full home deep cleaning with professional tools and eco-safe chemicals.' },
  { key: 'Commercial Cleaning', desc: 'Office and commercial space cleaning with flexible schedules.' },
  { key: 'Kitchen Cleaning', desc: 'Grease removal, chimney, tiles, and appliance detailing.' },
  { key: 'Cockroach Control', desc: 'Odourless gel & spray treatment targeting cockroach colonies.' },
  { key: 'Bedbug Control', desc: 'Multi-visit treatment with safe chemicals for lasting relief.' },
  { key: 'Mosquito Control', desc: 'Indoor and outdoor anti-larval and residual spraying.' },
  { key: 'Termite Treatment', desc: 'Drill–fill–seal method with long-term protection.' },
  { key: 'Rat Treatment', desc: 'Baiting, trapping and proofing to stop rodent entry.' },
]

function Services({ onBookClick }) {
  return (
    <section id="services" className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 text-center">Our Services in Bangalore</h2>
        <p className="mt-3 text-slate-600 text-center">Cleaning and pest control packages designed for homes and businesses.</p>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((s) => (
            <div key={s.key} className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm hover:shadow-md transition">
              <div className="text-2xl">{s.key.includes('Cleaning') ? '🧹' : '🪲'}</div>
              <h3 className="mt-2 font-semibold text-slate-900">{s.key}</h3>
              <p className="mt-2 text-slate-600 text-sm">{s.desc}</p>
              <button onClick={() => onBookClick(s.key)} className="mt-4 inline-flex px-4 py-2 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700">Book {s.key}</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
