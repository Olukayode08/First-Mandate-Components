import React from 'react'
import styled from 'styled-components'

const ManagerCountryDropdown = ({
  handleChangeAddProperty,
  addProperty,
}) => {

  return (
    <>
      <MCountryD>
         <section className='select-section'>
          <input
            type='text'
            name='country'
            value={addProperty.country}
            onChange={handleChangeAddProperty}
            required
            placeholder='Country eg Nigeria'
          />
          <input
            type='text'
            name='state'
            value={addProperty.state}
            onChange={handleChangeAddProperty}
            required
            placeholder='State eg Lagos'
          />
          <input
            type='text'
            name='city'
            value={addProperty.city}
            onChange={handleChangeAddProperty}
            required
            placeholder='City eg Ikeja'
          />
        </section>

      </MCountryD>
    </>
  )
}
const MCountryD = styled.section`
  .select-section {
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
    margin: 10px 0;
  }
  input {
    width: 180px;
    height: 48px;
    border: 1px solid black;
    padding: 0 15px;
    background: transparent;
    outline: none;
    font-family: inherit;
    border-radius: 5px;
  }
`
export default ManagerCountryDropdown
