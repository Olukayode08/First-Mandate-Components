import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import { useCookies } from 'react-cookie'

const ProtectedRoute = () => {
  const [cookies] = useCookies(['token'])

  if (cookies?.token) {
    return <Outlet />
  } else {
    return <Navigate to='/login' replace />
  }
}

export default ProtectedRoute
