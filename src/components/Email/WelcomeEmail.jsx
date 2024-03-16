import React from 'react'
import styled from 'styled-components'
import welcomeIcon from '../../assets/undraw_welcoming_re_x0qo 1.png'
import footerLogo from '../../assets/1st mandate logo 1 (1).png'
import logo from '../../assets/1st mandate logo 1.png'

const WelcomeEmail = () => {
  return (
    <>
      <WelcomeE>
        <section>
          <main>
            <div className='content'>
              <div className='logo'>
                <img src={logo} alt='First Mandate' />
              </div>
              <div className='user-content'>
                <div className='logo'>
                  <img src={welcomeIcon} alt='First Mandate' />
                </div>
                <p>Welcome to 1st Mandate</p>
              </div>
              <div className='user-content'>
                <p>Dear [User],</p>
                <p>
                  Welcome to 1st Mandate! We're thrilled to have you on board.
                  To continue please click the button below to verify your email
                  address:
                </p>
              </div>
              <div className='user-content'>
                <button>Verify Email Address</button>
              </div>
              <div className='user-content'>
                <p>Best regards,</p>
                <p>1st Mandate</p>
              </div>
            </div>
          </main>
          <footer>
            <img className='footer-logo' src={footerLogo} alt='1st Mandate' />
            <h5>
              <a href='hello@1stmandate.com' className='signature-link'>
                hello@1stmandate.com
              </a>
            </h5>
            <h5>copyright © 2024 1st Mandate. All Rights Reserved.</h5>
          </footer>
        </section>
      </WelcomeE>
    </>
  )
}
const WelcomeE = styled.section`
  section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 20px;
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
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    width: 75%;
    padding: 10px;
  }
  .logo {
    margin: 13px 0;
  }
  .user-content {
    margin: 17px 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  p {
    text-align: center;
    font-size: 16px;
    font-weight: 100;
    line-height: 28px;
  }
  button {
    background-color: #000;
    color: #ffffff;
    padding: 12px 0;
    border: transparent;
    font-weight: inherit;
    border-radius: 5px;
    width: 300px;
    cursor: pointer;
    text-align: center;
    font-size: 16px;
  }
  footer {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 10px 0 0 0;
  }
  .footer-logo {
    margin: 5px 0;
  }
  .signature-link {
    text-decoration: none;
    color: #00000080;
    font-size: 14px;
  }
  h5 {
    text-align: center;
    color: #00000080;
    line-height: 22px;
    font-weight: 100;
    font-size: 14px;
    margin: 3px 0;
  }

  @media screen and (max-width: 580px) {
    main {
      width: 450px;
    }
    .content {
      width: 95%;
    }
  }
  @media screen and (max-width: 450px) {
    section {
      height: 100%;
    }
    main {
      width: 380px;
    }
    h1 {
      font-size: 20px;
    }
    p {
      font-size: 15px;
    }
  }
  @media screen and (max-width: 380px) {
    main {
      width: 300px;
    }
    button {
      width: 250px;
    }
  }
`
export default WelcomeEmail
