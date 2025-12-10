import React from "react";
import { Link } from "react-router-dom";

const items = [
  { title: "Annual General Meeting 2025", date: "15 January 2025", tag: "Important", excerpt: "The Annual General Meeting will be held on February 15, 2025 at 3:00 PM." },
  { title: "New Scholarship Program Announced", date: "10 January 2025", tag: "Announcement", excerpt: "Applications are now open for the 2025 merit-based scholarship program." },
  { title: "Community Health Camp - February", date: "8 January 2025", tag: "Event", excerpt: "Free health checkup camp will be organized on February 20, 2025." },
];

export default function NoticesPreview() {
  return (
    <div className="grid md:grid-cols-3 gap-6 px-4">
      {items.map((n, i) => (
        <article key={i} className="card p-6 bg-white rounded-lg shadow-sm animate-card-up">
          <div className="flex justify-between items-start mb-3">
            <span className="text-xs bg-gray-100 px-3 py-1 rounded-full">{n.tag}</span>
            <span className="text-xs text-gray-400">{n.date}</span>
          </div>
          <h4 className="font-semibold mb-2">{n.title}</h4>
          <p className="text-sm text-gray-600 mb-4">{n.excerpt}</p>
          <div>
            <Link to="/notices" className="text-sm text-black/80">Read More →</Link>
          </div>
        </article>
      ))}
      <div className="col-span-full text-center mt-6">
        <Link to="/notices" className="btn btn-outline">View All →</Link>
      </div>
    </div>
  );
}