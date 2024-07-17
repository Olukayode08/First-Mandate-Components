import React from 'react'
import styled from 'styled-components'
import logo from '../../assets/1st mandate logo 1.png'
import { useNavigate } from 'react-router-dom'

const ErrorPage = () => {
  const navigate = useNavigate()
  const handleGoBack = () => {
    navigate(-1)
  }
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
            <button onClick={handleGoBack}>Go Back</button>
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
  button {
    background-color: #fff;
    border: 1px solid black;
    padding: 10px 13px;
    border-radius: 7px;
    margin: 7px 0;
    cursor: pointer;
    font-size: 15px;
  }
  button:hover {
    background-color: #000;
    color: #fff;
    transition: all ease-in 0ms.4;
  }
  @media screen and (max-width: 470px) {
    .logo {
      top: 20px;
      left: 20px;
    }
  }
`
export default ErrorPage
