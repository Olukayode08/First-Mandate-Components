import React from 'react'
import styled from 'styled-components'
import profile from '../../assets/Frame 2007 (1).png'
import edit from '../../assets/edit-01 (2).png'
import logout from '../../assets/logout-03.png'

const LandlordProfileSettings = () => {
  return (
    <>
      <LandlordPS>
        <section>
          <main className='l-profile-s'>
            <div className='log-out'>
              <h3>My Profile</h3>
              <div className='logout-btn'>
                <img src={logout} alt='Edit-Profile' />
                <p>Logout</p>
              </div>
            </div>
            <div className='profile-picture'>
              <img className='p-img' src={profile} alt='Profile' />
              <div className='edit-p'>
                <img src={edit} alt='Edit-Profile' />
                <p>Edit Profile</p>
              </div>
              <p>Peace Adekola</p>
              <p>08146573112</p>
              <p>peaceadekola2@gmail.com</p>
            </div>
            <h3 className='p-settings'>Settings</h3>
            <div className='profile-s'>
              <h4>User Role Selection</h4>
              <div className='r-s-btns'>
                <div className='r-btn'>
                  <p>Landlord</p>
                  <input className='r-btn-input' type='radio' />
                </div>
                <div className='r-btn'>
                  <p>Manager</p>
                  <input className='r-btn-input' type='radio' />
                </div>
                <div className='r-btn'>
                  <p>Tenant</p>
                  <input className='r-btn-input' type='radio' />
                </div>
              </div>
            </div>
          </main>
        </section>
      </LandlordPS>
    </>
  )
}
const LandlordPS = styled.section`
  position: relative;
  .l-profile-s {
    position: absolute;
    right: 10px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    width: 78%;
    margin: 0 auto;
    padding: 20px;
  }
  .log-out {
    margin: 10px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }
  .logout-btn {
    background: #ffdfe2;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 120px;
    color: #000;
    padding: 4px 15px;
    margin: 10px 0;
    border-radius: 4px;
    cursor: pointer;
    color: #ff0000;
  }
  .profile-picture {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 20px;
    margin: 10px 0;
    background-color: #ffffff;
    box-shadow: 0px 2px 16px 0px #00000026;
  }
  .p-img {
    width: 80px;
    height: 80px;
    margin: 15px 0;
  }
  .edit-p {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 130px;
    background: #f6f6f8;
    color: #000;
    padding: 10px;
    margin: 10px 0;
    border-radius: 4px;
    cursor: pointer;
  }
  p {
    margin: 10px 0;
  }
  .p-settings {
    margin: 20px 0;
  }
  .profile-s {
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: left;
    width: 100%;
    margin: 10px 0;
    padding: 20px;
    background-color: #ffffff;
    box-shadow: 0px 2px 16px 0px #00000026;
  }
  .r-s-btns {
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
    margin: 10px 0;
  }
  .r-btn {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .r-btn-input {
    width: 18px;
    height: 18px;
  }
  @media screen and (max-width: 1270px) {
    .l-profile-s {
      width: 75%;
    }
  }
  @media screen and (max-width: 1200px) {
    .l-profile-s {
      width: 100%;
      left: 0;
    }
  }
  @media screen and (max-width: 700px) {
    .log-out {
      align-items: center;
      justify-content: center;
      flex-direction: column;
    }
  }
`
export default LandlordProfileSettings
