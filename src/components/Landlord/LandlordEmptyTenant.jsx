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
            <Link to='/landlord/add-tenant' className='add-r'>
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
  @media screen and (max-width: 900px) {
    img {
      width: 20%;
    }
  }
`
export default LandlordEmptyTenant
