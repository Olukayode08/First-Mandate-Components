import React, {useState} from 'react'
import styled from 'styled-components'
import AddApartmentDropdown from '../Dropdowns/AddApartmentDropdown'

const TenantAddApartmentDetails = () => {
  const [rentStatus, setRentStatus] = useState('option1')

  const handleRentStatus = (e) => {
    setRentStatus(e.target.value)
  }
  return (
    <>
      <TenantAAD>
        <section>
          <div className='ap-section'>
            <h3>Add Apartment</h3>
            <div>
              <div className='input'>
                <label>Property Name</label>
                <input type='text' className='t-name-input' />
              </div>
            </div>
              <div className='input'>
                <label>Location</label>
                <input
                  type='text'
                  placeholder='Enter Address'
                  className='t-name-input'
                />
              </div>
            <div className='add-ap'>
              <AddApartmentDropdown />
            </div>
            <div className='rent-date'>
              <div className='start-date'>
                <label>Rent Start Date</label>
                <input
                  type='date'
                  placeholder='dd/mm/yyyy'
                  className='r-date-input'
                />
              </div>
              <div className='end-date'>
                <label>Rent End Date</label>
                <input
                  type='date'
                  placeholder='dd/mm/yyyy'
                  className='r-date-input'
                />
              </div>
            </div>
            <div className='input'>
              <label>Rent Payment Status</label>
              <p className='not-p'>Not Paid</p>
            </div>
            <div className='input'>
              <label>Rent Payment Due Date</label>
              <input
                type='date'
                placeholder='dd/mm/yyyy'
                className='d-date-input'
              />
            </div>

            <div className='renew-status'>
              <label>Would you love to renew your rent </label>
              <div className='radio-btns'>
                <div className='radio-btn'>
                  <input
                    type='radio'
                    value='option1'
                    checked={rentStatus === 'option1'}
                    onChange={handleRentStatus}
                    className='btn-input'
                  />
                  <p className='ppt-details'>Yes</p>
                </div>
                <div className='radio-btn'>
                  <input
                    type='radio'
                    value='option2'
                    checked={rentStatus === 'option2'}
                    onChange={handleRentStatus}
                    className='btn-input'
                  />
                  <p className='ppt-details'>No</p>
                </div>
              </div>
            </div>
            <button className='add-tenant'>Add Apartment</button>
          </div>
        </section>
      </TenantAAD>
    </>
  )
}
const TenantAAD = styled.section`
  .ap-section {
    display: flex;
    flex-direction: column;
    background-color: #fff;
    border-radius: 4px;
    padding: 20px;
    width: 100%;
  }
  .input {
    display: flex;
    flex-direction: column;
    margin: 10px 0;
  }
  input {
    outline: none;
    border: 1px solid black;
    padding: 0 20px;
    font-family: inherit;
    font-weight: 17px;
    color: #000;
    border-radius: 3px;
    background: transparent;
  }
  label {
    margin: 10px 0;
    font-size: 16px;
  }
  .t-name-input {
    width: 500px;
    height: 48px;
  }
  .rent-date {
    display: flex;
    gap: 20px;
    width: 500px;
    margin: 10px 0;
  }
  .r-date-input {
    height: 48px;
    width: 240px;
  }
  .start-date,
  .end-date {
    display: flex;
    flex-direction: column;
  }
  .not-p {
    background-color: #ff0000;
    color: #ffffff;
    padding: 12px 0;
    width: 100px;
    text-align: center;
    border-radius: 4px;
  }
  .d-date-input {
    width: 280px;
    height: 48px;
  }
  /* Renew Status */
  .renew-status {
    display: flex;
    flex-direction: column;
  }
  .radio-btns {
    display: flex;
    align-items: center;
    gap: 20px;
    margin: 10px 0;
    width: 200px;
  }
  .radio-btn {
    display: flex;
    align-items: center;
    width: 80px;
    flex-shrink: 0;
  }
  .btn-input {
    width: 18px;
    height: 18px;
  }
  .ppt-details {
    margin-left: 10px;
    flex-shrink: 0;
  }
  .add-tenant {
    width: 180px;
    text-align: center;
    background-color: #fedf7e;
    height: 50px;
    border-radius: 4px;
    border: transparent;
    margin: 10px 0;
    font-size: 16px;
    cursor: pointer;
    font-family: inherit;
    color: #000;
  }
  @media screen and (max-width: 550px) {
    .t-name-input {
      width: 95%;
    }
    .rent-date {
      width: 95%;
    }
    .start-date,
    .end-date {
      width: 50%;
    }
    .r-date-input {
      width: 86%;
    }
  }
`

export default TenantAddApartmentDetails
