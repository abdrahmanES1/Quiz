import React from 'react'
import useAuthStore from '../features/auth/authStore';
import { Navigate, Outlet } from 'react-router'
import Navbar from '../components/ui/Navbar'

function StudentsLayout() {
  const isAuthenticated = useAuthStore(state => state.isAuthenticated)
  const userRole = useAuthStore(state => state.user?.role)

  return (
    <>
      {isAuthenticated && userRole === 'STUDENT' ?
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

export default StudentsLayout;