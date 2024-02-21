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
    margin: 0 auto;
    width: 90%;
  }
`
export default UploadPpt
