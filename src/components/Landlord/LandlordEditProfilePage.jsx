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
                    <h1 className='t-name'>Peace</h1>
                  </div>
                  <div className='input'>
                    <h1>Last Name</h1>
                    <h1 className='t-name'>Adekola</h1>
                  </div>
                </div>
                <div className='t-details'>
                  <div className='input'>
                    <h1>Email address</h1>
                    <h1 className='t-name'>peaceadekola2@gmail.com</h1>
                  </div>
                  <div className='input'>
                    <h1>Phone</h1>
                    <h1 className='t-name'>+234 814 6573 112</h1>
                  </div>
                </div>
                <div className='t-details'>
                  <div className='input'>
                    <h1>Whatsapp Number</h1>
                    <h1 className='t-name'>+234 814 6573 112</h1>
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
  position: relative;
  .a-section {
    position: absolute;
    right: 0;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    width: 78%;
    margin: 0 auto;
    padding: 20px;
  }
  h3 {
    margin: 20px 0;
  }
  .rent-sec {
    width: 100%;
    padding: 20px;
    background-color: #ffffff;
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
  }
  .input {
    display: flex;
    flex-direction: column;
    padding: 10px 0;
    width: 47%;
    margin: 10px 0;
    border-bottom: 1px solid black;
  }
  .t-name {
    margin: 17px 0 15px 17px;
    opacity: 0.7;
  }
  .save-edits {
    position: absolute;
    bottom: 0;
    right: 0;
    background: #f6f6f8;
    padding: 10px 15px;
    border-radius: 4px;
    font-size: 15px;
    cursor: pointer;
  }

  @media screen and (max-width: 1270px) {
    .a-section {
      width: 75%;
    }
  }
  @media screen and (max-width: 1200px) {
    .a-section {
      width: 100%;
      left: 0;
    }
  }
  @media screen and (max-width: 900px) {
    .t-details {
      flex-direction: column;
      position: static;
    }
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
      align-items: center;
      justify-content: center;
    }
    .t-name {
      margin: 15px 0;
    }
  }
  @media screen and (max-width: 320px) {
    .input {
      width: 200px;
    }
  }
`
export default LandlordEditProfilePage
