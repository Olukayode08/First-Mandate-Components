import React from 'react'
import styled from 'styled-components'
import { BsInstagram } from 'react-icons/bs'
import { FaXTwitter } from 'react-icons/fa6'
import { FiFacebook } from 'react-icons/fi'
import logo from '../../assets/1st mandate logo 1.png'

const GeneralEmail = () => {
  return (
    <>
      <GeneralE>
        <section>
          <div className='logo-info'>
            <div className='logo'>
              <img src={logo} alt='1st Mandate' />
            </div>
            <p className='acc-info'>ACCOUNT INFORMATION</p>
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
            <h5>1st Mandate, Inc.</h5>
            <h5>7a, Surulere Street, Lagos, Nigeria.</h5>
            <div className='socials'>
              <BsInstagram />
              <FaXTwitter />
              <FiFacebook />
            </div>
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
    margin: 0 auto;
  }
  .logo-info {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 20px 0;
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
    margin: 20px 0;
  }
  h5 {
    text-align: center;
    line-height: 22px;
    font-size: 14px;
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
`
export default GeneralEmail
