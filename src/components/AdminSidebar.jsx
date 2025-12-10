import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import img from "../assets/mononemotlobImage.jpg";
import {
  Grid,
  Users,
  Bell,
  Folder,
  DollarSign,
  Calendar,
  BarChart2,
  Eye,
  LogOut,
} from "lucide-react";

const items = [
  { to: "dashboard", label: "Dashboard", icon: Grid },
  { to: "members", label: "Members", icon: Users },
  { to: "notices", label: "Notices", icon: Bell },
  { to: "projects", label: "Projects", icon: Folder },
  { to: "donations", label: "Donations", icon: DollarSign },
  { to: "programs", label: "Programs & Events", icon: Calendar },
  { to: "reports", label: "Financial Reports", icon: BarChart2 },
];

export default function AdminSidebar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("adminRole");
    localStorage.removeItem("adminId");
    localStorage.removeItem("userRole");
    navigate("/", { replace: true });
  };

  return (
    <aside className="fixed left-0 top-0 bottom-0 w-64 bg-white border-r border-gray-200 z-40 flex flex-col">
      <div className="h-14 flex items-center px-6 border-b">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-linear-to-br from-blue-600 to-blue-800 flex items-center justify-center text-white font-bold">
            MM
          </div>
          <div className="font-medium">
            <h1>ADMIN</h1>
          </div>
        </div>
      </div>

      <div className="p-4 border-b">
        <div className="flex items-center gap-3">
          <img
            src={img}
            alt="user"
            className="w-10 h-10 rounded-full"
          />
          <div>
            <div className="font-semibold text-sm">Kamal Ahmed</div>
            <div className="text-xs text-green-600">Administrator</div>
          </div>
        </div>
      </div>

      <nav className="flex-1 overflow-y-auto p-2 space-y-1">
        {items.map((it) => {
          const Icon = it.icon;
          return (
            <NavLink
              key={it.to}
              to={it.to}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 rounded-lg text-sm transition ${
                  isActive
                    ? "bg-gray-100 text-gray-900"
                    : "text-gray-700 hover:bg-gray-50"
                }`
              }
            >
              <Icon className="w-4 h-4" />
              <span>{it.label}</span>
            </NavLink>
          );
        })}
      </nav>

      <div className="p-3 border-t">
        <NavLink
          to="view-site"
          className="flex items-center gap-3 px-4 py-3 rounded-lg text-sm text-gray-700 hover:bg-gray-50"
        >
          <Eye className="w-4 h-4" /> View Site
        </NavLink>
        <button
          onClick={handleLogout}
          className="mt-3 flex items-center gap-3 w-full px-4 py-3 rounded-lg text-sm text-red-600 hover:bg-red-50"
        >
          <LogOut className="w-4 h-4" /> Logout
        </button>
      </div>
    </aside>
  );
}
