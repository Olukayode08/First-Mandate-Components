import React from 'react'
import styled from 'styled-components'
import UploadPropertyStepper from '../Steppers/UploadPropertyStepper'
const UploadPropertyPage = () => {

  return (
    <>
      <UploadPP>
        <section>
          <main className='upload-section'>
            <UploadPropertyStepper />
          </main>
        </section>
      </UploadPP>
    </>
  )
}

const UploadPP = styled.section`
  position: relative;
  .upload-section {
    width: 81%;
    position: absolute;
    top: 20px;
    right: 20px;
    padding: 20px;
    background-color: #ffffff;
  }
  @media screen and (max-width: 1350px) {
    .upload-section {
      width: 79%;
    }
  }
  @media screen and (max-width: 1250px) {
    .upload-section {
      width: 90%;
      top: 0;
      left: 0;
      right: 0;
      margin: 20px auto;
      padding: 10px;
    }
  }
`
export default UploadPropertyPage
