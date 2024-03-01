import React from 'react'
import styled from 'styled-components'
import houseIcon from '../../assets/Frame-2007.png'
import { FaRegPlusSquare } from 'react-icons/fa'
import ManagerProperties from '../Properties/ManagerProperties'
import { Link } from 'react-router-dom'

const ManagerPropertyPageTwo = () => {
  return (
    <>
      <ManagerPPT>
        <section>
          <div className='m-section'>
            <div className='a-ppt'>
              <h3>Properties</h3>
              <Link to='/manager/add-reminder' className='add-r'>
                <h4>Add New Reminder</h4>
                <FaRegPlusSquare size={20} />
              </Link>
            </div>
            <div className='manager-p'>
              <div className='apart-det'>
                <img className='a-img' src={houseIcon} alt='House' />
                <div className='apart-loc'>
                  <h3 className='h-name'>House of Elovia</h3>
                  <h1 className='location'>
                    17, Street 7, GRA, Osogbo, Osun State.
                  </h1>
                  <div className='status-active'>
                    <p>
                      Status:
                      <span> Active</span>
                    </p>
                    <p>
                      Property Type:
                      <span> Residential</span>
                    </p>
                    <p>
                      Unit:
                      <span> 1 unit</span>
                    </p>
                    <p>
                      Building Type:
                      <span> Duplex</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className='m-property'>
                <ManagerProperties />
              </div>
            </div>
          </div>
        </section>
      </ManagerPPT>
    </>
  )
}
const ManagerPPT = styled.section`
  position: relative;
  .m-section {
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
    border-radius: 10px;
    width: 250px;
    text-decoration: none;
    color: #000;
    cursor: pointer;
  }
  .manager-p {
    display: flex;
    flex-direction: column;
    padding: 20px;
    width: 100%;
    box-shadow: 0px 2px 16px 0px #00000026;
  }
  .apart-det {
    display: flex;
    align-items: center;
    gap: 20px;
    margin: 20px 0;
    width: 100%;
  }
  .a-img{
    width: 100px;
    height: 90px;
    border-radius: 4px;
  }
  .apart-loc {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
  .h-name {
    margin: 0 5px;
  }
  .location {
    margin: 7px 5px;
  }
  .status-active {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 70%;
  }
  p {
    font-weight: 200;
    margin: 3px 5px;
    text-align: center;
  }
  span {
    font-weight: 800;
  }
  @media screen and (max-width: 1270px) {
    .m-section {
      width: 75%;
    }
    .a-ppt {
      width: 80%;
      margin: 10px auto;
    }
  }
  @media screen and (max-width: 1200px) {
    .m-section {
      width: 100%;
      left: 0;
    }
  }
  @media screen and (max-width: 900px) {
    .apart-det {
      width: 100%;
      justify-content: center;
      flex-direction: column;
    }
    .status-active,
    .apart-loc {
      align-items: center;
      justify-content: center;
    }
    .h-name,
    .location {
      text-align: center;
    }
    .h-name {
      margin: 10px 0;
    }
    .a-ppt {
      flex-direction: column;
    }
    .add-r {
      margin: 20px 0 10px 0;
    }
  }
  @media screen and (max-width: 700px) {
    .status-active {
      width: 95%;
    }
    p {
      margin: 10px;
    }
  }
`
export default ManagerPropertyPageTwo
