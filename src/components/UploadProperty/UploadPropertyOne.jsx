import React from 'react'
import styled from 'styled-components'
import CountryDropdown from '../Dropdowns/CountryDropdown'
const UploadPropertyOne = () => {
  return (
    <>
      <UploadPO>
        <section>
          <div className='section'>
            <div className='input'>
              <label>Property Title*</label>
              <input
                type='text'
                placeholder='Enter a brief title / name of the property'
                required
                className='name-input-field'
              />
            </div>
            <div className='input'>
              <label>Area*</label>
              <input
                type='text'
                placeholder='eg GRA, Egbeda, Oke-Ado'
                required
                className='name-input-field'
              />
            </div>
            <div className='location'>
              <label>Location</label>
              <CountryDropdown />
            </div>
            <div className='input'>
              <label>Manager's Name</label>
              <input
                type='text'
                placeholder='Enter Full name'
                required
                className='name-input-field'
              />
            </div>
            <div className='input'>
              <label>Manager's Email</label>
              <input
                type='email'
                placeholder='Enter Email'
                required
                className='name-input-field'
              />
            </div>
            <div className='input'>
              <label>Manager's Phone</label>
              <input
                type='text'
                placeholder='+234'
                required
                className='name-input-field'
              />
            </div>
          </div>
        </section>
      </UploadPO>
    </>
  )
}
const UploadPO = styled.section`
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
export default UploadPropertyOne
