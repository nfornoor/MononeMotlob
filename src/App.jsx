import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import AdminLayout from "./layouts/AdminLayout";
import AdminDashboard from "./pages/admin";
import MemberDashboard from "./pages/MemberDashboard";
import MemberPage from "./pages/MemberPage";

import MainPage from "./pages/MainPage";
import NotFound from "./pages/NotFound";
import ProtectedRoute from "./components/ProtectedRoute";
import Members from "./pages/Members";
import Notices from "./pages/Notices";
import Projects from "./pages/Projects";
import Donations from "./pages/Donations";
import Programs from "./pages/Programs";
import Reports from "./pages/Reports";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route
        path="/member/dashboard"
        element={
          <ProtectedRoute roleRequired="member">
            <MemberDashboard />
          </ProtectedRoute>
        }
      />
      <Route path="/member" element={<MemberPage />} />

      {/* Admin area uses fixed sidebar + topbar from AdminLayout */}
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
        {/* other admin routes */}
        <Route path="*" element={<Navigate to="/admin/dashboard" replace />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
