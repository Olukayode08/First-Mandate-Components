import React from 'react'
import styled from 'styled-components'

const LandlordAddNewTenant = () => {
  return (
    <>
      <LANTenant>
        <section>
          <main className='l-section'>
            <h3>Add New Tenant</h3>
            <div className='section'>
              <div className='input'>
                <label>Name</label>
                <input
                  type='text'
                  placeholder="Enter tenant's name"
                  className='t-name-input'
                />
              </div>
            </div>
            <div className='section'>
              <div className='input'>
                <label>Email</label>
                <input
                  type='email'
                  placeholder='Enter email address'
                  className='t-name-input'
                />
              </div>
            </div>
            <div className='section'>
              <div className='input'>
                <label>Phone</label>
                <input
                  type='text'
                  placeholder='+234'
                  className='t-name-input'
                />
              </div>
            </div>
            <div className='section'>
              <div className='input'>
                <label>Phone</label>
                <input
                  type='text'
                  placeholder='+234'
                  className='t-name-input'
                />
              </div>
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
              <div className='tenants-name'>
                <p className='not-p'>Not Paid</p>
              </div>
            </div>
            <div className='due-date'>
              <label>Rent Payment Due Date</label>
              <input
                type='date'
                placeholder='dd/mm/yyyy'
                className='r-date-input'
              />
            </div>
            <button className='add-tenant'>Add Tenant</button>
          </main>
        </section>
      </LANTenant>
    </>
  )
}
const LANTenant = styled.section`
  position: relative;
  .l-section {
    position: absolute;
    top: 0;
    right: 10px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: left;
    width: 78%;
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
    font-size: 18px;
  }
  .t-name-input {
    width: 500px;
    height: 40px;
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
  .add-tenant {
    width: 180px;
    text-align: center;
    background-color: #fedf7e;
    height: 50px;
    border-radius: 3px;
    border: transparent;
    margin: 10px 0;
    font-size: 16px;
    cursor: pointer;
    color: #000;
  }
  @media screen and (max-width: 1200px) {
    .l-section {
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

export default LandlordAddNewTenant
