import React, { useState, useMemo } from "react";
import ProjectFilters from "../components/ProjectFilters";
import ProjectsList from "../components/ProjectsList";

const sampleProjects = [
  {
    id: 1,
    name: "School Building Construction",
    category: "Education",
    target: 5000000,
    raised: 3250000,
    progress: 65,
    donors: 247,
    status: "Active",
    icon: "🏫",
  },
  {
    id: 2,
    name: "Medical Equipment Fund",
    category: "Healthcare",
    target: 2000000,
    raised: 1950000,
    progress: 98,
    donors: 189,
    status: "Active",
    icon: "🏥",
  },
  {
    id: 3,
    name: "Community Water Well",
    category: "Infrastructure",
    target: 500000,
    raised: 500000,
    progress: 100,
    donors: 145,
    status: "Completed",
    icon: "💧",
  },
  {
    id: 4,
    name: "Scholarship Program 2025",
    category: "Education",
    target: 1500000,
    raised: 680000,
    progress: 45,
    donors: 98,
    status: "Active",
    icon: "🎓",
  },
  {
    id: 5,
    name: "Emergency Relief Fund",
    category: "Relief",
    target: 3000000,
    raised: 125000,
    progress: 4,
    donors: 34,
    status: "Paused",
    icon: "🚨",
  },
  {
    id: 6,
    name: "Digital Library Project",
    category: "Education",
    target: 800000,
    raised: 450000,
    progress: 56,
    donors: 112,
    status: "Active",
    icon: "📚",
  },
  {
    id: 7,
    name: "Healthcare Mobile Clinic",
    category: "Healthcare",
    target: 1200000,
    raised: 1200000,
    progress: 100,
    donors: 156,
    status: "Completed",
    icon: "🚑",
  },
  {
    id: 8,
    name: "Village Road Development",
    category: "Infrastructure",
    target: 2500000,
    raised: 800000,
    progress: 32,
    donors: 76,
    status: "Active",
    icon: "🛣️",
  },
];

export default function Projects() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [status, setStatus] = useState("All");
  const [page, setPage] = useState(1);
  const perPage = 5;

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return sampleProjects.filter((p) => {
      if (category !== "All" && p.category !== category) return false;
      if (status !== "All" && p.status !== status) return false;
      if (!q) return true;
      return p.name.toLowerCase().includes(q);
    });
  }, [query, category, status]);

  const total = filtered.length;
  const pageCount = Math.max(1, Math.ceil(total / perPage));
  const pageItems = filtered.slice((page - 1) * perPage, page * perPage);

  const stats = {
    total: sampleProjects.length,
    active: sampleProjects.filter((p) => p.status === "Active").length,
    completed: sampleProjects.filter((p) => p.status === "Completed").length,
    paused: sampleProjects.filter((p) => p.status === "Paused").length,
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">Projects Management</h2>
          <p className="text-gray-500">Create and track donation projects</p>
        </div>
        <button className="px-4 py-2 bg-black text-white rounded-md hover:bg-gray-900 transition transform hover:scale-105">
          + Add Project
        </button>
      </div>

      {/* Stats Cards with Animation */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div
          className="bg-white rounded-lg p-6 shadow-sm border transform transition-all duration-300 hover:shadow-lg hover:scale-105 cursor-pointer opacity-0 animate-slideUp"
          style={{ animationDelay: "0ms" }}
        >
          <div className="text-sm text-gray-500">Total Projects</div>
          <div className="text-3xl font-bold mt-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">
            {stats.total}
          </div>
          <div className="w-full h-1 bg-gray-200 rounded mt-4 overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-blue-600 to-blue-400 animate-pulse"
              style={{ width: "100%" }}
            />
          </div>
        </div>

        <div
          className="bg-white rounded-lg p-6 shadow-sm border transform transition-all duration-300 hover:shadow-lg hover:scale-105 cursor-pointer opacity-0 animate-slideUp"
          style={{ animationDelay: "100ms" }}
        >
          <div className="text-sm text-gray-500">Active</div>
          <div className="text-3xl font-bold mt-2 text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-green-400">
            {stats.active}
          </div>
          <div className="w-full h-1 bg-gray-200 rounded mt-4 overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-green-600 to-green-400 animate-pulse"
              style={{ width: "100%" }}
            />
          </div>
        </div>

        <div
          className="bg-white rounded-lg p-6 shadow-sm border transform transition-all duration-300 hover:shadow-lg hover:scale-105 cursor-pointer opacity-0 animate-slideUp"
          style={{ animationDelay: "200ms" }}
        >
          <div className="text-sm text-gray-500">Completed</div>
          <div className="text-3xl font-bold mt-2 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-purple-400">
            {stats.completed}
          </div>
          <div className="w-full h-1 bg-gray-200 rounded mt-4 overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-purple-600 to-purple-400 animate-pulse"
              style={{ width: "100%" }}
            />
          </div>
        </div>

        <div
          className="bg-white rounded-lg p-6 shadow-sm border transform transition-all duration-300 hover:shadow-lg hover:scale-105 cursor-pointer opacity-0 animate-slideUp"
          style={{ animationDelay: "300ms" }}
        >
          <div className="text-sm text-gray-500">Paused</div>
          <div className="text-3xl font-bold mt-2 text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-amber-400">
            {stats.paused}
          </div>
          <div className="w-full h-1 bg-gray-200 rounded mt-4 overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-amber-600 to-amber-400 animate-pulse"
              style={{ width: "100%" }}
            />
          </div>
        </div>
      </div>

      <ProjectFilters
        query={query}
        onQuery={setQuery}
        category={category}
        onCategory={(c) => {
          setCategory(c);
          setPage(1);
        }}
        status={status}
        onStatus={(s) => {
          setStatus(s);
          setPage(1);
        }}
      />

      <ProjectsList
        projects={pageItems}
        page={page}
        pageCount={pageCount}
        onPage={setPage}
      />
    </div>
  );
}
