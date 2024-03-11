import React from 'react'
import styled from 'styled-components'
import profile from '../../assets/Frame 2007 (1).png'
const LandlordEditProfilePage = () => {
  return (
    <>
      <LandlordEPP>
        <section>
          <div className='a-section'>
            <h3>My Profile</h3>
            <div className='rent-sec'>
              <div className='profile-picture'>
                <img className='p-img' src={profile} alt='Profile' />
                <p className='c-picture'>Change Profile Picture</p>
              </div>
              <div className='apartment-details'>
                <div className='t-details'>
                  <div className='input'>
                    <h1>First Name</h1>
                    <input type='text' disabled placeholder='Peace' />
                  </div>
                  <div className='input'>
                    <h1>Last Name</h1>
                    <input type='text' disabled placeholder='Adekola' />
                  </div>
                </div>
                <div className='t-details'>
                  <div className='input'>
                    <h1>Email address</h1>
                    <input
                      type='text'
                      disabled
                      placeholder='peaceadekola2@gmail.com'
                    />
                  </div>
                  <div className='input'>
                    <h1>Phone</h1>
                    <input
                      type='text'
                      disabled
                      placeholder='+234 814 6573 112'
                    />
                  </div>
                </div>
                <div className='t-details'>
                  <div className='input'>
                    <h1>Whatsapp Number</h1>
                    <input
                      type='text'
                      disabled
                      placeholder='+234 814 6573 112'
                    />
                  </div>
                  <p className='save-edits'>Save Edits</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </LandlordEPP>
    </>
  )
}
const LandlordEPP = styled.section`
  .a-section {
    width: 100%;
    border-radius: 4px;
    padding: 20px;
  }
  h3 {
    margin: 10px 0 20px 0;
  }
  .rent-sec {
    width: 100%;
    padding: 20px;
    background-color: #fff;
    box-shadow: 0px 2px 16px 0px #00000026;
    display: flex;
    flex-direction: column;
  }
  .profile-picture {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .p-img {
    width: 100px;
    height: 100px;
    margin: 15px 0;
  }
  .c-picture {
    cursor: pointer;
    margin: 10px 0;
  }
  .apartment-details {
    display: flex;
    flex-direction: column;
    margin: 20px 0;
    width: 100%;
  }
  .t-details {
    display: flex;
    justify-content: space-between;
    margin: 10px 0;
    position: relative;
    width: 100%;
  }
  .input {
    display: flex;
    flex-direction: column;
    padding: 10px 0;
    width: 47%;
    margin: 10px 0;
  }
  input {
    background: transparent;
    border: none;
    border-bottom: 1px solid black;
    outline: none;
    margin: 10px 0 0 0;
    padding: 0 20px;
    height: 30px;
    font-size: 16px;
    font-family: inherit;
  }
  .save-edits {
    position: absolute;
    bottom: 20px;
    right: 0;
    background: #f6f6f8;
    padding: 10px 15px;
    border-radius: 4px;
    font-size: 15px;
    cursor: pointer;
  }
  @media screen and (max-width: 900px) {
    .t-details {
      flex-direction: column;
      position: static;
    }
    .input,
    .t-details,
    .apartment-details {
      align-items: center;
      justify-content: center;
    }
    .save-edits {
      position: static;
      text-align: center;
      margin: 20px 0;
    }
    .input {
      width: 300px;
    }
    input {
      text-align: center;
    }
  }
  @media screen and (max-width: 550px) {
    input,
    h1 {
      text-align: left;
    }
    .input,
    .apartment-details {
      align-items: flex-start;
      justify-content: left;
    }
    .save-edits,
    .input {
      width: 95%;
    }
    input {
      width: 100%;
    }
  }
`
export default LandlordEditProfilePage
