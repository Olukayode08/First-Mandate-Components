import React, { useEffect, useRef, useState } from 'react'
import { IoIosArrowDown } from 'react-icons/io'

const CustomSelector = ({
  placeholder = 'Select an option',
  options = [],
  value = null,
  onChange = () => {},
  multiple = false,
  bgColor = 'bg-white',
  textColor = 'text-black',
  borderRadius = 'rounded-md',
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef(null)

  const handleOptionSelect = (selectedValue) => {
    if (multiple) {
      const currentValues = Array.isArray(value) ? value : []
      const isSelected = currentValues.includes(selectedValue)
      const updatedValues = isSelected
        ? currentValues.filter((v) => v !== selectedValue)
        : [...currentValues, selectedValue]

      onChange(updatedValues)
    } else {
      onChange(selectedValue)
      setIsOpen(false)
    }
  }

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const renderSelected = () => {
    if (multiple) {
      if (!value || value.length === 0) return placeholder
      return value.join(', ')
    } else {
      return options.find((opt) => opt.value === value)?.label || placeholder
    }
  }

  const isOptionSelected = (optValue) => {
    if (multiple) return Array.isArray(value) && value.includes(optValue)
    return value === optValue
  }

  return (
    <div
      className='flex flex-col gap-2.5 relative w-full h-full'
      ref={dropdownRef}
    >
      <div
        className={`flex justify-between items-center px-3 py-2.5 border border-black cursor-pointer h-full w-full ${bgColor} ${textColor} ${borderRadius}`}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <span
          className={`${
            !value ? 'font-normal' : 'font-semibold'
          } text-sm truncate`}
        >
          {renderSelected()}
        </span>
        <IoIosArrowDown
          size={14}
          className={`transform transition-transform ${
            isOpen ? 'rotate-180' : 'rotate-0'
          }`}
        />
      </div>

      {isOpen && (
        <div
          className={`absolute my-2 top-full text-black rounded-md shadow-md left-0 w-full ${bgColor} h-[130px] overflow-y-scroll z-20`}
        >
          {options.map((option) => (
            <div
              key={option.value}
              onClick={() => handleOptionSelect(option.value)}
              className={`flex items-center gap-2 ${textColor} text-sm px-3 py-2 cursor-pointer hover:bg-gray-100`}
            >
              {multiple && (
                <input
                  type='checkbox'
                  checked={isOptionSelected(option.value)}
                  readOnly
                  className='w-3 h-3 accent-baseColor'
                />
              )}
              <span>{option.label}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default CustomSelector
