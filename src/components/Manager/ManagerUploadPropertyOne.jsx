import React from 'react'
import styled from 'styled-components'
import ManagerCountryDropdown from '../Dropdowns/ManagerCountryDropdown'

const ManagerUploadPropertyOne = ({
  handleChangeAddProperty,
  setAddProperty,
  addProperty,
}) => {
  return (
    <>
      <MUploadPO>
        <section>
          <div className='section'>
            <div className='input'>
              <label>Property Title*</label>
              <input
                type='text'
                placeholder='Enter a brief title / name of the property'
                required
                name='title'
                value={addProperty.title}
                onChange={handleChangeAddProperty}
                autoComplete='off'
                className='name-input-field'
              />
            </div>
            <div className='input'>
              <label>Area*</label>
              <input
                type='text'
                placeholder='eg GRA, Egbeda, Oke-Ado'
                required
                name='address'
                value={addProperty.address}
                onChange={handleChangeAddProperty}
                autoComplete='off'
                className='name-input-field'
              />
            </div>
            <div className='location'>
              <label>Location</label>
              <ManagerCountryDropdown
                addProperty={addProperty}
                handleChangeAddProperty={handleChangeAddProperty}
                setAddProperty={setAddProperty}
              />
            </div>
            <div className='input'>
              <label>Landlord's Name</label>
              <input
                type='text'
                placeholder='Enter Full name'
                required
                name='landlord_name'
                value={addProperty.landlord_name}
                onChange={handleChangeAddProperty}
                autoComplete='off'
                className='name-input-field'
              />
            </div>
            <div className='input'>
              <label>Landlord's Email</label>
              <input
                type='email'
                placeholder='Enter Email'
                required
                name='landlord_email'
                value={addProperty.landlord_email}
                onChange={handleChangeAddProperty}
                autoComplete='off'
                className='name-input-field'
              />
            </div>
            <div className='input'>
              <label>Landlord's Phone</label>
              <input
                type='text'
                placeholder='+234'
                required
                name='landlord_phone'
                value={addProperty.landlord_phone}
                onChange={handleChangeAddProperty}
                autoComplete='off'
                className='name-input-field'
              />
            </div>
          </div>
        </section>
      </MUploadPO>
    </>
  )
}
const MUploadPO = styled.section`
  .section {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
  .input {
    display: flex;
    flex-direction: column;
    width: 500px;
    margin: 10px 0;
  }
  label {
    margin: 10px 0;
    font-size: 18px;
  }
  input {
    outline: none;
    background: transparent;
    border: 1px solid black;
    padding: 0 20px;
    font-family: inherit;
    font-size: 16px;
    color: #000;
    border-radius: 2px;
  }
  .name-input-field {
    width: 100%;
    height: 48px;
  }
  .location {
    margin: 10px 0;
  }
  @media screen and (max-width: 550px) {
    .input {
      width: 95%;
    }
  }
`
export default ManagerUploadPropertyOne
