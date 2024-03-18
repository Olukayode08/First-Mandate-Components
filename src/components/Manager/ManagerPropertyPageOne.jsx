import React from 'react'
import styled from 'styled-components'
import { managerProperty } from '../../datas/ManagerPropertyPageOne'
import { FaRegPlusSquare } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const ManagerPropertyPageOne = () => {
  return (
    <>
      <ManagerPPO>
        <section>
          <main className='l-section'>
              <div className='a-ppt'>
                <h3>Properties</h3>
                <Link className='add-r'>
                  <h4>Add New Property</h4>
                  <FaRegPlusSquare size={20} />
                </Link>
              </div>
              <div className='l-options'>
                {managerProperty.map((property) => {
                  return (
                    <div className='options' key={property.id}>
                      <img src={property.icon} alt='Icon' />
                      <h1 className='option-h'>{property.heading}</h1>
                      <p className='option-text'>{property.street}</p>
                      <p className='option-text'>{property.type}</p>
                      <p className='option-text'>{property.unit}</p>
                      <p className='option-text'>{property.status}</p>
                    </div>
                  )
                })}
              </div>
          </main>
        </section>
      </ManagerPPO>
    </>
  )
}
const ManagerPPO = styled.section`
  position: relative;
  .l-section {
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 20px;
  }
  .a-ppt {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 98%;
    margin: 20px 0;
  }
  .add-r {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    background-color: #ffe48e;
    padding: 15px;
    font-weight: 100;
    border-radius: 10px;
    width: 250px;
    text-decoration: none;
    color: #000;
    cursor: pointer;
    font-family: inherit;
  }
  .l-options {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    gap: 20px;
  }
  .options {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 15px;
    background-color: #fff;
    flex: 1 1 320px;
    /* width: 330px; */
    height: 370px;
    border-radius: 4px;
    cursor: pointer;
  }
  img {
    width: 112px;
    height: 100px;
  }
  .option-h {
    margin: 20px 0;
  }
  .option-text {
    text-align: center;
    opacity: 0.8;
    line-height: 22px;
    margin: 5px 0;
  }
  @media screen and (max-width: 700px) {
    .a-ppt {
      flex-direction: column;
      margin: 0;
    }
    .add-r {
      margin: 20px 0;
    }
  }
  @media screen and (max-width: 500px) {
    .options {
      flex: 1 1 280px;
      /* width: 280px; */
    }
  }
`
export default ManagerPropertyPageOne
