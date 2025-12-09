import React from 'react'
import { Filter, Tag } from 'lucide-react'

export default function ProjectFilters({ query, onQuery, category, onCategory, status, onStatus }) {
  const categories = ['All', 'Education', 'Healthcare', 'Infrastructure', 'Relief']
  const statuses = ['All', 'Active', 'Completed', 'Paused']

  return (
    <div
      className="bg-white p-6 rounded-lg shadow-sm border space-y-4 opacity-0 animate-slideUp"
      style={{ animationDelay: '100ms' }}
    >
      <input
        value={query}
        onChange={e => onQuery(e.target.value)}
        className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
        placeholder="Search projects..."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="text-sm font-medium text-gray-700 flex items-center gap-2 mb-3">
            <Tag className="w-4 h-4" /> Category
          </label>
          <div className="flex flex-wrap gap-2">
            {categories.map(c => (
              <button
                key={c}
                onClick={() => onCategory(c)}
                className={`px-3 py-1 rounded-md text-sm transition transform hover:scale-105 ${
                  category === c
                    ? 'bg-gradient-to-r from-blue-600 to-blue-500 text-white shadow-md'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="text-sm font-medium text-gray-700 flex items-center gap-2 mb-3">
            <Filter className="w-4 h-4" /> Status
          </label>
          <div className="flex flex-wrap gap-2">
            {statuses.map(s => (
              <button
                key={s}
                onClick={() => onStatus(s)}
                className={`px-3 py-1 rounded-md text-sm transition transform hover:scale-105 ${
                  status === s
                    ? 'bg-gradient-to-r from-green-600 to-green-500 text-white shadow-md'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
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