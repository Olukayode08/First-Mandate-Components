import React from 'react'
import styled from 'styled-components'
import { BsInstagram } from 'react-icons/bs'
import { FaXTwitter } from 'react-icons/fa6'
import { FiFacebook } from 'react-icons/fi'
const GeneralEmail = () => {
  return (
    <>
      <GeneralE>
        <section>
          <main>
            <div className='logo-info'>
              <h3>1st Mandate Logo</h3>
              <p className='acc-info'>ACCOUNT INFORMATION</p>
            </div>
            <p>Hi Ladies’</p>
            <p>
              I know many of you are eager to joing us Tuesday, January 12th for
              our promotion with Pretty Little Liars and have been unable to
              book an appointment. I wanted to send a personal note to inform
              those who may still be trying to book that we are now fully
              booked. :( I am sorry to disappoint those of you who we weren’t
              able to accommodate.
            </p>
            <p>
              Please know if I could get All of you into Drybar on this day, I
              happily would. We hope to bring more fun patnerships like this one
              to Drybar clients in 2016.
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
      </GeneralE>
    </>
  )
}
const GeneralE = styled.section`
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
  h3 {
    font-size: 20px;
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
`
export default GeneralEmail
