import React, { useContext } from 'react'
import styled from 'styled-components'
import { FirstMandate } from '../../context/Context'
import EmailCongratsModal from '../modal/EmailCongratsModal'
import logo from '../../assets/1st mandate logo 1.png'
import { Link } from 'react-router-dom'

const ResetPassword = () => {
  const {
    resetLoading,
    resetError,
    ResetPassword,
    resetEmail,
    setResetEmail,
    showResetMessage,
  } = useContext(FirstMandate)

  return (
    <>
      <ResetP>
        <section>
          <div className='logo'>
            <img src={logo} alt='1st Mandate' />
          </div>
          <form onSubmit={ResetPassword}>
            <h3>Enter your email address to reset password</h3>
            <p className='error'>{resetError}</p>
            <input
              type='email'
              name='resetEmail'
              value={resetEmail}
              autoComplete='off'
              onChange={(e) => setResetEmail(e.target.value)}
              className='email-input'
              required
              placeholder='E-mail'
            />
            <button
              disabled={resetLoading}
              className={resetLoading ? 'btn-disabled' : 'btn'}
            >
              {resetLoading ? (
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
      <div>{showResetMessage && <EmailCongratsModal />}</div>
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
