import React from "react";
import { Tag, AlertCircle } from "lucide-react";

export default function NoticeFilters({
  query,
  onQuery,
  category,
  onCategory,
  priority,
  onPriority,
}) {
  const categories = ["All", "Event", "Announcement", "Urgent", "General"];
  const priorities = ["All", "High", "Normal", "Low"];

  return (
    <div
      className="bg-white p-4 rounded-lg shadow-sm border space-y-4 animate-slideUp"
      style={{ animationDelay: "100ms" }}
    >
      <input
        value={query}
        onChange={(e) => onQuery(e.target.value)}
        className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
        placeholder="Search notices..."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="text-sm font-medium text-gray-700 flex items-center gap-2 mb-2">
            <Tag className="w-4 h-4" /> Category
          </label>
          <div className="flex flex-wrap gap-2">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => onCategory(c)}
                className={`px-3 py-1 rounded-md text-sm transition ${
                  category === c
                    ? "bg-blue-600 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="text-sm font-medium text-gray-700 flex items-center gap-2 mb-2">
            <AlertCircle className="w-4 h-4" /> Priority
          </label>
          <div className="flex flex-wrap gap-2">
            {priorities.map((p) => (
              <button
                key={p}
                onClick={() => onPriority(p)}
                className={`px-3 py-1 rounded-md text-sm transition ${
                  priority === p
                    ? "bg-red-600 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {p}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
