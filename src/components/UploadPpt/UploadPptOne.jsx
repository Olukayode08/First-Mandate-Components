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
              />
            </div>
            <div className='input'>
              <label>Address</label>
              <input type='text' placeholder='Enter address' required />
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
              <input type='text' placeholder='Enter Full name' required />
            </div>
          </div>
          <div className='location'>
            <label>Property Type</label>
            <PropertyTypeDropdown />
          </div>
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
    width: 100%;
    height: 40px;
    outline: none;
    border: 1px solid black;
    padding: 0 20px;
    font-family: inherit;
    font-weight: 17px;
    color: #000;
    border-radius: 5px;
  }
  .location {
    margin: 10px 0;
  }
  .checkboxes {
    width: 500px;
  }
  .checkbox,
  .checkboxes {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 10px 0;
  }
  .ppt-details {
    margin-left: 10px;
    flex-shrink: 0;
  }
  .checkbox-input {
    /* width: 20px; */
  }
  @media screen and (max-width: 800px) {
    .input {
      width: 95%;
    }
  }
  @media screen and (max-width: 600px) {
    .checkboxes {
      width: 80%;
      flex-wrap: wrap;
    }
  }
`
export default UploadPptOne
