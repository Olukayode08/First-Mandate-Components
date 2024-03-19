import React, { useContext } from 'react'
import styled from 'styled-components'
import logo from '../../assets/1st mandate logo 1.png'
import { FirstMandate } from '../../context/Context'

const Login = () => {
  const { details, isSigningUp, UserSignIn, handleChange, error } =
    useContext(FirstMandate)
  return (
    <>
      <LoginP>
        <section>
          <div className='logo'>
            <img src={logo} alt='1st Mandate' />
          </div>
          <form onSubmit={UserSignIn}>
            <h3>Sign In to 1st Mandate</h3>
            <p className='error'>{error}</p>
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
              disabled={isSigningUp}
              className={isSigningUp ? 'btn-disabled' : 'btn'}
            >
              Log in
            </button>
            <p className='create-account'>Reset password</p>
            <p className='create-account'>
              No account?<span> Create one</span>
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
    padding: 12px 0;
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
  .create-account {
    font-weight: 200;
    font-size: 15px;
    line-height: 23px;
  }
  span {
    font-weight: 600;
    cursor: pointer;
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
