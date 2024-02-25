import React from 'react'
import styled from 'styled-components'

const ErrorPage = () => {
  return (
    <>
      <ErrorP>
        <section>
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
`
export default ErrorPage
