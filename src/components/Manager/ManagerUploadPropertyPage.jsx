import React from 'react'
import styled from 'styled-components'
import ManagerUploadPropertyStepper from './ManagerUploadPropertyStepper'
const ManagerUploadPropertyPage = () => {
  return (
    <>
      <UploadPP>
        <section>
          <main className='upload-section'>
            <ManagerUploadPropertyStepper />
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
export default ManagerUploadPropertyPage
