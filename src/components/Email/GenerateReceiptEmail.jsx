import React from 'react'
import styled from 'styled-components'
import logo from '../../assets/1st mandate logo 1.png'
import footerLogo from '../../assets/1st mandate logo 1 (1).png'

const GenerateReceiptEmail = () => {
  return (
    <>
      <GenerateRE>
        <section>
          <div className='logo-info'>
            <div className='logo'>
              <img src={logo} alt='1st Mandate' />
            </div>
            <p className='acc-info'>YOUR ACCOUNT</p>
          </div>
          <main>
            <div className='content'>
              <h1>Receipt</h1>
              <div className='receipt-content'>
                <h4>
                  Dear User, Thank you for using 1st Mandate, This is your
                  receipt for your payment.
                </h4>
                <h4>PAID BY</h4>
                <h4>Peace Adekola</h4>
                <h4>
                  <a href='pea******2@gmail.com' className='signature-link'>
                    pea******2@gmail.com
                  </a>
                </h4>
              </div>
              <div className='receipt-content'>
                <h3>TRANSACTION DETAILS</h3>
                <div className='t-details'>
                  <h4>Description:</h4>
                  <h4>March Rent Payment</h4>
                </div>
                <div className='t-details'>
                  <h4>Ref Id:</h4>
                  <h4>566523456789098765432123</h4>
                </div>
                <div className='t-details'>
                  <h4>Date:</h4>
                  <h4>02/03/2024</h4>
                </div>
                <div className='t-details'>
                  <h4>Status:</h4>
                  <h4>Successful</h4>
                </div>
                <div className='t-details'>
                  <h4>Amount:</h4>
                  <h4>#300,000.00k</h4>
                </div>
              </div>
              <div>
                <h4>PAID TO</h4>
                <h4>Kelly</h4>
                <h4>
                  <a href='hi.k******i@gmail.com' className='signature-link'>
                    hi.k******i@gmail.com
                  </a>
                </h4>
              </div>

              <button>Generate Receipt</button>
              <div className='user-content'>
                <p>Bests,</p>
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
      </GenerateRE>
    </>
  )
}
const GenerateRE = styled.section`
  section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    margin: 20px 0;
    padding: 20px 0;
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
    font-size: 18px;
    letter-spacing: 0.4px;
    margin: 25px 0 7px 0;
  }
  .receipt-content {
    border-bottom: 1px solid black;
  }
  h3,
  h4,
  p {
    text-align: left;
    font-size: 16px;
    font-weight: 100;
    line-height: 25px;
  }
  h4 {
    margin: 17px 0;
  }
  h3 {
    margin-top: 17px;
  }
  .t-details {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .acc-info {
    font-size: 12px;
    line-height: 19px;
    margin: 0;
    letter-spacing: 0.5px;
    flex-shrink: 0;
  }
  button {
    background-color: #000;
    color: #ffffff;
    padding: 12px 0;
    border: transparent;
    border-radius: 5px;
    width: 95%;
    cursor: pointer;
    text-align: center;
    font-size: 14px;
    margin: 0 auto;
  }
  .user-content {
    margin: 17px 0;
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
    .logo-info,
    main {
      width: 380px;
    }
    h4,
    h3,
    p {
      font-size: 14px;
    }
  }
  @media screen and (max-width: 380px) {
    .logo-info,
    main {
      width: 300px;
    }
  }
`
export default GenerateReceiptEmail