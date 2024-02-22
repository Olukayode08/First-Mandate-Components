import React from 'react'
import styled from 'styled-components'
import CountryDropdown from '../Dropdowns/CountryDropdown'
const UploadPptOne = () => {
  return (
    <>
      <Wrapper>
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
          <div className='section'>
            <label>No. of Units</label>
            <div className='units'>
              <select id='unit' required className='no-of-unit'>
                <option value='one'>1</option>
                <option value='two'>2</option>
                <option value='three'>3</option>
                <option value='four'>4</option>
                <option value='five'>5</option>
                <option value='six'>6</option>
              </select>
            </div>
          </div>
        </section>
      </Wrapper>
    </>
  )
}
const Wrapper = styled.section`
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
    width: 60%;
    margin: 10px 0;
  }
  label {
    margin: 10px 0;
    font-size: 18px;
  }
  span {
    color: red;
    font-size: 13px;
  }
  input {
    outline: none;
    background: transparent;
    border: 1px solid black;
    padding: 0 20px;
    font-family: inherit;
    font-weight: 17px;
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
  .units {
    width: 100px;
    margin: 10px 0;
    height: 40px;
    padding: 0 10px;
    border: 1px solid black;
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
export default UploadPptOne
