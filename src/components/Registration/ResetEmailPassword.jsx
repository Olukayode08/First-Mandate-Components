import React, { useContext } from 'react'
import styled from 'styled-components'
import { FirstMandate } from '../../context/Context'
import EmailCongratsModal from '../modal/EmailCongratsModal'

const ResetEmailPassword = () => {
  const { toggleEmailModal, emailResetCongrats } = useContext(FirstMandate)

  return (
    <>
      <ResetEP>
        <section>
          <main>
            <h3>Enter your email address to reset password</h3>
            <p className='error'>Please enter a valid email address</p>
            <input
              type='email'
              className='email-input'
              placeholder='E-mail'
              required
            />
            <button onClick={toggleEmailModal}>Reset Password</button>
            <p>Cancel</p>
          </main>
        </section>
      </ResetEP>
      <div>{emailResetCongrats && <EmailCongratsModal />}</div>
    </>
  )
}
const ResetEP = styled.section`
  main {
    display: flex;
    flex-direction: column;
    justify-content: center;
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
    letter-spacing: 0em;
  }
  p {
    margin: 10px 0;
    text-align: center;
  }
  .error {
    color: #ff0000;
    text-align: left;
    margin: 0;
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
    background-color: #000;
    color: #ffffff;
    padding: 8px 0;
    border: transparent;
    border-radius: 4px;
    width: 400px;
    margin: 10px 0;
    cursor: pointer;
  }

  @media screen and (max-width: 470px) {
    main {
      width: 430px;
    }
    button,
    .email-input {
      width: 350px;
    }
  }
  @media screen and (max-width: 440px) {
    main {
      width: 360px;
    }
    button,
    .email-input {
      width: 350px;
    }
  }
  @media screen and (max-width: 360px) {
    main {
      width: 320px;
    }
    button,
    .email-input {
      width: 280px;
    }
  }
`
export default ResetEmailPassword
