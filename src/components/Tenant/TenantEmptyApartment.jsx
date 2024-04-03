import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { FaRegPlusSquare } from 'react-icons/fa'
import icon from '../../assets/empty-house-01 (2).png'
const TenantEmptyApartment = () => {
  return (
    <>
      <TenantEA>
        <section>
          <div className='e-section'>
            <img src={icon} alt='House' />
            <p>Please rent an apartment to see rent details</p>
            <Link to='/tenant/add-apartment-details' className='add-r'>
              <h4>Rent an Apartment</h4>
              <FaRegPlusSquare size={20} />
            </Link>
          </div>
        </section>
      </TenantEA>
    </>
  )
}
const TenantEA = styled.section`
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
export default TenantEmptyApartment
