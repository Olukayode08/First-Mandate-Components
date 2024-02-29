import React from 'react'
import CheckboxBtn from './CheckboxBtn'
import RadioBtn from './RadioBtn'
import styled from 'styled-components'

const Checkbox = () => {
  return (
    <>
      <CheckboxRadio>
        <section>
          <CheckboxBtn />
          <RadioBtn />
        </section>
      </CheckboxRadio>
    </>
  )
}
const CheckboxRadio = styled.main`
  section {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
  }
`
export default Checkbox