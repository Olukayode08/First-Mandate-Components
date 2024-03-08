import React from 'react'
import styled from 'styled-components'
import logo from '../../assets/1st mandate logo 1.png'

const SigninPage = () => {
  return (
    <>
      <SigninP>
        <section>
          <div className='logo'>
            <img src={logo} alt='1st Mandate' />
          </div>
          <main>
            <h3>Sign In to 1st Mandate</h3>
            <input
              type='email'
              className='email-input'
              required
              placeholder='E-mail'
            />
            <input
              type='text'
              className='password-input'
              placeholder='Password'
              required
            />
            <button>Log in</button>
            <p className='create-account'>Reset password</p>
            <p className='create-account'>
              No account?<span> Create one</span>
            </p>
          </main>
        </section>
      </SigninP>
    </>
  )
}
const SigninP = styled.section`
  section {
    position: relative;
  }
  .logo {
    position: absolute;
    top: 40px;
    left: 40px;
  }
  main {
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
    background-color: #000;
    color: #ffffff;
    padding: 12px 0;
    border: transparent;
    border-radius: 4px;
    width: 400px;
    margin: 10px 0;
    cursor: pointer;
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
    main {
      width: 430px;
    }
    button,
    .password-input,
    .email-input {
      width: 350px;
    }
  }
  @media screen and (max-width: 440px) {
    main {
      width: 360px;
    }
    button,
    .password-input,
    .email-input {
      width: 350px;
    }
  }
  @media screen and (max-width: 360px) {
    main {
      width: 320px;
      height: 100%;
    }
    button,
    .password-input,
    .email-input {
      width: 280px;
    }
  }
`
export default SigninPage
