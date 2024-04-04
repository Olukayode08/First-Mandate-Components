import React, { useContext } from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import { FirstMandate } from '../context/Context'

const ProtectedRoute = () => {
  const { isAuthenticated } = useContext(FirstMandate)

  if (isAuthenticated || localStorage.getItem('token')) {
    return <Outlet />
  } else {
    return <Navigate to='/login' replace/>
  }
  
}

export default ProtectedRoute