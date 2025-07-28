import React from 'react'

const FormTextArea = React.forwardRef((props, ref) => {
  const {
    name,
    label,
    desc,
    type,
    placeholder,
    value,
    onChange,
    readOnly,
    error,
    ...rest
  } = props

  return (
    <div className='flex flex-col w-full'>
      <div className='flex flex-col gap-2.5'>
        {label && (
          <label className={`text-base font-normal text-black`}>{label}</label>
        )}
        {desc && (
          <label className={`text-sm font-normal text-black`}>{desc}</label>
        )}
        <textarea
          name={name}
          placeholder={placeholder}
          value={value}
          ref={ref}
          className={`w-full border rounded-md bg-transparent py-2 resize-none outline-none text-base text-black px-4 h-[120px] ${
            error ? 'border-red-500' : 'border-black'
          }`}
          onChange={onChange}
          readOnly={readOnly ? true : false}
          {...(type === 'number' ? { step: 'any' } : {})}
          {...rest}
        />
      </div>
      {error && (
        <span className='text-red-500 text-[12px] italic'>
          * {error.message}
        </span>
      )}
    </div>
  )
})

export default FormTextArea
