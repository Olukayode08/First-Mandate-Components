import React, { useContext } from 'react'
import styled from 'styled-components'
import { FirstMandate } from '../../context/Context'
import EmailCongratsModal from '../modal/EmailCongratsModal'
import logo from '../../assets/1st mandate logo 1.png'

const ResetEmailPassword = () => {
  const { toggleEmailModal, emailResetCongrats } = useContext(FirstMandate)

  return (
    <>
      <ResetEP>
        <section>
          <div className='logo'>
            <img src={logo} alt='1st Mandate' />
          </div>
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
    .logo {
      top: 20px;
      left: 20px;
    }
    main {
      width: 430px;
    }
    .error,
    button,
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
    .email-input {
      width: 350px;
    }
  }
  @media screen and (max-width: 360px) {
    main {
      width: 320px;
    }
    .error,
    button,
    .email-input {
      width: 280px;
    }
  }
`
export default ResetEmailPassword
