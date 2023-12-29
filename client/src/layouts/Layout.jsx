import React from 'react'
import Navbar from '../components/ui/Navbar';
import { Outlet } from 'react-router';

function Layout() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  )
}

export default Layout;