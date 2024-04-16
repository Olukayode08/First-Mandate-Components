import React, { useContext, useEffect, useState } from 'react'
import styled from 'styled-components'
import { FirstMandate } from '../../context/Context'
import SignupCongratsModal from '../modal/SignupCongratsModal'
import logo from '../../assets/1st mandate logo 1.png'
import { Link, useNavigate } from 'react-router-dom'
import { useFirstMandateMutation } from '../../data-layer/utils'
import { useUpdateToken } from '../../hooks/useUpdateToken'

const Signup = () => {
  const { setIsAuthenticated } = useContext(FirstMandate)
  const navigate = useNavigate()
  const updateToken = useUpdateToken()
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [signupError, setSignupError] = useState('')

  // Validate Password
  const validatePassword = (password) => {
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&/])[A-Za-z\d@$!%*?&/]{8,}$/
    return passwordRegex.test(password)
  }

  // Validate Email
  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return regex.test(email)
  }
  useEffect(() => {
    setSignupError('')
  }, [email, name, password])

  const {
    mutateAsync: postSignup,
    isLoading,
    isSuccess,
    error: userError
  } = useFirstMandateMutation('/signup', {
    onSuccess: (data) => {
      updateToken(data)
      setIsAuthenticated(true)
      setTimeout(() => {
        navigate('/landlord')
      }, 3000)
    },
    onError: (error) => {
      console.log(error)
    },
  })

  const handleSignup = async (e) => {
    e.preventDefault()
    if (!validatePassword(password)) {
      setSignupError(
        'Password must contain at least 8 characters with uppercase, lowercase, number, and symbol.'
      )
      return
    }
    if (!validateEmail(email)) {
      setSignupError('Invalid Email Address')
      return
    }
    if (!(email || password || name)) {
      return
    }

    try {
      await postSignup({ email, name, password })
    } catch (e) {
      console.error(e.message)
    }
  }
  return (
    <>
      <SignupP>
        <section>
          <div className='logo'>
            <img src={logo} alt='1st Mandate' />
          </div>
          <form onSubmit={handleSignup}>
            <h3>Sign Up for 1st Mandate</h3>
            {!!(userError || signupError) && (
              <p className='error'>{signupError || userError?.message}</p>
            )}
            <input
              type='text'
              name='name'
              value={name}
              autoComplete='off'
              onChange={(e) => setName(e.target.value)}
              className='email-input'
              required
              placeholder='Full Name'
            />
            <input
              type='email'
              name='email'
              value={email}
              autoComplete='off'
              onChange={(e) => setEmail(e.target.value)}
              className='email-input'
              required
              placeholder='E-mail'
            />
            <input
              type='password'
              name='password'
              value={password}
              autoComplete='off'
              onChange={(e) => setPassword(e.target.value)}
              className='password-input'
              placeholder='Password'
              required
            />
            <button
              disabled={isLoading}
              className={isLoading ? 'btn-disabled' : 'btn'}
            >
              {isLoading ? (
                <div className='login-spinner'>
                  <div className='spinner'></div>
                  <p>Create account</p>
                </div>
              ) : (
                <p className='login-btn'>Create account</p>
              )}
            </button>
            <p className='create-account'>
              By clicking “Create account” or “Continue with Google”, you agree
              to the 1st Mandate <span>TOS</span> and
              <span> Privacy policy.</span>
            </p>
            <p className='create-account'>
              Already have an account?{' '}
              <Link to='/login' className='link'>
                Log in
              </Link>
            </p>
          </form>
        </section>
      </SignupP>
      <div>{isSuccess && <SignupCongratsModal />}</div>
    </>
  )
}
const SignupP = styled.section`
  section {
    position: relative;
  }
  .logo {
    position: absolute;
    top: 40px;
    left: 40px;
  }
  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 450px;
    margin: 0 auto;
    padding: 10px;
  }
  button,
  h3,
  p {
    text-align: center;
    margin: 15px 0;
    font-size: 16px;
    line-height: 28px;
  }
  h3 {
    font-size: 21px;
  }
  .error {
    color: #ff0000;
    text-align: left;
    margin: 0 auto;
    align-self: flex-start;
    width: 400px;
  }
  .password-input,
  .email-input {
    width: 400px;
    border: 1px solid black;
    height: 52px;
    padding: 0 16px;
    font-family: inherit;
    border-radius: 4px;
    outline: none;
    background: transparent;
    font-size: 16px;
    margin: 10px 0;
  }
  button {
    color: #ffffff;
    border-radius: 4px;
    border: transparent;
    width: 400px;
    height: 45px;
    margin: 10px 0;
    cursor: pointer;
  }
  .btn {
    background: #000;
  }
  .btn-disabled {
    background: #00000080;
    cursor: not-allowed;
  }
  .login-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
    margin: 0 auto;
  }
  .create-account {
    font-weight: 200;
    font-size: 15px;
    line-height: 23px;
    color: #00000080;
  }
  .link,
  span {
    font-weight: 600;
    cursor: pointer;
    color: #000;
  }
  .link {
    text-decoration: none;
  }
  .login-spinner {
    display: flex;
    gap: 15px;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
  }
  .spinner {
    border: 3px solid #fff;
    border-top: 3px solid #3498db;
    border-radius: 50%;
    width: 25px;
    height: 25px;
    animation: spin 1s linear infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  @media screen and (max-width: 470px) {
    .logo {
      top: 20px;
      left: 20px;
    }
    form {
      width: 430px;
    }
    .error,
    button,
    .password-input,
    .email-input {
      width: 350px;
    }
  }
  @media screen and (max-width: 440px) {
    form {
      width: 360px;
    }
    .error,
    button,
    .password-input,
    .email-input {
      width: 350px;
    }
  }
  @media screen and (max-width: 360px) {
    form {
      width: 320px;
      height: 100%;
    }
    .error,
    button,
    .password-input,
    .email-input {
      width: 280px;
    }
  }
`
export default Signup
