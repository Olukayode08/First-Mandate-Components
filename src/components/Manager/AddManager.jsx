import React from 'react'
import styled from 'styled-components'

const AddManager = () => {
  return (
    <>
      <Wrapper>
        <section>
          <h3>Add New Manager</h3>
          <div className='section'>
            <div className='input'>
              <label>Name</label>
              <div className='tenants-name'>
                <input
                  type='text'
                  placeholder="Enter manager's name"
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
          <div className='section'>
            <div className='input'>
              <label>Property Name</label>
              <div className='tenants-name'>
                <input type='text' className='t-name-input' />
              </div>
            </div>
          </div>
          <button className='add-manager'>Add Manager</button>
        </section>
      </Wrapper>
    </>
  )
}
const Wrapper = styled.section`
  position: relative;
  section {
    position: absolute;
    top: 0;
    left: 300px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: left;
    width: 58%;
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

  @media screen and (max-width: 1100px) {
    section {
      width: 90%;
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

export default AddManager
