import React from 'react'
import styled from 'styled-components'

const mockData = {
  countries: ['Nigeria', 'USA', 'Canada', 'UK'],
  states: {
    Nigeria: ['Lagos', 'Ogun', 'Osun'],
    USA: ['New York', 'California', 'Texas'],
    Canada: ['Ontario', 'Quebec', 'British Columbia'],
    UK: ['England', 'Scotland', 'Wales'],
  },
  cities: {
    Lagos: ['Ikeja', 'Epe', 'Ikorodu', 'Agege'],
    Ogun: ['Sagamu', 'Owode', 'Ijebu Ode'],
    Osun: ['Ife', 'Ilesa', 'Osogbo', 'Ejigbo'],
    'New York': ['New York City', 'Buffalo', 'Rochester'],
    California: ['Los Angeles', 'San Francisco', 'San Diego'],
    Texas: ['Houston', 'Dallas', 'Austin'],
    Ontario: ['Toronto', 'Ottawa', 'Mississauga'],
    Quebec: ['Montreal', 'Quebec City', 'Laval'],
    'British Columbia': ['Vancouver', 'Victoria', 'Burnaby'],
    England: ['London', 'Manchester', 'Birmingham'],
    Scotland: ['Glasgow', 'Edinburgh', 'Aberdeen'],
    Wales: ['Cardiff', 'Swansea', 'Newport'],
  },
}

const LandlordCountryDropdown = ({
  handleChangeAddProperty,
  addProperty,
  setAddProperty,
}) => {
  const handleCountryChange = (e) => {
    const { value } = e.target
    setAddProperty({
      ...addProperty,
      country: value,
      state: '',
      city: '',
    })
  }

  const handleStateChange = (e) => {
    const { value } = e.target
    setAddProperty({
      ...addProperty,
      state: value,
      city: '',
    })
  }

  return (
    <>
      <LCountryD>
        <section className='select-section'>
          <div className='select'>
            <select
              name='country'
              value={addProperty.country}
              onChange={handleCountryChange}
              required
            >
              <option value=''>Country</option>
              {mockData.countries.map((country) => (
                <option key={country} value={country}>
                  {country}
                </option>
              ))}
            </select>
          </div>

          <div className='select'>
            <select
              name='state'
              value={addProperty.state}
              onChange={handleStateChange}
              disabled={!addProperty.country}
              required
            >
              <option value=''>State</option>
              {addProperty.country &&
                mockData.states[addProperty.country].map((state) => (
                  <option key={state} value={state}>
                    {state}
                  </option>
                ))}
            </select>
          </div>

          <div className='select'>
            <select
              name='city'
              value={addProperty.city}
              onChange={handleChangeAddProperty}
              disabled={!addProperty.state}
              required
            >
              <option value=''>City</option>
              {addProperty.state &&
                mockData.cities[addProperty.state].map((city) => (
                  <option key={city} value={city}>
                    {city}
                  </option>
                ))}
            </select>
          </div>
        </section>
      </LCountryD>
    </>
  )
}
const LCountryD = styled.section`
  .select-section {
    display: flex;
    gap: 20px;
    margin: 10px 0;
  }
  .select {
    width: 200px;
    height: 48px;
    border: 1px solid black;
    padding: 0 15px;
    border-radius: 5px;
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
  option {
    flex-shrink: 0;
  }

  @media screen and (max-width: 700px) {
    .select {
      width: 100%;
    }
  }
`
export default LandlordCountryDropdown
