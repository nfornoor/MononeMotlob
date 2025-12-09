import React from 'react'
import { Navigate } from 'react-router-dom'

export default function ProtectedRoute({ children, roleRequired }) {
  const role = localStorage.getItem('userRole') || 'admin' // set to 'admin' for testing or adapt to real auth

  if (!role) return <Navigate to="/login" replace />
  if (roleRequired && role !== roleRequired) return <Navigate to="/" replace />
  return children
}