import React from 'react'
import styled from 'styled-components'
import { FaRegPlusSquare } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { RiRadioButtonLine } from 'react-icons/ri'
import { useParams } from 'react-router-dom'
import { useFirstMandateQuery } from '../../data-layer/utils'
import ManagerPropertyDropdown from '../Dropdowns/ManagerPropertyDropdown'
import ManagerPropertyUnit from './ManagerPropertyUnit'

const token = localStorage.getItem('token')

const ManagerPropertyPageTwo = () => {
  const { singlePropertyId } = useParams()

  const { data, isLoading: pageLoading } = useFirstMandateQuery(
    `/property-manager/properties`,
    {
      enabled: !!token,
      onSuccess: (data) => {},
    }
  )

  const selectedProperty = data?.data?.data.find(
    (property) => property.uuid === singlePropertyId
  )


  if (pageLoading) {
    return (
      <div className='page-spinner'>
        <div className='l-spinner'></div>
      </div>
    )
  }
  return (
    <>
      <ManagerPPT>
        <section>
          <div className='m-section'>
            <Link to='/manager/add-property' className='add-r'>
              <h4>Upload New Property</h4>
              <FaRegPlusSquare size={20} />
            </Link>
            <div key={selectedProperty.uuid} className='manager-p'>
              <div className='apart-det'>
                <div className='apartment'>
                  <p className='p-icon'>
                    <RiRadioButtonLine />
                  </p>
                  <div className='apart-loc'>
                    <h3>{selectedProperty.title}</h3>
                    <h1>{selectedProperty.address}</h1>
                    <div className='status-active'>
                      <p>
                        Status:
                        <span> Active</span>
                      </p>

                      <p>
                        Unit:
                        <span> {selectedProperty.units.length} Units</span>
                      </p>
                      <p>
                        Property Type:
                        <span> {selectedProperty.property_type}</span>
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <ManagerPropertyDropdown
                    selectedProperty={selectedProperty}
                  />
                </div>
              </div>
              <ManagerPropertyUnit selectedProperty={selectedProperty} />
            </div>
          </div>
        </section>
      </ManagerPPT>
    </>
  )
}
const ManagerPPT = styled.section`
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
    gap: 30px;
  }
  .p-icon {
    font-size: 40px;
  }
  .p-img {
    width: 100px;
    height: 90px;
    border-radius: 4px;
  }
  .apart-loc {
    display: flex;
    flex-direction: column;
    gap: 17px;
  }
  .status-active {
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
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
      margin: 10px 0;
    }
    .p-icon {
      display: none;
    }
  }
`
export default ManagerPropertyPageTwo
