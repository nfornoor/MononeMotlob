import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import mononeLogo from "../assets/mononemotlobImage.jpg";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    // Mock login - replace with real API call
    setTimeout(() => {
      localStorage.setItem("userRole", "member");
      localStorage.setItem("userEmail", email);
      navigate("/member/dashboard");
      setLoading(false);
    }, 800);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2">
            <img src={mononeLogo} alt="Monone Matlab" className="w-10 h-10 object-contain" />
            <span className="font-semibold">Monone Matlab</span>
          </Link>
          <div className="flex gap-2">
            <Link to="/" className="btn btn-outline-sm">Back Home</Link>
          </div>
        </div>
      </nav>

      {/* Login Form */}
      <div className="flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md bg-white rounded-lg shadow-sm p-8">
          {/* Logo */}
          <div className="text-center mb-8">
            <img src={mononeLogo} alt="Monone Matlab" className="w-16 h-16 mx-auto mb-4" />
            <h1 className="text-2xl font-bold">Login</h1>
            <p className="text-gray-600 text-sm mt-1">Sign in to your account</p>
          </div>

          {/* Tabs */}
          <div className="flex gap-4 mb-6 border-b">
            <button className="pb-3 font-semibold border-b-2 border-black">Email</button>
            <button className="pb-3 text-gray-500">Phone</button>
          </div>

          {/* Form */}
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <div className="flex items-center border rounded-lg px-3 py-2 bg-gray-50">
                <span className="text-gray-400">✉</span>
                <input
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 bg-transparent ml-2 outline-none text-sm"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Password</label>
              <div className="flex items-center border rounded-lg px-3 py-2 bg-gray-50">
                <span className="text-gray-400">🔒</span>
                <input
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="flex-1 bg-transparent ml-2 outline-none text-sm"
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-black text-white py-2 rounded-lg font-medium hover:bg-gray-800 disabled:opacity-50"
            >
              {loading ? "Logging in..." : "Login"}
            </button>
          </form>

          {/* Footer */}
          <div className="mt-6 text-center text-sm">
            <span className="text-gray-600">Don't have an account? </span>
            <Link to="/signup" className="font-semibold hover:underline">
              Register Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}