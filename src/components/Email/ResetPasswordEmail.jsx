import React from 'react'
import styled from 'styled-components'

const ResetPasswordEmail = () => {
  return (
    <>
      <ResetPE>
        <section>
          <main>
            <h3>1st Mandate Logo</h3>
            <p>Hello Peace Adekola,</p>
            <p>
              You have requested a link to change your password. You can do this
              through the button below.
            </p>
            <button>Reset Password</button>
            <p>
              If you didn't request this password reset, please ignore this
              email.
            </p>
            <p>
              Your password won't change until you access the link above and
              create a new one.
            </p>
          </main>
        </section>
      </ResetPE>
    </>
  )
}
const ResetPE = styled.section`
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
export default ResetPasswordEmail
