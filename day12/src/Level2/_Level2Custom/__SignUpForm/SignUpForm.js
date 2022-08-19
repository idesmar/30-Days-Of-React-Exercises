import { useState, useEffect } from 'react'
// import { Personal } from './_Personal'
// import { Subscription } from './_Subscription'
// import { Credentials } from './_Credentials'
// import { Fieldset } from '../../../shared/Fieldset'
import {
  PersonalInformation,
  SubscriptionDetails,
} from './_FormSections'
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

  const countryOptionsPlaceholder = 'Select your country'
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
    const { name, value, type, checked } = e.target
    if (type === 'checkbox') {
      setData(prev => {
        const snapshot = { ...prev }
        snapshot[name][value] = checked
        return { ...prev, ...snapshot }
      })
      return
    }
    setData(prev => ({ ...prev, [name]: value }))
  }

  const {
    firstName,
    lastName,
    gender,
    dob,
    country,
    plan,
    notifications,
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
          radiosLegend: 'please specify your gender',
          radioOptions: {
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
              value: 'non-binary',
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
            countryOptionsPlaceholder,
            ...countries,
          ]
        }
      },
    }
  }

  const subscription = {
    legend: 'subscription details',
    body: {
      plan: {
        type: 'radio',
        contents: {
          name: 'plan',
          value: plan,  // ? not being used; input component value is manually set below
          radiosLegend: 'choose your plan',
          radioOptions: {
            free: {
              id: 'free',
              label: 'free',
              value: 'free',
            },
            freePlus: {
              id: 'freePlus',
              label: 'free+',
              value: 'freePlus',
            },
            freePlusPlus: {
              id: 'freePlusPlus',
              label: 'free++',
              value: 'freePlusPlus',
            },
          },
        }
      },
      notifications: {
        type: 'checkbox',
        contents: {
          name: 'notifications',
          value: notifications, // ? CHECK IF IT IT WILL BE USED
          checkboxesLegend: 'what would you like to be notified',
          checkboxOptions: {
            promotions: {
              id: 'promotions',
              label: 'promotions',
              value: 'promotions',
            },
            newsletter: {
              id: 'newsletter',
              label: 'newsletter',
              value: 'newsletter',
            },
            updates: {
              id: 'updates',
              label: 'updates',
              value: 'updates',
            },
          }
        }
      },
    }
  }

  // const credentials = {
  //   email,
  //   username,
  //   password,
  //   password2,
  // }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.table(data)
  }

  return (
    <div>
      <form onSubmit={handleSubmit} noValidate >
        {/* <Personal contents={personal} handleChange={handleChange} />
        <Subscription contents={subscription} handleChange={handleChange} />
        <Credentials contents={credentials} handleChange={handleChange} /> */}

        {/* <Fieldset
          field={personal}
          handleChange={handleChange}
        /> */}

        <PersonalInformation field={personal} handleChange={handleChange} />
        <SubscriptionDetails field={subscription} handleChange={handleChange} />

        { // NOTE: for checking purposes only
          // console.log(data)
          console.count('render')
        }

        <button>Submit</button>
      </form>
    </div>
  )
}

export { SignUpForm }
