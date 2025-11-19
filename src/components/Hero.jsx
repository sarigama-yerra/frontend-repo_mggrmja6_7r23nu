import React from 'react'

function Hero({ onBookClick }) {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-600 via-sky-500 to-cyan-400" />
      <div className="absolute inset-0 -z-0 opacity-20 bg-[radial-gradient(800px_400px_at_10%_10%,white,transparent)]" />
      <div className="max-w-7xl mx-auto px-6 py-20 md:py-28 text-white">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <span className="inline-block bg-white/10 border border-white/20 px-3 py-1 rounded-full text-sm tracking-wide">
              Home Fixi • Bangalore
            </span>
            <h1 className="mt-5 text-4xl md:text-6xl font-extrabold leading-tight">
              Cleaning & Pest Control Services
              <span className="block text-white/90">Trusted • Fast • Professional</span>
            </h1>
            <p className="mt-5 text-white/90 text-lg md:text-xl">
              We provide deep cleaning and pest control across Bangalore: cockroaches, bedbugs, mosquitoes, termites and rats — plus commercial and kitchen cleaning.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <button onClick={onBookClick} className="px-6 py-3 rounded-lg bg-white text-blue-700 font-semibold shadow hover:shadow-lg transition">
                Book a Service
              </button>
              <a href="#services" className="px-6 py-3 rounded-lg bg-blue-800/40 border border-white/30 font-semibold hover:bg-blue-800/60 transition">
                View Services
              </a>
            </div>
            <div className="mt-6 text-sm text-white/80">
              Same-day slots available • Trained professionals • Eco-friendly chemicals
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl bg-white/10 border border-white/20 shadow-2xl backdrop-blur-sm flex items-center justify-center">
              <div className="p-8 text-center">
                <div className="text-6xl">🏠✨🛡️</div>
                <p className="mt-4 text-lg">Home Fixi — Your one-stop solution for a clean and pest-free home.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
