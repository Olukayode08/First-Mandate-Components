import React from 'react'
import styled from 'styled-components'
import LandlordCountryDropdown from '../Dropdowns/LandlordCountryDropdown'

const LandlordUploadPropertyOne = ({
  handleChangeAddProperty,
  addProperty,
}) => {
  return (
    <>
      <LUploadPO>
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
              <LandlordCountryDropdown
                addProperty={addProperty}
                handleChangeAddProperty={handleChangeAddProperty}
              />
            </div>
            <div className='input'>
              <label>Manager's Name</label>
              <input
                type='text'
                placeholder='Enter Full name'
                required
                name='manager_name'
                value={addProperty.manager_name}
                onChange={handleChangeAddProperty}
                autoComplete='off'
                className='name-input-field'
              />
            </div>
            <div className='input'>
              <label>Manager's Email</label>
              <input
                type='email'
                placeholder='Enter Email'
                required
                name='manager_email'
                value={addProperty.manager_email}
                onChange={handleChangeAddProperty}
                autoComplete='off'
                className='name-input-field'
              />
            </div>
            <div className='input'>
              <label>Manager's Phone</label>
              <input
                type='text'
                placeholder='+234'
                required
                name='manager_phone'
                value={addProperty.manager_phone}
                onChange={handleChangeAddProperty}
                autoComplete='off'
                className='name-input-field'
              />
            </div>
          </div>
        </section>
      </LUploadPO>
    </>
  )
}
const LUploadPO = styled.section`
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
export default LandlordUploadPropertyOne
