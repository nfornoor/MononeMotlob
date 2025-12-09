import React from 'react'

export default function MemberTopbar({ title = 'Dashboard' }) {
  return (
    <header className="h-16 bg-white border-b flex items-center justify-between px-6 sticky top-0 z-30">
      <div>
        <h1 className="text-lg font-semibold">{title}</h1>
        <div className="text-xs text-gray-400">Member area • {title}</div>
      </div>

      <div className="flex items-center gap-4">
        <button className="p-2 rounded-md hover:bg-gray-100 transition">🌐</button>
        <button className="p-2 rounded-md hover:bg-gray-100 transition">🔔</button>
        <div className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center">KA</div>
      </div>
    </header>
  )
}