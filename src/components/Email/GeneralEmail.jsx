import React from 'react'
import styled from 'styled-components'
import logo from '../../assets/1st mandate logo 1.png'
import footerLogo from '../../assets/1st mandate logo 1 (1).png'

const GeneralEmail = () => {
  return (
    <>
      <GeneralE>
        <section>
          <div className='logo-info'>
            <div className='logo'>
              <img src={logo} alt='1st Mandate' />
            </div>
            <p className='acc-info'>YOUR ACCOUNT</p>
          </div>
          <main>
            <div className='content'>
              <p>Hi Ladies’</p>
              <p>
                I know many of you are eager to joing us Tuesday, January 12th
                for our promotion with Pretty Little Liars and have been unable
                to book an appointment. I wanted to send a personal note to
                inform those who may still be trying to book that we are now
                fully booked. :( I am sorry to disappoint those of you who we
                weren’t able to accommodate.
              </p>
              <p>
                Please know if I could get All of you into Drybar on this day, I
                happily would. We hope to bring more fun patnerships like this
                one to Drybar clients in 2016.
              </p>
              <p>
                I wish you all a very Happy New Year and thank you for your
                continued support.
              </p>
              <p>Peace, Love & Blowouts,</p>
              <div className='founder'>
                <p className='g-founder'>Alli Webb</p>
                <p className='g-founder'>Drybar Founder</p>
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
      </GeneralE>
    </>
  )
}
const GeneralE = styled.section`
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
  p {
    text-align: left;
    margin: 15px 0;
    font-size: 16px;
    font-weight: 400;
    line-height: 28px;
    cursor: pointer;
  }
  .founder {
    margin: 15px 0;
  }
  .g-founder {
    margin: 0;
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
export default GeneralEmail
