import React, { useState, useMemo } from "react";
import DonationFilters from "../components/DonationFilters";
import DonationsList from "../components/DonationsList";
import { TrendingUp, Users, CheckCircle, DollarSign } from "lucide-react";

const sampleDonations = [
  {
    id: 1,
    txnId: "TXN-2025-001",
    donor: "Kamal Ahmed",
    email: "kamal@example.com",
    project: "School Building",
    amount: 50000,
    method: "bKash",
    status: "Completed",
    date: "28 November 2025",
    icon: "💳",
  },
  {
    id: 2,
    txnId: "TXN-2025-002",
    donor: "Fatema Rahman",
    email: "fatema@example.com",
    project: "Medical Equipment",
    amount: 25000,
    method: "Nagad",
    status: "Completed",
    date: "27 November 2025",
    icon: "💚",
  },
  {
    id: 3,
    txnId: "TXN-2025-003",
    donor: "John Smith",
    email: "john@example.com",
    project: "Scholarship Fund",
    amount: 100,
    method: "Stripe",
    status: "Pending",
    date: "28 November 2025",
    icon: "🟠",
  },
  {
    id: 4,
    txnId: "TXN-2025-004",
    donor: "Ayesha Khatun",
    email: "ayesha@example.com",
    project: "Water Well",
    amount: 15000,
    method: "Rocket",
    status: "Failed",
    date: "26 November 2025",
    icon: "❌",
  },
  {
    id: 5,
    txnId: "TXN-2025-005",
    donor: "David Miller",
    email: "david@example.com",
    project: "Emergency Relief",
    amount: 200,
    method: "Stripe",
    status: "Completed",
    date: "25 November 2025",
    icon: "✅",
  },
  {
    id: 6,
    txnId: "TXN-2025-006",
    donor: "Rahim Uddin",
    email: "rahim@example.com",
    project: "School Building",
    amount: 75000,
    method: "bKash",
    status: "Completed",
    date: "24 November 2025",
    icon: "💳",
  },
  {
    id: 7,
    txnId: "TXN-2025-007",
    donor: "Aisha Khan",
    email: "aisha@example.com",
    project: "Healthcare Clinic",
    amount: 35000,
    method: "Nagad",
    status: "Completed",
    date: "23 November 2025",
    icon: "💚",
  },
  {
    id: 8,
    txnId: "TXN-2025-008",
    donor: "Hassan Ali",
    email: "hassan@example.com",
    project: "Digital Library",
    amount: 12000,
    method: "Rocket",
    status: "Pending",
    date: "22 November 2025",
    icon: "🟠",
  },
];

export default function Donations() {
  const [query, setQuery] = useState("");
  const [project, setProject] = useState("All");
  const [status, setStatus] = useState("All");
  const [page, setPage] = useState(1);
  const perPage = 5;

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return sampleDonations.filter((d) => {
      if (project !== "All" && d.project !== project) return false;
      if (status !== "All" && d.status !== status) return false;
      if (!q) return true;
      return (
        d.donor.toLowerCase().includes(q) ||
        d.email.toLowerCase().includes(q) ||
        d.txnId.toLowerCase().includes(q)
      );
    });
  }, [query, project, status]);

  const total = filtered.length;
  const pageCount = Math.max(1, Math.ceil(total / perPage));
  const pageItems = filtered.slice((page - 1) * perPage, page * perPage);

  const stats = {
    totalDonations: "৳8.4M",
    thisMonth: "৳330K",
    totalDonors: "1,247",
    successRate: "96.8%",
    completedCount: sampleDonations.filter((d) => d.status === "Completed")
      .length,
    pendingCount: sampleDonations.filter((d) => d.status === "Pending").length,
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">Donations Report</h2>
          <p className="text-gray-500">Track all donations and transactions</p>
        </div>
        <div className="flex gap-3">
          <button className="px-4 py-2 border rounded-md hover:bg-gray-50 transition transform hover:scale-105 flex items-center gap-2">
            🔽 Filter
          </button>
          <button className="px-4 py-2 bg-black text-white rounded-md hover:bg-gray-900 transition transform hover:scale-105">
            ⬇ Export
          </button>
        </div>
      </div>

      {/* Stats Cards with Gradient Animation */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div
          className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-6 shadow-sm border border-blue-200 transform transition-all duration-300 hover:shadow-lg hover:scale-105 cursor-pointer opacity-0 animate-slideUp"
          style={{ animationDelay: "0ms" }}
        >
          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm text-gray-600">Total Donations</div>
              <div className="text-2xl font-bold mt-2 text-blue-900">
                {stats.totalDonations}
              </div>
            </div>
            <div className="w-14 h-14 bg-blue-200 rounded-full flex items-center justify-center text-2xl animate-bounce">
              💰
            </div>
          </div>
          <div className="mt-4 h-1 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full animate-pulse" />
        </div>

        <div
          className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-6 shadow-sm border border-green-200 transform transition-all duration-300 hover:shadow-lg hover:scale-105 cursor-pointer opacity-0 animate-slideUp"
          style={{ animationDelay: "100ms" }}
        >
          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm text-gray-600">This Month</div>
              <div className="text-2xl font-bold mt-2 text-green-900">
                {stats.thisMonth}
              </div>
            </div>
            <div
              className="w-14 h-14 bg-green-200 rounded-full flex items-center justify-center text-2xl animate-bounce"
              style={{ animationDelay: "100ms" }}
            >
              📈
            </div>
          </div>
          <div className="mt-4 h-1 bg-gradient-to-r from-green-400 to-green-600 rounded-full animate-pulse" />
        </div>

        <div
          className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-6 shadow-sm border border-purple-200 transform transition-all duration-300 hover:shadow-lg hover:scale-105 cursor-pointer opacity-0 animate-slideUp"
          style={{ animationDelay: "200ms" }}
        >
          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm text-gray-600">Total Donors</div>
              <div className="text-2xl font-bold mt-2 text-purple-900">
                {stats.totalDonors}
              </div>
            </div>
            <div
              className="w-14 h-14 bg-purple-200 rounded-full flex items-center justify-center text-2xl animate-bounce"
              style={{ animationDelay: "200ms" }}
            >
              👥
            </div>
          </div>
          <div className="mt-4 h-1 bg-gradient-to-r from-purple-400 to-purple-600 rounded-full animate-pulse" />
        </div>

        <div
          className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg p-6 shadow-sm border border-orange-200 transform transition-all duration-300 hover:shadow-lg hover:scale-105 cursor-pointer opacity-0 animate-slideUp"
          style={{ animationDelay: "300ms" }}
        >
          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm text-gray-600">Success Rate</div>
              <div className="text-2xl font-bold mt-2 text-orange-900">
                {stats.successRate}
              </div>
            </div>
            <div
              className="w-14 h-14 bg-orange-200 rounded-full flex items-center justify-center text-2xl animate-bounce"
              style={{ animationDelay: "300ms" }}
            >
              ✓
            </div>
          </div>
          <div className="mt-4 h-1 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full animate-pulse" />
        </div>
      </div>

      <DonationFilters
        query={query}
        onQuery={setQuery}
        project={project}
        onProject={(p) => {
          setProject(p);
          setPage(1);
        }}
        status={status}
        onStatus={(s) => {
          setStatus(s);
          setPage(1);
        }}
      />

      <DonationsList
        donations={pageItems}
        page={page}
        pageCount={pageCount}
        onPage={setPage}
      />
    </div>
  );
}
