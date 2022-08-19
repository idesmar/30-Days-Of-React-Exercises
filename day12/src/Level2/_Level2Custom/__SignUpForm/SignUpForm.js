import { useState, useEffect } from 'react'
// import { Personal } from './_Personal'
// import { Subscription } from './_Subscription'
// import { Credentials } from './_Credentials'
import { Fieldset } from '../../../shared/Fieldset'
import { userServices } from '../../../services/userServices'

/* Sign up form format:

* Personal information
firstName       --- text alphanumeric only
lastName        --- text alphanumeric only
gender          --- option select [ male, female, non-binary ]
date of birth   --- date
country         --- country list: options select

* Subscription details
Plan             --- radio button [ free, free+, free++ ]
Notifications    --- checkbox [ promotions, newsletter, updates ]

* Credentials
username        --- text with rules: alphanumeric + special characters ( _- )
password        --- password
verify password --- password

submit

> Create a custom validation
> Use a validation.js package
*/

const SignUpForm = () => {

  const countryPlaceholder = 'Select your country'

  const [countries, setCountries] = useState([])

  useEffect(() => {
    const getAllCountries = async () => {
      const allCountries = await userServices.getAllCountries()
      const countryNames = allCountries.map(country => country.name.common)
      const sortedCountries = [...countryNames].sort()
      setCountries([...sortedCountries])
    }
    getAllCountries()
  }, [])

  const [data, setData] = useState(
    {
      firstName: '',
      lastName: '',
      gender: '',
      dob: '',
      country: '',
      plan: '',
      notifications: {
        promotions: false,
        newsletter: false,
        updates: false,
      },
      email: '',
      username: '',
      password: '',
      password2: '',
    }
  )

  const handleChange = (e) => {
    const { name, value, } = e.target
    setData(prev => ({ ...prev, [name]: value }))
  }

  const {
    firstName,
    lastName,
    gender,
    dob,
    country,
    // plan,
    // notifications,
    // email,
    // username,
    // password,
    // password2,
  } = data

  const personal = {
    legend: 'personal information',
    body: {
      firstName: {
        type: 'text',
        contents: {
          value: firstName,
          name: 'firstName',
          id: 'firstName',
          label: 'first name',
        }
      },
      lastName: {
        type: 'text',
        contents: {
          value: lastName,
          name: 'lastName',
          id: 'lastName',
          label: 'last name',
        }
      },
      gender: {
        type: 'radio',
        contents: {
          name: 'gender',
          value: gender,  // ? not being used; input component value is manually set below
          radioValues: {
            male: {
              id: 'male',
              label: 'male',
              value: 'male',
            },
            female: {
              id: 'female',
              label: 'female',
              value: 'female',
            },
            nonBinary: {
              id: 'non-binary',
              label: 'non-binary',
              vale: 'non-binary',
            },
          },
        }
      },
      dob: {
        type: 'date',
        contents: {
          label: 'date of birth',
          id: 'dob',
          name: 'dob',
          value: dob, // ? not being used; input type does not require any control from parent component
        },
      },
      country: {
        type: 'select',
        contents: {
          value: country, // ? not being used; input type does not require any control from parent component
          label: 'country',
          id: 'country',
          name: 'country',
          options: [
            countryPlaceholder,
            ...countries,
          ]
        }
      },
    }
  }

  // const subscription = {
  //   plan,
  //   notifications,
  // }

  // const credentials = {
  //   email,
  //   username,
  //   password,
  //   password2,
  // }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(data)
  }

  return (
    <div>
      <form onSubmit={handleSubmit} noValidate >
        {/* <Personal contents={personal} handleChange={handleChange} />
        <Subscription contents={subscription} handleChange={handleChange} />
        <Credentials contents={credentials} handleChange={handleChange} /> */}

        <Fieldset
          field={personal}
          handleChange={handleChange}
        />

        { // NOTE: for checking purposes only
          // console.log(data)
        }

        <button>Submit</button>
      </form>
    </div>
  )
}

export { SignUpForm }
