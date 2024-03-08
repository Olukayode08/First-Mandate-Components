import React, { useState, useRef } from 'react'
import styled from 'styled-components'
import logo from '../../assets/1st mandate logo 1.png'

const VerificationCode = () => {
  const [codes, setCodes] = useState(Array(6).fill(''))
  const inputsRef = useRef([])

  const handleChange = (index, e) => {
    const { value } = e.target
    if (/^\d*$/.test(value) && value.length <= 1) {
      const newCodes = [...codes]
      newCodes[index] = value
      setCodes(newCodes)
      // Move to the next input
      if (index < 5 && value.length === 1) {
        inputsRef.current[index + 1].focus()
      }
    }
  }

  const handleKeyDown = (index, e) => {
    if (e.key === 'Backspace' && index > 0 && !codes[index]) {
      // Move to the previous input if Backspace is pressed on an empty input.
      inputsRef.current[index - 1].focus()
    }
  }

  return (
    <>
      <VerificationC>
        <section>
          <div className='logo'>
            <img src={logo} alt='1st Mandate' />
          </div>
          <main>
            <h3 className='v-code'>Input Verification Code</h3>
            <p>
              A code has been sent to your email address, please copy link and
              paste it here.
            </p>
            <div className='input-btns'>
              {codes.map((code, index) => (
                <input
                  key={index}
                  ref={(el) => (inputsRef.current[index] = el)}
                  type='text'
                  maxLength='1'
                  placeholder='*'
                  value={code}
                  className='input-c'
                  onChange={(e) => handleChange(index, e)}
                  onKeyDown={(e) => handleKeyDown(index, e)}
                />
              ))}
            </div>
            <p className='r-code'>Resend code in 00:59</p>
            <button>Continue</button>
            <p className='error'>Code is wrong, please enter a valid code.</p>
          </main>
        </section>
      </VerificationC>
    </>
  )
}
const VerificationC = styled.section`
  section {
    position: relative;
  }
  .logo {
    position: absolute;
    top: 40px;
    left: 40px;
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
  .v-code {
    font-size: 22px;
  }
  button,
  h3,
  p {
    text-align: center;
    margin: 15px 0;
    font-size: 16px;
    line-height: 28px;
    letter-spacing: 0em;
  }
  .r-code {
    opacity: 0.8;
  }
  button {
    background-color: #000;
    color: #ffffff;
    padding: 8px 0;
    border: transparent;
    border-radius: 4px;
    width: 350px;
    margin: 20px 0;
    cursor: pointer;
  }
  .input-c {
    width: 50px;
    height: 50px;
    margin: 5px;
    font-size: 18px;
    text-align: center;
    outline: none;
  }
  .error {
    color: red;
    font-size: 15px;
    margin: 0;
  }
  @media screen and (max-width: 470px) {
    .logo {
      top: 20px;
      left: 20px;
    }
    main {
      width: 360px;
    }
    .input-c {
      width: 30px;
      height: 30px;
    }
  }
  @media screen and (max-width: 360px) {
    main {
      width: 320px;
    }
    button {
      width: 300px;
    }
  }
`

export default VerificationCode
