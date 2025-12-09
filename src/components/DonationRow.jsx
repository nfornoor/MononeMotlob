import React, { useState } from "react";
import { Eye, Download, Trash2 } from "lucide-react";

export default function DonationRow({ donation, index }) {
  const [hovered, setHovered] = useState(false);

  const statusColor =
    {
      Completed: "bg-green-100 text-green-700 border-l-4 border-green-500",
      Pending: "bg-amber-100 text-amber-700 border-l-4 border-amber-500",
      Failed: "bg-red-100 text-red-700 border-l-4 border-red-500",
    }[donation.status] || "bg-gray-100 text-gray-700";

  const methodColor =
    {
      bKash: "bg-pink-100 text-pink-700",
      Nagad: "bg-green-100 text-green-700",
      Stripe: "bg-blue-100 text-blue-700",
      Rocket: "bg-orange-100 text-orange-700",
    }[donation.method] || "bg-gray-100 text-gray-700";

  const delay = Math.min(index * 50, 200);

  return (
    <tr
      style={{ animationDelay: `${delay}ms` }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`border-t opacity-0 animate-fadeIn transition-all duration-300 ${
        hovered
          ? "bg-gradient-to-r from-blue-50 via-transparent to-transparent"
          : ""
      }`}
    >
      <td className="p-4">
        <div className="flex items-center gap-2">
          <div className="text-lg">{donation.icon}</div>
          <div>
            <div className="font-semibold text-gray-900">{donation.txnId}</div>
          </div>
        </div>
      </td>

      <td className="p-4">
        <div>
          <div className="font-medium text-gray-900">{donation.donor}</div>
          <div className="text-xs text-gray-500">{donation.email}</div>
        </div>
      </td>

      <td className="p-4">
        <div className="inline-block px-3 py-1 bg-gray-50 border rounded-md text-sm font-medium text-gray-700">
          {donation.project}
        </div>
      </td>

      <td className="p-4 text-sm font-semibold text-gray-900">
        {donation.amount >= 1000
          ? donation.amount < 100000
            ? "৳ "
            : donation.amount < 1000000
            ? "৳ "
            : "$ "
          : "$ "}
        {donation.amount.toLocaleString()}
      </td>

      <td className="p-4">
        <span
          className={`inline-block px-3 py-1 rounded-md text-xs font-medium ${methodColor}`}
        >
          {donation.method}
        </span>
      </td>

      <td className="p-4">
        <span
          className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${statusColor}`}
        >
          {donation.status}
        </span>
      </td>

      <td className="p-4 text-sm text-gray-600">{donation.date}</td>

      <td className="p-4">
        <div className="flex items-center gap-2">
          <button
            title="View"
            className="text-blue-600 hover:text-blue-700 transition transform hover:scale-125 hover:rotate-12"
          >
            <Eye className="w-4 h-4" />
          </button>
          <button
            title="Download"
            className="text-green-600 hover:text-green-700 transition transform hover:scale-125 hover:rotate-12"
          >
            <Download className="w-4 h-4" />
          </button>
          <button
            title="Delete"
            className="text-red-600 hover:text-red-700 transition transform hover:scale-125 hover:rotate-12"
          >
            <Trash2 className="w-4 h-4" />
          </button>
        </div>
      </td>
    </tr>
  );
}
