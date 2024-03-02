import React from 'react'
import styled from 'styled-components'
import { BsInstagram } from 'react-icons/bs'
import { FaXTwitter } from 'react-icons/fa6'
import { FiFacebook } from 'react-icons/fi'

const ResetPasswordEmail = () => {
  return (
    <>
      <ResetPE>
        <section>
          <main>
            <div className='logo-info'>
              <h3>1st Mandate Logo</h3>
              <p className='acc-info'>ACCOUNT INFORMATION</p>
            </div>
            <div className='content'>
              <h1>Reset your password</h1>
              <p>
                You’re receiving this email because you requested a password
                reset for your 1st Mandate Account.
              </p>
              <p>Please tap the button below to choose a new password</p>
              <button>Reset Password</button>
            </div>
            <footer>
              <h5>1st Mandate, Inc.</h5>
              <h5>7a, Surulere Street, Lagos, Nigeria.</h5>
              <div className='socials'>
                <BsInstagram />
                <FaXTwitter />
                <FiFacebook />
              </div>
            </footer>
          </main>
        </section>
      </ResetPE>
    </>
  )
}
const ResetPE = styled.section`
  main {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100vh;
    width: 500px;
    margin: 0 auto;
  }
  .logo-info {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin: 15px 0;
  }
  .acc-info {
    font-size: 12px;
    line-height: 19px;
    letter-spacing: 0.5px;
    flex-shrink: 0;
  }
  .content {
    width: 100%;
    padding: 10px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
  }
  h3,
  p {
    text-align: left;
    margin: 15px 0;
    font-size: 16px;
    line-height: 28px;
  }
  h3 {
    font-size: 20px;
  }
  h1 {
    font-size: 25px;
    margin: 15px 0;
  }
  button {
    background-color: #000;
    color: #ffffff;
    padding: 12px 0;
    border: transparent;
    border-radius: 5px;
    width: 270px;
    cursor: pointer;
    text-align: center;
    font-size: 16px;
    margin: 15px 0;
  }
  footer {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 7px 0;
  }
  h5 {
    text-align: center;
    line-height: 22px;
    font-size: 14px;
  }
  .socials {
    display: flex;
    gap: 15px;
    margin: 5px;
    cursor: pointer;
  }
  @media screen and (max-width: 500px) {
    main {
      width: 400px;
    }
  }
  @media screen and (max-width: 410px) {
    main {
      width: 350px;
    }
  }
  @media screen and (max-width: 360px) {
    main {
      width: 280px;
    }
  }
  @media screen and (max-width: 320px) {
    main {
      height: 100%;
    }
  }
`
export default ResetPasswordEmail
