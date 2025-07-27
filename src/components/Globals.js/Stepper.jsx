import React from 'react'

const Stepper = ({ currentStep, totalSteps }) => {
  const segmentWidth = `${100 / totalSteps}%`

  return (
    <div className='w-full'>
      <p className='my-5 text-lg'>
        {currentStep} of {totalSteps}
      </p>
      <div className='relative w-full max-w-[400px]'>
        <div className='absolute w-full h-[1px] bg-gray-300'></div>
        <span
          className='absolute h-[2px] bg-black'
          style={{ width: `calc(${segmentWidth} * ${currentStep})` }}
        ></span>
      </div>
    </div>
  )
}

export default Stepper
