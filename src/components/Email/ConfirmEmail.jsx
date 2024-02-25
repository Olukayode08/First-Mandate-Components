import React from 'react'
import styled from 'styled-components'

const ConfirmEmail = () => {
  return (
    <>
      <ConfirmE>
        <section>
          <main>
            <h3>1st Mandate Logo</h3>
            <p>Email Confirmation</p>
            <p>
              Hello Peace, you recently signed up for an account with 1st
              Mandate.
            </p>
            <p>Welcome! Please click the button below to confirm your email:</p>
            <button>Confirm Email</button>
            <p>
              If you did not recently sign up for a 1st Mandate account, please
              ignore this email.
            </p>
            <p>Thanks</p>
          </main>
        </section>
      </ConfirmE>
    </>
  )
}
const ConfirmE = styled.section`
  section {
  }
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
    margin: 10px 0;
    font-size: 16px;
    font-weight: 400;
    line-height: 28px;
    letter-spacing: 0em;
  }
  h3 {
    margin: 15px 0;
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
export default ConfirmEmail
