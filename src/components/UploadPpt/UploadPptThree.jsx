import React, { useState } from 'react'
import styled from 'styled-components'

const UploadPptThree = () => {
  const [dueDateReminder, setDueDateReminder] = useState('option1')
  const [recurringReminder, setRecurringReminder] = useState('option1')

  const handleReminder = (e) => {
    setDueDateReminder(e.target.value)
  }
  const handleRecurringReminder = (e) => {
    setRecurringReminder(e.target.value)
  }
  return (
    <>
      <Wrapper>
        <section>
          <div className='utilities'>
            <label>Please select utilities included in this property</label>
            <div className='checkboxes'>
              <div className='checkbox'>
                <input type='checkbox' className='checkbox-input' />
                <p className='ppt-details'>Security</p>
              </div>
              <div className='checkbox'>
                <input type='checkbox' className='checkbox-input' />
                <p className='ppt-details'>Phone</p>
              </div>
              <div className='checkbox'>
                <input type='checkbox' className='checkbox-input' />
                <p className='ppt-details'>Gas</p>
              </div>
              <div className='checkbox'>
                <input type='checkbox' className='checkbox-input' />
                <p className='ppt-details'>Electricity</p>
              </div>
              <div className='checkbox'>
                <input type='checkbox' className='checkbox-input' />
                <p className='ppt-details'>Council Tax</p>
              </div>
              <div className='checkbox'>
                <input type='checkbox' className='checkbox-input' />
                <p className='ppt-details'>Internet</p>
              </div>
              <div className='checkbox'>
                <input type='checkbox' className='checkbox-input' />
                <p className='ppt-details'>Water</p>
              </div>
              <div className='checkbox'>
                <input type='checkbox' className='checkbox-input' />
                <p className='ppt-details'>Appliances</p>
              </div>
              <div className='checkbox'>
                <input type='checkbox' className='checkbox-input' />
                <p className='ppt-details'>Trash & Recycling</p>
              </div>
            </div>
          </div>
          <div className='section'>
            <div className='input'>
              <label>Rent Due Date Frequency</label>
              <div className='radio-btns'>
                <div className='radio-btn'>
                  <input
                    type='radio'
                    value='option1'
                    checked={dueDateReminder === 'option1'}
                    onChange={handleReminder}
                  />
                  <p className='ppt-details'>Recurring</p>
                </div>
                <div className='radio-btn'>
                  <input
                    type='radio'
                    value='option2'
                    checked={dueDateReminder === 'option2'}
                    onChange={handleReminder}
                  />
                  <p className='ppt-details'>Oneoff</p>
                </div>
              </div>
            </div>
          </div>
          <div className='section'>
            <div className='input'>
              <label>Order for recurring due dates</label>
              <div className='radio-btns recurring-date'>
                <div className='radio-btn'>
                  <input
                    type='radio'
                    value='option1'
                    checked={recurringReminder === 'option1'}
                    onChange={handleRecurringReminder}
                    className='btn-input'
                  />
                  <p className='ppt-details'>Daily</p>
                </div>
                <div className='radio-btn'>
                  <input
                    type='radio'
                    value='option2'
                    checked={recurringReminder === 'option2'}
                    onChange={handleRecurringReminder}
                    className='btn-input'
                  />
                  <p className='ppt-details'>Weekly</p>
                </div>
                <div className='radio-btn'>
                  <input
                    type='radio'
                    value='option3'
                    checked={recurringReminder === 'option3'}
                    onChange={handleRecurringReminder}
                    className='btn-input'
                  />
                  <p className='ppt-details'>Monthly</p>
                </div>
                <div className='radio-btn'>
                  <input
                    type='radio'
                    value='option4'
                    checked={recurringReminder === 'option4'}
                    onChange={handleRecurringReminder}
                    className='btn-input'
                  />
                  <p className='ppt-details'>Yearly</p>
                </div>
              </div>
            </div>
          </div>
          <div className='section'>
            <div className='input'>
              <label>Contact Details</label>
              <input
                type='text'
                placeholder='Enter phone number'
                className='phone-number'
              />
            </div>
          </div>
        </section>
      </Wrapper>
    </>
  )
}
const Wrapper = styled.section`
  .checkboxes {
    width: 500px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-content: space-between;
    align-items: center;
    margin: 10px 0;
  }
  .checkbox {
    display: flex;
    align-items: center;
    margin: 20px 0;
  }
  .ppt-details {
    margin-left: 10px;
    flex-shrink: 0;
  }
  .checkbox-input {
    width: 20px;
  }
  .section {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: left;
    width: 100%;
  }
  .input {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: left;
    width: 100%;
    margin: 10px 0;
  }
  label {
    margin: 10px 0;
    font-size: 18px;
  }
  .radio-btns {
    width: 200px;
  }

  .radio-btn,
  .radio-btns {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 10px 0;
  }
  .btn-input {
    width: 20px;
  }
  .ppt-details {
    margin-left: 10px;
  }
  .recurring-date {
    width: 500px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 10px 0;
  }
  .phone-number {
    width: 400px;
    height: 40px;
    padding: 0 20px;
    border-radius: 5px;
    outline: none;
    border: 1px solid black;
    font-family: inherit;
    color: #000;
    font-weight: 17px;
  }
  @media screen and (max-width: 530px) {
    .checkboxes {
      width: 350px;
      grid-template-columns: repeat(2, 1fr);
    }
    .recurring-date {
      width: 350px;
      flex-wrap: wrap;
    }
    .phone-number {
      width: 300px;
    }
  }
  @media screen and (max-width: 360px) {
    .checkboxes {
      width: 300px;
      grid-template-columns: repeat(2, 1fr);
    }
    .recurring-date {
      width: 300px;
    }
  }
`
export default UploadPptThree
