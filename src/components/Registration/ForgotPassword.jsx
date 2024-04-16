import React, { useState } from 'react'
import styled from 'styled-components'
import EmailCongratsModal from '../modal/EmailCongratsModal'
import logo from '../../assets/1st mandate logo 1.png'
import { Link } from 'react-router-dom'
import { useFirstMandateMutation } from '../../data-layer/utils'

const ResetPassword = () => {
  const [email, setEmail] = useState('')
  const {
    mutateAsync: postResetPassword,
    isLoading,
    error,
    isSuccess,
  } = useFirstMandateMutation('/forgot-password', {
    onSuccess: (data) => {},
    onError: (error) => {},
  })

  const handleResetPassword = async (e) => {
    e.preventDefault()

    if (!(email)) {
      return
    }

    try {
      await postResetPassword({ email })
    } catch (e) {
      // console.error(e.message)
    }
  }
  return (
    <>
      <ResetP>
        <section>
          <div className='logo'>
            <img src={logo} alt='1st Mandate' />
          </div>
          <form onSubmit={handleResetPassword}>
            <h3>Enter your email address to reset password</h3>
            {error && <p className='error'>{error.message}</p>}
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
            <Link className='link' to='/login'>
              Cancel
            </Link>
          </form>
        </section>
      </ResetP>
      <div>{isSuccess && <EmailCongratsModal />}</div>
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
  }
  h3 {
    font-size: 22px;
  }
  p {
    margin: 10px 0;
    text-align: center;
  }
  .error {
    color: #ff0000;
    text-align: left;
    margin: 0 auto;
    align-self: flex-start;
    width: 400px;
  }
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
  .link {
    cursor: pointer;
    text-decoration: none;
    font-weight: 100;
    font-size: 15px;
    margin: 10px;
    line-height: 23px;
    color: #000;
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
    .email-input {
      width: 350px;
    }
  }
  @media screen and (max-width: 360px) {
    form {
      width: 320px;
    }
    .error,
    button,
    .email-input {
      width: 280px;
    }
  }
`
export default ResetPassword
