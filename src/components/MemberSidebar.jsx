import React from "react";
import { useNavigate } from "react-router-dom";

export default function MemberSidebar({
  active = "Dashboard",
  onChange = () => {},
}) {
  const navigate = useNavigate();
  const items = [
    "Dashboard",
    "Profile",
    "Donation History",
    "Membership",
    "Notices",
    "Documents",
    "Settings",
    "Logout",
  ];

  const handleLogout = () => {
    localStorage.removeItem("userRole");
    localStorage.removeItem("userId");
    navigate("/", { replace: true });
  };

  return (
    <aside className="fixed left-0 top-0 h-screen w-64 bg-white border-r shadow-sm z-40">
      <div className="px-5 py-6 border-b">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
            🏛
          </div>
          <div>
            <div className="font-semibold">Monone Matlab</div>
            <div className="text-xs text-gray-400">Member Portal</div>
          </div>
        </div>
      </div>

      <nav className="p-4 space-y-1">
        {items.map((it) => {
          const isActive = it === active;
          const isLogout = it === "Logout";

          return (
            <button
              key={it}
              onClick={() => (isLogout ? handleLogout() : onChange(it))}
              className={`w-full text-left flex items-center gap-3 px-4 py-2 rounded-md transition-colors ${
                isLogout
                  ? "text-red-600 hover:bg-red-50"
                  : isActive
                  ? "bg-indigo-50 text-indigo-700 font-medium"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              <span className="w-6">
                {
                  {
                    Dashboard: "🏠",
                    Profile: "👤",
                    "Donation History": "💳",
                    Membership: "🎫",
                    Notices: "🔔",
                    Documents: "📄",
                    Settings: "⚙️",
                    Logout: "↩️",
                  }[it]
                }
              </span>
              <span className="flex-1">{it}</span>
            </button>
          );
        })}
      </nav>

      <div className="absolute bottom-6 left-4 right-4">
        <div className="text-xs text-gray-400">Logged in as</div>
        <div className="font-medium">Kamal Ahmed</div>
      </div>
    </aside>
  );
}
