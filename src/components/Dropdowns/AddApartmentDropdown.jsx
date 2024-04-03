import React from 'react'
import styled from 'styled-components'

const mockStates = ['State 1', 'State 2', 'State 3']
const mockCities = {
  'State 1': ['City 1', 'City 2', 'City 3'],
  'State 2': ['City 4', 'City 5', 'City 6'],
  'State 3': ['City 7', 'City 8', 'City 9'],
}
const AddApartmentDropdown = ({ handleChangeAddApartment, addApartment }) => {
  return (
    <>
      <AADropdown>
        <div className='add-ap'>
          <div className='ap-select'>
            <select
              name='state'
              value={addApartment.state}
              onChange={handleChangeAddApartment}
            >
              <option value=''>State</option>
              {mockStates.map((state) => (
                <option key={state} value={state}>
                  {state}
                </option>
              ))}
            </select>
          </div>
          <div className='ap-select'>
            <select
              name='city'
              value={addApartment.city}
              onChange={handleChangeAddApartment}
              disabled={!addApartment.state}
            >
              <option value=''>City</option>
              {addApartment.state &&
                mockCities[addApartment.state].map((city) => (
                  <option key={city} value={city}>
                    {city}
                  </option>
                ))}
            </select>
          </div>
        </div>
      </AADropdown>
    </>
  )
}
const AADropdown = styled.section`
  .add-ap {
    display: flex;
    gap: 20px;
    align-items: last baseline;
    width: 500px;
    margin: 20px 0 10px 0;
  }
  .ap-select {
    width: 240px;
    height: 48px;
    border: 1px solid black;
    padding: 0 15px;
    border-radius: 5px;
  }
  select {
    width: 100%;
    margin: 0 auto;
    height: 100%;
    border: transparent;
    background: transparent;
    outline: none;
    font-family: inherit;
    color: #000;
  }
  option {
    flex-shrink: 0;
  }
  @media screen and (max-width: 550px) {
    .add-ap {
      width: 95%;
    }
    .ap-select {
      width: 90%;
    }
  }
`
export default AddApartmentDropdown
