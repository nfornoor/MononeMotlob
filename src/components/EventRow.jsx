import React, { useState } from "react";
import { Eye, Edit, Trash2 } from "lucide-react";

export default function EventRow({ event, index }) {
  const [hovered, setHovered] = useState(false);
  const statusColor =
    {
      Upcoming: "bg-indigo-100 text-indigo-700",
      Completed: "bg-emerald-100 text-emerald-700",
      Cancelled: "bg-rose-100 text-rose-700",
    }[event.status] || "bg-gray-100 text-gray-700";

  const delay = Math.min(index * 60, 300);

  return (
    <tr
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ animationDelay: `${delay}ms` }}
      className={`border-t opacity-0 animate-fadeIn transition-all duration-300 ${
        hovered ? "bg-gradient-to-r from-indigo-50 to-transparent" : ""
      }`}
    >
      <td className="p-4 align-top">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-xl transform transition group-hover:scale-105">
            {event.icon}
          </div>
          <div>
            <div className="font-medium">{event.title}</div>
            <div className="text-xs text-gray-500 mt-1">{event.category}</div>
          </div>
        </div>
      </td>

      <td className="p-4 align-top text-sm text-gray-600">
        <div className="flex flex-col">
          <span>{event.date}</span>
          <span className="text-xs text-gray-400 mt-1">{event.time}</span>
        </div>
      </td>

      <td className="p-4 align-top text-sm text-gray-600">{event.location}</td>

      <td className="p-4 align-top text-sm text-gray-600">{event.reg}</td>

      <td className="p-4 align-top">
        <span
          className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${statusColor}`}
        >
          {event.status}
        </span>
      </td>

      <td className="p-4 align-top">
        <div className="flex items-center gap-3">
          <button
            title="View"
            className="text-gray-600 hover:text-gray-800 transition transform hover:scale-110"
          >
            <Eye className="w-4 h-4" />
          </button>
          <button
            title="Edit"
            className="text-green-600 hover:text-green-800 transition transform hover:scale-110"
          >
            <Edit className="w-4 h-4" />
          </button>
          <button
            title="Delete"
            className="text-red-600 hover:text-red-800 transition transform hover:scale-110"
          >
            <Trash2 className="w-4 h-4" />
          </button>
        </div>
      </td>
    </tr>
  );
}
