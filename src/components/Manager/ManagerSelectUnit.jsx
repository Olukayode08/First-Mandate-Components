import React, { useState } from 'react'
import styled from 'styled-components'
import { ImSearch } from 'react-icons/im'
import { IoMdCheckmark } from 'react-icons/io'
import { useFirstMandateQuery } from '../../data-layer/utils'
import { useNavigate, useParams } from 'react-router'
import ManagerEmptyProperty from './ManagerEmptyProperty'
const token = localStorage.getItem('token')

const ManagerSelectUnit = () => {
  const navigate = useNavigate()
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

  const { data, isLoading: pageLoading } = useFirstMandateQuery(
    '/property-manager/properties',
    {
      enabled: !!token,
      onSuccess: (data) => {},
    }
  )
  if (pageLoading) {
    return <div className='page-loading'>Loading</div>
  }
  return (
    <>
      <ManagerSU>
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
                        {property.units.map((unit) => {
                          return (
                            <div
                              onClick={() => {
                                if (isEdit) {
                                  navigate(
                                    `/manager/add-tenant/${tenantId}/${unit.uuid}/edit`
                                  )
                                } else if (
                                  unit.occupation_status === 'occupied'
                                ) {
                                  unitOccupied()
                                } else {
                                  navigate(
                                    `/manager/add-tenant/${unit.uuid}/tenants`
                                  )
                                }
                              }}
                              key={unit.uuid}
                              className={
                                unit.occupation_status === 'occupied'
                                  ? 'unit-a not-allowed'
                                  : 'unit-a'
                              }
                            >
                              <IoMdCheckmark />
                              <p>{unit.unit_name}</p>
                            </div>
                          )
                        })}
                      </div>
                    </div>
                  </div>
                ))
              : null}
            {!pageLoading && !data.data?.data?.length && (
              <div>
                <ManagerEmptyProperty />
              </div>
            )}
          </main>
        </section>
      </ManagerSU>
    </>
  )
}
const ManagerSU = styled.section`
  .s-property {
    width: 100%;
    background-color: #fff;
    border-radius: 4px;
    padding: 20px;
  }
  h3 {
    width: 100%;
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
export default ManagerSelectUnit