import React, { useState } from 'react'
import styled from 'styled-components'
import { FaRegPlusSquare } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
import LandlordEmptyManager from './LandlordEmptyManager'
import { useFirstMandateQuery } from '../../data-layer/utils'
const token = localStorage.getItem('token')

const LandlordManagers = () => {
  const navigate = useNavigate()
  const [currentPage, setCurrentPage] = useState(1)

  const { data, isLoading: pageLoading } = useFirstMandateQuery(
    `/property-managers?page=${currentPage}`,
    {
      enabled: !!token,
      onSuccess: (data) => {},
    }
  )
  const handleNextPage = () => {
    setCurrentPage(currentPage + 1)
  }

  const handlePrevPage = () => {
    setCurrentPage(currentPage - 1)
  }

  if (pageLoading) {
    return (
      <div className='page-spinner'>
        <div className='l-spinner'></div>
      </div>
    )
  }
  // console.log(data.data.current_page)

  return (
    <>
      <LManager>
        <section>
          <main className='a-t-section'>
            <div className='a-tenant'>
              <h3>My Manager</h3>
              <Link to='/landlord/add-manager' className='add-r'>
                <h4>Add New Manager</h4>
                <FaRegPlusSquare size={20} />
              </Link>
            </div>
            <div className='table'>
              <table>
                <thead>
                  <tr className='l-m-heading'>
                    <th>Managers's Name</th>
                    <th>Email</th>
                    <th>Phone Number</th>
                    <th>Property Title</th>
                    <th>Property Address</th>
                    <th>Edit Manager</th>
                  </tr>
                </thead>
                <tbody>
                  {data &&
                  data.data &&
                  data.data.data &&
                  data.data.data.length > 0
                    ? data.data.data.map((list) => (
                        <tr key={list.uuid} className='m-list'>
                          <td>{list.name}</td>
                          <td>{list.email}</td>
                          <td>{list.phone}</td>
                          <td>{list.property.title}</td>
                          <td>{list.property.address}</td>
                          {/* <td
                            onClick={() =>
                              navigate(`/landlord/managers/${list.uuid}`)
                            }
                          >
                            View Manager
                          </td> */}
                          <td
                            onClick={() =>
                              navigate(
                                `/landlord/add-manager/${list.property.uuid}/${list.uuid}/edit`
                              )
                            }
                          >
                            <div className='margin-r'>Edit Manager</div>
                          </td>
                        </tr>
                      ))
                    : null}
                </tbody>
              </table>
              {!pageLoading && !data.data.data?.length && (
                <div>
                  <LandlordEmptyManager />
                </div>
              )}
            </div>
            {data.data.last_page > 1 && (
              <div className='pagination'>
                <button
                  className='pag-text'
                  disabled={currentPage === 1}
                  onClick={handlePrevPage}
                >
                  Previous Page
                </button>
                <button
                  className='pag-text'
                  disabled={currentPage === data.data.last_page}
                  onClick={handleNextPage}
                >
                  Next Page
                </button>
              </div>
            )}
          </main>
        </section>
      </LManager>
    </>
  )
}
const LManager = styled.section`
  .a-t-section {
    width: 100%;
    background-color: #fff;
    border-radius: 4px;
    padding: 20px;
  }
  .a-tenant {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
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
    text-decoration: none;
  }
  .table {
    overflow-x: scroll;
    width: 100%;
  }
  table {
    border-collapse: separate;
    border-spacing: 0 20px;
    width: 100%;
  }
  th,
  td {
    white-space: nowrap;
    padding: 0 20px;
    text-align: left;
  }
  .l-m-heading {
    text-align: center;
    height: 60px;
    background: #f6f6f8;
  }
  .m-list {
    height: 60px;
  }
  .margin-r {
    margin: 5px 0;
    padding: 10px 5px;
    border-radius: 4px;
    background-color: #f6f6f8;
    cursor: pointer;
    text-align: center;
  }
  .pagination {
    display: flex;
    align-items: center;
    gap: 10px;
    justify-content: flex-end;
    width: 100%;
    margin: 20px 0;
  }
  .pag-text {
    background: transparent;
    border: 1px solid black;
    padding: 10px 15px;
    border-radius: 4px;
    cursor: pointer;
  }
  button:disabled {
    cursor: not-allowed;
  }
  @media screen and (max-width: 900px) {
    .a-tenant {
      flex-direction: column;
    }
    .add-r {
      margin: 20px 0 10px 0;
    }
  }
`
export default LandlordManagers
