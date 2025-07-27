export const getFirstName = (fullName) => {
  if (!fullName) return ''
  return fullName.split(' ')[0]
}

export const separateDateTime = (dateTimeString) => {
  const dateTime = new Date(dateTimeString)
  const date = dateTime.toLocaleDateString()
  const time = dateTime.toLocaleTimeString()
  return { date, time }
}

export const formValidation = (type, required, min, max) => {
  if (type === 'email') {
    return {
      required: required ? 'Email address is required' : false,
      pattern: {
        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
        message: 'Invalid email address',
      },
    }
  } else if (type === 'text') {
    return {
      required: required ? 'This field is required' : false,
    }
  } else if (type === 'non-empty') {
    return {
      required: required ? 'This field cannot be empty' : false,
    }
  } else if (type === 'number') {
    return {
      required: required ? 'This field is required' : false,
      min: min
        ? {
            value: min,
            message: `Minimum value is ${min}`,
          }
        : null,
      max: max
        ? {
            value: max,
            message: `Maximum value is ${max}`,
          }
        : null,
    }
  } else if (type === 'password') {
    return {
      required: required ? 'This field is required' : false,
      minLength: {
        value: 8,
        message: 'Must be atleast 8 characters',
      },
    }
  } else if (type === 'file') {
    return {
      required: required ? 'This field is required' : false,
    }
  } else if (type === 'select') {
    return {
      required: required ? 'This field is required' : false,
    }
  } else if (type === 'radio') {
    return {
      required: required ? 'This field is required' : false,
    }
  } else if (type === 'checkbox') {
    return {
      required: required ? 'This field is required' : false,
    }
  } else if (type === 'date') {
    return {
      required: required ? 'This field is required' : false,
    }
  }
}
