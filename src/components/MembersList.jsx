import React from 'react'
import MemberRow from './MemberRow'
import Pagination from './Pagination'

export default function MembersList({ members, page, pageCount, onPage }) {
  return (
    <div className="bg-white rounded-xl p-0 shadow-sm border overflow-hidden">
      <div className="p-6">
        <h3 className="text-lg font-semibold">Member List</h3>
        <p className="text-sm text-gray-500">Detailed information of all members</p>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead className="bg-gray-50">
            <tr className="text-sm text-gray-600">
              <th className="p-4">Member</th>
              <th className="p-4">Contact</th>
              <th className="p-4">Membership</th>
              <th className="p-4">Status</th>
              <th className="p-4">Joined</th>
              <th className="p-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {members.length === 0 && (
              <tr>
                <td colSpan="6" className="p-6 text-center text-gray-500">No members found</td>
              </tr>
            )}
            {members.map((m, i) => (
              <MemberRow key={m.id} member={m} index={i} />
            ))}
          </tbody>
        </table>
      </div>

      <div className="p-4">
        <Pagination page={page} pageCount={pageCount} onPage={onPage} />
      </div>
    </div>
  )
}