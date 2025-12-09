import React from "react";

export default function MemberDashboard() {
  return (
    <div className="min-h-screen p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold">Member Dashboard</h1>
          <p className="text-gray-500">
            Overview of member activity and quick actions.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-white rounded-lg p-6 shadow-sm border">
          <div className="text-sm text-gray-500">Total Donations</div>
          <div className="text-2xl font-bold mt-2">৳15,000</div>
        </div>
        <div className="bg-white rounded-lg p-6 shadow-sm border">
          <div className="text-sm text-gray-500">Donations Count</div>
          <div className="text-2xl font-bold mt-2">8</div>
        </div>
        <div className="bg-white rounded-lg p-6 shadow-sm border">
          <div className="text-sm text-gray-500">Member Since</div>
          <div className="text-2xl font-bold mt-2">15 January 2023</div>
        </div>
        <div className="bg-white rounded-lg p-6 shadow-sm border">
          <div className="text-sm text-gray-500">Membership Status</div>
          <div className="text-2xl font-bold mt-2">Active</div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <section className="bg-white rounded-xl p-6 shadow-sm border">
          <h3 className="font-semibold mb-4">Recent Donations</h3>
          <ul className="space-y-4">
            <li className="flex justify-between">
              <div>
                <div className="font-medium">Emergency Relief Fund</div>
                <div className="text-xs text-gray-500">20 November 2025</div>
              </div>
              <div className="text-right">
                <div className="font-bold">৳5,000</div>
                <div className="text-xs text-green-600">Completed</div>
              </div>
            </li>
            <li className="flex justify-between">
              <div>
                <div className="font-medium">Medical Equipment Fund</div>
                <div className="text-xs text-gray-500">15 November 2025</div>
              </div>
              <div className="text-right">
                <div className="font-bold">৳3,000</div>
                <div className="text-xs text-green-600">Completed</div>
              </div>
            </li>
          </ul>
        </section>

        <section className="bg-white rounded-xl p-6 shadow-sm border">
          <h3 className="font-semibold mb-4">Upcoming Events</h3>
          <ul className="space-y-4">
            <li className="flex justify-between items-center">
              <div>
                <div className="font-medium">Cultural Program</div>
                <div className="text-xs text-gray-500">
                  20 December 2025 · Matlab Upazila
                </div>
              </div>
              <button className="px-3 py-1 border rounded-md text-sm">
                RSVP
              </button>
            </li>
            <li className="flex justify-between items-center">
              <div>
                <div className="font-medium">Community Meetup</div>
                <div className="text-xs text-gray-500">
                  15 December 2025 · Community Hall
                </div>
              </div>
              <button className="px-3 py-1 border rounded-md text-sm">
                RSVP
              </button>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}
