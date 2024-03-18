import React from 'react'
import styled from 'styled-components'
import icon from '../../assets/house-01 (1).png'
import { landlordDueDates } from '../../datas/LandlordDueDates'

const LandlordDueDates = () => {
  return (
    <>
      <LandlordDD>
        <section>
          <main className='due-d'>
            <h3>Due Dates</h3>
            <div className='landlord-d'>
              {landlordDueDates.map((dueDates) => {
                return (
                  <div key={dueDates.id} className='dates'>
                    <img src={icon} alt='1st Mandate' />
                    <div className='d-content'>
                      <h3>{dueDates.title}</h3>
                      <p>{dueDates.text}</p>
                      <p>
                        Start Date: <span>{dueDates.sDate}</span>
                      </p>
                      <p>
                        End Date: <span>{dueDates.eDate}</span>
                      </p>
                      <p>
                        <span>{dueDates.amount}</span>
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </main>
        </section>
      </LandlordDD>
    </>
  )
}
const LandlordDD = styled.section`
  .due-d {
    display: flex;
    flex-direction: column;
    width: 100%;
    background-color: #fff;
    border-radius: 4px;
    padding: 20px;
  }
  .landlord-d {
    display: flex;
    flex-wrap: wrap;
    margin: 20px 0;
    gap: 20px;
  }
  .dates {
    display: flex;
    align-items: flex-start;
    justify-content: left;
    gap: 15px;
    flex: 1 1 320px;
    background: #f6f6f8;
    border-radius: 4px;
    padding: 10px;
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
    max-width: 300px;
  }
  span {
    font-weight: 600;
  }
  @media screen and (max-width: 320px) {
    .dates {
      flex: 1 1 300px;
    }
  }
`
export default LandlordDueDates
