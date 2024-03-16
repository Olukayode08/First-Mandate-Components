import React, { useState } from 'react'

const LandlordEditProperty = ({ property, onSave, onCancel }) => {
  const [editedProperty, setEditedProperty] = useState(property)

  const handleChange = (e) => {
    const { name, value } = e.target
    setEditedProperty({ ...editedProperty, [name]: value })
  }

  const handleSave = () => {
    onSave(editedProperty)
  }

  return (
    <div className='overlay'>
      <div className='overlay-content'>
        <h2>Edit Property</h2>
        <label>Title:</label>
        <input
          type='text'
          name='title'
          value={editedProperty.title}
          onChange={handleChange}
        />
        <label>Location:</label>
        <input
          type='text'
          name='location'
          value={editedProperty.location}
          onChange={handleChange}
        />
        <button onClick={handleSave}>Save</button>
        <button onClick={onCancel}>Cancel</button>
      </div>
    </div>
  )
}

export default LandlordEditProperty
