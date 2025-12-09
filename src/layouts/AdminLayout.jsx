import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import AdminSidebar from "../components/AdminSidebar";
import AdminTopbar from "../components/AdminTopbar";

export default function AdminLayout() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear(); // clear all auth data
    navigate("/", { replace: true });
  };

  return (
    <div className="flex">
      <AdminSidebar />
      <AdminTopbar />

      {/* sidebar */}
      <aside>
        <button onClick={handleLogout} className="text-red-600">
          Logout
        </button>
      </aside>

      {/* main content: account for sidebar width and topbar height */}
      <main className="ml-64 pt-14 min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto p-6">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
