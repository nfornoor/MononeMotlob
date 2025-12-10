import React, { useState } from "react";
import { Link } from "react-router-dom";
import MemberSidebar from "../components/MemberSidebar";
import MemberTopbar from "../components/MemberTopbar";
import Logo from "../components/Logo";

const CONTENT = {
  Dashboard: () => (
    <div className="space-y-6 animate-fadeIn">
      <div className="bg-gradient-to-r from-indigo-600 to-blue-500 text-white rounded-xl p-6 shadow-lg transform transition hover:scale-[1.01]">
        <h2 className="text-xl font-semibold">Welcome back, Kamal Ahmed!</h2>
        <p className="text-sm opacity-90">
          Your membership is active until 15 January 2026
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {[
          { title: "Total Donations", value: "৳ 15,000" },
          { title: "Donations Count", value: "8" },
          { title: "Member Since", value: "15 January 2023" },
          { title: "Membership Status", value: "Active" },
        ].map((s, i) => (
          <div
            key={s.title}
            className="bg-white rounded-lg p-5 shadow-sm border transform transition hover:shadow-md hover:translate-y-[-3px] duration-300 opacity-0 animate-slideUp"
            style={{ animationDelay: `${i * 80}ms` }}
          >
            <div className="text-xs text-gray-500">{s.title}</div>
            <div className="text-lg font-semibold mt-2">{s.value}</div>
          </div>
        ))}
      </div>

      <div
        className="bg-white rounded-xl p-6 shadow-sm border animate-slideUp"
        style={{ animationDelay: "320ms" }}
      >
        <h3 className="font-semibold mb-4">Recent Donations</h3>
        <ul className="space-y-3">
          <li className="flex items-center justify-between p-4 bg-gray-50 rounded-md border">
            <div>
              <div className="font-medium">School Building Construction</div>
              <div className="text-xs text-gray-400">
                20 November 2025 • Completed
              </div>
            </div>
            <div className="text-sm font-semibold">৳ 5,000</div>
          </li>
          <li className="flex items-center justify-between p-4 bg-white rounded-md border">
            <div>
              <div className="font-medium">Medical Equipment Fund</div>
              <div className="text-xs text-gray-400">
                15 November 2025 • Completed
              </div>
            </div>
            <div className="text-sm font-semibold">৳ 3,000</div>
          </li>
        </ul>
      </div>
    </div>
  ),

  Profile: () => (
    <div className="animate-fadeIn space-y-6">
      {/* Profile Header Card */}
      <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-xl p-8 shadow-lg text-white opacity-0 animate-slideUp">
        <div className="flex items-end gap-6">
          <div className="relative group">
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-yellow-200 to-orange-300 flex items-center justify-center text-5xl shadow-xl transform transition group-hover:scale-110 duration-300">
              👤
            </div>
            <button className="absolute bottom-0 right-0 bg-white text-indigo-600 rounded-full p-2 shadow-lg transform transition hover:scale-110 hover:rotate-12 duration-200">
              📷
            </button>
          </div>

          <div>
            <h2 className="text-3xl font-bold">Kamal Ahmed</h2>
            <div className="text-indigo-100 mt-2">
              MM-2023-001 • Individual Yearly
            </div>
            <div className="text-sm text-indigo-100 mt-1">
              Member since 15 January 2023 • Active ✓
            </div>
          </div>
        </div>
      </div>

      {/* Personal Information */}
      <div
        className="bg-white rounded-xl p-8 shadow-sm border opacity-0 animate-slideUp"
        style={{ animationDelay: "80ms" }}
      >
        <h3 className="text-xl font-semibold mb-6">Personal Information</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Name English */}
          <div className="relative group">
            <label className="text-sm font-medium text-gray-700 flex items-center gap-2 mb-2">
              📝 Name (English)
            </label>
            <input
              type="text"
              defaultValue="Kamal Ahmed"
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 transition duration-300 bg-gray-50 hover:bg-white"
            />
          </div>

          {/* Name Bangla */}
          <div className="relative group">
            <label className="text-sm font-medium text-gray-700 flex items-center gap-2 mb-2">
              🇧🇩 Name (Bangla)
            </label>
            <input
              type="text"
              defaultValue="কামাল আহমেদ"
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 transition duration-300 bg-gray-50 hover:bg-white"
            />
          </div>

          {/* Email */}
          <div className="relative group">
            <label className="text-sm font-medium text-gray-700 flex items-center gap-2 mb-2">
              ✉️ Email
            </label>
            <input
              type="email"
              defaultValue="kamal@example.com"
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 transition duration-300 bg-gray-50 hover:bg-white"
            />
          </div>

          {/* Member ID */}
          <div className="relative group">
            <label className="text-sm font-medium text-gray-700 flex items-center gap-2 mb-2">
              🆔 Member ID
            </label>
            <input
              type="text"
              defaultValue="MM-2023-001"
              disabled
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg bg-gray-100 text-gray-600 cursor-not-allowed"
            />
          </div>

          {/* Phone */}
          <div className="relative group">
            <label className="text-sm font-medium text-gray-700 flex items-center gap-2 mb-2">
              📞 Phone
            </label>
            <input
              type="tel"
              placeholder="+880 1712-345678"
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 transition duration-300 bg-gray-50 hover:bg-white"
            />
          </div>

          {/* Address */}
          <div className="relative group">
            <label className="text-sm font-medium text-gray-700 flex items-center gap-2 mb-2">
              📍 Address
            </label>
            <input
              type="text"
              placeholder="City, Country"
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 transition duration-300 bg-gray-50 hover:bg-white"
            />
          </div>
        </div>

        <button className="mt-6 px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg font-medium transform transition hover:scale-105 hover:shadow-lg duration-300 active:scale-95">
          💾 Update Profile
        </button>
      </div>

      {/* Contact Information */}
      <div
        className="bg-white rounded-xl p-8 shadow-sm border opacity-0 animate-slideUp"
        style={{ animationDelay: "160ms" }}
      >
        <h3 className="text-xl font-semibold mb-6">Contact Information</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <label className="text-sm font-medium text-gray-700 flex items-center gap-2 mb-2">
              🏠 Residential Address
            </label>
            <textarea
              defaultValue="Matlab Upazila, Chandpur, Bangladesh"
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 transition duration-300 bg-gray-50 hover:bg-white"
              rows="3"
            />
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700 flex items-center gap-2 mb-2">
              💼 Emergency Contact
            </label>
            <input
              type="tel"
              placeholder="Emergency number"
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 transition duration-300 bg-gray-50 hover:bg-white mb-2"
            />
            <input
              type="text"
              placeholder="Contact name"
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 transition duration-300 bg-gray-50 hover:bg-white"
            />
          </div>
        </div>

        <button className="mt-6 px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg font-medium transform transition hover:scale-105 hover:shadow-lg duration-300 active:scale-95">
          💾 Save Changes
        </button>
      </div>

      {/* Membership Status Card */}
      <div
        className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-xl p-6 border-2 border-emerald-200 opacity-0 animate-slideUp"
        style={{ animationDelay: "240ms" }}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-emerald-200 flex items-center justify-center text-xl">
              ✓
            </div>
            <div>
              <div className="text-xs text-gray-600">Status</div>
              <div className="font-semibold text-emerald-700">Active</div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-blue-200 flex items-center justify-center text-xl">
              📅
            </div>
            <div>
              <div className="text-xs text-gray-600">Expires</div>
              <div className="font-semibold text-blue-700">15 January 2026</div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-purple-200 flex items-center justify-center text-xl">
              🎫
            </div>
            <div>
              <div className="text-xs text-gray-600">Type</div>
              <div className="font-semibold text-purple-700">
                Individual Yearly
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ),

  "Donation History": () => (
    <div className="animate-fadeIn">
      <div className="bg-white rounded-xl p-6 shadow-sm border">
        <h3 className="font-semibold mb-4">Donation History</h3>
        <p className="text-sm text-gray-500">
          All your transactions are listed here with animated rows.
        </p>
        <div className="mt-4 space-y-3">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="p-4 bg-gray-50 rounded-md border transform transition hover:shadow-md hover:-translate-y-1 duration-200"
            >
              <div className="flex justify-between items-center">
                <div>
                  <div className="font-medium">TXN-2025-00{i}</div>
                  <div className="text-xs text-gray-400">
                    Project — School Building
                  </div>
                </div>
                <div className="text-sm font-semibold">৳ {5000 * i}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  ),

  Membership: () => (
    <div className="animate-fadeIn space-y-6">
      {/* Current Membership Card */}
      <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-xl p-8 shadow-lg text-white opacity-0 animate-slideUp">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold">Current Membership</h2>
            <p className="text-indigo-100 mt-1">Your active membership plan</p>
          </div>
          <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur flex items-center justify-center text-3xl animate-pulse">
            🎫
          </div>
        </div>
      </div>

      {/* Membership Details */}
      <div
        className="bg-white rounded-xl p-8 shadow-sm border opacity-0 animate-slideUp"
        style={{ animationDelay: "80ms" }}
      >
        <h3 className="text-xl font-semibold mb-6">Membership Details</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {/* Left Column */}
          <div className="space-y-6">
            <div className="pb-6 border-b">
              <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                Membership Type
              </div>
              <div className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                👤 Individual Yearly
              </div>
              <div className="text-xs text-gray-400 mt-2">
                Annual subscription plan
              </div>
            </div>

            <div className="pb-6 border-b">
              <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                Member Since
              </div>
              <div className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                📅 15 January 2023
              </div>
              <div className="text-xs text-gray-400 mt-2">
                Active for 2 years
              </div>
            </div>

            <div className="pb-6">
              <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                Membership ID
              </div>
              <div className="text-lg font-mono font-bold text-indigo-600 flex items-center gap-2">
                🆔 MM-2023-001
              </div>
              <div className="text-xs text-gray-400 mt-2">
                Unique identifier
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            <div className="pb-6 border-b">
              <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                Status
              </div>
              <div className="flex items-center gap-2">
                <span className="inline-block w-3 h-3 rounded-full bg-emerald-500 animate-pulse"></span>
                <span className="text-2xl font-bold text-emerald-600">
                  Active
                </span>
              </div>
              <div className="text-xs text-gray-400 mt-2">
                Your membership is valid
              </div>
            </div>

            <div className="pb-6 border-b">
              <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                Expires On
              </div>
              <div className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                ⏰ 15 January 2026
              </div>
              <div className="text-xs text-gray-400 mt-2">
                391 days remaining
              </div>
            </div>

            <div className="pb-6">
              <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                Payment Method
              </div>
              <div className="text-lg font-bold text-gray-900 flex items-center gap-2">
                💳 bKash
              </div>
              <div className="text-xs text-gray-400 mt-2">
                Last payment: 15 Jan 2025
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col md:flex-row gap-3">
          <button className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg font-medium transform transition hover:scale-105 hover:shadow-lg duration-300 active:scale-95 flex items-center justify-center gap-2">
            🔄 Renew Membership
          </button>
          <button className="px-6 py-3 border-2 border-indigo-600 text-indigo-600 rounded-lg font-medium transform transition hover:bg-indigo-50 hover:scale-105 duration-300 flex items-center justify-center gap-2">
            ⬆️ Upgrade Plan
          </button>
        </div>
      </div>

      {/* Membership Plans */}
      <div
        className="opacity-0 animate-slideUp"
        style={{ animationDelay: "160ms" }}
      >
        <h3 className="text-xl font-semibold mb-4">Available Plans</h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              name: "Monthly",
              price: "৳500",
              period: "/month",
              features: ["Full access", "Support", "Updates"],
              icon: "📅",
              popular: false,
            },
            {
              name: "Yearly",
              price: "৳5,000",
              period: "/year",
              features: [
                "Full access",
                "Priority support",
                "All updates",
                "Save 17%",
              ],
              icon: "🎯",
              popular: true,
            },
            {
              name: "Lifetime",
              price: "৳25,000",
              period: "one-time",
              features: ["Lifetime access", "VIP support", "Priority updates"],
              icon: "👑",
              popular: false,
            },
          ].map((plan, i) => (
            <div
              key={plan.name}
              className={`rounded-xl p-6 transform transition hover:scale-105 duration-300 opacity-0 animate-slideUp ${
                plan.popular
                  ? "bg-gradient-to-br from-indigo-600 to-purple-600 text-white shadow-lg ring-2 ring-offset-2 ring-indigo-600"
                  : "bg-white border shadow-sm hover:shadow-lg"
              }`}
              style={{ animationDelay: `${160 + i * 80}ms` }}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="text-3xl">{plan.icon}</div>
                {plan.popular && (
                  <span className="px-2 py-1 bg-white/20 rounded text-xs font-semibold">
                    POPULAR
                  </span>
                )}
              </div>

              <h4
                className={`text-xl font-bold mb-1 ${
                  plan.popular ? "text-white" : "text-gray-900"
                }`}
              >
                {plan.name}
              </h4>
              <div className="mb-4">
                <span
                  className={`text-3xl font-bold ${
                    plan.popular ? "text-white" : "text-indigo-600"
                  }`}
                >
                  {plan.price}
                </span>
                <span
                  className={`text-sm ${
                    plan.popular ? "text-indigo-100" : "text-gray-500"
                  }`}
                >
                  {plan.period}
                </span>
              </div>

              <ul className="space-y-2 mb-6">
                {plan.features.map((f) => (
                  <li
                    key={f}
                    className={`text-sm flex items-center gap-2 ${
                      plan.popular ? "text-indigo-100" : "text-gray-600"
                    }`}
                  >
                    <span className="text-lg">✓</span> {f}
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-2 px-4 rounded-lg font-medium transition transform hover:scale-105 duration-300 ${
                  plan.popular
                    ? "bg-white text-indigo-600 hover:shadow-lg"
                    : "border border-gray-300 text-gray-700 hover:bg-gray-50"
                }`}
              >
                {plan.popular ? "Current Plan" : "Upgrade to " + plan.name}
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Renewal Reminder */}
      <div
        className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl p-6 border-2 border-amber-200 opacity-0 animate-slideUp"
        style={{ animationDelay: "400ms" }}
      >
        <div className="flex items-start gap-4">
          <div className="text-3xl">⏳</div>
          <div className="flex-1">
            <h4 className="font-semibold text-amber-900">
              Membership Renewal Notice
            </h4>
            <p className="text-sm text-amber-800 mt-1">
              Your membership expires in 391 days (15 January 2026). Renew now
              to avoid interruption of services.
            </p>
            <button className="mt-3 px-4 py-2 bg-amber-600 text-white rounded-lg text-sm font-medium hover:scale-105 transition transform">
              Renew Now
            </button>
          </div>
        </div>
      </div>

      {/* Membership History */}
      <div
        className="bg-white rounded-xl p-8 shadow-sm border opacity-0 animate-slideUp"
        style={{ animationDelay: "480ms" }}
      >
        <h3 className="text-xl font-semibold mb-4">Membership History</h3>
        <div className="space-y-3">
          {[
            {
              date: "15 January 2025",
              action: "Renewed Membership",
              status: "Completed",
              amount: "৳5,000",
            },
            {
              date: "15 January 2024",
              action: "Renewed Membership",
              status: "Completed",
              amount: "৳5,000",
            },
            {
              date: "15 January 2023",
              action: "Joined as Member",
              status: "Completed",
              amount: "৳5,000",
            },
          ].map((h, i) => (
            <div
              key={i}
              className="p-4 bg-gray-50 rounded-lg border flex items-center justify-between transform transition hover:shadow-md hover:-translate-y-1 duration-200 opacity-0 animate-fadeIn"
              style={{ animationDelay: `${480 + i * 60}ms` }}
            >
              <div>
                <div className="font-medium text-gray-900">{h.action}</div>
                <div className="text-xs text-gray-500">{h.date}</div>
              </div>
              <div className="flex items-center gap-4">
                <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-xs font-medium">
                  {h.status}
                </span>
                <div className="font-semibold text-gray-900">{h.amount}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  ),

  Notices: () => (
    <div className="animate-fadeIn space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-xl p-8 shadow-lg text-white opacity-0 animate-slideUp">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold">Notices & Announcements</h2>
            <p className="text-blue-100 mt-1">
              Stay updated with latest information
            </p>
          </div>
          <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur flex items-center justify-center text-3xl animate-bounce">
            🔔
          </div>
        </div>
      </div>

      {/* Filter & Search */}
      <div
        className="bg-white rounded-xl p-4 shadow-sm border opacity-0 animate-slideUp"
        style={{ animationDelay: "80ms" }}
      >
        <div className="flex flex-col md:flex-row gap-3">
          <input
            type="text"
            placeholder="Search notices..."
            className="flex-1 px-4 py-2 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 transition duration-300"
          />
          <select className="px-4 py-2 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-indigo-500 transition duration-300">
            <option>All Categories</option>
            <option>Important</option>
            <option>Events</option>
            <option>Updates</option>
          </select>
        </div>
      </div>

      {/* Notices List */}
      <div className="space-y-4">
        {[
          {
            title: "Annual General Meeting 2025",
            date: "1 December 2025",
            category: "Important",
            priority: "high",
            content:
              "Dear members, our Annual General Meeting will be held on December 15th. All members are requested to attend.",
            icon: "📋",
          },
          {
            title: "New Scholarship Program Launched",
            date: "28 November 2025",
            category: "Updates",
            priority: "medium",
            content:
              "We are excited to announce our new scholarship program for deserving students. Applications are now open.",
            icon: "🎓",
          },
          {
            title: "Community Health Camp Scheduled",
            date: "25 November 2025",
            category: "Events",
            priority: "medium",
            content:
              "A free health camp will be organized on December 1st at the Community Hall. All members and their families are welcome.",
            icon: "🏥",
          },
          {
            title: "Membership Renewal Reminder",
            date: "20 November 2025",
            category: "Updates",
            priority: "low",
            content:
              "Your membership will expire soon. Please renew your membership to continue enjoying all benefits.",
            icon: "💳",
          },
          {
            title: "Donation Campaign - Emergency Relief",
            date: "15 November 2025",
            category: "Important",
            priority: "high",
            content:
              "We are launching an emergency relief fund. Your contributions will help those in need. Every donation counts!",
            icon: "🚨",
          },
        ].map((notice, i) => {
          const priorityColor = {
            high: "border-l-4 border-red-500 bg-gradient-to-r from-red-50 to-transparent",
            medium:
              "border-l-4 border-amber-500 bg-gradient-to-r from-amber-50 to-transparent",
            low: "border-l-4 border-blue-500 bg-gradient-to-r from-blue-50 to-transparent",
          }[notice.priority];

          const priorityBadge = {
            high: "bg-red-100 text-red-700",
            medium: "bg-amber-100 text-amber-700",
            low: "bg-blue-100 text-blue-700",
          }[notice.priority];

          return (
            <div
              key={i}
              className={`rounded-xl p-6 shadow-sm border opacity-0 animate-slideUp transform transition hover:shadow-lg hover:-translate-y-1 duration-300 cursor-pointer ${priorityColor}`}
              style={{ animationDelay: `${160 + i * 80}ms` }}
            >
              <div className="flex items-start gap-4">
                {/* Icon */}
                <div className="text-3xl flex-shrink-0 mt-1">{notice.icon}</div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 leading-tight">
                        {notice.title}
                      </h3>
                      <div className="text-sm text-gray-500 mt-1 flex items-center gap-2">
                        📅 {notice.date}
                      </div>
                    </div>

                    {/* Priority Badge */}
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap ${priorityBadge}`}
                    >
                      {notice.category}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 text-sm leading-relaxed mt-3">
                    {notice.content}
                  </p>

                  {/* Action Buttons */}
                  <div className="flex items-center gap-3 mt-4">
                    <button className="px-4 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg text-sm font-medium transform transition hover:scale-105 hover:shadow-md duration-300 active:scale-95">
                      Read More
                    </button>
                    <button className="px-4 py-2 border-2 border-gray-300 text-gray-700 rounded-lg text-sm font-medium transform transition hover:border-gray-400 hover:bg-gray-50 duration-300">
                      🔖 Save
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* No More Notices Footer */}
      <div
        className="text-center py-8 opacity-0 animate-slideUp"
        style={{ animationDelay: "600ms" }}
      >
        <div className="text-4xl mb-2">✓</div>
        <p className="text-gray-500 text-sm">
          You're all caught up! No more notices to show.
        </p>
      </div>
    </div>
  ),

  Documents: () => (
    <div className="animate-fadeIn space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 rounded-xl p-8 shadow-lg text-white opacity-0 animate-slideUp">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold">Documents Library</h2>
            <p className="text-emerald-100 mt-1">
              Download receipts, certificates, and important documents
            </p>
          </div>
          <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur flex items-center justify-center text-3xl animate-bounce">
            📄
          </div>
        </div>
      </div>

      {/* Filter & Search */}
      <div
        className="bg-white rounded-xl p-4 shadow-sm border opacity-0 animate-slideUp"
        style={{ animationDelay: "80ms" }}
      >
        <div className="flex flex-col md:flex-row gap-3">
          <input
            type="text"
            placeholder="Search documents..."
            className="flex-1 px-4 py-2 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100 transition duration-300"
          />
          <select className="px-4 py-2 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-emerald-500 transition duration-300">
            <option>All Categories</option>
            <option>Certificates</option>
            <option>Receipts</option>
            <option>Legal</option>
            <option>Reports</option>
          </select>
        </div>
      </div>

      {/* Member Documents Section */}
      <div
        className="opacity-0 animate-slideUp"
        style={{ animationDelay: "160ms" }}
      >
        <h3 className="text-xl font-semibold mb-4">📋 Member Documents</h3>

        <div className="space-y-3">
          {[
            {
              name: "Membership Certificate",
              size: "2.4 MB",
              type: "pdf",
              date: "15 Jan 2023",
              icon: "🎫",
              color: "from-pink-100 to-red-100",
            },
            {
              name: "Donation Receipts - 2025",
              size: "1.8 MB",
              type: "pdf",
              date: "20 Nov 2025",
              icon: "🧾",
              color: "from-blue-100 to-indigo-100",
            },
            {
              name: "Constitution",
              size: "3.2 MB",
              type: "pdf",
              date: "01 Jan 2023",
              icon: "📖",
              color: "from-purple-100 to-pink-100",
            },
          ].map((doc, i) => (
            <div
              key={i}
              className="bg-white rounded-xl p-5 shadow-sm border opacity-0 animate-slideUp transform transition hover:shadow-lg hover:-translate-y-1 duration-300 group cursor-pointer"
              style={{ animationDelay: `${160 + i * 80}ms` }}
            >
              <div className="flex items-center gap-4">
                {/* Document Icon */}
                <div
                  className={`w-14 h-14 rounded-lg bg-gradient-to-br ${doc.color} flex items-center justify-center text-2xl transform transition group-hover:scale-110 group-hover:rotate-6 duration-300 flex-shrink-0`}
                >
                  {doc.icon}
                </div>

                {/* Document Info */}
                <div className="flex-1 min-w-0">
                  <h4 className="font-semibold text-gray-900 group-hover:text-emerald-600 transition">
                    {doc.name}
                  </h4>
                  <div className="text-sm text-gray-500 flex items-center gap-3 mt-1">
                    <span className="flex items-center gap-1">
                      📦 {doc.size}
                    </span>
                    <span className="flex items-center gap-1">
                      📅 {doc.date}
                    </span>
                    <span className="px-2 py-0.5 bg-gray-100 rounded text-xs font-medium text-gray-700">
                      {doc.type.toUpperCase()}
                    </span>
                  </div>
                </div>

                {/* Download Button */}
                <button className="px-4 py-2 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-lg font-medium transform transition hover:scale-110 hover:shadow-lg duration-300 active:scale-95 flex items-center gap-2 flex-shrink-0">
                  <span>⬇️</span>
                  <span className="hidden md:inline">Download</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Donation Receipts Section */}
      <div
        className="opacity-0 animate-slideUp"
        style={{ animationDelay: "400ms" }}
      >
        <h3 className="text-xl font-semibold mb-4">🧾 Donation Receipts</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            {
              project: "School Building",
              amount: "৳5,000",
              date: "20 Nov 2025",
            },
            {
              project: "Medical Equipment",
              amount: "৳3,000",
              date: "15 Nov 2025",
            },
            {
              project: "Scholarship Fund",
              amount: "৳2,000",
              date: "10 Nov 2025",
            },
            {
              project: "Water Well Project",
              amount: "৳5,000",
              date: "05 Nov 2025",
            },
          ].map((receipt, i) => (
            <div
              key={i}
              className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-5 border-2 border-amber-200 opacity-0 animate-slideUp transform transition hover:shadow-lg hover:scale-105 duration-300 cursor-pointer group"
              style={{ animationDelay: `${400 + i * 60}ms` }}
            >
              <div className="flex items-start justify-between mb-3">
                <div className="text-2xl group-hover:scale-125 transition duration-300">
                  🧾
                </div>
                <span className="px-2 py-1 bg-white rounded-full text-xs font-semibold text-amber-600">
                  Receipt
                </span>
              </div>

              <h4 className="font-semibold text-gray-900 mb-2">
                {receipt.project}
              </h4>

              <div className="space-y-2 mb-4">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Amount</span>
                  <span className="font-bold text-orange-600">
                    {receipt.amount}
                  </span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Date</span>
                  <span className="text-gray-700">{receipt.date}</span>
                </div>
              </div>

              <button className="w-full px-4 py-2 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-lg text-sm font-medium transform transition hover:scale-105 active:scale-95 duration-300">
                ⬇️ Download Receipt
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Legal Documents Section */}
      <div
        className="opacity-0 animate-slideUp"
        style={{ animationDelay: "600ms" }}
      >
        <h3 className="text-xl font-semibold mb-4">⚖️ Legal Documents</h3>

        <div className="bg-white rounded-xl p-6 shadow-sm border space-y-3">
          {[
            { name: "Terms & Conditions", updated: "01 Jan 2025", icon: "📜" },
            { name: "Privacy Policy", updated: "15 Dec 2024", icon: "🔐" },
            {
              name: "Membership Agreement",
              updated: "01 Jan 2023",
              icon: "✍️",
            },
          ].map((legal, i) => (
            <div
              key={i}
              className="p-4 bg-gray-50 rounded-lg border flex items-center justify-between transform transition hover:shadow-md hover:bg-gray-100 duration-300 opacity-0 animate-fadeIn group cursor-pointer"
              style={{ animationDelay: `${600 + i * 60}ms` }}
            >
              <div className="flex items-center gap-3">
                <span className="text-2xl group-hover:scale-125 transition duration-300">
                  {legal.icon}
                </span>
                <div>
                  <div className="font-medium text-gray-900">{legal.name}</div>
                  <div className="text-xs text-gray-500">
                    Updated {legal.updated}
                  </div>
                </div>
              </div>

              <button className="px-4 py-2 border-2 border-gray-300 text-gray-700 rounded-lg text-sm font-medium transform transition hover:border-gray-500 hover:bg-white duration-300 group-hover:shadow-md">
                👁️ View
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Upload Document Section */}
      <div
        className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-8 border-2 border-dashed border-indigo-300 opacity-0 animate-slideUp"
        style={{ animationDelay: "780ms" }}
      >
        <div className="text-center">
          <div className="text-4xl mb-3 animate-bounce">📤</div>
          <h4 className="font-semibold text-gray-900 mb-1">
            Upload Your Documents
          </h4>
          <p className="text-sm text-gray-600 mb-4">
            Share certificates, proofs, or other documents with the organization
          </p>
          <button className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg font-medium transform transition hover:scale-105 hover:shadow-lg active:scale-95 duration-300">
            Choose File
          </button>
        </div>
      </div>

      {/* Document Stats */}
      <div
        className="grid grid-cols-1 md:grid-cols-3 gap-4 opacity-0 animate-slideUp"
        style={{ animationDelay: "860ms" }}
      >
        {[
          { label: "Total Documents", value: "12", icon: "📚" },
          { label: "Storage Used", value: "23.4 MB", icon: "💾" },
          { label: "Last Updated", value: "20 Nov 2025", icon: "⏱️" },
        ].map((stat, i) => (
          <div
            key={i}
            className="bg-white rounded-lg p-5 shadow-sm border transform transition hover:shadow-md hover:scale-105 duration-300"
          >
            <div className="text-2xl mb-2">{stat.icon}</div>
            <div className="text-xs text-gray-500">{stat.label}</div>
            <div className="text-lg font-bold text-gray-900">{stat.value}</div>
          </div>
        ))}
      </div>
    </div>
  ),

  Settings: () => {
    const [notifs, setNotifs] = React.useState({
      emailNotifications: true,
      projectUpdates: true,
      eventReminders: false,
      monthlyNewsletter: true,
    });
    const [passwords, setPasswords] = React.useState({ current: '', new: '', confirm: '' });
    const [visible, setVisible] = React.useState({ current: false, new: false, confirm: false });
    const [saving, setSaving] = React.useState(false);
    const [saved, setSaved] = React.useState(false);

    const toggle = (k) => setNotifs(p => ({ ...p, [k]: !p[k] }));
    const setPwd = (k, v) => setPasswords(p => ({ ...p, [k]: v }));
    const toggleVisible = (k) => setVisible(v => ({ ...v, [k]: !v[k] }));

    const strength = (s) => {
      if (!s) return { label: 'Empty', score: 0, color: 'bg-gray-200' }
      let score = 0
      if (s.length >= 8) score++
      if (/[A-Z]/.test(s)) score++
      if (/[0-9]/.test(s)) score++
      if (/[^A-Za-z0-9]/.test(s)) score++
      if (score <= 1) return { label: 'Weak', score, color: 'bg-rose-400' }
      if (score === 2) return { label: 'Fair', score, color: 'bg-amber-400' }
      return { label: 'Strong', score, color: 'bg-emerald-400' }
    }

    const onSave = async () => {
      setSaving(true); setSaved(false)
      // simulate save
      await new Promise(r => setTimeout(r, 900))
      setSaving(false); setSaved(true)
      setTimeout(() => setSaved(false), 2600)
    }

    return (
      <div className="animate-fadeIn space-y-6">
        <div className="bg-gradient-to-r from-slate-700 to-indigo-600 rounded-xl p-6 shadow-lg text-white opacity-0 animate-slideUp">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold">Settings & Preferences</h2>
              <p className="text-slate-200 mt-1 text-sm">Manage notifications, security and appearance</p>
            </div>
            <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center text-2xl animate-bounce">⚙️</div>
          </div>
        </div>

        {/* Notification Preferences */}
        <div className="bg-white rounded-xl p-6 shadow-sm border opacity-0 animate-slideUp" style={{ animationDelay: '80ms' }}>
          <h3 className="text-lg font-semibold mb-4">Notification Preferences</h3>
          <div className="space-y-3">
            {[
              { key: 'emailNotifications', title: 'Email Notifications', desc: 'Receive important emails', icon: '📧' },
              { key: 'projectUpdates', title: 'Project Updates', desc: 'New project announcements', icon: '📢' },
              { key: 'eventReminders', title: 'Event Reminders', desc: 'Upcoming event alerts', icon: '📅' },
              { key: 'monthlyNewsletter', title: 'Monthly Newsletter', desc: 'Monthly highlights', icon: '📰' },
            ].map((n, i) => (
              <div key={n.key} className="flex items-center justify-between p-3 rounded-lg bg-gray-50 border transform transition hover:shadow-md duration-200">
                <div className="flex items-start gap-3">
                  <div className="text-2xl">{n.icon}</div>
                  <div>
                    <div className="font-medium">{n.title}</div>
                    <div className="text-sm text-gray-500">{n.desc}</div>
                  </div>
                </div>

                {/* Toggle */}
                <div className="flex items-center gap-3">
                  <div className={`toggle-switch`} onClick={() => toggle(n.key)} role="switch" aria-checked={notifs[n.key]}>
                    <div className={`toggle-slider ${notifs[n.key] ? 'on' : ''}`} />
                  </div>
                  <div className="text-sm text-gray-600">{notifs[n.key] ? 'On' : 'Off'}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Change Password */}
        <div className="bg-white rounded-xl p-6 shadow-sm border opacity-0 animate-slideUp" style={{ animationDelay: '240ms' }}>
          <h3 className="text-lg font-semibold mb-4">Change Password</h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { key: 'current', label: 'Current Password' },
              { key: 'new', label: 'New Password' },
              { key: 'confirm', label: 'Confirm New Password' },
            ].map((f, idx) => {
              const val = passwords[f.key]
              const show = visible[f.key]
              const s = f.key === 'new' ? strength(val) : null
              return (
                <div key={f.key} className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">{f.label}</label>
                  <div className="relative">
                    <input
                      type={show ? 'text' : 'password'}
                      value={val}
                      onChange={e => setPwd(f.key, e.target.value)}
                      className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-100 focus:border-indigo-400"
                      placeholder={f.label}
                    />
                    <button type="button" onClick={() => toggleVisible(f.key)} className="absolute right-3 top-2 text-gray-500">
                      {show ? '👁️' : '👁️‍🗨️'}
                    </button>
                  </div>
                  {s && (
                    <div className="mt-1 flex items-center gap-3">
                      <div className="h-2 flex-1 bg-gray-200 rounded overflow-hidden">
                        <div className={`h-full ${s.color}`} style={{ width: `${(s.score / 4) * 100}%`, transition: 'width .35s ease' }} />
                      </div>
                      <div className="text-xs font-medium text-gray-600 w-20 text-right">{s.label}</div>
                    </div>
                  )}
                </div>
              )
            })}
          </div>

          <div className="mt-5 flex items-center gap-3">
            <button onClick={onSave} className={`px-5 py-2 rounded-lg text-white font-medium transform transition ${saving ? 'opacity-80 cursor-wait' : 'hover:scale-105'} bg-gradient-to-r from-indigo-600 to-purple-600`}>
              {saving ? 'Saving…' : 'Update Password'}
            </button>

            <button onClick={onSave} className="px-4 py-2 border rounded-lg text-indigo-600 hover:bg-indigo-50">Save All</button>

            {saved && (
              <div className="ml-3 text-sm text-emerald-600 font-medium animate-fadeIn">✓ Saved</div>
            )}
          </div>
        </div>

        {/* Appearance & Danger */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 opacity-0 animate-slideUp" style={{ animationDelay: '420ms' }}>
          <div className="bg-white rounded-xl p-6 shadow-sm border">
            <h4 className="font-semibold mb-3">Appearance</h4>
            <div className="flex items-center gap-3">
              <button className="px-3 py-2 rounded-md bg-gray-100">🌙 Dark</button>
              <button className="px-3 py-2 rounded-md bg-gray-100">☀️ Light</button>
              <div className="ml-auto text-sm text-gray-500">Theme color</div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-red-50 to-rose-50 border-2 border-red-200 rounded-xl p-6">
            <h4 className="font-semibold text-red-800 mb-2">Danger Zone</h4>
            <p className="text-sm text-red-700 mb-4">Delete account or export personal data</p>
            <div className="flex gap-3">
              <button className="px-4 py-2 border border-red-500 text-red-600 rounded-lg">🗑️ Delete Account</button>
              <button className="px-4 py-2 border border-orange-500 text-orange-600 rounded-lg">📤 Export Data</button>
            </div>
          </div>
        </div>

        {/* Toast */}
        <div aria-live="polite" className="fixed right-6 bottom-6 z-50">
          {saved && <div className="bg-emerald-600 text-white px-4 py-2 rounded-lg shadow-lg animate-slideUp">Settings saved</div>}
        </div>
      </div>
    )
  },

};

export default function MemberPage() {
  const [active, setActive] = useState("Dashboard")
  const ActiveComponent = CONTENT[active] || (() => <div />)

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="navbar bg-white shadow-sm">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <Logo size="md" to="/" />
          <div className="flex gap-2">
            <Link to="/" className="btn btn-outline-sm">Back Home</Link>
          </div>
        </div>
      </nav>
      <MemberSidebar active={active} onChange={setActive} />
      <div className="ml-64">
        <MemberTopbar title={active} />
        <main className="p-6">
          <div className="max-w-7xl mx-auto">
            <ActiveComponent />
          </div>
        </main>
      </div>
    </div>
  )
}
