import React, { useState } from 'react'
import styled from 'styled-components'

const DurationDropdown = ()=> {
  const [minDuration, setMinDuration] = useState(1)
  const [maxDuration, setMaxDuration] = useState(10)

  const handleMinDurationChange = (event) => {
    const newMinDuration = parseInt(event.target.value)
    setMinDuration(newMinDuration)
    // Ensure maxDuration is at least equal to minDuration
    if (maxDuration < newMinDuration) {
      setMaxDuration(newMinDuration)
    }
  }

  const handleMaxDurationChange = (event) => {
    const newMaxDuration = parseInt(event.target.value)
    setMaxDuration(newMaxDuration)
  }

  return (
    <>
      <Wrapper>
        <div className='durations'>
          <div className='duration'>
            <label htmlFor='minDuration'>Minimum lease duration</label>
            <div className='select'>
              <select
                id='minDuration'
                value={minDuration}
                onChange={handleMinDurationChange}
              >
                {[...Array(10)].map((_, index) => (
                  <option key={index + 1} value={index + 1}>
                    {index + 1} Year{index !== 0 && 's'}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className='duration'>
            <label htmlFor='maxDuration'>Maximum lease Duration</label>
            <div className='select'>
              <select
                id='maxDuration'
                value={maxDuration}
                onChange={handleMaxDurationChange}
                disabled={minDuration === 10}
              >
                {[...Array(10 - minDuration + 1)].map((_, index) => (
                  <option key={index + minDuration} value={index + minDuration}>
                    {index + minDuration} Year{index + minDuration !== 1 && 's'}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </Wrapper>
    </>
  )
}
const Wrapper = styled.section`
  .durations {
    display: flex;
    justify-content: space-between;
    width: 50%;
    margin: 10px 0;
  }
  .duration {
    display: flex;
    flex-direction: column;
  }

  .select {
    width: 250px;
    height: 40px;
    border: 1px solid black;
    padding: 0 15px;
    border-radius: 5px;
  }
  select {
    width: 100%;
    margin: 0 auto;
    height: 100%;
    border: transparent;
    background: transparent;
    outline: none;
    font-family: inherit;
    color: #000;
  }
  @media screen and (max-width: 1120px) {
    .durations {
      width: 70%;
    }
  }
  @media screen and (max-width: 800px) {
    .durations {
      width: 100%;

      flex-direction: column;
    }
  }
`
export default DurationDropdown
