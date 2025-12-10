import React from "react";
import { useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
import AdminSidebar from "../components/AdminSidebar";
import AdminTopbar from "../components/AdminTopbar";
// import logo from assets (put your logo file at src/assets/mononemotlobImage.png)
import mononeLogo from "../assets/mononemotlobImage.jpg";

export default function AdminLayout() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("userRole");
    navigate("/");
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md overflow-y-auto">
        <div className="p-4 border-b flex items-center gap-3">
          {/* asset logo + brand text */}
          <img src={mononeLogo} alt="Monone Matlab" className="w-10 h-10 object-contain rounded-full" />
          <div>
            <div className="text-sm font-bold">MONONEMOTLOB</div>
            <div className="text-xs text-gray-500">Admin</div>
          </div>
        </div>

        <AdminSidebar />

        <div className="p-4 border-t mt-auto">
          <button onClick={handleLogout} className="w-full btn btn-outline text-sm">
            Logout
          </button>
        </div>
      </aside>

      {/* Main content */}
      <div className="flex-1 flex flex-col">
        <AdminTopbar />
        <main className="flex-1 overflow-y-auto p-6 pt-16">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
