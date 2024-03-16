import React from 'react'
import styled from 'styled-components'
import logo from '../../assets/1st mandate logo 1.png'
import footerLogo from '../../assets/1st mandate logo 1 (1).png'

const ConfirmEmail = () => {
  return (
    <>
      <ConfirmE>
        <section>
          <div className='logo-info'>
            <div className='logo'>
              <img src={logo} alt='1st Mandate' />
            </div>
            <p className='acc-info'>YOUR ACCOUNT</p>
          </div>
          <main>
            <div className='content'>
              <h3>Your free trial has expired,</h3>
              <p>
                The trial period for http://.1st Mandate has ended, but your
                progress has been saved and is still available. Everyone gets
                busy and you may not have had enough time to evaluate 1st
                Mandate.
              </p>
              <h3>Need more time?</h3>
              <p>
                To extend your trial 7 days. simply click:
                <span> Extend My Trial</span>
              </p>
              <h3>Ready to Upgrade?</h3>
              <p>
                Upgrading your website to a full 1st Mandate account is simple.
                Our service plans start at just $8 per month and includes 24/7
                support, hosting, analytics, and more.
              </p>
              <button>Upgrade Now</button>
              <p>Let us know how we can help</p>
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
      </ConfirmE>
    </>
  )
}
const ConfirmE = styled.section`
  section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    margin: 20px 0;
  }
  .logo-info {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 0 20px 0;
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
  .acc-info {
    font-size: 12px;
    line-height: 19px;
    letter-spacing: 0.5px;
    flex-shrink: 0;
  }
  h3,
  p {
    text-align: left;
    margin: 15px 0;
    font-size: 16px;
    line-height: 28px;
  }
  span {
    font-weight: 500;
  }
  button {
    background-color: #000;
    color: #ffffff;
    padding: 12px 0;
    border: transparent;
    border-radius: 5px;
    width: 250px;
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
`
export default ConfirmEmail
