import React from 'react'

const FormInput = React.forwardRef((props, ref) => {
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
    checked,
    ...rest
  } = props

  const checkBoxInputTypes = ['checkbox', 'radio']

  return (
    <div className='flex flex-col w-full'>
      {!checkBoxInputTypes.includes(type) ? (
        <div className='flex flex-col gap-2.5'>
          {label && (
            <label className={`text-base font-normal text-black`}>
              {label}
            </label>
          )}
          {desc && (
            <label className={`text-sm font-normal text-black`}>{desc}</label>
          )}
          <input
            name={name}
            type={type}
            placeholder={placeholder}
            value={value}
            ref={ref}
            className={`w-full border rounded-md bg-transparent outline-none text-base text-black px-4 h-12 ${
              error ? 'border-red-500' : 'border-black'
            }`}
            onChange={onChange}
            readOnly={readOnly ? true : false}
            {...(type === 'number' ? { step: 'any' } : {})}
            {...rest}
          />
        </div>
      ) : (
        <div className='flex items-center gap-2.5'>
          <input
            checked={checked}
            className={`bg-transparent w-[18px] h-[18px] rounded-md outline-none 
            ${type === 'checkbox' && 'accent-baseColor'}
             `}
            name={name}
            ref={ref}
            type={type}
            value={value}
            readOnly={readOnly ? true : false}
            onChange={onChange}
            {...rest}
          />
          <label className={`text-base font-normal text-black`}>{label}</label>
        </div>
      )}
      {error && (
        <span className='text-red-500 text-[12px] italic'>
          * {error.message}
        </span>
      )}
    </div>
  )
})

export default FormInput
