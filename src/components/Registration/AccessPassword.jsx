import React, { useState } from 'react'
import styled from 'styled-components'
import logo from '../../assets/1st mandate logo 1.png'
import { Link } from 'react-router-dom'
import bg from '../../assets/bg-img.jpeg'

const AccessPassword = () => {
  const [password, setPassword] = useState('')

  const handleLogin = async (e) => {
    e.preventDefault()
  }

  return (
    <>
      <LoginP>
        <section className='background'>
          <Link to='/' className='logo'>
            <img src={logo} alt='1st Mandate' />
          </Link>
          <form onSubmit={handleLogin}>
            <h3>An easier way to manage properties</h3>
            {/* {error && <p className='error'>{error.message}</p>} */}
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
            <button className='access'>Get Started</button>
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
  .background {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-image: url(${bg});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    width: 100%;
    height: 100vh;
  }
  .logo {
    position: absolute;
    top: 40px;
    left: 40px;
    z-index: 70;
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

  .error {
    color: #ff0000;
    text-align: left;
    margin: 0 auto;
    align-self: flex-start;
    width: 400px;
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
    font-size: 16px;
    margin: 20px 0;
  }
  button {
    color: #000;
    background: #fedf7e;
    border-radius: 4px;
    border: transparent;
    width: 400px;
    font-size: 17px;
    height: 45px;
    margin: 10px 0;
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
    .password-input {
      width: 350px;
    }
  }
  @media screen and (max-width: 440px) {
    form {
      width: 360px;
    }
    .error,
    button,
    .password-input {
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
    .password-input {
      width: 280px;
    }
  }
`
export default AccessPassword
