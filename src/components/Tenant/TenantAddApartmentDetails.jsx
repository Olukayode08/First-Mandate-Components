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
            <div className='section'>
              <div className='input'>
                <label>Location</label>
                <input
                  type='text'
                  placeholder='Enter Address'
                  className='t-name-input'
                />
              </div>
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
            <div className='rent-status'>
              <label>Rent Payment Status</label>
              <p className='not-p'>Not Paid</p>
            </div>
            <div className='due-date'>
              <label>Rent Payment Due Date</label>
              <input
                type='date'
                placeholder='dd/mm/yyyy'
                className='r-date-input'
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
  position: relative;
  .ap-section {
    position: absolute;
    top: 0;
    right: 0;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: left;
    width: 78%;
    margin: 0 auto;
    padding: 20px;
  }
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
    height: 45px;
  }
  .rent-date {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    width: 500px;
    margin: 10px 0;
  }
  .r-date-input {
    height: 40px;
    width: 220px;
  }
  .due-date,
  .start-date,
  .end-date,
  .rent-status {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: left;
  }
  .due-date,
  .rent-status {
    margin: 10px 0;
  }
  .not-p {
    background-color: #ff0000;
    color: #ffffff;
    padding: 12px 0;
    width: 100px;
    text-align: center;
    border-radius: 4px;
  }
  /* Renew Status */
  .renew-status {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: left;
  }
  label {
    margin: 10px 0;
    font-size: 18px;
  }
  .radio-btns {
    display: flex;
    justify-content: space-between;
    align-items: center;
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
    color: #000;
  }
  @media screen and (max-width: 1200px) {
    .ap-section {
      width: 98%;
      left: 0;
    }
  }
  @media screen and (max-width: 600px) {
    .t-name-input {
      width: 320px;
    }
    .rent-date {
      flex-direction: column;
      width: 90%;
    }
    .end-date {
      margin-top: 10px;
    }
  }
  @media screen and (max-width: 350px) {
    .t-name-input {
      width: 280px;
    }
  }
`

export default TenantAddApartmentDetails
