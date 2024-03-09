import React, { useState } from 'react'
import styled from 'styled-components'
import cloudUpload from '../../assets/cloud-upload.png'

const UploadDocument = () => {
  const [uploadedDocument, setUploadedDocument] = useState(null)

  const handleFileChange = (event) => {
    const file = event.target.files[0]
    if (file) {
      setUploadedDocument(URL.createObjectURL(file))
    }
  }

  const handleOverlayClick = () => {
    document.getElementById('fileInput').click()
  }

  const handleDocumentClick = () => {
    // Implement your logic to change the uploaded document
    // For example, you can trigger a file input click event here
    document.getElementById('fileInput').click()
  }
  return (
    <>
      <Wrapper>
        <section>
          <h2>
            Upload documents to prove that you are the owner of the property
          </h2>
          <div className='document-upload-container'>
            <div className='upload-overlay' onClick={handleOverlayClick}>
              {uploadedDocument ? (
                <img
                  src={uploadedDocument}
                  alt='Document Uploaded '
                  className='uploaded-document'
                  onClick={handleDocumentClick}
                />
              ) : (
                <div className='upload-image'>
                  <img
                    src={cloudUpload}
                    className='cloud-img'
                    alt='Upload-img'
                  />
                  <p>Click to upload document</p>
                </div>
              )}
            </div>
            <input
              type='file'
              id='fileInput'
              accept='.pdf,.doc,.docx,.txt'
              onChange={handleFileChange}
              style={{ display: 'none' }}
            />
          </div>
        </section>
      </Wrapper>
    </>
  )
}
const Wrapper = styled.section`
  h2 {
    font-size: 18px;
    margin: 20px 0;
  }
  .document-upload-container {
    position: relative;
    width: 250px;
    height: 250px;
    margin: 20px 0;
    padding: 10px;
    background-color: #f6f6f8;
  }

  .upload-overlay {
    width: 100%;
    height: 100%;
    cursor: pointer;
  }

  .uploaded-document {
    width: 100%;
    height: 100%;
    cursor: pointer;
  }
  .upload-img {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .cloud-img {
    width: 80%;
    height: 80%;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  p {
    text-align: center;
    font-size: 17px;
  }

  .upload-text {
    margin: 0;
    text-align: center;
    color: #555;
  }
`
export default UploadDocument
