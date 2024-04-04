import React from 'react'
import styled from 'styled-components'
import { RiRadioButtonLine } from 'react-icons/ri'
import { useFirstMandateQuery } from '../../data-layer/utils'
import { useParams } from 'react-router-dom'
import LandlordSinglePropertyUnit from './LandlordSiglePropertyUnit'

const token = localStorage.getItem('token')

const LandlordSingleProperty = () => {
  const { singlePropertyId } = useParams()

  const { data } = useFirstMandateQuery(
    `/properties/${singlePropertyId}`,
    {
      enabled: !!token,
      onSuccess: (data) => {},
    }
  )
  return (
    <>
      <LandlordSP>
        <section>
          <div className='m-section'>
            {data?.data && (
              <div className='manager-p'>
                <div className='apart-det'>
                  <div className='apartment'>
                    <p className='p-icon'>
                      <RiRadioButtonLine />
                    </p>
                    <div className='apart-loc'>
                      <h3>{data?.data.title}</h3>
                      <h1>{data?.data.address}</h1>
                      <div className='status-active'>
                        <p>
                          Status:
                          <span> Active</span>
                        </p>

                        <p>
                          Unit:
                          <span> 4 Units</span>
                        </p>
                        <p>
                          Building Type:
                          <span> {data?.data.property_type}</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <LandlordSinglePropertyUnit data={data} />
              </div>
            )}
          </div>
        </section>
      </LandlordSP>
    </>
  )
}
const LandlordSP = styled.section`
  .m-section {
    width: 100%;
    border-radius: 4px;
    padding: 20px;
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
export default LandlordSingleProperty
