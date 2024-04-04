import React from 'react'
import styled from 'styled-components'
import LandlordUploadPropertyStepper from './LandlordUploadPropertyStepper'
const LandlordUploadPropertyPage = () => {
  return (
    <>
      <LUploadPP>
        <section>
          <main className='upload-section'>
            <LandlordUploadPropertyStepper />
          </main>
        </section>
      </LUploadPP>
    </>
  )
}

const LUploadPP = styled.section`
  .upload-section {
    width: 100%;
    background-color: #fff;
    border-radius: 4px;
    padding: 20px;
  }
`
export default LandlordUploadPropertyPage
