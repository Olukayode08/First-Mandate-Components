import React, { useContext } from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import { FirstMandate } from '../context/Context'

const ProtectedRoute = () => {
  const { isAuthenticated } = useContext(FirstMandate)

  return isAuthenticated && !!localStorage.getItem('token') ? (
    <Outlet />
  ) : (
    <Navigate to='/login' />
  )
}

export default ProtectedRoute
