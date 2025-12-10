import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import AdminLayout from "./layouts/AdminLayout";
import AdminDashboard from "./pages/admin";
import MemberDashboard from "./pages/MemberDashboard";
import MemberPage from "./pages/MemberPage";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import MainPage from "./pages/MainPage";
import NotFound from "./pages/NotFound";
import ProtectedRoute from "./components/ProtectedRoute";
import Members from "./pages/Members";
import Notices from "./pages/Notices";
import Projects from "./pages/Projects";
import Donations from "./pages/Donations";
import Programs from "./pages/Programs";
import Reports from "./pages/Reports";
import Home from "./pages/Home";

export default function App() {
  return (
    <Routes>
      {/* Landing page */}
      <Route path="/" element={<Home />} />
      
      {/* Auth pages */}
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />

      {/* Donations (NEW multi-step) */}
      <Route path="/donations" element={<Donations />} />

      {/* Member routes */}
      <Route path="/member" element={<MemberPage />} />
      <Route
        path="/member/dashboard"
        element={
          <ProtectedRoute roleRequired="member">
            <MemberDashboard />
          </ProtectedRoute>
        }
      />

      {/* Admin area */}
      <Route
        path="/admin/*"
        element={
          <ProtectedRoute roleRequired="admin">
            <AdminLayout />
          </ProtectedRoute>
        }
      >
        <Route index element={<AdminDashboard />} />
        <Route path="dashboard" element={<AdminDashboard />} />
        <Route path="members" element={<Members />} />
        <Route path="notices" element={<Notices />} />
        <Route path="projects" element={<Projects />} />
        <Route path="donations" element={<Donations />} />
        <Route path="programs" element={<Programs />} />
        <Route path="reports" element={<Reports />} />
        <Route path="*" element={<Navigate to="/admin/dashboard" replace />} />
      </Route>

      {/* 404 */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
