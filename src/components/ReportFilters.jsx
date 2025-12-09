import React from 'react'

export default function ReportFilters() {
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm border flex flex-col md:flex-row gap-4 items-center opacity-0 animate-slideUp" style={{ animationDelay: '80ms' }}>
      <input className="flex-1 border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400" placeholder="Select date range..." />
      <div className="flex gap-3">
        <button className="px-4 py-2 border rounded-md hover:bg-gray-50 transition">Select Date</button>
        <button className="px-4 py-2 bg-black text-white rounded-md hover:scale-105 transition transform">Export PDF</button>
      </div>
    </div>
  )
}