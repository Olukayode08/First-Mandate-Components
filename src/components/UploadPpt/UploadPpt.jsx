import React from 'react'
import styled from 'styled-components'
import UploadPptStepper from '../Steppers/UploadPptStepper'
const UploadPpt = () => {

  return (
    <>
        <Wrapper>
          <section className='upload-section'>
            <UploadPptStepper />
          </section>
        </Wrapper>
    </>
  )
}

const Wrapper = styled.section`
  position: relative;
  .upload-section {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 58%;
    position: absolute;
    top: 0;
    left: 300px;
    margin: 0 auto;
  }
  @media screen and (max-width: 1100px) {
    .upload-section {
      width: 100%;
      left: 0;
    }
  }
`
export default UploadPpt
