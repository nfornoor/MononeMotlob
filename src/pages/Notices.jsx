import React, { useState, useMemo } from 'react'
import NoticeFilters from '../components/NoticeFilters'
import NoticesList from '../components/NoticesList'

const sampleNotices = [
  { id: 1, title: 'Annual General Meeting 2025', category: 'Event', priority: 'High', status: 'Published', date: '1 November 2025', views: 1247, by: 'Admin', icon: '📋' },
  { id: 2, title: 'New Education Program Launch', category: 'Announcement', priority: 'Normal', status: 'Published', date: '28 October 2025', views: 892, by: 'Content Manager', icon: '📚' },
  { id: 3, title: 'Emergency Relief Fund Appeal', category: 'Urgent', priority: 'Urgent', status: 'Published', date: '10 November 2025', views: 2341, by: 'Admin', icon: '🚨' },
  { id: 4, title: 'Cultural Program Schedule', category: 'Event', priority: 'Normal', status: 'Draft', date: '5 December 2025', views: 0, by: 'Content Manager', icon: '🎭' },
  { id: 5, title: 'Membership Renewal Reminder', category: 'General', priority: 'Normal', status: 'Published', date: '15 November 2025', views: 567, by: 'Admin', icon: '💳' },
  { id: 6, title: 'New Scholarship Program', category: 'Announcement', priority: 'High', status: 'Pinned', date: '20 October 2025', views: 3421, by: 'Admin', icon: '🎓' },
]

export default function Notices() {
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState('All')
  const [priority, setPriority] = useState('All')
  const [page, setPage] = useState(1)
  const perPage = 5

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    return sampleNotices.filter(n => {
      if (category !== 'All' && n.category !== category) return false
      if (priority !== 'All' && n.priority !== priority) return false
      if (!q) return true
      return n.title.toLowerCase().includes(q)
    })
  }, [query, category, priority])

  const total = filtered.length
  const pageCount = Math.max(1, Math.ceil(total / perPage))
  const pageItems = filtered.slice((page - 1) * perPage, page * perPage)

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">Notices Management</h2>
          <p className="text-gray-500">Create, edit and publish notices</p>
        </div>
        <button className="px-4 py-2 bg-black text-white rounded-md hover:bg-gray-900 transition">+ Add Notice</button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 animate-slideUp">
        <div className="bg-white rounded-lg p-6 shadow-sm border transform transition hover:scale-105 duration-300">
          <div className="text-sm text-gray-500">Total Notices</div>
          <div className="text-2xl font-bold mt-2">156</div>
        </div>
        <div className="bg-white rounded-lg p-6 shadow-sm border transform transition hover:scale-105 duration-300">
          <div className="text-sm text-gray-500">Published</div>
          <div className="text-2xl font-bold mt-2">142</div>
        </div>
        <div className="bg-white rounded-lg p-6 shadow-sm border transform transition hover:scale-105 duration-300">
          <div className="text-sm text-gray-500">Draft</div>
          <div className="text-2xl font-bold mt-2">14</div>
        </div>
        <div className="bg-white rounded-lg p-6 shadow-sm border transform transition hover:scale-105 duration-300">
          <div className="text-sm text-gray-500">Pinned</div>
          <div className="text-2xl font-bold mt-2">8</div>
        </div>
      </div>

      <NoticeFilters
        query={query}
        onQuery={setQuery}
        category={category}
        onCategory={c => { setCategory(c); setPage(1) }}
        priority={priority}
        onPriority={p => { setPriority(p); setPage(1) }}
      />

      <NoticesList
        notices={pageItems}
        page={page}
        pageCount={pageCount}
        onPage={setPage}
      />
    </div>
  )
}