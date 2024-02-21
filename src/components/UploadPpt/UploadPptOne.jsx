import React from 'react'
import styled from 'styled-components'
import CountryDropdown from '../Dropdowns/CountryDropdown'
import PropertyTypeDropdown from '../Dropdowns/PropertyTypeDropdown'

const UploadPptOne = () => {
  return (
    <>
      <Wrapper>
        <section>
          <div className='section'>
            <div className='input'>
              <label>Property Title</label>
              <input
                type='text'
                placeholder='Enter a brief title / name of the property'
                required
                className='name-input-field'
              />
            </div>
            <div className='input'>
              <label>Address</label>
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
              <label>
                Manager's Name
                <span> (skip if you'll be managing the property yourself)</span>
              </label>
              <input
                type='text'
                placeholder='Enter Full name'
                required
                className='name-input-field'
              />
            </div>
          </div>
          <div className='location'>
            <label>Property Type</label>
            <PropertyTypeDropdown />
          </div>
          <div className='utilities'>
            <div className='checkboxes'>
              <div className='checkbox'>
                <input type='checkbox' className='checkbox-input' />
                <p className='ppt-details'>Furnished</p>
              </div>
              <div className='checkbox'>
                <input type='checkbox' className='checkbox-input' />
                <p className='ppt-details'>Serviced</p>
              </div>
              <div className='checkbox'>
                <input type='checkbox' className='checkbox-input' />
                <p className='ppt-details'>Newly built</p>
              </div>
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
    width: 50%;
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
    height: 40px;
    outline: none;
    background: transparent;
    border: 1px solid black;
    padding: 0 20px;
    font-family: inherit;
    font-weight: 17px;
    color: #000;
    border-radius: 5px;
  }
  .name-input-field {
    width: 100%;
  }
  .location {
    margin: 10px 0;
  }
  .checkboxes {
    width: 500px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-content: space-between;
    align-items: center;
    margin: 10px 0;
    border: 1px solid green;
  }
  .checkbox {
    display: flex;
    align-items: center;
    margin: 20px 0;
  }
  .ppt-details {
    margin-left: 10px;
    flex-shrink: 0;
  }
  .checkbox-input {
    /* width: 20px; */
  }
  @media screen and (max-width: 700px) {
    .input {
      width: 95%;
    }
  }
  @media screen and (max-width: 530px) {
    .checkboxes {
      width: 350px;
      grid-template-columns: repeat(2, 1fr);
    }
  }
  @media screen and (max-width: 360px) {
    .checkboxes {
      width: 300px;
      grid-template-columns: repeat(2, 1fr);
    }
  }
`
export default UploadPptOne
