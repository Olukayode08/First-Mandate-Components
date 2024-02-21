import React, { useState } from 'react'
import styled from 'styled-components'
import cloudUpload from '../../assets/cloud-upload.png'
import UploadDocument from './UploadDocument'

const UploadPptFour = () => {
  const [images, setImages] = useState(Array.from({ length: 4 }, () => null))

  const handleImageChange = (index, event) => {
    const file = event.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = () => {
        const newImages = [...images]
        newImages[index] = reader.result
        setImages(newImages)
      }
      reader.readAsDataURL(file)
    }
  }

  return (
    <>
      <Wrapper>
        <section>
          <h2>Upload pictures of your property</h2>

          <div className='image-upload-container'>
            {images.map((image, index) => (
              <label key={index} className='upload-container'>
                <input
                  type='file'
                  accept='image/*'
                  onChange={(event) => handleImageChange(index, event)}
                  style={{ display: 'none' }}
                />
                <div className='image-overlay'>
                  {image ? (
                    <img src={image} alt={`Uploaded-img ${index + 1}`} />
                  ) : (
                    <div className='upload-image'>
                      <img
                        src={cloudUpload}
                        className='cloud-img'
                        alt='Upload-img'
                      />
                      <p>Add picture from your gallery</p>
                    </div>
                  )}
                </div>
              </label>
            ))}
          </div>

          <div className='document'>
            <UploadDocument />
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
  .image-upload-container {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    width: 100%;
  }

  .upload-container {
    position: relative;
    margin: 10px 0;
  }

  .image-overlay {
    position: relative;
    width: 250px;
    height: 250px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    background-color: #f6f6f8;
    padding: 10px;
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

  .image-overlay img {
    max-width: 100%;
    max-height: 100%;
  }

  .image-overlay:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
  }

  .image-overlay input[type='file'] {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    cursor: pointer;
  }
`
export default UploadPptFour
