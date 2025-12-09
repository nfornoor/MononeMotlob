import React from "react";
import DonationRow from "./DonationRow";

export default function DonationsList({ donations, page, pageCount, onPage }) {
  return (
    <div
      className="space-y-4 opacity-0 animate-slideUp"
      style={{ animationDelay: "200ms" }}
    >
      <div className="bg-white rounded-xl shadow-sm border overflow-hidden">
        <div className="p-6 border-b bg-gradient-to-r from-gray-50 to-gray-100">
          <h3 className="text-lg font-semibold">Transaction History</h3>
          <p className="text-sm text-gray-500">
            Details of all donations and payments
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-gradient-to-r from-gray-50 to-gray-100 border-b">
              <tr className="text-sm font-semibold text-gray-700">
                <th className="p-4">Transaction ID</th>
                <th className="p-4">Donor</th>
                <th className="p-4">Project</th>
                <th className="p-4">Amount</th>
                <th className="p-4">Payment Method</th>
                <th className="p-4">Status</th>
                <th className="p-4">Date</th>
                <th className="p-4">Actions</th>
              </tr>
            </thead>
            <tbody>
              {donations.length === 0 && (
                <tr>
                  <td colSpan="8" className="p-6 text-center text-gray-500">
                    No donations found
                  </td>
                </tr>
              )}
              {donations.map((d, i) => (
                <DonationRow key={d.id} donation={d} index={i} />
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {pageCount > 1 && (
        <div className="flex items-center justify-between">
          <div className="text-sm text-gray-500">
            Showing {(page - 1) * 5 + 1}-
            {Math.min(page * 5, donations.length + (page - 1) * 5)} of{" "}
            {donations.length + (page - 1) * 5}
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => onPage(Math.max(1, page - 1))}
              disabled={page <= 1}
              className="px-4 py-2 border rounded-md disabled:opacity-50 hover:bg-gray-50 transition transform hover:scale-105"
            >
              Previous
            </button>
            <button
              onClick={() => onPage(Math.min(pageCount, page + 1))}
              disabled={page >= pageCount}
              className="px-4 py-2 border rounded-md disabled:opacity-50 hover:bg-gray-50 transition transform hover:scale-105"
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
