import React from "react";
import CountUp from "./CountUp";

const stats = [
  { label: "Total Members", value: 1250, suffix: "+" },
  { label: "Total Donations", value: 500000, money: true },
  { label: "Active Projects", value: 12 },
  { label: "Completed Projects", value: 45 },
];

export default function StatsGrid() {
  return (
    <div className="grid md:grid-cols-4 gap-6 px-4">
      {stats.map((s, i) => (
        <div key={i} className="bg-white rounded-lg shadow-sm p-8 text-center animate-card-in">
          <div className="text-2xl font-extrabold mb-2">
            <CountUp end={s.value} duration={1000 + i * 150} money={s.money} />{s.suffix || ""}
          </div>
          <div className="text-sm text-gray-500">{s.label}</div>
        </div>
      ))}
    </div>
  );
}