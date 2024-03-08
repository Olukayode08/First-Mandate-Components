import React from 'react'
import styled from 'styled-components'
import { BsInstagram } from 'react-icons/bs'
import { FaXTwitter } from 'react-icons/fa6'
import { FiFacebook } from 'react-icons/fi'
import logo from '../../assets/1st mandate logo 1.png'
// import footerLogo from '../../assets/1st mandate logo 1 (1).png'


const ResetPasswordEmail = () => {
  return (
    <>
      <ResetPE>
        <section>
          <div className='logo-info'>
            <div className='logo'>
              <img src={logo} alt='1st Mandate' />
            </div>
            <p className='acc-info'>ACCOUNT INFORMATION</p>
          </div>
          <main>
            <div className='content'>
              <h1>Reset your password</h1>
              <p>
                You’re receiving this email because you requested a password
                reset for your 1st Mandate Account.
              </p>
              <p>Please tap the button below to choose a new password</p>
              <button>Reset Password</button>
            </div>
          </main>
          <footer>
            {/* <img src={footerLogo} alt='1st Mandate' /> */}
            <h5>1st Mandate, Inc.</h5>
            <h5>7a, Surulere Street, Lagos, Nigeria.</h5>
            <div className='socials'>
              <BsInstagram />
              <FaXTwitter />
              <FiFacebook />
            </div>
          </footer>
        </section>
      </ResetPE>
    </>
  )
}
const ResetPE = styled.section`
  section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0 auto;
  }
  .logo-info {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 20px 0 20px 0;
    width: 550px;
  }

  main {
    display: flex;
    flex-direction: column;
    width: 550px;
    background-color: #ffffff;
  }
  .content {
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    width: 90%;
    padding: 10px;
  }
  p {
    text-align: left;
    font-size: 16px;
    margin: 15px 0;
    line-height: 28px;
  }
  .acc-info {
    font-size: 12px;
    line-height: 19px;
    margin: 0;
    letter-spacing: 0.5px;
    flex-shrink: 0;
  }
  h1 {
    font-size: 25px;
    margin: 25px 0;
  }
  button {
    background-color: #000;
    color: #ffffff;
    padding: 12px 0;
    border: transparent;
    border-radius: 5px;
    width: 300px;
    cursor: pointer;
    text-align: center;
    font-size: 16px;
    margin: 30px 0;
  }
  footer {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 20px 0 0 0;
  }
  h5 {
    text-align: center;
    line-height: 22px;
    font-weight: 100;
    font-size: 14px;
    margin: 3px 0;
  }
  .socials {
    display: flex;
    gap: 15px;
    margin: 5px;
    cursor: pointer;
  }
  @media screen and (max-width: 580px) {
    .logo-info,
    main {
      width: 450px;
    }
  }
  @media screen and (max-width: 450px) {
    .logo-info,
    main {
      width: 380px;
    }
  }
  @media screen and (max-width: 380px) {
    .logo-info,
    main {
      width: 300px;
    }
  }
  @media screen and (max-width: 320px) {
    section {
      height: 100%;
    }
    button {
      width: 250px;
    }
  }
`
export default ResetPasswordEmail
