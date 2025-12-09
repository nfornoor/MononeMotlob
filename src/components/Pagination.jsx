import React from 'react'

export default function Pagination({ page, pageCount, onPage }) {
  return (
    <div className="flex items-center justify-between">
      <div className="text-sm text-gray-500">Showing page {page} of {pageCount}</div>
      <div className="flex items-center gap-2">
        <button
          onClick={() => onPage(Math.max(1, page - 1))}
          disabled={page <= 1}
          className="px-3 py-2 border rounded-md disabled:opacity-50"
        >
          Previous
        </button>
        <button
          onClick={() => onPage(Math.min(pageCount, page + 1))}
          disabled={page >= pageCount}
          className="px-3 py-2 border rounded-md disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  )
}