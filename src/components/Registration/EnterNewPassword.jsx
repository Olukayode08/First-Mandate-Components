import React, { useContext } from 'react'
import styled from 'styled-components'
import { FirstMandate } from '../../context/Context'
import ResetPasswordCongrats from '../modal/ResetPasswordCongrats'
import logo from '../../assets/1st mandate logo 1.png'

const EnterNewPassword = () => {
  const {
    isRegisteringNewPassword,
    handleChangeNewPassword,
    newPasswordLoading,
    newPasswordsuccessMessage,
    newPasswordDetails,
    NewPassword,
    newPasswordError,
  } = useContext(FirstMandate)

  return (
    <>
      <ResetP>
        <section>
          <div className='logo'>
            <img src={logo} alt='1st Mandate' />
          </div>
          <form onSubmit={NewPassword}>
            <h3>Enter New Password</h3>
            <input
              type='password'
              name='newPassword'
              className='password-input'
              placeholder='Password'
              autoComplete='off'
              value={newPasswordDetails.newPassword}
              onChange={handleChangeNewPassword}
              required
            />
            <label>Confirm Password</label>
            <input
              type='password'
              name='newConfirmPassword'
              className='password-input'
              autoComplete='off'
              value={newPasswordDetails.newConfirmPassword}
              onChange={handleChangeNewPassword}
              placeholder='Confirm Password'
              required
            />
            <label className='error'>{newPasswordError}</label>
            <button
              disabled={isRegisteringNewPassword}
              className={isRegisteringNewPassword ? 'btn-disabled' : 'btn'}
            >
              {newPasswordLoading ? (
                <div className='login-spinner'>
                  <div className='spinner'></div>
                  <p>Reset Password</p>
                </div>
              ) : (
                <p className='login-btn'>Reset Password</p>
              )}
            </button>{' '}
          </form>
        </section>
      </ResetP>
      <div>{newPasswordsuccessMessage && <ResetPasswordCongrats />}</div>
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
    color: #ffffff;
    height: 45px;
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
  .login-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
    margin: 0 auto;
  }
  .login-spinner {
    display: flex;
    gap: 15px;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
  }
  .spinner {
    border: 3px solid #fff;
    border-top: 3px solid #3498db;
    border-radius: 50%;
    width: 25px;
    height: 25px;
    animation: spin 1s linear infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  @media screen and (max-width: 470px) {
    .logo {
      top: 20px;
      left: 20px;
    }
    form {
      width: 430px;
    }
    label,
    button,
    .password-input {
      width: 350px;
    }
  }
  @media screen and (max-width: 440px) {
    form {
      width: 360px;
    }
    label,
    button,
    .password-input {
      width: 350px;
    }
  }
  @media screen and (max-width: 360px) {
    form {
      width: 320px;
    }
    label,
    button,
    .password-input {
      width: 280px;
    }
  }
`
export default EnterNewPassword
