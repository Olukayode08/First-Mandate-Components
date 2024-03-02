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
    width: 78%;
    position: absolute;
    top: 0;
    right: 0;
  }
  @media screen and (max-width: 1310px) {
    .upload-section {
      width: 75%;
    }
  }
  @media screen and (max-width: 1200px) {
    .upload-section {
      width: 100%;
      left: 0;
    }
  }
`
export default UploadPropertyPage
