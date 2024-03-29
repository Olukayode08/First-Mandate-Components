import React, { useContext } from 'react'
import styled from 'styled-components'
import logo from '../../assets/1st mandate logo 1.png'
import { FirstMandate } from '../../context/Context'
import { Link } from 'react-router-dom'

const Login = () => {
  const {
    details,
    handleChange,
    loginLoading,
    UserSignin,
    loginError,
  } = useContext(FirstMandate)

  return (
    <>
      <LoginP>
        <section>
          <div className='logo'>
            <img src={logo} alt='1st Mandate' />
          </div>
          <form onSubmit={UserSignin}>
            <h3>Sign In to 1st Mandate</h3>
            <p className='error'>{loginError}</p>
            <input
              type='email'
              name='email'
              value={details.email}
              autoComplete='off'
              onChange={handleChange}
              className='email-input'
              required
              placeholder='E-mail'
            />
            <input
              type='password'
              name='password'
              value={details.password}
              autoComplete='off'
              onChange={handleChange}
              className='password-input'
              placeholder='Password'
              required
            />
            <button
              disabled={loginLoading}
              className={loginLoading ? 'btn-disabled' : 'btn'}
            >
              {loginLoading ? (
                <div className='login-spinner'>
                  <div className='spinner'></div>
                  <p>Login</p>
                </div>
              ) : (
                <p className='login-btn'>Login</p>
              )}
            </button>
            <Link className='reset-p' to='/reset-password'>
              Reset password
            </Link>
            <p className='create-account'>
              No account?{' '}
              <Link className='link' to='/'>
                Create one
              </Link>
            </p>
          </form>
        </section>
      </LoginP>
    </>
  )
}
const LoginP = styled.section`
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
  .reset-p,
  .link {
    cursor: pointer;
    text-decoration: none;
  }
  .reset-p {
    color: #00000080;
    margin: 10px 0 5px 0;
  }
  .create-account {
    font-weight: 100;
    font-size: 15px;
    line-height: 23px;
    color: #00000080;
  }
  .link {
    font-weight: 600;
    color: #000;
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
export default Login
