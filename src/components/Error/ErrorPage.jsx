import React from 'react'
import styled from 'styled-components'
import logo from '../../assets/1st mandate logo 1.png'

const ErrorPage = () => {
  return (
    <>
      <ErrorP>
        <section>
          <div className='logo'>
            <img src={logo} alt='1st Mandate' />
          </div>
          <main>
            <h1>Error</h1>
            <p>Ooops!!! Page not found</p>
          </main>
        </section>
      </ErrorP>
    </>
  )
}
const ErrorP = styled.section`
  main {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
  .logo {
    position: absolute;
    top: 40px;
    left: 40px;
  }
  p,
  h1 {
    color: red;
    font-size: 35px;
    text-align: center;
    margin: 10px 0;
  }
  p {
    color: black;
    font-size: 22px;
  }
  @media screen and (max-width: 470px) {
    .logo {
      top: 20px;
      left: 20px;
    }
  }
`
export default ErrorPage
