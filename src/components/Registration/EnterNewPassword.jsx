import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import ResetPasswordCongrats from '../modal/ResetPasswordCongrats'
import logo from '../../assets/1st mandate logo 1.png'
import { useFirstMandateMutation } from '../../data-layer/utils'

const token = localStorage.getItem('token')
const EnterNewPassword = () => {
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [passwordError, setPasswordError] = useState('')

  // Validate Password
  const validatePassword = (password) => {
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
    return passwordRegex.test(password)
  }

  useEffect(() => {
    setPasswordError('')
  }, [confirmPassword, setConfirmPassword])
  const {
    mutateAsync: postNewPassword,
    isLoading,
    error,
    isSuccess,
  } = useFirstMandateMutation('/reset-password', {
    onSuccess: (data) => {},
    onError: (error) => {},
  })

  const handleNewPassword = async (e) => {
    e.preventDefault()
    if (!validatePassword(password)) {
      setPasswordError(
        'Password must contain at least 8 characters with uppercase, lowercase, number, and symbol.'
      )
      return
    }
    if (password !== confirmPassword) {
      setPasswordError('Passwords do not match!')
      return
    }
    if (!(password || token)) {
      return
    }

    try {
      await postNewPassword({ password, token })
    } catch (e) {
      console.error(e.message)
    }
  }

  return (
    <>
      <ResetP>
        <section>
          <div className='logo'>
            <img src={logo} alt='1st Mandate' />
          </div>
          <form onSubmit={handleNewPassword}>
            <h3>Enter New Password</h3>
            <input
              type='password'
              name='paassword'
              className='password-input'
              placeholder='Password'
              autoComplete='off'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <label>Confirm Password</label>
            <input
              type='password'
              name='confirmPassword'
              className='password-input'
              autoComplete='off'
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder='Confirm Password'
              required
            />
            {!!(error || passwordError) && (
              <p className='error'>{passwordError || error?.message}</p>
            )}
            <button
              disabled={isLoading}
              className={isLoading ? 'btn-disabled' : 'btn'}
            >
              {isLoading ? (
                <div className='login-spinner'>
                  <div className='spinner'></div>
                  <p>Reset Password</p>
                </div>
              ) : (
                <p className='login-btn'>Reset Password</p>
              )}
            </button>
          </form>
        </section>
      </ResetP>
      <div>{isSuccess && <ResetPasswordCongrats />}</div>
    </>
  )
}
const ResetP = styled.section`
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
  h3 {
    text-align: center;
    margin: 15px 0;
    font-size: 16px;
    line-height: 28px;
    letter-spacing: 0em;
  }
  h3 {
    font-size: 22px;
  }
  .password-input {
    width: 400px;
    border: 1px solid black;
    height: 52px;
    padding: 0 16px;
    font-family: inherit;
    border-radius: 4px;
    outline: none;
    background: transparent;
    font-size: 15px;
    margin: 10px 0;
  }
  label {
    text-align: left;
    margin: 20px 0 0 0;
    font-size: 16px;
    width: 400px;
  }
  .error {
    color: #ff0000;
    line-height: 28px;
    width: 400px;
  }
  button {
    color: #ffffff;
    height: 45px;
    border: transparent;
    border-radius: 4px;
    width: 400px;
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
  @media screen and (max-width: 470px) {
    .logo {
      top: 20px;
      left: 20px;
    }
    form {
      width: 430px;
    }
    .error,
    label,
    button,
    .password-input {
      width: 350px;
    }
  }
  @media screen and (max-width: 440px) {
    form {
      width: 360px;
    }
    .error,
    label,
    button,
    .password-input {
      width: 350px;
    }
  }
  @media screen and (max-width: 360px) {
    form {
      width: 320px;
    }
    .error,
    label,
    button,
    .password-input {
      width: 280px;
    }
  }
`
export default EnterNewPassword
