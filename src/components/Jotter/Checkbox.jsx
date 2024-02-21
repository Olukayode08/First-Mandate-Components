import React, { useState } from 'react'

const Checkbox = () => {
  const [images, setImages] = useState(Array.from({ length: 4 }, () => null))

  const handleImageUpload = (index, event) => {
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
    <div className='image-uploader'>
      {images.map((image, index) => (
        <div key={index} className='image-container'>
          {image && <img src={image} alt={`Uploaded ${index + 1}`} />}
          <label htmlFor={`image-upload-${index}`} className='image-overlay'>
            {image ? 'Change Image' : 'Upload Image'}
          </label>
          <input
            type='file'
            id={`image-upload-${index}`}
            accept='image/*'
            onChange={(e) => handleImageUpload(index, e)}
            style={{ display: 'none' }}
          />
        </div>
      ))}
    </div>
  )
}

export default Checkbox
