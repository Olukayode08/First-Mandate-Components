import React from 'react'
import { FaRegPlusSquare } from 'react-icons/fa'
import {useNavigate } from 'react-router-dom'

const EmptyState = ({ icon, textOne, textTwo, btnText, btnFunction }) => {
  const navigate = useNavigate()
  return (
    <section>
      <div className='flex flex-col items-center justify-center w-full bg-white p-4 h-[80vh]'>
        <img src={icon} alt='Manager' className='w-[20%]' />
        <div className='my-7 flex flex-col gap-2.5'>
          <p className='text-center leading-7'>{textOne}</p>
          {textTwo && <p className='text-center leading-7'>{textTwo}</p>}
        </div>
        {btnText && (
          <div
            onClick={() => navigate(btnFunction)}
            className='flex items-center justify-center bg-baseColor gap-3.5 p-3.5 text-black cursor-pointer rounded-md w-[250px] no-underline'
          >
            <h4>{btnText}</h4>
            <FaRegPlusSquare size={20} />
          </div>
        )}
      </div>
    </section>
  )
}

export default EmptyState
