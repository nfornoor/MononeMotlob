import React from 'react'

export default function MemberFilters({ query, onQuery, filter, onFilter }) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm border flex flex-col md:flex-row gap-4 items-center">
      <input
        value={query}
        onChange={e => onQuery(e.target.value)}
        className="flex-1 border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        placeholder="Search by name, email or phone..."
      />

      <div className="flex items-center gap-2">
        {['All','Active','Pending','Suspended'].map(f => (
          <button
            key={f}
            onClick={() => onFilter(f)}
            className={`px-3 py-2 rounded-md text-sm ${filter === f ? 'bg-black text-white' : 'bg-gray-100 text-gray-700'}`}
          >
            {f}
          </button>
        ))}
      </div>
    </div>
  )
}