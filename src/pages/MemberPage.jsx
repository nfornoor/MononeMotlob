import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Logo from "../components/Logo";

const API_BASE = "http://localhost:8000/api";

export default function MemberPage() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [active, setActive] = useState("Dashboard");
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
      return;
    }

    (async () => {
      try {
        const res = await fetch(`${API_BASE}/auth/me`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        if (!res.ok) {
          localStorage.removeItem("token");
          localStorage.removeItem("userRole");
          localStorage.removeItem("userEmail");
          navigate("/login");
          return;
        }
        const data = await res.json();
        setUser(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    })();
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userRole");
    localStorage.removeItem("userEmail");
    navigate("/");
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-lg text-gray-600">Loading profile...</div>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  const displayName = user.name || "Member";
  const displayEmail = user.email || "user@example.com";
  const displayPhone = user.phone || "+880 1XXX-XXXXXX";
  const memberSince = user.created_at ? new Date(user.created_at).toLocaleDateString() : "N/A";
  const memberId = user.id ? `MM-${user.id.toString().slice(0, 8).toUpperCase()}` : "MM-001";

  // Sidebar menu items
  const menuItems = [
    { label: "Dashboard", icon: "📊" },
    { label: "Profile", icon: "👤" },
    { label: "Notices", icon: "📢" },
    { label: "Donations", icon: "❤️" },
    { label: "Projects", icon: "📁" },
    { label: "Settings", icon: "⚙️" },
  ];

  // Render content based on active tab
  const renderContent = () => {
    switch (active) {
      case "Dashboard":
        return (
          <div>
            <h2 className="text-2xl font-bold mb-6">Dashboard</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <div className="text-sm text-gray-600">Total Donations</div>
                <div className="text-2xl font-bold mt-2">৳ 5,000</div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <div className="text-sm text-gray-600">Projects Joined</div>
                <div className="text-2xl font-bold mt-2">3</div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <div className="text-sm text-gray-600">Notices</div>
                <div className="text-2xl font-bold mt-2">5</div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <div className="text-sm text-gray-600">Member Since</div>
                <div className="text-lg font-bold mt-2">{memberSince}</div>
              </div>
            </div>
          </div>
        );

      case "Profile":
        return (
          <div>
            <h2 className="text-2xl font-bold mb-6">My Profile</h2>
            <div className="bg-white rounded-lg shadow-sm border p-8">
              <div className="flex items-center gap-6 mb-8">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center text-white text-2xl font-bold">
                  {displayName.split(" ").map(n => n[0]).join("")}
                </div>
                <div>
                  <h3 className="text-2xl font-bold">{displayName}</h3>
                  <p className="text-gray-600">{memberId}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Name</label>
                  <input type="text" value={displayName} readOnly className="w-full px-4 py-2 border rounded-lg bg-gray-50" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input type="email" value={displayEmail} readOnly className="w-full px-4 py-2 border rounded-lg bg-gray-50" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Phone</label>
                  <input type="tel" value={displayPhone} readOnly className="w-full px-4 py-2 border rounded-lg bg-gray-50" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Member ID</label>
                  <input type="text" value={memberId} readOnly className="w-full px-4 py-2 border rounded-lg bg-gray-100" />
                </div>
              </div>

              <button className="mt-6 px-6 py-2 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700">
                Edit Profile
              </button>
            </div>
          </div>
        );

      case "Notices":
        return (
          <div>
            <h2 className="text-2xl font-bold mb-6">Notices</h2>
            <div className="space-y-4">
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-semibold">Annual General Meeting 2025</h3>
                    <p className="text-sm text-gray-600 mt-2">The AGM will be held on February 15, 2025</p>
                  </div>
                  <span className="text-xs bg-blue-100 text-blue-700 px-3 py-1 rounded-full">Important</span>
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-semibold">New Scholarship Program</h3>
                    <p className="text-sm text-gray-600 mt-2">Applications are now open for the 2025 merit-based scholarship</p>
                  </div>
                  <span className="text-xs bg-green-100 text-green-700 px-3 py-1 rounded-full">Announcement</span>
                </div>
              </div>
            </div>
          </div>
        );

      case "Donations":
        return (
          <div>
            <h2 className="text-2xl font-bold mb-6">My Donations</h2>
            <div className="bg-white rounded-lg shadow-sm border p-6">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-3 px-4 font-semibold">Project</th>
                    <th className="text-left py-3 px-4 font-semibold">Amount</th>
                    <th className="text-left py-3 px-4 font-semibold">Date</th>
                    <th className="text-left py-3 px-4 font-semibold">Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b hover:bg-gray-50">
                    <td className="py-3 px-4">Education Support Fund</td>
                    <td className="py-3 px-4">৳ 2,000</td>
                    <td className="py-3 px-4">Jan 10, 2025</td>
                    <td className="py-3 px-4"><span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">Completed</span></td>
                  </tr>
                  <tr className="border-b hover:bg-gray-50">
                    <td className="py-3 px-4">Healthcare Initiative</td>
                    <td className="py-3 px-4">৳ 3,000</td>
                    <td className="py-3 px-4">Jan 5, 2025</td>
                    <td className="py-3 px-4"><span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">Completed</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        );

      case "Projects":
        return (
          <div>
            <h2 className="text-2xl font-bold mb-6">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <h3 className="font-semibold mb-2">Education Support Fund</h3>
                <div className="w-full bg-gray-200 h-2 rounded mb-3">
                  <div className="bg-indigo-600 h-2 rounded" style={{ width: "65%" }} />
                </div>
                <div className="text-xs text-gray-600">Progress: 65%</div>
                <button className="mt-4 w-full py-2 bg-indigo-600 text-white rounded text-sm hover:bg-indigo-700">
                  View Details
                </button>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <h3 className="font-semibold mb-2">Healthcare Initiative</h3>
                <div className="w-full bg-gray-200 h-2 rounded mb-3">
                  <div className="bg-green-600 h-2 rounded" style={{ width: "60%" }} />
                </div>
                <div className="text-xs text-gray-600">Progress: 60%</div>
                <button className="mt-4 w-full py-2 bg-green-600 text-white rounded text-sm hover:bg-green-700">
                  View Details
                </button>
              </div>
            </div>
          </div>
        );

      case "Settings":
        return (
          <div>
            <h2 className="text-2xl font-bold mb-6">Settings</h2>
            <div className="bg-white rounded-lg shadow-sm border p-8 space-y-6">
              <div>
                <h3 className="font-semibold mb-3">Notifications</h3>
                <label className="flex items-center gap-3">
                  <input type="checkbox" defaultChecked className="w-4 h-4" />
                  <span className="text-sm">Email notifications for new projects</span>
                </label>
                <label className="flex items-center gap-3 mt-2">
                  <input type="checkbox" defaultChecked className="w-4 h-4" />
                  <span className="text-sm">Email notifications for donation updates</span>
                </label>
              </div>

              <div className="border-t pt-6">
                <h3 className="font-semibold mb-3">Privacy</h3>
                <label className="flex items-center gap-3">
                  <input type="checkbox" className="w-4 h-4" />
                  <span className="text-sm">Make my profile visible to other members</span>
                </label>
              </div>

              <div className="border-t pt-6">
                <h3 className="font-semibold mb-3 text-red-600">Danger Zone</h3>
                <button className="px-4 py-2 border border-red-600 text-red-600 rounded hover:bg-red-50">
                  Delete Account
                </button>
              </div>
            </div>
          </div>
        );

      default:
        return <div>Select a page</div>;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Navbar */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2">
            <Logo size="md" to="/" />
            <span className="font-semibold hidden md:inline">Monone Matlab</span>
          </Link>
          <div className="flex gap-2 items-center">
            <span className="text-sm text-gray-700 hidden md:inline">Welcome, <strong>{displayName}</strong></span>
            <button onClick={handleLogout} className="px-4 py-2 bg-red-600 text-white text-sm rounded hover:bg-red-700">
              Logout
            </button>
          </div>
        </div>
      </nav>

      <div className="flex flex-1">
        {/* Sidebar */}
        <aside className="w-64 bg-white shadow-sm">
          <div className="p-6 border-b">
            <h2 className="font-semibold text-lg">Member Panel</h2>
          </div>
          <nav className="p-4 space-y-2">
            {menuItems.map((item) => (
              <button
                key={item.label}
                onClick={() => setActive(item.label)}
                className={`w-full text-left px-4 py-3 rounded-lg transition ${
                  active === item.label
                    ? "bg-indigo-600 text-white"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                <span className="mr-2">{item.icon}</span>
                {item.label}
              </button>
            ))}
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 overflow-auto">
          <div className="p-8">
            {renderContent()}
          </div>
        </main>
      </div>
    </div>
  );
}
