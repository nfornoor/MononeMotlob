import React, { useState, useMemo } from 'react'
import EventFilters from '../components/EventFilters'
import EventsList from '../components/EventsList'

const sampleEvents = [
  { id: 1, title: 'Annual Cultural Program', category: 'Cultural', date: '15 December 2025', time: '18:00', location: 'Community Hall, Dhaka', reg: '234/500', status: 'Upcoming', icon: '🎭' },
  { id: 2, title: 'Health Camp 2025', category: 'Healthcare', date: '1 December 2025', time: '09:00', location: 'Matlab Upazila', reg: '156/200', status: 'Upcoming', icon: '🩺' },
  { id: 3, title: 'Sports Day 2025', category: 'Sports', date: '20 November 2025', time: '08:00', location: 'Stadium, Matlab', reg: '289/300', status: 'Completed', icon: '🏅' },
  { id: 4, title: 'Education Workshop', category: 'Education', date: '10 January 2026', time: '14:00', location: 'Community Center', reg: '45/150', status: 'Upcoming', icon: '📚' },
  { id: 5, title: 'Volunteer Meetup', category: 'Community', date: '05 December 2025', time: '16:00', location: 'Town Hall', reg: '98/200', status: 'Upcoming', icon: '🤝' },
]

export default function Programs() {
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState('All')
  const [status, setStatus] = useState('All')
  const [page, setPage] = useState(1)
  const perPage = 5

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    return sampleEvents.filter(e => {
      if (category !== 'All' && e.category !== category) return false
      if (status !== 'All' && e.status !== status) return false
      if (!q) return true
      return e.title.toLowerCase().includes(q) || e.location.toLowerCase().includes(q)
    })
  }, [query, category, status])

  const total = filtered.length
  const pageCount = Math.max(1, Math.ceil(total / perPage))
  const pageItems = filtered.slice((page - 1) * perPage, page * perPage)

  const stats = {
    total: sampleEvents.length,
    upcoming: sampleEvents.filter(s => s.status === 'Upcoming').length,
    completed: sampleEvents.filter(s => s.status === 'Completed').length,
    cancelled: 0
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">Programs & Events</h2>
          <p className="text-gray-500">Manage events and track RSVPs</p>
        </div>
        <button className="px-4 py-2 bg-black text-white rounded-md hover:scale-105 transition transform">+ Add Event</button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {[
          { label: 'Total Events', value: stats.total },
          { label: 'Upcoming', value: stats.upcoming },
          { label: 'Completed', value: stats.completed },
          { label: 'Cancelled', value: stats.cancelled },
        ].map((c, i) => (
          <div
            key={c.label}
            className="bg-white rounded-lg p-6 shadow-sm border transform transition-all duration-300 hover:shadow-lg hover:scale-105 opacity-0 animate-slideUp"
            style={{ animationDelay: `${i * 80}ms` }}
          >
            <div className="text-sm text-gray-500">{c.label}</div>
            <div className="text-2xl font-bold mt-2">{c.value}</div>
          </div>
        ))}
      </div>

      <EventFilters
        query={query}
        onQuery={setQuery}
        category={category}
        onCategory={c => { setCategory(c); setPage(1) }}
        status={status}
        onStatus={s => { setStatus(s); setPage(1) }}
      />

      <EventsList events={pageItems} page={page} pageCount={pageCount} onPage={setPage} />
    </div>
  )
}