import React from "react";
import EventRow from "./EventRow";
import Pagination from "./Pagination";

export default function EventsList({ events, page, pageCount, onPage }) {
  return (
    <div
      className="space-y-4 opacity-0 animate-slideUp"
      style={{ animationDelay: "180ms" }}
    >
      <div className="bg-white rounded-xl p-6 shadow-sm border">
        <h3 className="text-lg font-semibold">Event List</h3>
        <p className="text-sm text-gray-500 mb-4">
          Event schedule and registrations
        </p>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-gray-50">
              <tr className="text-sm text-gray-600">
                <th className="p-4">Event</th>
                <th className="p-4">Date & Time</th>
                <th className="p-4">Location</th>
                <th className="p-4">Registration</th>
                <th className="p-4">Status</th>
                <th className="p-4">Actions</th>
              </tr>
            </thead>
            <tbody>
              {events.length === 0 && (
                <tr>
                  <td colSpan="6" className="p-6 text-center text-gray-500">
                    No events found
                  </td>
                </tr>
              )}
              {events.map((e, i) => (
                <EventRow key={e.id} event={e} index={i} />
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div className="text-sm text-gray-500">
          Showing page {page} of {pageCount}
        </div>
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
    </div>
  );
}
