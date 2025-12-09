import React from 'react'
import { Link } from 'react-router-dom'

export default function MainPage() {
  return (
    <div className="min-h-screen p-8 bg-gray-50">
      <div className="max-w-4xl mx-auto space-y-6">
        <header className="flex items-center justify-between">
          <h1 className="text-3xl font-bold">Monone Matlab</h1>
          <nav className="space-x-4">
            <Link to="/" className="text-gray-700">Home</Link>
            <Link to="/member/dashboard" className="text-gray-700">Member</Link>
            <Link to="/admin/dashboard" className="text-gray-700">Admin</Link>
          </nav>
        </header>

        <section className="bg-white rounded-lg p-6 shadow-sm border">
          <h2 className="text-xl font-semibold mb-2">Welcome</h2>
          <p className="text-gray-600">This is a placeholder main page. Use the navigation to open dashboards.</p>
        </section>
      </div>
    </div>
  )
}