import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { ImSearch } from 'react-icons/im'
import { IoMdCheckmark } from 'react-icons/io'
import { useFirstMandateQuery } from '../../data-layer/utils'
import LandlordEmptyProperty from './LandlordEmptyProperty'
import { useNavigate, useParams, useLocation } from 'react-router'
const token = localStorage.getItem('token')

const LandlordSelectUnit = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const searchParams = new URLSearchParams(location.search)
  const currentPageParam = parseInt(searchParams.get('page')) || 1
  const [currentPage, setCurrentPage] = useState(currentPageParam)
  const { tenantId } = useParams()

  const [occupiedError, setOccupiedError] = useState('')
  const unitOccupied = () => {
    setTimeout(() => {
      setTimeout(() => {
        setOccupiedError('')
      }, 5000)
      setOccupiedError('This unit has been Occupied')
    }, 200)
  }
  const pageUrl = window.location.href
  const isEdit = pageUrl.includes('edit')

  const { data, isLoading: pageLoading } = useFirstMandateQuery(`/properties?page=${currentPage}`, {
    enabled: !!token,
    onSuccess: (data) => {},
  })

    useEffect(() => {
      navigate(`/landlord/select-unit?page=${currentPage}`, { replace: true })
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

    let startPage = Math.max(1, currentPage - 2)
    let endPage = Math.min(totalPages, startPage + 4)

    if (currentPage <= 3) {
      endPage = Math.min(5, totalPages)
    }

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
      <LandlordSU>
        <section>
          <main className='s-property'>
            {isEdit ? <h3>Edit Tenant</h3> : <h3>Add New Tenant</h3>}
            <p className='occupied-error'>{occupiedError}</p>
            <div className='search-p'>
              {isEdit ? (
                <p className='search-text'>
                  Please select which property or unit you would love to edit a
                  tenant
                </p>
              ) : (
                <p className='search-text'>
                  Please select which property or unit you would love to add a
                  tenant to
                </p>
              )}
              <div className='input'>
                <ImSearch />
                <input type='text' placeholder='Search property' />
              </div>
            </div>
            {data?.data?.data && data?.data?.data?.length > 0
              ? data?.data?.data?.map((property) => (
                  <div key={property.id} className='units'>
                    <div className='unit'>
                      <p>{property.title}</p>
                      <div className='house'>
                        {property.units.length === 0 ? (
                          <div className='error'>This Property has no unit</div>
                        ) : (
                          property.units.map((unit) => (
                            <div
                              onClick={() => {
                                if (isEdit) {
                                  navigate(
                                    `/landlord/add-tenant/${tenantId}/${unit.uuid}/edit`
                                  )
                                } else if (
                                  unit.occupation_status === 'Occupied'
                                ) {
                                  unitOccupied()
                                } else {
                                  navigate(
                                    `/landlord/add-tenant/${unit.uuid}/tenants`
                                  )
                                }
                              }}
                              key={unit.uuid}
                              className={
                                unit.occupation_status === 'Occupied'
                                  ? 'unit-a not-allowed'
                                  : 'unit-a'
                              }
                            >
                              <IoMdCheckmark />
                              <p>{unit.unit_name}</p>
                            </div>
                          ))
                        )}
                      </div>
                    </div>
                  </div>
                ))
              : null}
            {!pageLoading && !data.data?.data?.length && (
              <div>
                <LandlordEmptyProperty />
              </div>
            )}
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
                  {Array.from(
                    { length: endPage - startPage + 1 },
                    (_, index) => (
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
                    )
                  )}
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
          </main>
        </section>
      </LandlordSU>
    </>
  )
}
const LandlordSU = styled.section`
  .s-property {
    width: 100%;
    background-color: #fff;
    border-radius: 4px;
    padding: 20px;
  }
  h3 {
    width: 100%;
  }
  .error {
    color: red;
  }
  .occupied-error {
    color: red;
    margin: 10px 0;
  }
  .search-p {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    width: 100%;
    gap: 20px;
    margin: 20px 0;
  }
  .input {
    width: 300px;
    height: 50px;
    display: flex;
    align-items: center;
    background: #f6f6f8;
    padding: 0 15px;
  }
  input {
    outline: none;
    background: transparent;
    height: 100%;
    width: 92%;
    border: none;
    font-family: inherit;
    font-size: 16px;
    padding: 0 10px;
  }
  .unit,
  .units {
    display: flex;
    flex-direction: column;
  }
  .units {
    width: 100%;
  }
  .unit {
    padding: 20px;
    background: #f6f6f8;
    margin: 15px 0;
  }
  .house {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    margin: 25px 0 10px 0;
  }
  .unit-a {
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid black;
    gap: 10px;
    padding: 10px 20px;
    flex-shrink: 0;
    border-radius: 4px;
  }
  .not-allowed {
    background: #000;
    color: #fff;
  }
  @media screen and (max-width: 900px) {
    .search-p {
      flex-direction: column;
      align-items: flex-start;
      justify-content: left;
    }
  }
  @media screen and (max-width: 550px) {
    .input {
      width: 100%;
    }
  }
`
export default LandlordSelectUnit
