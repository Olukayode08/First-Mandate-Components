import React, { createContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const FirstMandate = createContext()

const BASE_URL = process.env.REACT_APP_BACKEND_BASE_URL

const Context = ({ children }) => {
  const navigate = useNavigate()
  const token = localStorage.getItem('token')


  // Signup and Login Validation States
  const [isAuthenticated, setIsAuthenticated] = useState(
    !!localStorage.getItem('token')
    // false
  )
  const [user, setUser] = useState()
  const [details, setDetails] = useState({
    name: '',
    email: '',
    password: '',
  })
  const handleChange = (e) => {
    setDetails({ ...details, [e.target.name]: e.target.value })
  }

  // Validate Password
  const validatePassword = (password) => {
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
    return passwordRegex.test(password)
  }

  // Validate Email
  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return regex.test(email)
  }

  // Clear Login and Signup Error
  useEffect(() => {
    setSignupError('')
    setLoginError('')
  }, [details.email, details.password, details.name])

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      setIsAuthenticated(true)
    }
  }, [])

  // Log Out User
  const logOut = () => {
    localStorage.removeItem('token')
    setIsAuthenticated(false)
  }

  // Authentification Timer
  useEffect(() => {
    let logoutTimer

    const clearInactiveUser = () => {
      localStorage.removeItem('token')
      setIsAuthenticated(false)
    }

    const resetLogoutTimer = () => {
      clearTimeout(logoutTimer)
      logoutTimer = setTimeout(clearInactiveUser, 5 * 60 * 1000) // 5 minutes
    }
    const clearLogoutTimer = () => {
      clearTimeout(logoutTimer)
    }
    const handleUserActivity = () => {
      resetLogoutTimer()
    }
    const userActivityEvents = ['mousedown', 'keydown', 'scroll', 'touchstart']
    userActivityEvents.forEach((event) => {
      window.addEventListener(event, handleUserActivity)
    })
    resetLogoutTimer()
    return () => {
      userActivityEvents.forEach((event) => {
        window.removeEventListener(event, handleUserActivity)
      })
      clearLogoutTimer()
    }
  }, [])

  // User Signup Authentification
  const [loading, setLoading] = useState('')
  const [showSuccessMessage, setShowSuccessMessage] = useState(false)
  const [signupError, setSignupError] = useState('')
  const UserSignup = async (e) => {
    e.preventDefault()
    if (!validatePassword(details.password)) {
      setSignupError(
        'Password must contain at least 8 characters with uppercase, lowercase, number, and symbol.'
      )
      return
    }
    if (!validateEmail(details.email)) {
      setSignupError('Invalid Email Address')
      return
    }
    setLoading(true)
    try {
      const response = await fetch(`${BASE_URL}/signup`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(details),
      })
      const userData = await response.json()
      if (response?.status === 422) {
        setSignupError('Email Address Unavailable')
        return
      }
      if (response?.status === 200) {
        localStorage.setItem('token', userData.data.authorization.token)
        setIsAuthenticated(true)
        setTimeout(() => {
          setShowSuccessMessage(true)
          setTimeout(() => {
            setShowSuccessMessage(false)
          }, 2800)
        }, 200)
        setTimeout(() => {
          navigate('/landlord')
        }, 3000)
        setUser(userData)
      }
      // console.log(localStorage)
      // console.log(userData)
      setDetails({
        name: '',
        email: '',
        password: '',
      })
      setSignupError('')
    } catch (err) {
      if (err?.response) {
        setSignupError('No Server Response')
      } else {
        setSignupError('Registration Failed')
      }
    } finally {
      setLoading(false)
    }
  }

  // User Login Authentification
  const [loginError, setLoginError] = useState('')
  const [loginLoading, setLoginLoading] = useState('')
  const UserSignin = async (e) => {
    e.preventDefault()
    setLoginLoading(true)
    try {
      const response = await fetch(`${BASE_URL}/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(details),
      })
      const userData = await response.json()
      if (response?.status === 401) {
        setLoginError('Invalid Login Credentials')
      }
      if (response?.status === 200) {
        localStorage.setItem('token', userData.data.authorization.token)
        setIsAuthenticated(true)
        navigate('/landlord')
        setUser(userData)
        // console.log(localStorage)
        // console.log(userData)
      }
      setDetails({
        name: '',
        email: '',
        password: '',
      })
      setLoginError('')
    } catch (err) {
      if (err?.response) {
        setLoginError('No Server Response')
      } else {
        setLoginError('Login Unsuccessful')
      }
    } finally {
      setLoginLoading(false)
    }
  }

  // User Reset Password
  const [resetEmail, setResetEmail] = useState('')
  const [resetError, setResetError] = useState('')
  const [showResetMessage, setShowResetMessage] = useState(false)
  const [resetLoading, setResetLoading] = useState(false)

  // Clear Reset Error
  useEffect(() => {
    setResetError('')
  }, [resetEmail])

  const ResetPassword = async (e) => {
    e.preventDefault()
    setResetLoading(false)
    try {
      const response = await fetch(`${BASE_URL}/forgot-password`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(resetEmail),
      })
      // const data = await response.json()
      console.log(response?.status)
      if (response?.status === 404) {
        setResetError('User does not exist')
      }
      if (response?.status === 401) {
        setResetError('User does not exist')
      }
      if (response?.status === 200) {
        setTimeout(() => {
          setShowResetMessage(true)
          // setTimeout(() => {
          //   setShowResetMessage(false)
          // }, 100000)
        }, 200)
        setResetError(
          'Password reset successfully. Check your email to proceed'
        )
      }
      setResetEmail('')
    } catch (err) {
      if (err?.response) {
        setResetError('No Server Response')
      } else {
        setResetError('Unauthorized')
      }
    } finally {
      setResetLoading(false)
    }
  }

  // User Enter New Password
  const [newPasswordError, setNewPasswordError] = useState('')
  const [newPasswordLoading, setNewPasswordLoading] = useState('')
  const [newPasswordsuccessMessage, setNewPasswordsuccessMessage] =
    useState(false)

  const [newPasswordDetails, setNewPasswordDetails] = useState({
    newPassword: '',
    newConfirmPassword: '',
  })
  const handleChangeNewPassword = (e) => {
    setNewPasswordDetails({
      ...newPasswordDetails,
      [e.target.name]: e.target.value,
    })
  }

  // Clear New Password Error
  useEffect(() => {
    setNewPasswordError('')
  }, [newPasswordDetails.newPassword, newPasswordDetails.newConfirmPassword])

  const NewPassword = async (e) => {
    e.preventDefault()
    if (!validatePassword(newPasswordDetails.newPassword)) {
      setNewPasswordError(
        'Password must contain at least 8 characters with uppercase, lowercase, number, and symbol.'
      )
      return
    }
    if (
      newPasswordDetails.newPassword !== newPasswordDetails.newConfirmPassword
    ) {
      setNewPasswordError('Passwords do not match!')
      return
    }
    setNewPasswordLoading(true)
    try {
      const response = await fetch(`${BASE_URL}/reset-password`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(resetEmail),
      })
      const data = await response.json()
      console.log(data)
      if (response?.status === 200) {
        setTimeout(() => {
          setNewPasswordsuccessMessage(true)
          setTimeout(() => {
            setNewPasswordsuccessMessage(false)
            navigate('/login')
          }, 4000)
        }, 200)
      }
      setNewPasswordDetails({
        newPassword: '',
        newConfirmPassword: '',
      })
      setNewPasswordError('Password reset successfully.')
    } catch (err) {
      if (err?.response) {
        setNewPasswordError('No Server Response')
      }
    } finally {
      setNewPasswordLoading(false)
    }
  }
  return (
    <>
      <FirstMandate.Provider
        value={{
          details,
          handleChange,
          UserSignup,
          UserSignin,
          loginLoading,
          loginError,
          isAuthenticated,
          showSuccessMessage,
          logOut,
          resetEmail,
          setResetEmail,
          loading,
          setLoading,
          user,
          ResetPassword,
          showResetMessage,
          resetError,
          resetLoading,
          signupError,
          newPasswordLoading,
          newPasswordsuccessMessage,
          handleChangeNewPassword,
          newPasswordDetails,
          NewPassword,
          newPasswordError,
        }}
      >
        {children}
      </FirstMandate.Provider>
    </>
  )
}

export { Context, FirstMandate }
