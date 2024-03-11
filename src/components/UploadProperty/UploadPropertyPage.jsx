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
  .upload-section {
    width: 100%;
    background-color: #fff;
    border-radius: 4px;
    padding: 20px;
  }
`
export default UploadPropertyPage
