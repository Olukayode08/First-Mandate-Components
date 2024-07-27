import React from 'react'
import styled from 'styled-components'
import icon from '../../assets/house-01 (1).png'
import { managerDueDates } from '../../datas/ManagerDueDates'
import { FiSearch } from 'react-icons/fi'
import { MdOutlineDelete } from 'react-icons/md'

const ManagerDueDatesTwo = () => {
  return (
    <>
      <ManagerDD>
        <section>
          <main className='due-d'>
            <div className='due-h'>
              <h3>Due Dates</h3>
              <div className='search'>
                <FiSearch />
                <input type='text' placeholder='Search' />
              </div>
            </div>
            <div className='landlord-d'>
              {managerDueDates.map((dueDates) => {
                return (
                  <div key={dueDates.id} className='dates'>
                    <img src={icon} alt='1st Mandate' />
                    <div className='d-content'>
                      <h3>{dueDates.title}</h3>
                      <p>{dueDates.text}</p>
                      <div className='start-end-d'>
                        <p>
                          Start Date: <span>{dueDates.sDate}</span>
                        </p>
                        <p>
                          End Date: <span>{dueDates.eDate}</span>
                        </p>
                      </div>
                      <h1>
                        <span>{dueDates.amount}</span>
                      </h1>
                    </div>
                    <div className='delete-btn'>
                      <MdOutlineDelete size={20} />
                    </div>
                  </div>
                )
              })}
            </div>
          </main>
        </section>
      </ManagerDD>
    </>
  )
}
const ManagerDD = styled.section`
  .due-d {
    display: flex;
    flex-direction: column;
    width: 100%;
    background-color: #fff;
    border-radius: 4px;
    padding: 20px;
  }
  .due-h {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    gap: 10px;
  }
  .search {
    display: flex;
    gap: 10px;
    align-items: center;
    width: 320px;
    padding: 20px;
    height: 45px;
    background: #f6f6f8;
    border-radius: 5px;
  }
  input {
    border: none;
    outline: none;
    width: 150px;
    font-family: inherit;
    font-size: 15px;
  }
  .landlord-d {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 20px 0;
    gap: 20px;
  }
  .dates {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 15px;
    /* flex: 1 1 370px; */
    background: #f6f6f8;
    border-radius: 4px;
    padding: 10px 20px;
  }
  .d-content {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }
  p {
    text-align: left;
    line-height: 20px;
    font-weight: 100;
    font-size: 14px;
  }
  .start-end-d {
    display: flex;
    gap: 10px;
    align-items: center;
  }
  span {
    font-weight: 600;
  }
  .delete-btn {
    color: red;
    cursor: pointer;
  }
  @media screen and (max-width: 700px) {
    .due-h {
      flex-direction: column;
      align-items: flex-start;
    }
    .landlord-d {
      justify-content: flex-start;
    }
  }
  @media screen and (max-width: 320px) {
    .dates {
      flex: 1 1 300px;
    }
  }
`
export default ManagerDueDatesTwo
