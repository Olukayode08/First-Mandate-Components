import React from 'react'
import styled from 'styled-components'
import welcomeIcon from '../../assets/undraw_welcome_cats_thqn 1.png'
import { BsInstagram } from 'react-icons/bs'
import { FaXTwitter } from 'react-icons/fa6'
import { FiFacebook } from 'react-icons/fi'
import logo from '../../assets/1st mandate logo 1.png'

const WelcomeEmail = () => {
  return (
    <>
      <WelcomeE>
        <section>
          <main>
            <img src={logo} alt='1st Mandate' />
            <img src={welcomeIcon} alt='Welcome' />
            <p>Welcome to 1st Mandate</p>
            <p>
              Thanks for signing up for 1st Mandate. Please take a sec to
              confirm your email.
            </p>
            <button>Yep, confirmed!</button>
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
    margin: 0 auto;
  }
  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 500px;
    margin: 0 auto;
    padding: 10px;
    background-color: #ffffff;
  }
  button,
  h3,
  p {
    text-align: center;
    margin: 15px 0;
    font-size: 16px;
    font-weight: 400;
    line-height: 28px;
    letter-spacing: 0em;
  }
  img {
    margin: 20px 0;
  }
  button {
    background-color: #000;
    color: #ffffff;
    padding: 12px 0;
    border: transparent;
    border-radius: 5px;
    width: 280px;
    cursor: pointer;
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
    color: #00000080;
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
    section {
      height: 100%;
    }
  }
`
export default WelcomeEmail
