import React from "react";
import { Search, Filter, Calendar } from "lucide-react";

export default function DonationFilters({
  query,
  onQuery,
  project,
  onProject,
  status,
  onStatus,
}) {
  const projects = [
    "All",
    "School Building",
    "Medical Equipment",
    "Scholarship Fund",
    "Water Well",
    "Emergency Relief",
    "Healthcare Clinic",
    "Digital Library",
  ];
  const statuses = ["All", "Completed", "Pending", "Failed"];

  return (
    <div
      className="bg-white p-6 rounded-lg shadow-sm border space-y-4 opacity-0 animate-slideUp"
      style={{ animationDelay: "100ms" }}
    >
      <div className="relative">
        <Search className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
        <input
          value={query}
          onChange={(e) => onQuery(e.target.value)}
          className="w-full border rounded-md px-4 py-2 pl-10 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          placeholder="Search by transaction ID, donor name or email..."
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="text-sm font-medium text-gray-700 flex items-center gap-2 mb-3">
            <Filter className="w-4 h-4" /> Project
          </label>
          <div className="flex flex-wrap gap-2">
            {projects.map((p) => (
              <button
                key={p}
                onClick={() => onProject(p)}
                className={`px-3 py-1 rounded-md text-sm transition transform hover:scale-105 ${
                  project === p
                    ? "bg-gradient-to-r from-blue-600 to-blue-500 text-white shadow-md"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {p}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="text-sm font-medium text-gray-700 flex items-center gap-2 mb-3">
            <Calendar className="w-4 h-4" /> Status
          </label>
          <div className="flex flex-wrap gap-2">
            {statuses.map((s) => (
              <button
                key={s}
                onClick={() => onStatus(s)}
                className={`px-3 py-1 rounded-md text-sm transition transform hover:scale-105 ${
                  status === s
                    ? "bg-gradient-to-r from-green-600 to-green-500 text-white shadow-md"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {s}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
