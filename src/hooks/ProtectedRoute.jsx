import React, { useContext } from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import { FirstMandate } from '../context/Context'
import { useCookies } from 'react-cookie'

const ProtectedRoute = () => {
  const { isAuthenticated } = useContext(FirstMandate)
  const [cookies] = useCookies(['token'])

  if (isAuthenticated || cookies?.token) {
    return <Outlet />
  } else {
    return <Navigate to='/login' replace />
  }
}

export default ProtectedRoute