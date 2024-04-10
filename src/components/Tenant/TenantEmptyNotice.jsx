import React from 'react'
import styled from 'styled-components'
import icon from '../../assets/undraw_new_notifications_re_xpcv.png'
const TenantEmptyNotice = () => {
  return (
    <>
      <TenantEN>
        <section>
          <div className='e-section'>
            <img src={icon} alt='House' />
            <p>No notice has been sent.</p>
          </div>
        </section>
      </TenantEN>
    </>
  )
}
const TenantEN = styled.section`
  .e-section {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 80vh;
    width: 100%;
    background-color: #ffffff;
    padding: 20px;
  }
  p {
    margin: 30px 0;
    text-align: center;
    line-height: 22px;
  }
  @media screen and (max-width: 900px) {
    img {
      width: 25%;
    }
  }
`
export default TenantEmptyNotice
