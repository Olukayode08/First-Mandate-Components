import React from 'react'
import styled from 'styled-components'
import profile from '../../assets/Frame 2007 (1).png'
import edit from '../../assets/edit-01 (2).png'
import logout from '../../assets/logout-03.png'

const ManagerProfileSettings = () => {
  return (
    <>
      <ManagerPS>
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
              {/* <h4>Notification Type</h4>
              <div className='n-s-btns'>
                <div className='n-btn'>
                  <input className='r-btn-input' type='checkbox' />
                  <p>Email</p>
                </div>
                <div className='n-btn'>
                  <input className='r-btn-input' type='checkbox' />
                  <p>Sms</p>
                </div>
              </div> */}
            </div>
          </main>
        </section>
      </ManagerPS>
    </>
  )
}
const ManagerPS = styled.section`
  position: relative;
  .l-profile-s {
    display: flex;
    flex-direction: column;
    border-radius: 4px;
    width: 100%;
    padding: 20px;
  }
  .log-out {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-bottom: 10px;
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
    width: 100%;
    margin: 10px 0;
    padding: 20px;
    background-color: #ffffff;
    box-shadow: 0px 2px 16px 0px #00000026;
  }
  .r-s-btns {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    gap: 40px;
    padding-bottom: 20px;
    margin: 20px 0;
    border-bottom: 1px solid black;
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
  .n-s-btns {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    gap: 40px;
    padding-bottom: 20px;
    margin: 10px 0;
  }
  .n-btn {
    display: flex;
    align-items: center;
    gap: 15px;
    justify-content: center;
  }
  @media screen and (max-width: 700px) {
    .profile-picture {
      align-items: center;
      justify-content: center;
    }
  }
  @media screen and (max-width: 320px) {
    .n-s-btns,
    .r-s-btns {
      gap: 10px 20px;
    }
  }
`
export default ManagerProfileSettings
