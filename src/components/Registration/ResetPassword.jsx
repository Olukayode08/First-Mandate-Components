import React, { useContext } from 'react'
import styled from 'styled-components'
import { FirstMandate } from '../../context/Context'
import ResetPasswordCongrats from '../modal/ResetPasswordCongrats'
import logo from '../../assets/1st mandate logo 1.png'

const ResetPassword = () => {
  const { toggleResetPasswordModal, resetPasswordCongrats } =
    useContext(FirstMandate)

  return (
    <>
      <ResetP>
        <section>
          <div className='logo'>
            <img src={logo} alt='1st Mandate' />
          </div>
          <main>
            <h3>Enter New Password</h3>
            <input
              type='text'
              className='password-input'
              placeholder='Password'
              required
            />
            <label>Confirm Password</label>
            <input
              type='text'
              className='password-input'
              placeholder='Confirm Password'
              required
            />
            <label className='error'>Password Incorrect</label>
            <button onClick={toggleResetPasswordModal}>Reset Password</button>
          </main>
        </section>
      </ResetP>
      <div>{resetPasswordCongrats && <ResetPasswordCongrats />}</div>
    </>
  )
}
const ResetP = styled.section`
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
    letter-spacing: 0em;
  }
  h3 {
    font-size: 22px;
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
    font-size: 15px;
    margin: 10px 0;
  }
  label {
    text-align: left;
    margin: 20px 0 0 0;
    font-size: 16px;
    width: 400px;
  }
  .error {
    color: #ff0000;
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

  @media screen and (max-width: 470px) {
    .logo {
      top: 20px;
      left: 20px;
    }
    main {
      width: 430px;
    }
    label,
    button,
    .password-input {
      width: 350px;
    }
  }
  @media screen and (max-width: 440px) {
    main {
      width: 360px;
    }
    label,
    button,
    .password-input {
      width: 350px;
    }
  }
  @media screen and (max-width: 360px) {
    main {
      width: 320px;
    }
    label,
    button,
    .password-input {
      width: 280px;
    }
  }
`
export default ResetPassword
