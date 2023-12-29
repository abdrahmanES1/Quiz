import React from 'react'
import { Navigate, Outlet } from 'react-router'
import useAuthStore from '../features/auth/authStore'
import Navbar from '../components/ui/Navbar'

function AuthenticationLayout({ childrens }) {
    const isAuthenticated = useAuthStore(state => state.isAuthenticated)
    return (
        <>
            {isAuthenticated ? <Navigate to="/" /> :
                <>
                    <Navbar />
                    <Outlet />
                </>
            }
        </>
    )
}

export default AuthenticationLayout