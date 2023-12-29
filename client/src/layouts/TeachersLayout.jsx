import React from 'react'
import useAuthStore from '../features/auth/authStore';
import { Navigate, Outlet } from 'react-router'
import Navbar from '../components/ui/Navbar'

function TeachersLayout() {
  const isAuthenticated = useAuthStore(state => state.isAuthenticated)
  const userRoles = useAuthStore(state => state.user?.roles)

  return (
    <>
      {isAuthenticated && userRoles.includes('admin') ?
        <>
          <Navbar />
          <Outlet />
        </>
        :
        <Navigate to="/admin/login" />
      }
    </>
  )
}

export default TeachersLayout;