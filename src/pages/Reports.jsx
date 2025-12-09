import React, { useMemo } from "react";
import ReportFilters from "../components/ReportFilters";
import FinancialTable from "../components/FinancialTable";
import CountUp from "../components/CountUp";

const statsSample = {
  totalRevenue: 8400000,
  thisMonth: 330000,
  expenses: 2100000,
  netProfit: 6300000,
  monthly: [
    {
      month: "January",
      donations: 450000,
      membership: 125000,
      expenses: 180000,
    },
    {
      month: "February",
      donations: 520000,
      membership: 130000,
      expenses: 175000,
    },
    { month: "March", donations: 610000, membership: 140000, expenses: 190000 },
    { month: "April", donations: 480000, membership: 120000, expenses: 210000 },
    { month: "May", donations: 700000, membership: 150000, expenses: 200000 },
    { month: "June", donations: 630000, membership: 135000, expenses: 195000 },
  ],
};

function StatCard({ title, value, hint, color = "blue", sparkData = [] }) {
  return (
    <div
      className={`bg-white rounded-lg p-6 shadow-sm border transform transition-all hover:scale-105 duration-300 opacity-0 animate-slideUp`}
      style={{ animationDelay: "0ms" }}
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="text-sm text-gray-500">{title}</div>
          <div className="text-2xl font-bold mt-2">
            <CountUp end={value} format money />
          </div>
          {hint && <div className="text-xs text-gray-400 mt-1">{hint}</div>}
        </div>

        <div className="w-20 h-12 flex flex-col items-end justify-between">
          <svg
            className="w-full h-10 sparkline"
            viewBox="0 0 60 20"
            preserveAspectRatio="none"
          >
            <polyline
              fill="none"
              stroke={`url(#g-${color})`}
              strokeWidth="2"
              points={sparkData.join(" ")}
              className="sparkline-path"
            />
            <defs>
              <linearGradient id={`g-${color}`} x1="0" x2="1">
                <stop
                  offset="0%"
                  stopColor={
                    color === "green"
                      ? "#34d399"
                      : color === "red"
                      ? "#fb7185"
                      : "#60a5fa"
                  }
                />
                <stop
                  offset="100%"
                  stopColor={
                    color === "green"
                      ? "#10b981"
                      : color === "red"
                      ? "#f43f5e"
                      : "#3b82f6"
                  }
                />
              </linearGradient>
            </defs>
          </svg>
          <div className="w-10 h-4 rounded-full bg-gradient-to-r from-white/50 to-white/10 stat-shimmer" />
        </div>
      </div>
    </div>
  );
}

export default function Reports() {
  const s = statsSample;

  const spark = useMemo(() => {
    // simple mapping to 60x20 polyline points
    const arr = s.monthly.map((m, i) => {
      const x = Math.round((i / (s.monthly.length - 1)) * 60);
      const max = Math.max(...s.monthly.map((mm) => mm.donations));
      const y = 20 - Math.round((m.donations / max) * 18);
      return `${x},${y}`;
    });
    return arr;
  }, [s]);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">Financial Reports</h2>
          <p className="text-gray-500">
            Revenue, expenses and financial analytics
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <StatCard
          title="Total Revenue"
          value={s.totalRevenue}
          hint="+23% from last month"
          color="blue"
          sparkData={spark}
        />
        <StatCard
          title="This Month"
          value={s.thisMonth}
          hint="+12% from last month"
          color="green"
          sparkData={spark}
        />
        <StatCard
          title="Expenses"
          value={s.expenses}
          hint="-8% from last month"
          color="red"
          sparkData={spark}
        />
        <StatCard
          title="Net Profit"
          value={s.netProfit}
          hint="+31% from last month"
          color="green"
          sparkData={spark}
        />
      </div>

      <ReportFilters />

      <FinancialTable
        rows={s.monthly.map((r) => ({
          ...r,
          net: r.donations + r.membership - r.expenses,
        }))}
      />
    </div>
  );
}
