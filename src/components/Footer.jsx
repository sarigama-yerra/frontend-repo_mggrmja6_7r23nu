import React from 'react'

function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-200 py-10">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-6">
        <div>
          <h4 className="text-xl font-semibold">Home Fixi</h4>
          <p className="mt-2 text-slate-400">Cleaning & Pest Control Services in Bangalore.</p>
          <p className="mt-2 text-slate-400 text-sm">© {new Date().getFullYear()} Home Fixi. All rights reserved.</p>
        </div>
        <div>
          <h5 className="font-semibold">Services</h5>
          <ul className="mt-2 space-y-1 text-slate-400 text-sm">
            <li>Deep Cleaning</li>
            <li>Commercial Cleaning</li>
            <li>Kitchen Cleaning</li>
            <li>Cockroach Control</li>
            <li>Bedbug Control</li>
            <li>Mosquito Control</li>
            <li>Termite Treatment</li>
            <li>Rat Treatment</li>
          </ul>
        </div>
        <div>
          <h5 className="font-semibold">Contact</h5>
          <p className="mt-2 text-slate-400 text-sm">Bangalore, Karnataka</p>
          <p className="text-slate-400 text-sm">Mon-Sun: 8am - 9pm</p>
          <a href="#book" className="inline-block mt-4 px-4 py-2 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700">Book Now</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
