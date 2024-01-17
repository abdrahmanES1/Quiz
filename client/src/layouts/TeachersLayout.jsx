import React from 'react'
import useAuthStore from '../features/auth/authStore';
import { Navigate, Outlet } from 'react-router'
import Navbar from '../components/ui/Navbar'

function TeachersLayout() {
  const isAuthenticated = useAuthStore(state => state.isAuthenticated)
  const userRole = useAuthStore(state => state.user?.role)

  return (
    <>
      {isAuthenticated && ["TEACHER","ADMIN","SUPER_ADMIN"].includes(userRole) ?
        <>
          <Navbar />
          <Outlet />
        </>
        :
        <Navigate to="/login" />
      }
    </>
  )
}

export default TeachersLayout;