import React from "react";
import { SunMoon, Bell, Globe } from "lucide-react";

export default function AdminTopbar() {
  return (
    <header className="fixed left-64 right-0 top-0 h-14 bg-white border-b border-gray-200 z-30 flex items-center px-6">
      <div className="flex-1">
        <h1 className="text-lg font-semibold text-gray-900">Admin Panel</h1>
      </div>

      <div className="flex items-center gap-4">
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
