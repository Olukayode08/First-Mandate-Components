import React from 'react'
import styled from 'styled-components'

const ResetPassword = () => {
  return (
    <>
      <ResetP>
        <section>
          <main>
            <h3>Enter New Password</h3>
            <input
              type='text'
              className='password-input'
              placeholder='Password'
              required
            />
            <button>Reset Password</button>
          </main>
        </section>
      </ResetP>
    </>
  )
}
const ResetP = styled.section`
  main {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 450px;
    margin: 0 auto;
    padding: 10px;
  }
  button,
  h3 {
    text-align: center;
    margin: 15px 0;
    font-size: 16px;
    line-height: 28px;
    letter-spacing: 0em;
  }
  .password-input {
    width: 400px;
    border: 1px solid black;
    height: 52px;
    padding: 0 16px;
    font-family: inherit;
    border-radius: 4px;
    outline: none;
    background: transparent;
    font-size: 16px;
    margin: 10px 0;
  }
  button {
    background-color: #000;
    color: #ffffff;
    padding: 8px 0;
    border: transparent;
    border-radius: 4px;
    width: 400px;
    margin: 10px 0;
    cursor: pointer;
  }

  @media screen and (max-width: 470px) {
    main {
      width: 430px;
    }
    button,
    .password-input {
      width: 350px;
    }
  }
  @media screen and (max-width: 440px) {
    main {
      width: 360px;
    }
    button,
    .password-input {
      width: 350px;
    }
  }
  @media screen and (max-width: 360px) {
    main {
      width: 320px;
    }
    button,
    .password-input {
      width: 280px;
    }
  }
`
export default ResetPassword
