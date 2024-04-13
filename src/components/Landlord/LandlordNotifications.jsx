import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { useFirstMandateQuery } from '../../data-layer/utils'
import LandlordEmptyNotification from './LandlordEmptyNotice'
import Pagination from '../Pagination/Pagination'
import { useNavigate, useLocation } from 'react-router-dom'

const token = localStorage.getItem('token')

const LandlordNotifications = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const searchParams = new URLSearchParams(location.search)
  const currentPageParam = parseInt(searchParams.get('page')) || 1
  const [currentPage, setCurrentPage] = useState(currentPageParam)

  const { data, isLoading: pageLoading } = useFirstMandateQuery(
    `/notifications?page=${currentPage}`,
    {
      enabled: !!token,
      onSuccess: (data) => {},
    }
  )
  const separateDateTime = (dateTimeString) => {
    const dateTime = new Date(dateTimeString)
    const date = dateTime.toLocaleDateString()
    const time = dateTime.toLocaleTimeString()
    return { date, time }
  }

  useEffect(() => {
    navigate(`/landlord/notifications?page=${currentPage}`, { replace: true })
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [currentPage, navigate])

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1)
  }

  const handlePrevPage = () => {
    setCurrentPage(currentPage - 1)
  }

  if (!data || !data.data || !data.data.data || data.data.data.length === 0) {
    return (
      <div>
        <LandlordEmptyNotification />
      </div>
    )
  }

  if (pageLoading) {
    return (
      <div className='page-spinner'>
        <div className='l-spinner'></div>
      </div>
    )
  }
  return (
    <>
      <LNotifications>
        <section>
          <main className='l-notify'>
            <h1>Notifications</h1>
            <div className='table'>
              <table>
                <thead>
                  <tr className='t-heading'>
                    <th>Date</th>
                    <th>Time</th>
                    <th>Title</th>
                    <th>Section</th>
                    <th>Description</th>
                  </tr>
                </thead>
                <tbody>
                  {data &&
                  data.data &&
                  data.data.data &&
                  data.data.data.length > 0
                    ? data.data.data.map((notification) => (
                        <tr key={notification.id} className='t-notifications'>
                          <td>
                            {separateDateTime(notification.created_at).date}
                          </td>
                          <td>
                            {separateDateTime(notification.created_at).time}
                          </td>
                          <td>{notification.title}</td>
                          <td>{notification.section}</td>
                          <td>{notification.notification}</td>
                        </tr>
                      ))
                    : null}
                </tbody>
              </table>
            </div>
            {data?.data?.total > 10 && (
              <Pagination
                currentPage={currentPage}
                totalPages={data?.data.last_page || 1}
                handlePrevPage={handlePrevPage}
                handleNextPage={handleNextPage}
                setCurrentPage={setCurrentPage}
              />
            )}
          </main>
        </section>
      </LNotifications>
    </>
  )
}
const LNotifications = styled.section`
  .l-notify {
    width: 100%;
    background-color: #fff;
    border-radius: 4px;
    padding: 20px;
  }
  h1 {
    font-size: 18px;
    margin: 20px 0;
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
  }
  .t-heading {
    text-align: left;
    height: 60px;
    background: #f6f6f8;
  }
  .t-notifications {
    height: 60px;
  }
  .n-margin {
    border: 1px solid black;
    text-align: center;
    margin: 15px 0;
    padding: 7px 10px;
    border-radius: 4px;
  }
`
export default LandlordNotifications
