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
            {/* <p className='error'>Please enter a valid email address</p> */}
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
            <div className='terms'>
              <input className='check-box-input icon' type='checkbox' />
              <p className='mail-listing'>
                I agree to join Figma’s mailing list
              </p>
            </div>
            <button>Log in</button>
            <p className='create-account'>Reset Password</p>
            <p className='create-account'>
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
    height: 100vh;
    width: 450px;
    margin: 0 auto;
    padding: 10px;
  }
  .terms,
  .google {
    width: 400px;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .google {
    margin-top: 10px;
    border: 1px solid black;
    cursor: pointer;
  }
  .icon {
    margin-right: 10px;
    font-size: 20px;
  }
  /* .error {
    color: #ff0000;
    text-align: left;
    margin: 0;
  } */
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
  .check-box-input {
    height: 17px;
    width: 20px;
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
  .create-account {
    font-weight: 200;
    font-size: 15px;
    line-height: 23px;
  }
  span {
    font-weight: 600;
  }
  .mail-listing {
    flex-shrink: 0;
  }
  @media screen and (max-width: 470px) {
    main {
      width: 430px;
    }
    .terms,
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
    .terms,
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
    .terms,
    .google,
    button,
    .password-input,
    .email-input {
      width: 280px;
    }
  }
`
export default SigninPage
