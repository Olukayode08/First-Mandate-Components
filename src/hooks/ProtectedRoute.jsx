import React, { useContext } from 'react'
import { Outlet, Navigate, useLocation } from 'react-router-dom'
import { FirstMandate } from '../context/Context'

const ProtectedRoute = () => {
  const location = useLocation()
  const { isAuthenticated } = useContext(FirstMandate)

  return isAuthenticated ? (
    <Outlet />
  ) : (
    <Navigate to='/login' state={{ from: location }} replace />
  )
}

export default ProtectedRoute
