import React from 'react'
import styled from 'styled-components'
import { useFirstMandateQuery } from '../../data-layer/utils'
import SkeletonPost from '../skeletons/SkeletonPost'
import usePagination from '../../hooks/usePagination'
import Pagination from '../Pagination/Pagination'
import { separateDateTime } from '../../hooks/functions'
import { FaRegPlusSquare } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import icon from '../../assets/undraw_new_notifications_re_xpcv.png'
import EmptyState from '../Globals.js/EmptyState'

const ManagerNotifications = () => {
  const { currentPage, handleNextPage, handlePrevPage, setCurrentPage } =
    usePagination('/manager/notifications')

  const { data, isLoading: pageLoading } = useFirstMandateQuery(
    `/notifications?page=${currentPage}`,
    {
      onSuccess: (data) => {},
    }
  )

  if (pageLoading) {
    return (
      <div>
        {[...Array(10).keys()].map((i) => (
          <SkeletonPost key={i} />
        ))}
      </div>
    )
  }

  if (!data || !data.data || !data.data.data || data.data.data.length === 0) {
    return (
      <div>
        <EmptyState textOne='No notifications here.' icon={icon} />
      </div>
    )
  }

  return (
    <>
      <ManagerN>
        <section>
          <main className='l-notify'>
            <div className='a-tenant'>
              <h3>Notifications</h3>
              <Link to='/manager/send-notice' className='add-r'>
                <h4>Send Notice</h4>
                <FaRegPlusSquare size={20} />
              </Link>
            </div>{' '}
            <div className='table'>
              <table>
                <thead>
                  <tr className='t-heading'>
                    <th>Date</th>
                    <th>Time</th>
                    {/* <th>Title</th>
                    <th>Section</th> */}
                    <th>Description</th>
                    <th>Status</th>
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
                          {/* <td>{notification.title}</td>
                          <td>{notification.section}</td> */}
                          <td>{notification.notification}</td>
                          <td>{notification.status}</td>
                          {/* <td>
                            <div className='n-margin'>
                              {notification.acknowledged_status}
                            </div>
                          </td> */}
                        </tr>
                      ))
                    : null}
                </tbody>
              </table>
            </div>
          </main>
          {data?.data?.total > 10 && (
            <Pagination
              currentPage={currentPage}
              totalPages={data?.data.last_page || 1}
              handlePrevPage={handlePrevPage}
              handleNextPage={handleNextPage}
              setCurrentPage={setCurrentPage}
            />
          )}
        </section>
      </ManagerN>
    </>
  )
}
const ManagerN = styled.section`
  .l-notify {
    display: flex;
    flex-direction: column;
    background-color: #fff;
    width: 100%;
    padding: 20px;
  }
  h1 {
    font-size: 18px;
    margin: 20px 0;
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
    border-radius: 4px;
    width: 150px;
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
  }
  .t-heading {
    text-align: left;
    height: 60px;
    background: #f6f6f8;
  }
  .t-notifications {
    height: 60px;
  }
  .status-m {
    border: 1px solid black;
    text-align: center;
    margin: 15px 0;
    padding: 7px 10px;
    border-radius: 4px;
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
export default ManagerNotifications
