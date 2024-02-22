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

  .upload-section {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 58%;
    border: 2px solid red;
    margin: 0 auto;
  }
`
export default UploadPpt
