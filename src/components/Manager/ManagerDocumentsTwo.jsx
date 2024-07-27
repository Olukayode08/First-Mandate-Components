import React from 'react'
import styled from 'styled-components'
import { DocumentTwo } from '../../datas/ManagerDocumentsTwo'

const ManagerDocumentsTwo = () => {
  return (
    <>
      <ManagerDT>
        <main>
          <div className='doc'>
            <h3>My Documents</h3>
            <p className='g-doc'>Generate New Document</p>
          </div>
          <div className='documents'>
            {DocumentTwo.map((document) => {
              return (
                <div key={document.id} className='docs'>
                  <img src={document.img} alt='1st Mandate' />
                  <div className='docs-text'>
                    <h2 className='docs-title'>{document.title}</h2>
                    <p className='docs-size'>{document.size}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </main>
      </ManagerDT>
    </>
  )
}
const ManagerDT = styled.section`
  main {
    margin: 20px 0;
    padding: 20px;
    background-color: #fff;
  }
  h3 {
    font-size: 19px;
  }
  .g-doc {
    background-color: #000;
    color: #fff;
    padding: 14px 14px;
    border-radius: 4px;
    cursor: pointer;
  }
  .doc {
    display: flex;
    align-items: center;
    gap: 15px;
    justify-content: space-between;
  }
  .documents {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    flex-wrap: wrap;
    margin: 20px 0;
  }
  .docs {
    display: flex;
    flex-direction: column;
    width: 250px;
    /* height: 210px; */
    cursor: pointer;
    border: 1px solid #0000004d;
    border-radius: 5px;
    padding: 15px 20px;
  }
  img {
    width: 55%;
    margin: 0 auto;
  }
  .docs-text {
    margin-top: 16px;
    border-top: 1px solid #0000004d;
    padding: 10px 0;
  }
  .docs-title {
    text-align: left;
    font-size: 16px;
    margin: 5px 0 12px 0;
  }
  .docs-size {
    font-size: 13px;
    opacity: 0.7;
  }
  @media screen and (max-width: 700px) {
    .doc {
      flex-direction: column;
    }
  }
`
export default ManagerDocumentsTwo
