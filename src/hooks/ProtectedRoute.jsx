import React, { useContext } from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import { FirstMandate } from '../context/Context'

const ProtectedRoute = () => {
  const { isAuthenticated } = useContext(FirstMandate)

  return isAuthenticated ? <Outlet /> : <Navigate to='/' />
}

export default ProtectedRoute
