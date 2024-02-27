import React from 'react'
import styled from 'styled-components'

const ManagerAddNewLandlord = () => {
  return (
    <>
      <ManagerANL>
        <section>
          <main className='m-section'>
            <h3>Add Landlord Details</h3>
            <div className='section'>
              <div className='input'>
                <label>Name</label>
                <input
                  type='text'
                  placeholder="Enter manager's name"
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
            <div className='section'>
              <div className='input'>
                <label>Property Name</label>
                <input type='text' className='t-name-input' />
              </div>
            </div>
            <button className='add-manager'>Add Landlord</button>
          </main>
        </section>
      </ManagerANL>
    </>
  )
}
const ManagerANL = styled.section`
  position: relative;
  .m-section {
    position: absolute;
    top: 0;
    right: 10px;
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
  }
  label {
    margin: 10px 0;
    font-size: 18px;
  }
  .t-name-input {
    width: 500px;
    height: 50px;
  }
  .add-manager {
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
  @media screen and (max-width: 1270px) {
    .m-section {
      width: 75%;
    }
  }
  @media screen and (max-width: 1200px) {
    .m-section {
      width: 98%;
      left: 0;
    }
  }
  @media screen and (max-width: 600px) {
    .t-name-input {
      width: 320px;
      height: 40px;
    }
  }
  @media screen and (max-width: 350px) {
    .t-name-input {
      width: 280px;
    }
  }
`

export default ManagerAddNewLandlord
