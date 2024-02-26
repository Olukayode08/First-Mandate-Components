import React from 'react'
import styled from 'styled-components'
import { FcGoogle } from 'react-icons/fc'

const SigninPage = () => {
  return (
    <>
      <SigninP>
        <section>
          <main>
            <h3>Sign in to 1st Mandate</h3>
            <div className='google'>
              <FcGoogle className='icon' />
              <p>Continue with Google</p>
            </div>
            <p>or</p>
            <input
              type='text'
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
            <p className='reset-p'>Reset Password</p>
            <p>
              No account? <span>Create one</span>
            </p>
          </main>
        </section>
      </SigninP>
    </>
  )
}
const SigninP = styled.section`
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
  .google {
    width: 400px;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 10px;
    border: 1px solid black;
    cursor: pointer;
  }
  .icon {
    margin-right: 10px;
    font-size: 20px;
  }
  button,
  h3,
  p {
    text-align: center;
    margin: 15px 0;
    font-size: 16px;
    line-height: 28px;
    letter-spacing: 0em;
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
    padding: 8px 0;
    border: transparent;
    border-radius: 4px;
    width: 400px;
    margin: 10px 0;
    cursor: pointer;
  }
  .reset-p {
    cursor: pointer;
    font-weight: 200;
  }
  span {
    font-weight: 600;
    cursor: pointer;
  }

  @media screen and (max-width: 470px) {
    main {
      width: 430px;
    }
    .google,
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
    .google,
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
    .google,
    button,
    .password-input,
    .email-input {
      width: 280px;
    }
  }
`
export default SigninPage
