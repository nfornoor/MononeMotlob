import React, { useState, useMemo } from "react";
import MembersList from "../components/MembersList";
import MemberFilters from "../components/MemberFilters";

const sampleMembers = [
  {
    id: 1,
    name: "Kamal Ahmed",
    email: "kamal@example.com",
    phone: "+880 1712-345678",
    membership: "Individual",
    status: "Active",
    joined: "15 January 2025",
  },
  {
    id: 2,
    name: "Fatema Rahman",
    email: "fatema@example.com",
    phone: "+880 1812-345679",
    membership: "Lifetime",
    status: "Active",
    joined: "10 June 2024",
  },
  {
    id: 3,
    name: "Rahim Uddin",
    email: "rahim@example.com",
    phone: "+880 1912-345680",
    membership: "Individual",
    status: "Pending",
    joined: "20 November 2025",
  },
  {
    id: 4,
    name: "Ayesha Khatun",
    email: "ayesha@example.com",
    phone: "+880 1612-345681",
    membership: "Individual",
    status: "Suspended",
    joined: "5 March 2024",
  },
  {
    id: 5,
    name: "Jamal Hassan",
    email: "jamal@example.com",
    phone: "+880 1712-345682",
    membership: "Lifetime",
    status: "Active",
    joined: "12 August 2023",
  },
  // add more as needed
];

export default function Members() {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState("All");
  const [page, setPage] = useState(1);
  const perPage = 10;

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return sampleMembers.filter((m) => {
      if (filter !== "All" && m.status !== filter) return false;
      if (!q) return true;
      return (
        m.name.toLowerCase().includes(q) ||
        m.email.toLowerCase().includes(q) ||
        m.phone.includes(q)
      );
    });
  }, [query, filter]);

  const total = filtered.length;
  const pageCount = Math.max(1, Math.ceil(total / perPage));
  const pageItems = filtered.slice((page - 1) * perPage, page * perPage);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">Members Management</h2>
          <p className="text-gray-500">
            Manage, approve and track member accounts
          </p>
        </div>

        <div className="flex gap-3">
          <button className="px-4 py-2 border rounded-md">Export</button>
          <button className="px-4 py-2 bg-black text-white rounded-md">
            + Add Member
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-lg p-6 shadow-sm border">
          <div className="text-sm text-gray-500">Total Members</div>
          <div className="text-2xl font-bold mt-2">1,247</div>
        </div>
        <div className="bg-white rounded-lg p-6 shadow-sm border">
          <div className="text-sm text-gray-500">Active</div>
          <div className="text-2xl font-bold mt-2">1,180</div>
        </div>
        <div className="bg-white rounded-lg p-6 shadow-sm border">
          <div className="text-sm text-gray-500">Pending</div>
          <div className="text-2xl font-bold mt-2">45</div>
        </div>
        <div className="bg-white rounded-lg p-6 shadow-sm border">
          <div className="text-sm text-gray-500">Suspended</div>
          <div className="text-2xl font-bold mt-2">22</div>
        </div>
      </div>

      <MemberFilters
        query={query}
        onQuery={setQuery}
        filter={filter}
        onFilter={(f) => {
          setFilter(f);
          setPage(1);
        }}
      />

      <MembersList
        members={pageItems}
        page={page}
        pageCount={pageCount}
        onPage={setPage}
      />
    </div>
  );
}
