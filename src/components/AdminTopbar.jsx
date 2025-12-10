import React from "react";
// import asset logo so topbar also shows brand (optional)
import mononeLogo from "../assets/mononemotlobImage.jpg";
import { SunMoon, Bell, Globe } from "lucide-react";

export default function AdminTopbar() {
  return (
    <header className="fixed left-64 right-0 top-0 h-16 bg-white border-b z-40 flex items-center px-6">
      <div className="flex items-center gap-3">
        <img
          src={mononeLogo}
          alt="Monone Matlab"
          className="w-8 h-8 object-contain rounded-full"
        />
        <div className="text-lg font-semibold">MONONEMOTLOB</div>
      </div>

      {/* right side controls (existing icons etc.) */}
      <div className="ml-auto flex items-center gap-4">
        <button title="Toggle theme" className="text-gray-600">
          <SunMoon className="w-5 h-5" />
        </button>
        <button title="Language" className="text-gray-600">
          <Globe className="w-5 h-5" />
        </button>
        <button title="Notifications" className="text-gray-600">
          <Bell className="w-5 h-5" />
        </button>
      </div>
    </header>
  );
}
