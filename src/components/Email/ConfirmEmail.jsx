import React from 'react'
import styled from 'styled-components'
import { BsInstagram } from 'react-icons/bs'
import { FaXTwitter } from 'react-icons/fa6'
import { FiFacebook } from 'react-icons/fi'

const ConfirmEmail = () => {
  return (
    <>
      <ConfirmE>
        <section>
          <main>
            <div className='logo-info'>
              <h1>1st Mandate Logo</h1>
              <p className='acc-info'>ACCOUNT INFORMATION</p>
            </div>
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
      </ConfirmE>
    </>
  )
}
const ConfirmE = styled.section`
  main {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
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
  h1 {
    font-size: 20px;
  }
  .acc-info {
    font-size: 12px;
    line-height: 19px;
    letter-spacing: 0.5px;
    flex-shrink: 0;
  }
  .content {
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 10px;
    margin: 0 auto;
  }
  h3,
  p {
    text-align: left;
    margin: 15px 0;
    font-size: 16px;
    line-height: 28px;
  }
  h3 {
    font-weight: 500;
  }
  span{
    font-weight: 500;
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
export default ConfirmEmail
