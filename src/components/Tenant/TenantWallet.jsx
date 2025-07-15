import React from 'react'
import styled from 'styled-components'
import { GoArrowDownLeft } from 'react-icons/go'
import { GoArrowUpRight } from 'react-icons/go'
import { tenantWallet } from '../../datas/constants'

const TenantWallet = () => {
  return (
    <>
      <TenantW>
        <section>
          <main>
            <h1>My Wallet</h1>
            {tenantWallet.map((wallet)=>{
                return (
                  <div key={wallet.id} className='savings'>
                    <div className='text'>
                      <h3>{wallet.header}</h3>
                      <div className='dates'>
                        <p>
                          Date Created: <span>{wallet.dateCreated}</span>
                        </p>
                        <p>
                          Due Dates: <span>{wallet.dueDate}</span>
                        </p>
                      </div>
                      <p>
                        Savings Type: <span>{wallet.savingsType}</span>
                      </p>
                      <div className='dates'>
                        <p className='bill'>Pay Bill</p>
                        <p className='bill'>End Goal</p>
                      </div>
                    </div>
                    <div className='amt'>
                      <h1 className='amount'>{wallet.amount}</h1>
                      <span>Your Balance</span>
                      <div className='dates'>
                        <div className='deposit'>
                          Deposit <GoArrowDownLeft color='#004400' size={20} />
                        </div>
                        <div className='withdraw'>
                          Withdraw <GoArrowUpRight color='#FF0000' size={20} />
                        </div>
                      </div>
                    </div>
                  </div>
                )
            })}
           
          </main>
        </section>
      </TenantW>
    </>
  )
}
const TenantW = styled.section`
  main {
    display: flex;
    flex-direction: column;
    background-color: #fff;
    width: 100%;
    border-radius: 4px;
    padding: 20px;
  }
  h1 {
    margin: 20px 0;
  }
  .savings {
    display: flex;
    justify-content: space-between;
    background: #f6f6f8;
    padding: 20px;
    margin: 15px 0;
  }
  .text {
    display: flex;
    flex-direction: column;
    gap: 25px;
  }
  .dates {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    align-items: center;
  }
  p {
    font-style: 100;
    line-height: 24px;
  }
  span {
    font-weight: 600;
  }
  .bill {
    background-color: #fff;
    border: 1px solid black;
    padding: 10px 17px;
    border-radius: 4px;
    cursor: pointer;
  }
  .amt {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    background-color: #fff;
    padding: 20px;
    gap: 15px;
  }
  .amount {
    font-size: 30px;
    margin: 0;
    font-weight: 600;
  }
  .withdraw,
  .deposit {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 140px;
    gap: 15px;
    padding: 10px 0;
    cursor: pointer;
    border-radius: 4px;
  }
  .deposit {
    background-color: #daffda;
  }
  .withdraw {
    background-color: #ffefef;
  }
  @media screen and (max-width: 900px){
    .savings{
        flex-direction: column;
        gap: 25px;
    }
    
  }
`
export default TenantWallet