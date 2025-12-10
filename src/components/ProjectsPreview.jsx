import React from "react";
import { Link } from "react-router-dom";

const sample = [
  {
    title: "Education Support Fund",
    desc: "Supporting underprivileged students with educational materials and scholarships.",
    progress: 65,
    raised: "325,000",
    goal: "500,000",
  },
  {
    title: "Healthcare Initiative",
    desc: "Free medical checkups and medicine to community members.",
    progress: 60,
    raised: "180,000",
    goal: "300,000",
  },
  {
    title: "Community Center Development",
    desc: "Building a modern community center for various social activities.",
    progress: 45,
    raised: "450,000",
    goal: "1,000,000",
  },
];

export default function ProjectsPreview() {
  return (
    <div className="grid md:grid-cols-3 gap-6 px-4">
      {sample.map((p, idx) => (
        <article key={idx} className="card p-6 bg-white rounded-lg shadow-sm animate-card-up">
          <div className="flex justify-between items-start mb-3">
            <h3 className="font-semibold">{p.title}</h3>
            <span className="text-xs bg-gray-100 px-3 py-1 rounded-full">Active</span>
          </div>
          <p className="text-sm text-gray-600 mb-4">{p.desc}</p>

          <div className="mb-3">
            <div className="w-full bg-gray-100 h-2 rounded">
              <div className="bg-black h-2 rounded" style={{ width: `${p.progress}%` }} />
            </div>
            <div className="text-xs text-gray-500 mt-2">{p.progress}%</div>
          </div>

          <div className="flex justify-between text-sm text-gray-600 mb-4">
            <div>Raised <div className="font-medium">৳ {p.raised}</div></div>
            <div>Goal <div className="font-medium">৳ {p.goal}</div></div>
          </div>

          <div className="mt-auto">
            <Link to="/donations" className="btn btn-dark w-full">Donate Now →</Link>
          </div>
        </article>
      ))}
      <div className="col-span-full text-center mt-6">
        <Link to="/projects" className="btn btn-outline">View All →</Link>
      </div>
    </div>
  );
}