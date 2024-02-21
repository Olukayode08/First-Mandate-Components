import React, { useContext } from 'react'
import styled from 'styled-components'
import { FirstMandate } from '../../context/Context'
import { FaRegEyeSlash } from 'react-icons/fa'
import { FaRegEye } from 'react-icons/fa'

const Login = () => {
  const { details, handleChange, password, togglePassword, submitForm } =
    useContext(FirstMandate)
  return (
    <>
      <Wrapper>
        <main>
          <form onSubmit={submitForm}>
            <h5>Login</h5>

            <div className='input'>
              <input
                type='email'
                name='email'
                value={details.email}
                onChange={handleChange}
                placeholder='E-mail address'
                required
              />
            </div>

            <div className='input'>
              <input
                type={password ? 'password' : 'text'}
                name='password'
                value={details.password}
                onChange={handleChange}
                placeholder='Enter Password'
                required
              />
              <div onClick={togglePassword}>
                {password ? (
                  <FaRegEyeSlash className='icon' />
                ) : (
                  <FaRegEye className='icon' />
                )}
              </div>
            </div>
            <p>Forgot password?</p>
            <button>Sign In</button>
            <p>Don't have an account yet, Register</p>
          </form>
        </main>
      </Wrapper>
    </>
  )
}

const Wrapper = styled.main`
  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #ffe48e;
    padding: 15px;
    border-radius: 10px;
  }
  h5 {
    text-align: center;
    font-size: 20px;
    margin: 10px 0;
  }
  .input {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 350px;
    height: 40px;
    border-radius: 7px;
    background: #fff;
    margin: 10px 0;
    padding: 0 15px;
  }

  input {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    border: transparent;
    outline: none;
    font-family: inherit;
  }
  .icon {
    cursor: pointer;
  }
  p {
    font-size: 14px;
    text-align: center;
    margin: 15px 0;
    max-width: 320px;
    line-height: 20px;
  }
  button {
    width: 350px;
    height: 40px;
    background-color: #000;
    border: none;
    color: #fff;
    margin: 10px 0;
    border-radius: 5px;
    cursor: pointer;
  }
  @media screen and (max-width: 380px) {
    button,
    .input {
      width: 300px;
    }
    p {
      max-width: 300px;
    }
  }

  @media screen and (max-width: 320px) {
    button,
    .input {
      width: 260px;
    }
    p {
      max-width: 260px;
    }
    main {
      height: 100%;
      margin: 20px 0;
    }
  }
`
export default Login
