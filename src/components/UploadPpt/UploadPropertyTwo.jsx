import React from 'react'
import styled from 'styled-components'
import CountryDropdown from '../Dropdowns/CountryDropdown'
const UploadPropertyTwo = () => {
  return (
    <>
      <UploadPT>
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
              <label>Address*</label>
              <input
                type='text'
                placeholder='Enter address'
                required
                className='name-input-field'
              />
            </div>
          </div>
          <div className='location'>
            <label>Location</label>
            <CountryDropdown />
          </div>
          <div className='section'>
            <div className='input'>
              <label>Manager's Name</label>
              <input
                type='text'
                placeholder='Enter Full name'
                required
                className='name-input-field'
              />
            </div>
          </div>
          <div className='section'>
            <div className='input'>
              <label>Manager's Email</label>
              <input
                type='email'
                placeholder='Enter Email'
                required
                className='name-input-field'
              />
            </div>
          </div>
          <div className='section'>
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
      </UploadPT>
    </>
  )
}
const UploadPT = styled.section`
  .section {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: left;
    width: 100%;
  }
  .input {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: left;
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
    height: 40px;
  }
  .location {
    margin: 10px 0;
  }
  select {
    width: 100%;
    margin: 0 auto;
    height: 100%;
    background: transparent;
    border: transparent;
    outline: none;
    color: #000;
    font-family: inherit;
  }
  @media screen and (max-width: 700px) {
    .input {
      width: 95%;
    }
  }
`
export default UploadPropertyTwo