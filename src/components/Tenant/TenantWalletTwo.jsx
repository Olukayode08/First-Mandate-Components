import React from 'react'
import styled from 'styled-components'
import { FaRegPlusSquare } from 'react-icons/fa'
import { LuMinusSquare } from 'react-icons/lu'
import { MdOutlineDelete } from 'react-icons/md'
import { RiExchangeDollarLine } from 'react-icons/ri'
import { FaPlus } from 'react-icons/fa6'
import { wallets } from '../../datas/constants'

const TenantWalletTwo = () => {
  return (
    <TWalletT>
      <main className='wallet'>
        <h2>My Wallet</h2>
        <header>
          <div className='wallet-s'>
            <p>Rent Wallet</p>
            <h1 className='amt'>#999,999.99</h1>
            <div className='top-up'>
              <div className='top'>
                <FaRegPlusSquare />
                <p className='b-text'>Top Up</p>
              </div>
              <div className='with-d'>
                <LuMinusSquare />
                <p className='b-text'>Withdraw</p>
              </div>
              <div className='close'>
                <MdOutlineDelete size={20} />
                <p className='b-text'>Close</p>
              </div>
            </div>
          </div>
          <div className='saving'>
            <p>Savings Wallet</p>
            <div className='dates'>
              <p>Date Created: 10th July, 2024</p>
              <p>Last Deposit: 11th July, 2024</p>
            </div>
            <div className='deposit'>
              <p>Transaction History</p>
              <RiExchangeDollarLine />
            </div>
          </div>
        </header>
        <h2 className='m-wallet'>My Goals</h2>
        <section>
          <div className='create-w icon-g'>
            <FaPlus className='goals' />
            <div className='c-goals'>
              <p>Create New Goal</p>
              <p className='save'>Save towards your bills</p>
            </div>
          </div>
          {wallets.map((wallet) => {
            return (
              <div key={wallet.id} className='create-w goal'>
                <p className='amt-s'>{wallet.amt}</p>
                <p>{wallet.status}</p>
                <p>{wallet.text}</p>
                <div className='btns'>
                  <p className='p-btn'>Pay Now</p>
                  <MdOutlineDelete size={22} color='red' className='delete' />
                </div>
              </div>
            )
          })}
        </section>
      </main>
    </TWalletT>
  )
}

const TWalletT = styled.section`
  h2 {
    font-size: 20px;
  }
  .wallet {
    background-color: #fff;
    padding: 20px;
  }
  header {
    display: flex;
    /* justify-content: space-between; */
    gap: 20px;
  }
  .saving,
  .wallet-s {
    display: flex;
    flex-direction: column;
    gap: 15px;
    padding: 15px;
    background-color: #f6f6f8;
    border-radius: 5px;
    margin: 20px 0;
  }
  .b-text {
    font-size: 14px;
  }
  .amt {
    font-size: 25px;
    margin: 5px 0;
  }
  .dates,
  .top-up {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 15px;
  }
  .deposit,
  .top,
  .with-d,
  .close {
    display: flex;
    align-items: center;
    gap: 10px;
    cursor: pointer;
  }
  .with-d {
    padding: 10px 20px;
    border: 1px solid black;
    border-radius: 5px;
  }
  .top {
    color: #fff;
    background-color: #000;
    border-radius: 5px;
    padding: 10px 20px;
  }
  .close {
    padding: 10px 20px;
    background-color: red;
    border-radius: 5px;
    color: #fff;
  }
  .dates {
    margin: 8px 0;
    display: flex;
    flex-wrap: wrap;
  }
  .deposit {
    color: #fff;
    background-color: #000;
    padding: 14px 20px;
    width: 230px;
    border-radius: 5px;
  }
  .m-wallet {
    margin: 20px 0;
  }
  section {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
  }
  .create-w {
    display: flex;
    flex-direction: column;
    width: 320px;
    height: 180px;
    background-color: #fff;
    border-radius: 7px;
    box-shadow: 0px 2px 8px 0px #0000001a;
    padding: 15px;
  }
  .icon-g {
    cursor: pointer;
  }
  .goals {
    margin: 0 auto;
    border: 1px solid black;
    border-radius: 4px;
    padding: 10px;
    width: 50px;
    height: 50px;
  }
  .c-goals {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-top: 65px;
  }
  .save {
    font-size: 13px;
  }
  .goal {
    gap: 15px;
  }
  .amt-s {
    text-align: right;
  }
  .btns {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .p-btn {
    width: 200px;
    padding: 10px;
    background: #000;
    text-align: center;
    color: #fff;
    font-size: 15px;
    border-radius: 5px;
    cursor: pointer;
  }
  .delete {
    cursor: pointer;
  }
  @media screen and (max-width: 800px) {
    header {
      flex-direction: column;
    }
  }
  @media screen and (max-width: 800px) {
    .create-w {
      width: 300px;
    }
  }
`
export default TenantWalletTwo
