import React from 'react'
import { Search, Calendar, MapPin } from 'lucide-react'

export default function EventFilters({ query, onQuery, category, onCategory, status, onStatus }) {
  const categories = ['All','Cultural','Healthcare','Sports','Education','Community']
  const statuses = ['All','Upcoming','Completed','Cancelled']

  return (
    <div className="bg-white p-4 rounded-lg shadow-sm border space-y-4 opacity-0 animate-slideUp" style={{ animationDelay: '100ms' }}>
      <div className="relative">
        <Search className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
        <input
          value={query}
          onChange={e => onQuery(e.target.value)}
          placeholder="Search events..."
          className="w-full pl-10 border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="text-sm font-medium text-gray-700 flex items-center gap-2 mb-2">
            <MapPin className="w-4 h-4" /> Category
          </label>
          <div className="flex flex-wrap gap-2">
            {categories.map(c => (
              <button
                key={c}
                onClick={() => onCategory(c)}
                className={`px-3 py-1 rounded-md text-sm transition transform hover:scale-105 ${
                  category === c ? 'bg-indigo-600 text-white shadow-md' : 'bg-gray-100 text-gray-700'
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="text-sm font-medium text-gray-700 flex items-center gap-2 mb-2">
            <Calendar className="w-4 h-4" /> Status
          </label>
          <div className="flex flex-wrap gap-2">
            {statuses.map(s => (
              <button
                key={s}
                onClick={() => onStatus(s)}
                className={`px-3 py-1 rounded-md text-sm transition transform hover:scale-105 ${
                  status === s ? 'bg-emerald-600 text-white shadow-md' : 'bg-gray-100 text-gray-700'
                }`}
              >
                {s}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}