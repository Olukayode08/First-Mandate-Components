import React from 'react'
import styled from 'styled-components'
import logo from '../../assets/1st mandate logo 1.png'
import footerLogo from '../../assets/1st mandate logo 1 (1).png'

const RentPaymentReceiptEmail = () => {
  return (
    <>
      <RentPRE>
        <section>
          <div className='logo-info'>
            <div className='logo'>
              <img src={logo} alt='1st Mandate' />
            </div>
            <p className='acc-info'>YOUR ACCOUNT</p>
          </div>
          <main>
            <div className='content'>
              <h1>Rent Payment Receipt</h1>
              <div className='user-content'>
                <p>Hello [User],</p>
                <p>
                  Thank you for your recent rent payment. Here's your receipt:
                </p>
              </div>
              <div className='user-content'>
                <p>
                  Transaction ID: <span>1234567890987654321234567890</span>
                </p>
                <p>
                  Amount: <span>#200,000.00k</span>
                </p>
                <p>
                  Payment Method: <span>Debit Card</span>
                </p>
                <p>
                  Date: <span>dd/mm/yyyy</span>
                </p>
              </div>
              <div className='user-content'>
                <p>Feel free to contact us if you have any questions.</p>
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
      </RentPRE>
    </>
  )
}
const RentPRE = styled.section`
  section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
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
  h1 {
    font-size: 25px;
    letter-spacing: 0.4px;
    margin: 25px 0;
  }
  .user-content {
    margin: 17px 0;
  }
  p {
    text-align: left;
    font-size: 16px;
    font-weight: 100;
    line-height: 28px;
  }
  span {
    font-weight: 700;
  }
  .acc-info {
    font-size: 12px;
    line-height: 19px;
    margin: 0;
    letter-spacing: 0.5px;
    flex-shrink: 0;
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
    .content {
      width: 95%;
    }
  }
  @media screen and (max-width: 450px) {
    section {
      height: 100%;
    }
    .logo-info,
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
    .logo-info,
    main {
      width: 300px;
    }
  }
`
export default RentPaymentReceiptEmail
