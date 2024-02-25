import React from 'react'
import styled from 'styled-components'

const GeneralEmail = () => {
  return (
    <>
      <GeneralE>
        <section>
          <main>
            <h3>1st Mandate Logo</h3>
            <p>Hi, Peace</p>
            <p>
              Lorem ipsum dolor sit amet consectetur. Ipsum sit eget pharetra
              pulvinar faucibus urna. Vel feugiat dictumst cras mus risus in eu
              pharetra. Gravida leo ut ut nibh luctus vestibulum gravida.
              Condimentum tincidunt sed feugiat amet pellentesque cras sem nisi
              arcu. Urna nec sodales vulputate blandit. Morbi scelerisque vitae
              aliquam suspendisse nisl quisque sed. Tellus pharetra et id
              quisque malesuada tortor. Nisi ultricies nisi turpis felis et.
              Purus sed mollis nisi urna ullamcorper ultrices fermentum.
              Vulputate donec leo lacus id velit natoque.
            </p>
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
    height: 100vh;
    width: 450px;
    margin: 0 auto;
    padding: 10px;
  }
  h3,
  p {
    text-align: left;
    margin: 10px 0;
    font-size: 16px;
    font-weight: 400;
    line-height: 28px;
    letter-spacing: 0em;
    cursor: pointer;
  }
  h3 {
    margin: 20px 0;
    text-align: center;
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
export default GeneralEmail
