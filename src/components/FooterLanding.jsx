import React from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";

export default function FooterLanding() {
  return (
    <footer className="bg-gray-900 text-white mt-12 py-12">
      <div className="container mx-auto grid md:grid-cols-4 gap-8 px-4">
        <div>
          <Logo size="md" to="/" />
          <p className="text-sm text-gray-300 mt-3">Connecting Matlab community worldwide and honoring our roots.</p>
          <div className="flex gap-4 mt-4">
            <a href="#" className="text-gray-400 hover:text-white">f</a>
            <a href="#" className="text-gray-400 hover:text-white">𝕏</a>
            <a href="#" className="text-gray-400 hover:text-white">📷</a>
            <a href="#" className="text-gray-400 hover:text-white">▶</a>
          </div>
        </div>

        <div>
          <h5 className="font-semibold">Quick Links</h5>
          <ul className="text-sm text-gray-300 mt-3 space-y-2">
            <li><Link to="/" className="hover:text-white">Home</Link></li>
            <li><Link to="#about" className="hover:text-white">About</Link></li>
            <li><Link to="/programs" className="hover:text-white">Programs & Activities</Link></li>
            <li><Link to="/notices" className="hover:text-white">Notice</Link></li>
          </ul>
        </div>

        <div>
          <h5 className="font-semibold">Contact</h5>
          <ul className="text-sm text-gray-300 mt-3 space-y-2">
            <li>📍 Matlab, Chandpur, Chittagong</li>
            <li>📞 +880 1XXX-XXXXXX</li>
            <li>📧 info@mononematlab.org</li>
          </ul>
        </div>

        <div>
          <h5 className="font-semibold">Newsletter</h5>
          <p className="text-sm text-gray-300 mt-2">Subscribe to get updates</p>
          <div className="mt-3 flex">
            <input placeholder="Your email" className="input flex-1" />
            <button className="btn btn-primary-sm ml-2">→</button>
          </div>
        </div>
      </div>

      <div className="text-center text-sm text-gray-400 mt-8 border-t border-gray-700 pt-8">© 2025 Monone Matlab. All rights reserved.</div>
    </footer>
  );
}