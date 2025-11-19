import React, { useRef, useState } from 'react'
import Hero from './components/Hero'
import Services from './components/Services'
import BookingForm from './components/BookingForm'
import Footer from './components/Footer'

function App() {
  const [selectedService, setSelectedService] = useState(null)
  const bookRef = useRef(null)

  const scrollToBook = () => {
    document.getElementById('book')?.scrollIntoView({ behavior: 'smooth' })
  }

  const handleBookClick = (service) => {
    setSelectedService(service || null)
    scrollToBook()
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur bg-white/60 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 text-blue-700 font-extrabold text-xl">
            <span>🏠</span>
            <span>Home Fixi</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-slate-700">
            <a href="#services" className="hover:text-blue-700">Services</a>
            <a href="#book" className="hover:text-blue-700">Book</a>
            <a href="/test" className="hover:text-blue-700">System</a>
          </nav>
          <button onClick={scrollToBook} className="px-4 py-2 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700">
            Call Back
          </button>
        </div>
      </header>

      <main className="pt-16">
        <Hero onBookClick={scrollToBook} />
        <Services onBookClick={handleBookClick} />
        <BookingForm defaultService={selectedService} onSubmitted={() => setSelectedService(null)} />
      </main>

      <Footer />
    </div>
  )
}

export default App
