import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import mononeLogo from "../assets/mononemotlobImage.jpg";

export default function SignUp() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    education: false,
    location: false,
    terms: false,
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    if (form.password !== form.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    if (!form.education || !form.location || !form.terms) {
      alert("Please accept all terms and conditions");
      return;
    }
    setLoading(true);
    // Mock signup - replace with real API call
    setTimeout(() => {
      localStorage.setItem("userRole", "member");
      localStorage.setItem("userEmail", form.email);
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

      {/* SignUp Form */}
      <div className="flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-2xl bg-white rounded-lg shadow-sm p-8">
          {/* Logo */}
          <div className="text-center mb-8">
            <img src={mononeLogo} alt="Monone Matlab" className="w-16 h-16 mx-auto mb-4" />
            <h1 className="text-2xl font-bold">Sign Up</h1>
            <p className="text-gray-600 text-sm mt-1">Become a member of Monone Matlab</p>
          </div>

          {/* Form */}
          <form onSubmit={handleSignUp} className="space-y-4">
            {/* Name */}
            <div>
              <label className="block text-sm font-medium mb-2">Name</label>
              <div className="flex items-center border rounded-lg px-3 py-2 bg-gray-50">
                <span className="text-gray-400">👤</span>
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  value={form.name}
                  onChange={handleChange}
                  className="flex-1 bg-transparent ml-2 outline-none text-sm"
                  required
                />
              </div>
            </div>

            {/* Email & Phone */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <div className="flex items-center border rounded-lg px-3 py-2 bg-gray-50">
                  <span className="text-gray-400">✉</span>
                  <input
                    type="email"
                    name="email"
                    placeholder="you@email.com"
                    value={form.email}
                    onChange={handleChange}
                    className="flex-1 bg-transparent ml-2 outline-none text-sm"
                    required
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Phone</label>
                <div className="flex items-center border rounded-lg px-3 py-2 bg-gray-50">
                  <span className="text-gray-400">📞</span>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="+880 1XXX-XXXXXX"
                    value={form.phone}
                    onChange={handleChange}
                    className="flex-1 bg-transparent ml-2 outline-none text-sm"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Password & Confirm */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">Password</label>
                <div className="flex items-center border rounded-lg px-3 py-2 bg-gray-50">
                  <span className="text-gray-400">🔒</span>
                  <input
                    type="password"
                    name="password"
                    placeholder="••••••••"
                    value={form.password}
                    onChange={handleChange}
                    className="flex-1 bg-transparent ml-2 outline-none text-sm"
                    required
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Confirm Password</label>
                <div className="flex items-center border rounded-lg px-3 py-2 bg-gray-50">
                  <span className="text-gray-400">🔒</span>
                  <input
                    type="password"
                    name="confirmPassword"
                    placeholder="••••••••"
                    value={form.confirmPassword}
                    onChange={handleChange}
                    className="flex-1 bg-transparent ml-2 outline-none text-sm"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Checkboxes */}
            <div className="space-y-3 mt-6">
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  name="education"
                  checked={form.education}
                  onChange={handleChange}
                  className="w-4 h-4 rounded"
                />
                <span className="text-sm">I confirm that my educational qualification is at least Graduate</span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  name="location"
                  checked={form.location}
                  onChange={handleChange}
                  className="w-4 h-4 rounded"
                />
                <span className="text-sm">I confirm that my permanent address is located in Matlab Upazila</span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  name="terms"
                  checked={form.terms}
                  onChange={handleChange}
                  className="w-4 h-4 rounded"
                />
                <span className="text-sm">I agree to the Terms & Conditions and Privacy Policy</span>
              </label>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gray-600 text-white py-2 rounded-lg font-medium hover:bg-gray-700 disabled:opacity-50 mt-6"
            >
              {loading ? "Creating account..." : "Next"}
            </button>
          </form>

          {/* Footer */}
          <div className="mt-6 text-center text-sm">
            <span className="text-gray-600">Already have an account? </span>
            <Link to="/login" className="font-semibold hover:underline">
              Login Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}