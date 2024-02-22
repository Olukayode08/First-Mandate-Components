import React from 'react'
import styled from 'styled-components'

const AddNewTenant = () => {
  return (
    <>
      <Wrapper>
        <section>
          <h3>Add New Tenant</h3>
          <div className='section'>
            <div className='input'>
              <label>Name</label>
              <div className='tenants-name'>
                <input
                  type='text'
                  placeholder="Enter tenant's name"
                  className='t-name-input'
                />
              </div>
            </div>
          </div>
          <div className='section'>
            <div className='input'>
              <label>Email</label>
              <div className='tenants-name'>
                <input
                  type='email'
                  placeholder='Enter email address'
                  className='t-name-input'
                />
              </div>
            </div>
          </div>
          <div className='section'>
            <div className='input'>
              <label>Phone</label>
              <div className='tenants-name'>
                <input
                  type='text'
                  placeholder='+234'
                  className='t-name-input'
                />
              </div>
            </div>
          </div>
          <div className='section'>
            <div className='input'>
              <label>Phone</label>
              <div className='tenants-name'>
                <input
                  type='text'
                  placeholder='+234'
                  className='t-name-input'
                />
              </div>
            </div>
          </div>
          <div className='rent-date'>
            <div className='start-date'>
              <label>Rent Start Date</label>
              <input type='date' className='r-date-input' />
            </div>
            <div className='end-date'>
              <label>Rent End Date</label>
              <input type='date' className='r-date-input' />
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
            <input type='date' className='r-date-input' />
          </div>
        </section>
      </Wrapper>
    </>
  )
}
const Wrapper = styled.section`
  section {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: left;
    width: 58%;
    margin: 0 auto;
    border: 1px solid red;
    padding: 20px 0;
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
    width: 60%;
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
  .due-date ,.rent-status {
    margin: 10px 0;
  }
  .not-p {
    background-color: #ff0000;
    color: #ffffff;
    padding: 15px 0;
    width: 100px;
    text-align: center;
    border-radius: 4px;
  }
 
  @media screen and (max-width: 1000px) {
    section {
      width: 90%;
    }
  }
  @media screen and (max-width: 600px) {
    .t-name-input {
      width: 350px;
    }
  }
  @media screen and (max-width: 350px) {
    .t-name-input {
      width: 280px;
    }
  }
`

export default AddNewTenant
