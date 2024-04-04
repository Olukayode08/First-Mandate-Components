import React from 'react'
import styled from 'styled-components'

const LandlordRentTermsDropdown = () => {
  return (
    <>
      <LRentTermsDD>
        <div className='rent-terms'>
          <div className='input'>
            <label>Rent term</label>
            <div className='select'>
              <select>
                <option value=''>Select Rent Terms</option>
                <option value='option1'>1 year</option>
                <option value='option2'>2 years</option>
              </select>
            </div>
          </div>
        </div>
      </LRentTermsDD>
    </>
  )
}
const LRentTermsDD = styled.section`
  .rent-terms {
    display: flex;
    gap: 30px;
  }
  .input {
    display: flex;
    flex-direction: column;
  }
  .select {
    border: 1px solid black;
    border-radius: 4px;
    padding: 0 20px;
    width: 200px;
    height: 48px;
  }
  select {
    width: 100%;
    height: 100%;
    background: transparent;
    font-family: inherit;
    outline: none;
    color: #000;
    border: none;
  }
  @media screen and (max-width: 750px) {
    .rent-terms {
      flex-direction: column;
      gap: 0px;
    }
  }
`
export default LandlordRentTermsDropdown
