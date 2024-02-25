import React from 'react'
import styled from 'styled-components'
import welcomeIcon from '../../assets/undraw_welcome_cats_thqn 1.png'

const WelcomeEmail = () => {
  return (
    <>
      <WelcomeE>
        <section>
          <main>
            <h3>1st Mandate Logo</h3>
            <img src={welcomeIcon} alt='Welcome' />
            <p>Hello Peace Adekola,</p>
            <p>You're in good company!</p>
            <p>
              Now that you’re a 1st Mandate user you can collect rent online,
              find tenants, accept applications.
            </p>
            <p>
              No more phone calls in the middle of the night from tenants
              because now all communication can be done online.
            </p>
            <button>Get Started Now</button>
          </main>
        </section>
      </WelcomeE>
    </>
  )
}
const WelcomeE = styled.section`
  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 450px;
    margin: 0 auto;
    padding: 10px;
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
    padding: 8px 0;
    border: transparent;
    border-radius: 5px;
    width: 280px;
    cursor: pointer;
  }
  @media screen and (max-width: 450px) {
    main {
      width: 350px;
    }
  }
  @media screen and (max-width: 360px) {
    main {
      width: 280px;
      height: 100%;
    }
  }
`
export default WelcomeEmail
