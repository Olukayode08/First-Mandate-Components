import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { FaRegPlusSquare } from 'react-icons/fa'
import icon from '../../assets/empty-house-01 (2).png'
const LandlordEmptyTenant = () => {
  return (
    <>
      <LandlordET>
        <section>
          <div className='e-section'>
            <img src={icon} alt='House' />
            <div className='content'>
              <p>Yoy have not added a tenant yet.</p>
              <p>Please add tenants to see the list of your tenants.</p>
            </div>
            <Link className='add-r'>
              <h4>Add New Tenant</h4>
              <FaRegPlusSquare size={20} />
            </Link>
          </div>
        </section>
      </LandlordET>
    </>
  )
}
const LandlordET = styled.section`
  section {
    position: relative;
  }
  .e-section {
    position: absolute;
    top: 20px;
    right: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 81%;
    background-color: #ffffff;
    padding: 20px;
  }
  .content {
    margin: 30px 0;
  }
  p {
    text-align: center;
    line-height: 27px;
  }
  .add-r {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #ffe48e;
    gap: 15px;
    padding: 15px;
    border-radius: 4px;
    width: 250px;
    color: #000;
    cursor: pointer;
    text-decoration: none;
  }
  @media screen and (max-width: 1350px) {
    .e-section {
      width: 79%;
    }
  }
  @media screen and (max-width: 1250px) {
    .e-section {
      width: 100%;
      left: 0;
      /* top: 0; */
      padding: 10px;
    }
  }
  @media screen and (max-width: 900px) {
    img {
      width: 20%;
    }
  }
`
export default LandlordEmptyTenant
