import React, { createContext, useState } from 'react'
// import { useNavigate } from 'react-router-dom'

const FirstMandate = createContext()

const Context = ({ children }) => {
  // const navigate = useNavigate()

  const [password, setPassword] = useState(false)
  const [confirmPassword, setConfirmPassword] = useState(false)

  const togglePassword = () => {
    setPassword(!password)
  }

  const toggleConfirmPassword = () => {
    setConfirmPassword(!confirmPassword)
  }
  const submitForm = (e) => {
    e.preventDefault()
  }

  const [details, setDetails] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  })

  const handleChange = (e) => {
    setDetails({ ...details, [e.target.name]: e.target.value })
  }

  // Modal Section
  const [modal, setModal] = useState(false)

  const toggleModal = () => {
    setModal(!modal)
    // setTimeout(() => {
    //   navigate('/landlord')
    // }, 2000)
  }

  // Sign-up Congratulations
  const [signupCongrats, setSignupCongrats] = useState(false)

  const toggleSignupModal = () => {
    setSignupCongrats(!signupCongrats)
  }
  return (
    <>
      <FirstMandate.Provider
        value={{
          details,
          handleChange,
          submitForm,
          password,
          confirmPassword,
          togglePassword,
          toggleConfirmPassword,
          modal,
          toggleModal,
          toggleSignupModal,
          signupCongrats,
        }}
      >
        {children}
      </FirstMandate.Provider>
    </>
  )
}

export { Context, FirstMandate }
