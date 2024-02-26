import React from 'react'
import styled from 'styled-components'
import UploadPptStepper from '../Steppers/UploadPptStepper'
const UploadPpt = () => {

  return (
    <>
      <UploadPMP>
        <section>
          <main className='upload-section'>
            <UploadPptStepper />
          </main>
        </section>
      </UploadPMP>
    </>
  )
}

const UploadPMP = styled.section`
  position: relative;
  .upload-section {
    width: 78%;
    position: absolute;
    top: 0;
    right: 0;
  }
  @media screen and (max-width: 1200px) {
    .upload-section {
      width: 100%;
      left: 0;
    }
  }
`
export default UploadPpt
