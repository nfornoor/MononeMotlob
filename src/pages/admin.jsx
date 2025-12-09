import React from "react";

export default function AdminDashboard() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">Dashboard</h2>
          <p className="text-gray-500">
            Welcome back! Here's an overview of your organization.
          </p>
        </div>
        <div className="flex gap-3">
          <button className="px-4 py-2 border rounded-md">+ Add Donor</button>
          <button className="px-4 py-2 bg-black text-white rounded-md">
            Record Payment
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-lg p-6 shadow-sm border">
          <div className="text-sm text-gray-500">Total Fund Balance</div>
          <div className="text-xl font-bold mt-2">৳840,000</div>
          <div className="text-xs text-gray-400 mt-2">Across 13 funds</div>
        </div>

        <div className="bg-white rounded-lg p-6 shadow-sm border">
          <div className="text-sm text-gray-500">Total Donors</div>
          <div className="text-xl font-bold mt-2">1,247</div>
          <div className="text-xs text-gray-400 mt-2">5 active</div>
        </div>

        <div className="bg-white rounded-lg p-6 shadow-sm border">
          <div className="text-sm text-gray-500">Total Donations</div>
          <div className="text-xl font-bold mt-2">৳330,500</div>
          <div className="text-xs text-gray-400 mt-2">
            From completed payments
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 shadow-sm border">
          <div className="text-sm text-gray-500">Recent Payments</div>
          <div className="text-xl font-bold mt-2">4</div>
          <div className="text-xs text-gray-400 mt-2">Last 10 transactions</div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <section className="bg-white rounded-xl p-6 shadow-sm border">
          <h3 className="font-semibold mb-4">Recent Donations</h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <div>
                <div className="font-medium">Donor ID: e210957d...</div>
                <div className="text-xs text-gray-500">15 November 2025</div>
              </div>
              <div className="text-right">
                <div className="font-bold">৳7,000</div>
                <div className="text-xs text-green-600">completed</div>
              </div>
            </div>

            <div className="flex justify-between items-center">
              <div>
                <div className="font-medium">Donor ID: 7c7fa8f6d2...</div>
                <div className="text-xs text-gray-500">14 November 2025</div>
              </div>
              <div className="text-right">
                <div className="font-bold">৳800</div>
                <div className="text-xs text-green-600">completed</div>
              </div>
            </div>

            <div className="text-center text-sm text-blue-600">
              View All Donations →
            </div>
          </div>
        </section>

        <section className="bg-white rounded-xl p-6 shadow-sm border">
          <h3 className="font-semibold mb-4">Upcoming Member Payments</h3>
          <div className="space-y-4">
            <div className="flex justify-between">
              <div>
                <div className="font-medium">Michael Brown</div>
                <div className="text-xs text-gray-500">
                  Monthly · Due 15 November 2025
                </div>
              </div>
              <div className="font-bold">৳3,000</div>
            </div>

            <div className="flex justify-between">
              <div>
                <div className="font-medium">Jennifer Lee</div>
                <div className="text-xs text-gray-500">
                  Quarterly · Due 18 November 2025
                </div>
              </div>
              <div className="font-bold">৳5,000</div>
            </div>

            <div className="text-center text-sm text-blue-600">
              View All Due Payments →
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
