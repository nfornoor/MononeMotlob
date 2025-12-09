import React, { useState } from 'react'
import { Eye, Edit, Trash2 } from 'lucide-react'

export default function NoticeRow({ notice, index }) {
  const [hovered, setHovered] = useState(false)

  const categoryColor = {
    Event: 'bg-blue-100 text-blue-700',
    Announcement: 'bg-purple-100 text-purple-700',
    Urgent: 'bg-red-100 text-red-700',
    General: 'bg-gray-100 text-gray-700'
  }[notice.category] || 'bg-gray-100 text-gray-700'

  const priorityColor = {
    High: 'bg-orange-100 text-orange-700',
    Normal: 'bg-blue-100 text-blue-700',
    Low: 'bg-green-100 text-green-700',
    Urgent: 'bg-red-100 text-red-700'
  }[notice.priority] || 'bg-gray-100 text-gray-700'

  const statusColor = {
    Published: 'bg-green-100 text-green-700',
    Draft: 'bg-gray-100 text-gray-700',
    Pinned: 'bg-purple-100 text-purple-700'
  }[notice.status] || 'bg-gray-100 text-gray-700'

  const delay = Math.min(index * 50, 200)

  return (
    <tr
      style={{ animationDelay: `${delay}ms` }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`border-t opacity-0 animate-fadeIn transition-all duration-300 ${hovered ? 'bg-blue-50' : ''}`}
    >
      <td className="p-4">
        <div className="flex items-start gap-3">
          <div className="text-2xl">{notice.icon}</div>
          <div>
            <div className="font-medium text-gray-900">{notice.title}</div>
            <div className="text-xs text-gray-500">By: {notice.by}</div>
          </div>
        </div>
      </td>
      <td className="p-4">
        <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${categoryColor}`}>
          {notice.category}
        </span>
      </td>
      <td className="p-4">
        <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${priorityColor}`}>
          {notice.priority}
        </span>
      </td>
      <td className="p-4">
        <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${statusColor}`}>
          {notice.status}
        </span>
      </td>
      <td className="p-4 text-sm text-gray-600">{notice.date}</td>
      <td className="p-4 text-sm text-gray-600 flex items-center gap-1">
        <Eye className="w-4 h-4" /> {notice.views}
      </td>
      <td className="p-4">
        <div className="flex items-center gap-3">
          <button title="Edit" className="text-blue-600 hover:text-blue-700 transition transform hover:scale-110">
            <Edit className="w-4 h-4" />
          </button>
          <button title="Delete" className="text-red-600 hover:text-red-700 transition transform hover:scale-110">
            <Trash2 className="w-4 h-4" />
          </button>
        </div>
      </td>
    </tr>
  )
}