import React from "react";
import { FileText, Edit, Trash2 } from "lucide-react";

export default function MemberRow({ member, index }) {
  const statusColor =
    {
      Active: "bg-green-100 text-green-700",
      Pending: "bg-amber-100 text-amber-700",
      Suspended: "bg-rose-100 text-rose-700",
    }[member.status] || "bg-gray-100 text-gray-700";

  const delay = Math.min(index * 50, 300); // stagger animation

  return (
    <tr
      style={{ animationDelay: `${delay}ms` }}
      className="transform transition hover:scale-[1.01] duration-150 opacity-0 animate-fadeIn border-t"
    >
      <td className="p-4 align-top">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-xl">
            👤
          </div>
          <div>
            <div className="font-medium">{member.name}</div>
            <div className="text-xs text-gray-500">ID: #{member.id}</div>
          </div>
        </div>
      </td>

      <td className="p-4 align-top text-sm text-gray-600">
        <div>{member.email}</div>
        <div className="mt-1">{member.phone}</div>
      </td>

      <td className="p-4 align-top">
        <div className="inline-block px-3 py-1 border rounded-full text-sm">
          {member.membership}
        </div>
        <div className="text-xs text-gray-400 mt-1">
          Expires: {member.joined === "Lifetime" ? "Lifetime" : "See profile"}
        </div>
      </td>

      <td className="p-4 align-top">
        <span
          className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${statusColor}`}
        >
          {member.status}
        </span>
      </td>

      <td className="p-4 align-top text-sm text-gray-600">{member.joined}</td>

      <td className="p-4 align-top text-sm">
        <div className="flex items-center gap-3">
          <button title="View" className="text-gray-500 hover:text-gray-700">
            <FileText className="w-4 h-4" />
          </button>
          <button title="Edit" className="text-green-600 hover:text-green-700">
            <Edit className="w-4 h-4" />
          </button>
          <button title="Delete" className="text-red-600 hover:text-red-700">
            <Trash2 className="w-4 h-4" />
          </button>
        </div>
      </td>
    </tr>
  );
}
