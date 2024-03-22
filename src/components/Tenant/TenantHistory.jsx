import React from 'react'
import styled from 'styled-components'
import TenantHistoryData from './TenantHistoryData'
import TenantHistorySidebar from './TenantHistorySidebar'
import { ImSearch } from 'react-icons/im'
import icon from '../../assets/filter-horizontal.png'


const TenantHistory = () => {
  return (
    <>
      <TenantH>
        <section>
          <main className='t-history'>
            <div className='h-data'>
              <div className='transaction-s'>
                <h1>Transaction History</h1>
                <div className="search">
                  <ImSearch size={24}/>
                  <input type="text" placeholder='Search' className='search-input'/>
                  <img src={icon} alt="1st Mandate" />
                </div>
              </div>
              <TenantHistoryData />
            </div>
            <div className='t-payments'>
              <TenantHistorySidebar />
            </div>
          </main>
        </section>
      </TenantH>
    </>
  )
}

const TenantH = styled.section`
  .t-history {
    position: relative;
    width: 100%;
  }
  .h-data {
    position: absolute;
    left: 0;
    top: 0;
    display: flex;
    flex-direction: column;
    width: 79%;
  }
  .transaction-s {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 0 20px 0;
    background-color: #fff;
    padding: 10px;
  }
  .search {
    display: flex;
    align-items: center;
    gap: 10px;
    background-color: #f6f6f8;
    width: 280px;
    padding: 0 15px;
    height: 40px;
  }
  .search-input {
    outline: none;
    background: transparent;
    border: none;
    width: 100%;
    height: 100%;
    font-size: 16px;
    font-family: inherit;
  }
  .t-payments {
    position: absolute;
    right: 0;
    top: 0;
    width: 220px;
    background-color: #fff;
    z-index: 50;
  }
  @media screen and (max-width: 1250px) {
    .h-data {
      width: 100%;
    }
  }
  @media screen and (max-width: 700px) {
    .transaction-s {
      flex-direction: column;
      gap: 20px;
      justify-content: left;
      align-items: flex-start;
    }
  }
`
export default TenantHistory
