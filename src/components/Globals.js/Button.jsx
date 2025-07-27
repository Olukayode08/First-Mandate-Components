import React from 'react'
import { IoMdArrowBack, IoMdArrowForward } from 'react-icons/io'

const Button = ({ isLoading, btnText, btnFunction, icon, theme }) => {
  return (
    <button
      onClick={btnFunction}
      disabled={isLoading}
      type={'submit'}
      className={`bg-baseColor text-base font-medium w-full rounded-md h-full flex items-center justify-center ${
        isLoading ? 'cursor-not-allowed' : 'cursor-pointer'
      }
      ${
        theme === 'secondary'
          ? 'bg-btnSecondary'
          : theme === 'primary'
          ? 'bg-white border-[1px] border-black'
          : 'bg-baseColor'
      }
      `}
    >
      {isLoading ? (
        <div className='border-2 border-t-[2px] border-t-blue-500 border-black rounded-full w-[22px] h-[22px] animate-spinner'></div>
      ) : (
        <div className='flex items-center justify-center gap-2.5 w-full'>
          {icon && (icon === 'back' ? <IoMdArrowBack /> : null)}
          <p className='test-sm text-black'>{btnText}</p>
          {icon && (icon === 'forward' ? <IoMdArrowForward /> : null)}
        </div>
      )}
    </button>
  )
}

export default Button
