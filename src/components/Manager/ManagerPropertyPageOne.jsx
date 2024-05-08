import React from 'react'
import styled from 'styled-components'
import { FaRegPlusSquare } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
import { useFirstMandateQuery } from '../../data-layer/utils'
import ManagerEmptyProperty from './ManagerEmptyProperty'
import houseIcon from '../../assets/Frame-2007.png'

const ManagerPropertyPageOne = () => {
  const navigate = useNavigate()
  const { data, isLoading: pageLoading } = useFirstMandateQuery(
    '/property-manager/properties',
    {
      onSuccess: (data) => {},
    }
  )

  if (!data || !data.data || !data.data.data || data.data.data.length === 0) {
    return (
      <div>
        <ManagerEmptyProperty />
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
      <ManagerPPO>
        <section>
          <main className='l-section'>
            <div className='a-ppt'>
              <h3>Properties</h3>
              <Link to='/manager/add-property' className='add-r'>
                <h4>Add New Property</h4>
                <FaRegPlusSquare size={20} />
              </Link>
            </div>
            <div className='l-options'>
              {data &&
                data.data &&
                data.data.data &&
                data.data.data.length > 0 &&
                data.data.data.map((property) => (
                  <div
                    className='options'
                    onClick={() =>
                      navigate(`/manager/property/${property.uuid}`)
                    }
                    key={property.uuid}
                  >
                    <img src={houseIcon} alt='Icon' />
                    <h1 className='option-h'>{property.title}</h1>
                    <p className='option-text'>{property.address}</p>
                    <p className='option-text'>
                      Landlord's Name: {property.landlord?.name}
                    </p>
                    <p className='option-text'>
                      Property Type: {property.property_type}
                    </p>
                    <p className='option-text'>
                      Number of Unit: {property.units.length}
                    </p>
                  </div>
                ))}
            </div>
          </main>
        </section>
      </ManagerPPO>
    </>
  )
}
const ManagerPPO = styled.section`
  position: relative;
  .l-section {
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 20px;
  }
  .a-ppt {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 98%;
    margin: 20px 0;
  }
  .add-r {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    background-color: #ffe48e;
    padding: 15px;
    font-weight: 100;
    border-radius: 10px;
    width: 250px;
    text-decoration: none;
    color: #000;
    cursor: pointer;
    font-family: inherit;
  }
  .l-options {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    gap: 20px;
  }
  .options {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 15px;
    background-color: #fff;
    flex: 1 1 320px;
    height: 370px;
    border-radius: 4px;
    cursor: pointer;
  }
  img {
    width: 112px;
    height: 100px;
  }
  .option-h {
    margin: 20px 0;
  }
  .option-text {
    text-align: center;
    opacity: 0.8;
    line-height: 22px;
    margin: 5px 0;
  }
  @media screen and (max-width: 700px) {
    .a-ppt {
      flex-direction: column;
      margin: 0;
    }
    .add-r {
      margin: 20px 0;
    }
  }
  @media screen and (max-width: 500px) {
    .options {
      flex: 1 1 280px;
      /* width: 280px; */
    }
  }
`
export default ManagerPropertyPageOne
