import React from 'react'
import styled from 'styled-components'

const ManagerAddNewLandlord = () => {
  return (
    <>
      <MANLandlord>
        <section className='m-section'>
          <main>
            <h3>Add Landlord Details</h3>
            <div className='input'>
              <label>Name</label>
              <input
                type='text'
                placeholder="Enter manager's name"
                className='t-name-input'
              />
            </div>
            <div className='input'>
              <label>Email</label>
              <input
                type='email'
                placeholder='Enter email address'
                className='t-name-input'
              />
            </div>
            <div className='input'>
              <label>Phone</label>
              <input type='text' placeholder='+234' className='t-name-input' />
            </div>
            <div className='input'>
              <label>Phone</label>
              <input type='text' placeholder='+234' className='t-name-input' />
            </div>
            <div className='input'>
              <label>Property Name</label>
              <input type='text' className='t-name-input' />
            </div>
            <button className='add-manager'>Add Landlord</button>
          </main>
        </section>
      </MANLandlord>
    </>
  )
}
const MANLandlord = styled.section`
  .m-section {
    display: flex;
    flex-direction: column;
    background-color: #fff;
    width: 100%;
    border-radius: 4px;
    padding: 20px;
  }
  h3 {
    margin: 15px 0;
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
    font-size: 17px;
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
  .add-manager {
    width: 180px;
    text-align: center;
    background-color: #fedf7e;
    height: 48px;
    border-radius: 4px;
    border: transparent;
    margin: 10px 0;
    font-size: 16px;
    cursor: pointer;
    color: #000;
  }
  @media screen and (max-width: 550px) {
    .t-name-input {
      width: 96%;
    }
  }
`

export default ManagerAddNewLandlord
