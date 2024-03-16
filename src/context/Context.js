import React, { createContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const FirstMandate = createContext()

// const BASE_URL = process.env.REACT_APP_API_KEY
const BASE_URL = 'http://localhost:5000'
const Context = ({ children }) => {
  const navigate = useNavigate()
  // Sign-up Congratulations
  const [signupCongrats, setSignupCongrats] = useState(false)
  const toggleSignupModal = () => {
    setSignupCongrats(!signupCongrats)
  }

  // Reset Password Congratulations
  const [resetPasswordCongrats, setPasswordCongrats] = useState(false)
  const toggleResetPasswordModal = () => {
    setPasswordCongrats(!resetPasswordCongrats)
  }

  // Email Reset Password Congratulations
  const [emailResetCongrats, setEmailResetCongrats] = useState(false)
  const toggleEmailModal = () => {
    setEmailResetCongrats(!emailResetCongrats)
  }
  // Upload Property Congrats Modal
  const [modal, setModal] = useState(false)
  const toggleModal = () => {
    setModal(!modal)
    // setTimeout(() => {
    //   navigate('/landlord')
    // }, 2000)
  }

  // Signup Validation
  const [error, setError] = useState('')
  const [user, setUser] = useState()
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  const [details, setDetails] = useState({
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
  // Notifify Error
  const notify = (error) => {
    setError(error)
  }
  // Clear Error
  useEffect(() => {
    setError('')
  }, [details.email, details.password])

  // Handle Signup Submission
  const UserSignUp = async (e) => {
    e.preventDefault()
    if (!validatePassword(details.password)) {
      return notify(
        'Password must contain at least 8 characters with uppercase, lowercase, number, and symbol.'
      )
    } else if (!validateEmail(details.email)) {
      return notify('Invalid Email Address')
    }
    let userDetails = { details }
    try {
      const response = await fetch(BASE_URL, {
        method: 'POST',
        body: JSON.stringify(userDetails),
        headers: {
          'Content- Type': 'application/json',
          Accept: 'application/json',
        },
      })
      const data = await response.json()
      setIsAuthenticated(true)
      setUser(data)
      setDetails('')
      setError('')
      navigate('/landlord')
      console.log('Data', data)
    } catch (err) {
      if (err?.response) {
        return notify('No Server Response')
      } else if (err.response?.status === 409) {
        return notify('Email Used')
      } else {
        return notify('Registration Failed')
      }
    }
  }
  const UserSignIn = async (e) => {
    e.preventDefault()
    let userDetails = { details }
    try {
      const response = await fetch(BASE_URL, {
        method: 'POST',
        body: JSON.stringify(userDetails),
        headers: {
          'Content- Type': 'application/json',
          Accept: 'application/json',
        },
      })
      const data = await response.json()
      setIsAuthenticated(true)
      setUser(data)
      setDetails('')
      setError('')
      navigate('/landlord')
      console.log('Data', data)
    } catch (err) {
      if (err?.response) {
        return notify('No Server Response')
      } else if (err.response?.status === 400) {
        return notify('Missing Username or Password')
      } else if (err.response?.status === 401) {
        return notify('UnAuthorized')
      } else {
        return notify('Login Failed')
      }
    }
  }

  return (
    <>
      <FirstMandate.Provider
        value={{
          details,
          handleChange,
          UserSignUp,
          UserSignIn,
          isAuthenticated,
          user,
          error,
          modal,
          toggleModal,
          signupCongrats,
          toggleSignupModal,
          resetPasswordCongrats,
          toggleResetPasswordModal,
          emailResetCongrats,
          toggleEmailModal,
        }}
      >
        {children}
      </FirstMandate.Provider>
    </>
  )
}

export { Context, FirstMandate }
