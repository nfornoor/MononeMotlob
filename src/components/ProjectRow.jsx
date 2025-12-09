import React, { useState } from 'react'
import { BarChart3, Edit, Trash2, Play } from 'lucide-react'

export default function ProjectRow({ project, index }) {
  const [hovered, setHovered] = useState(false)

  const categoryColor = {
    Education: 'bg-blue-100 text-blue-700',
    Healthcare: 'bg-red-100 text-red-700',
    Infrastructure: 'bg-green-100 text-green-700',
    Relief: 'bg-orange-100 text-orange-700'
  }[project.category] || 'bg-gray-100 text-gray-700'

  const statusColor = {
    Active: 'bg-green-100 text-green-700',
    Completed: 'bg-purple-100 text-purple-700',
    Paused: 'bg-amber-100 text-amber-700'
  }[project.status] || 'bg-gray-100 text-gray-700'

  const progressColor = project.progress === 100 ? 'bg-purple-500' : project.progress > 75 ? 'bg-green-500' : project.progress > 50 ? 'bg-blue-500' : 'bg-orange-500'

  const delay = Math.min(index * 50, 200)

  return (
    <tr
      style={{ animationDelay: `${delay}ms` }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`border-t opacity-0 animate-fadeIn transition-all duration-300 ${hovered ? 'bg-gradient-to-r from-blue-50 to-transparent' : ''}`}
    >
      <td className="p-4">
        <div className="flex items-center gap-3">
          <div className="text-2xl">{project.icon}</div>
          <div>
            <div className="font-semibold text-gray-900">{project.name}</div>
            <div className="text-xs text-gray-500">ID: #{project.id}</div>
          </div>
        </div>
      </td>

      <td className="p-4">
        <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${categoryColor}`}>
          {project.category}
        </span>
      </td>

      <td className="p-4 text-sm font-medium text-gray-900">
        ৳ {project.target.toLocaleString()}
      </td>

      <td className="p-4 text-sm font-medium text-gray-900">
        ৳ {project.raised.toLocaleString()}
      </td>

      <td className="p-4">
        <div className="flex items-center gap-2">
          <div className="w-24 h-2 bg-gray-200 rounded-full overflow-hidden">
            <div
              className={`h-full ${progressColor} transition-all duration-500 ease-out`}
              style={{ width: `${project.progress}%` }}
            />
          </div>
          <span className="text-xs font-semibold text-gray-700 w-10">{project.progress}%</span>
        </div>
      </td>

      <td className="p-4 text-sm font-semibold text-gray-900 flex items-center gap-1">
        <BarChart3 className="w-4 h-4 text-blue-600" /> {project.donors}
      </td>

      <td className="p-4">
        <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${statusColor}`}>
          {project.status}
        </span>
      </td>

      <td className="p-4">
        <div className="flex items-center gap-2">
          {project.status === 'Paused' && (
            <button title="Resume" className="text-green-600 hover:text-green-700 transition transform hover:scale-125">
              <Play className="w-4 h-4" />
            </button>
          )}
          <button title="Edit" className="text-blue-600 hover:text-blue-700 transition transform hover:scale-125">
            <Edit className="w-4 h-4" />
          </button>
          <button title="Delete" className="text-red-600 hover:text-red-700 transition transform hover:scale-125">
            <Trash2 className="w-4 h-4" />
          </button>
        </div>
      </td>
    </tr>
  )
}