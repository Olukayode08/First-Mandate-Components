import React from 'react'
import styled from 'styled-components'
import { useContext } from 'react'
import { FirstMandate } from '../../context/Context'
import SignupCongratsModal from '../modal/SignupCongratsModal'

const SignupPage = () => {
  const { toggleSignupModal, signupCongrats } = useContext(FirstMandate)
  return (
    <>
      <SignupP>
        <section>
          <main>
            <h3>Sign Up for 1st Mandate</h3>
            <p className='error'>Please enter a valid email address</p>
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
            <button onClick={toggleSignupModal}>Create account</button>
            <p className='create-account'>
              By clicking “Create account” or “Continue with Google”, you agree
              to the 1st Mandate <span>TOS</span> and
              <span> Privacy policy.</span>
            </p>
            <p className='create-account'>
              Already have an account? <span>Log in</span>
            </p>
          </main>
        </section>
      </SignupP>
      <div>{signupCongrats && <SignupCongratsModal />}</div>
    </>
  )
}
const SignupP = styled.section`
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
    main {
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
    main {
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
    main {
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
export default SignupPage
