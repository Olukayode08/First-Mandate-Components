import React, { createContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const FirstMandate = createContext()

const BASE_URL = process.env.REACT_APP_BACKEND_BASE_URL

const Context = ({ children }) => {
  const navigate = useNavigate()

  // Reset Password Congratulations
  const [resetPasswordCongrats, setPasswordCongrats] = useState(false)
  const toggleResetPasswordModal = () => {
    setPasswordCongrats(!resetPasswordCongrats)
  }

  // Upload Property Congrats Modal
  const [modal, setModal] = useState(false)
  const toggleModal = () => {
    setModal(!modal)
  }

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

  // Clear Error
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
      logoutTimer = setTimeout(clearInactiveUser, 4 * 60 * 1000) // 4 minutes
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
  const [isSigningUp, setIsSigningUp] = useState(false)
  const UserSignup = async (e) => {
    e.preventDefault()
    if (!validatePassword(details.password)) {
      setSignupError(
        'Password must contain at least 8 characters with uppercase, lowercase, number, and symbol.'
      )
    } else if (!validateEmail(details.email)) {
      setSignupError('Invalid Email Address')
    }
    setIsSigningUp(true)
    setLoading(true)
    try {
      const response = await fetch(`${BASE_URL}/signup`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(details),
      })
      const userData = await response.json()
      if (response?.status === 422) {
        setSignupError('Email Address Unavailable')
      } else {
        localStorage.setItem('token', userData.data.authorization.token)
        setIsAuthenticated(true)
        setTimeout(() => {
          setShowSuccessMessage(true)
          setTimeout(() => {
            setShowSuccessMessage(false)
          }, 2500)
        }, 500)
        setTimeout(() => {
          navigate('/landlord')
        }, 3000)
        setUser(userData)
        // console.log(localStorage)
        // console.log(userData)
        setDetails({
          name: '',
          email: '',
          password: '',
        })
        setSignupError('')
      }
    } catch (err) {
      if (err?.response) {
        setSignupError('No Server Response')
      } else {
        setSignupError('Registration Failed')
      }
    } finally {
      setIsSigningUp(false)
      setLoading(false)
    }
  }

  // User Login Authentification
  const [loginError, setLoginError] = useState('')
  const [isLoginIn, setIsLoginIn] = useState(false)
  const [loginLoading, setLoginLoading] = useState('')
  const UserSignin = async (e) => {
    e.preventDefault()
    setIsLoginIn(true)
    setLoginLoading(true)
    try {
      const response = await fetch(`${BASE_URL}/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(details),
      })
      const userData = await response.json()
      if (response?.status === 401) {
        setLoginError('Invalid Login Credentials')
      } else {
        localStorage.setItem('token', userData.data.authorization.token)
        setIsAuthenticated(true)
        navigate('/landlord')
        setUser(userData)
        // console.log(localStorage)
        // console.log(userData)
        setDetails({
          name: '',
          email: '',
          password: '',
        })
        setLoginError('')
      }
    } catch (err) {
      if (err?.response) {
        setLoginError('No Server Response')
      } else {
        setLoginError('Login Unsuccessful')
      }
    } finally {
      setIsLoginIn(false)
      setLoginLoading(false)
    }
  }

  // User Reset Password

  const [resetEmail, setResetEmail] = useState('')
  const [resetError, setResetError] = useState('')
  const [showResetMessage, setShowResetMessage] = useState(false)
  const [isResettingPassword, setIsResettingPassword] = useState(false)
  const [resetLoading, setResetLoading] = useState(false)

  // Clear Reset Error
  useEffect(() => {
    setResetError('')
  }, [resetEmail])

  const ResetPassword = async (e) => {
    e.preventDefault()
    setIsResettingPassword(true)
    setResetLoading(true)
    try {
      const response = await fetch(`${BASE_URL}/forgot-password`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(resetEmail),
      })
      // const data = await response.json()
      console.log(response?.status)
      if (response?.status === 404) {
        setResetError('User does not exist')
      } else if (response?.status === 401) {
        setResetError('User does not exist')
      } else {
        setTimeout(() => {
          setShowResetMessage(true)
          setTimeout(() => {
            setShowResetMessage(false)
          }, 3000)
        }, 500)
        setResetEmail('')
        setResetError(
          'Password reset successfully. Check your email to proceed'
        )
      }
    } catch (err) {
      if (err?.response) {
        setResetError('No Server Response')
      } else {
        setResetError('Unauthorized')
      }
    } finally {
      setIsResettingPassword(false)
      setResetLoading(false)
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
          isLoginIn,
          loginError,
          isSigningUp,
          setIsSigningUp,
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
          isResettingPassword,
          resetError,
          resetLoading,
          signupError,
          modal,
          toggleModal,
          resetPasswordCongrats,
          toggleResetPasswordModal,
        }}
      >
        {children}
      </FirstMandate.Provider>
    </>
  )
}

export { Context, FirstMandate }
