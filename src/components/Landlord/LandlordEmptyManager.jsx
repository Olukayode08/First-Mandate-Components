import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { FaRegPlusSquare } from 'react-icons/fa'
import icon from '../../assets/file-02.png'
const LandlordEmptyManager = () => {
  return (
    <>
      <LandlordEM>
        <section>
          <div className='e-section'>
            <img src={icon} alt='Manager' />
            <div className='content'>
              <p>Yoy have not added a manager yet.</p>
              <p>Please add manager to see the list.</p>
            </div>
            <Link to='/landlord/add-manager' className='add-r'>
              <h4>Add New Manager</h4>
              <FaRegPlusSquare size={20} />
            </Link>
          </div>
        </section>
      </LandlordEM>
    </>
  )
}
const LandlordEM = styled.section`
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
export default LandlordEmptyManager
