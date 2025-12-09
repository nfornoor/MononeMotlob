import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import CountUp from "./CountUp";

export default function FinancialTable({ rows = [] }) {
  return (
    <div
      className="bg-white rounded-xl p-6 shadow-sm border opacity-0 animate-slideUp"
      style={{ animationDelay: "160ms" }}
    >
      <h3 className="text-lg font-semibold">Monthly Summary</h3>
      <p className="text-sm text-gray-500 mb-4">
        Revenue and expenses by month
      </p>

      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="text-sm text-gray-600">
              <th className="p-4">Month</th>
              <th className="p-4">Donations</th>
              <th className="p-4">Membership</th>
              <th className="p-4">Expenses</th>
              <th className="p-4">Net</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r, i) => {
              const net = r.net;
              const isPositive = net >= 0;
              return (
                <tr
                  key={r.month}
                  className={`border-t opacity-0 animate-fadeIn`}
                  style={{ animationDelay: `${i * 80}ms` }}
                >
                  <td className="p-4 font-medium">{r.month}</td>
                  <td className="p-4">৳ {r.donations.toLocaleString()}</td>
                  <td className="p-4">৳ {r.membership.toLocaleString()}</td>
                  <td className="p-4 text-red-600">
                    ৳ {r.expenses.toLocaleString()}
                  </td>
                  <td
                    className={`p-4 font-semibold ${
                      isPositive ? "text-emerald-600" : "text-rose-600"
                    }`}
                  >
                    <CountUp end={net} duration={900} />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="mt-4 flex items-center justify-end gap-2">
        <button className="px-3 py-2 border rounded-md">
          <ChevronLeft className="w-4 h-4" />
        </button>
        <button className="px-3 py-2 border rounded-md">
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
