import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { FaRegPlusSquare } from 'react-icons/fa'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import LandlordPropertiesDropdown from '../Dropdowns/LandlordPropertiesDropdown'
import LandlordEmptyProperty from './LandlordEmptyProperty'
import LandlordPropertyUnit from './LandlordPropertyUnit'
import { useFirstMandateQuery } from '../../data-layer/utils'
import iconHouse from '../../assets/Frame-2007.png'
const token = localStorage.getItem('token')

const LandlordProperties = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const searchParams = new URLSearchParams(location.search)
  const currentPageParam = parseInt(searchParams.get('page')) || 1
  const [currentPage, setCurrentPage] = useState(currentPageParam)
  const { data, isLoading: pageLoading } = useFirstMandateQuery(
    `/properties?page=${currentPage}`,
    {
      enabled: !!token,
      onSuccess: (data) => {},
    }
  )

  useEffect(() => {
    navigate(`/landlord/properties?page=${currentPage}`, { replace: true })
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [currentPage, navigate])

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1)
  }

  const handlePrevPage = () => {
    setCurrentPage(currentPage - 1)
  }
  const totalPages = data?.data?.last_page || 1

  const goToPage = (pageNumber) => {
    setCurrentPage(pageNumber)
  }

  // Calculate the starting and ending page numbers to display
  let startPage = Math.max(1, currentPage - 2)
  let endPage = Math.min(totalPages, startPage + 4)

  // If we are near the start, adjust the endPage
  if (currentPage <= 3) {
    endPage = Math.min(5, totalPages)
  }

  // If we are near the end, adjust the startPage
  if (currentPage >= totalPages - 2) {
    startPage = Math.max(1, totalPages - 4)
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
      <LandlordP>
        <section>
          <div className='m-section'>
            <Link to='/landlord/add-property' className='add-r'>
              <h4>Upload New Property</h4>
              <FaRegPlusSquare size={20} />
            </Link>
            {data &&
            data.data &&
            data.data.data &&
            data.data.data.length > 0 ? (
              data.data.data.map((property) => (
                <div key={property.uuid} className='manager-p'>
                  <div className='apart-det'>
                    <div className='apartment'>
                      <img
                        className='h-img'
                        src={iconHouse}
                        alt={property.title}
                      />
                      <div className='apart-loc'>
                        <h3>{property.title}</h3>
                        <h1>{property.address}</h1>
                        <div className='status-active'>
                          <p>
                            Status:
                            <span> Active</span>
                          </p>

                          <p>
                            Unit:
                            <span> {property.units.length} Units</span>
                          </p>
                          <p>
                            Property Type:
                            <span> {property.property_type}</span>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <LandlordPropertiesDropdown property={property} />
                    </div>
                  </div>
                  <LandlordPropertyUnit property={property} />
                </div>
              ))
            ) : (
              <div>
                <LandlordEmptyProperty />
              </div>
            )}
          </div>
          <section>
            <div className='pagination'>
              <button
                className='pag-text'
                disabled={currentPage <= 1}
                onClick={handlePrevPage}
              >
                Previous Page
              </button>
              <div className='page-numbers'>
                {/* Display first page */}
                {startPage > 1 && (
                  <button className='pag-text' onClick={() => goToPage(1)}>
                    1
                  </button>
                )}
                {/* Display ellipsis if needed */}
                {startPage > 2 && <span>...</span>}
                {/* Display page numbers */}
                {Array.from({ length: endPage - startPage + 1 }, (_, index) => (
                  <button
                    key={startPage + index}
                    className={
                      currentPage === startPage + index
                        ? 'active pag-text'
                        : 'pag-text'
                    }
                    onClick={() => goToPage(startPage + index)}
                  >
                    {startPage + index}
                  </button>
                ))}
                {/* Display ellipsis if needed */}
                {endPage < totalPages - 1 && <span>...</span>}
                {/* Display last page */}
                {endPage < totalPages && (
                  <button
                    className='pag-text'
                    onClick={() => goToPage(totalPages)}
                  >
                    {totalPages}
                  </button>
                )}
              </div>
              <button
                className='pag-text'
                disabled={currentPage >= totalPages}
                onClick={handleNextPage}
              >
                Next Page
              </button>
            </div>
          </section>
        </section>
      </LandlordP>
    </>
  )
}
const LandlordP = styled.section`
  .m-section {
    width: 100%;
    border-radius: 4px;
    padding: 20px;
  }
  .add-r {
    display: flex;
    justify-content: space-between;
    background-color: #ffe48e;
    padding: 15px;
    border-radius: 4px;
    width: 250px;
    text-decoration: none;
    color: #000;
    cursor: pointer;
    text-decoration: none;
  }
  .manager-p {
    display: flex;
    flex-direction: column;
    padding: 20px;
    width: 100%;
    background-color: #ffffff;
    margin: 20px 0;
    box-shadow: 0px 2px 16px 0px #00000026;
  }
  .apart-det {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin: 20px 0;
    width: 100%;
  }
  .apartment {
    display: flex;
    align-items: center;
    gap: 20px;
  }
  .p-img {
    width: 100px;
    height: 90px;
    border-radius: 4px;
  }
  .apart-loc {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  .status-active {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
  }
  p {
    font-weight: 200;
    text-align: left;
  }
  span {
    font-weight: 800;
  }
  @media screen and (max-width: 900px) {
    .apart-det {
      flex-direction: column;
      align-items: flex-start;
    }
    .status-active,
    .apart-loc {
      align-items: flex-start;
      justify-content: left;
    }
    .status-active {
      margin-bottom: 15px;
    }
    .h-img {
      display: none;
    }
  }
`
export default LandlordProperties
