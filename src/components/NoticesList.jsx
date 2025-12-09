import React from 'react'
import NoticeRow from './NoticeRow'

export default function NoticesList({ notices, page, pageCount, onPage }) {
  return (
    <div className="space-y-4 animate-slideUp" style={{ animationDelay: '200ms' }}>
      <div className="bg-white rounded-xl p-6 shadow-sm border">
        <h3 className="text-lg font-semibold mb-2">Notice List</h3>
        <p className="text-sm text-gray-500 mb-6">All notices and announcements</p>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-gray-50 border-b">
              <tr className="text-sm text-gray-600">
                <th className="p-4">Title</th>
                <th className="p-4">Category</th>
                <th className="p-4">Priority</th>
                <th className="p-4">Status</th>
                <th className="p-4">Publish Date</th>
                <th className="p-4">Views</th>
                <th className="p-4">Actions</th>
              </tr>
            </thead>
            <tbody>
              {notices.length === 0 && (
                <tr>
                  <td colSpan="7" className="p-6 text-center text-gray-500">No notices found</td>
                </tr>
              )}
              {notices.map((n, i) => (
                <NoticeRow key={n.id} notice={n} index={i} />
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {pageCount > 1 && (
        <div className="flex items-center justify-between">
          <div className="text-sm text-gray-500">Showing {(page - 1) * 5 + 1}-{Math.min(page * 5, notices.length + (page - 1) * 5)} of {notices.length + (page - 1) * 5}</div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => onPage(Math.max(1, page - 1))}
              disabled={page <= 1}
              className="px-3 py-2 border rounded-md disabled:opacity-50 hover:bg-gray-50 transition"
            >
              Previous
            </button>
            <button
              onClick={() => onPage(Math.min(pageCount, page + 1))}
              disabled={page >= pageCount}
              className="px-3 py-2 border rounded-md disabled:opacity-50 hover:bg-gray-50 transition"
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  )
}