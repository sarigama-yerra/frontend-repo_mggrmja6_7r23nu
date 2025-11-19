import React, { useState } from 'react'

const SERVICE_OPTIONS = [
  'Deep Cleaning',
  'Commercial Cleaning',
  'Kitchen Cleaning',
  'Cockroach Control',
  'Bedbug Control',
  'Mosquito Control',
  'Termite Treatment',
  'Rat Treatment',
]

function BookingForm({ defaultService, onSubmitted }) {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    city: 'Bangalore',
    service_type: defaultService || SERVICE_OPTIONS[0],
    preferred_date: '',
    preferred_time: '',
    message: '',
  })
  const [status, setStatus] = useState({ loading: false, success: null, error: null })

  const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus({ loading: true, success: null, error: null })
    try {
      const res = await fetch(`${baseUrl}/api/leads`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await res.json()
      if (!res.ok || !data.success) throw new Error(data.detail || 'Submission failed')
      setStatus({ loading: false, success: 'Thanks! We will call you shortly.', error: null })
      setForm({
        name: '', phone: '', email: '', address: '', city: 'Bangalore', service_type: defaultService || SERVICE_OPTIONS[0], preferred_date: '', preferred_time: '', message: ''
      })
      onSubmitted?.()
    } catch (err) {
      setStatus({ loading: false, success: null, error: err.message })
    }
  }

  return (
    <section id="book" className="py-16">
      <div className="max-w-3xl mx-auto px-6">
        <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-slate-900">Book a Service</h2>
          <p className="text-slate-600 mt-1">Fill the form and our team will call you back.</p>
          <form onSubmit={handleSubmit} className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-700">Full Name</label>
              <input required name="name" value={form.name} onChange={handleChange} className="mt-1 w-full rounded-lg border-slate-300 focus:ring-2 focus:ring-blue-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700">Phone</label>
              <input required name="phone" value={form.phone} onChange={handleChange} className="mt-1 w-full rounded-lg border-slate-300 focus:ring-2 focus:ring-blue-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700">Email (optional)</label>
              <input type="email" name="email" value={form.email} onChange={handleChange} className="mt-1 w-full rounded-lg border-slate-300 focus:ring-2 focus:ring-blue-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700">City</label>
              <input name="city" value={form.city} onChange={handleChange} className="mt-1 w-full rounded-lg border-slate-300 focus:ring-2 focus:ring-blue-500" />
            </div>
            <div className="sm:col-span-2">
              <label className="block text-sm font-medium text-slate-700">Address</label>
              <input name="address" value={form.address} onChange={handleChange} className="mt-1 w-full rounded-lg border-slate-300 focus:ring-2 focus:ring-blue-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700">Service</label>
              <select name="service_type" value={form.service_type} onChange={handleChange} className="mt-1 w-full rounded-lg border-slate-300 focus:ring-2 focus:ring-blue-500">
                {SERVICE_OPTIONS.map((opt) => (
                  <option key={opt} value={opt}>{opt}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700">Preferred Date</label>
              <input name="preferred_date" value={form.preferred_date} onChange={handleChange} type="date" className="mt-1 w-full rounded-lg border-slate-300 focus:ring-2 focus:ring-blue-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700">Preferred Time</label>
              <input name="preferred_time" value={form.preferred_time} onChange={handleChange} placeholder="e.g., 10am-1pm" className="mt-1 w-full rounded-lg border-slate-300 focus:ring-2 focus:ring-blue-500" />
            </div>
            <div className="sm:col-span-2">
              <label className="block text-sm font-medium text-slate-700">Notes</label>
              <textarea name="message" value={form.message} onChange={handleChange} rows={3} className="mt-1 w-full rounded-lg border-slate-300 focus:ring-2 focus:ring-blue-500" />
            </div>
            <div className="sm:col-span-2 flex gap-3">
              <button disabled={status.loading} className="px-6 py-3 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 disabled:opacity-50">
                {status.loading ? 'Submitting...' : 'Submit Request'}
              </button>
              {status.success && <div className="text-green-600 self-center">{status.success}</div>}
              {status.error && <div className="text-red-600 self-center">{status.error}</div>}
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default BookingForm
