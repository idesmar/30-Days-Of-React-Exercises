import { useState, useEffect } from 'react'
// import { Personal } from './_Personal'
// import { Subscription } from './_Subscription'
// import { Credentials } from './_Credentials'
// import { Fieldset } from '../../../shared/Fieldset'
import {
  PersonalInformation,
  SubscriptionDetails,
  SetupCredentials,
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
    /* // ! suspended until error handler is created
      const getAllCountries = async () => {
        const allCountries = await userServices.getAllCountries()
        const countryNames = allCountries.map(country => country.name.common)
        const sortedCountries = [...countryNames].sort()
        setCountries([...sortedCountries])
      }
      getAllCountries()
    */
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
        /*
          deep copy prev to snapshot,
          use snapshot to change desired state property value,
          then combine; essentially snapshot will replace prev
        */
        const snapshot = { ...prev }
        snapshot[name][value] = checked
        return { ...prev, ...snapshot }
      })
      // > Make sure to include return to prevent code reaching default setData()
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
    email,
    username,
    password,
    password2,
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
          value: notifications, // ? not being used; input component value is manually set below
          checkboxesLegend: 'get notified about?',
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

  const credentials = {
    legend: 'setup credentials',
    body: {
      email: {
        type: 'email',
        contents: {
          name: 'email',
          value: email,
          label: 'email',
          id: 'email',
        },
      },
      username: {
        type: 'text',
        contents: {
          name: 'username',
          value: username,
          label: 'username',
          id: 'username',
        },
      },
      password: {
        type: 'password',
        contents: {
          name: 'password',
          value: password,
          label: 'password',
          id: 'password',
        }
      },
      password2: {
        type: 'password',
        contents: {
          name: 'password2',
          value: password2,
          label: 're-type password',
          id: 'password2',
        }
      },
    },
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.table(data)
  }

  return (
    <div>
      <form onSubmit={handleSubmit} noValidate >
        {/*
          <Personal contents={personal} handleChange={handleChange} />
          <Subscription contents={subscription} handleChange={handleChange} />
          <Credentials contents={credentials} handleChange={handleChange} />

          <Fieldset
            field={personal}
            handleChange={handleChange}
          />
        */}

        <PersonalInformation field={personal} handleChange={handleChange} />
        <SubscriptionDetails field={subscription} handleChange={handleChange} />
        <SetupCredentials field={credentials} handleChange={handleChange} />

        { // NOTE: for TESTING purposes only
          // console.log(data)
          console.count('render')
        }

        <button>Submit</button>
      </form>
    </div>
  )
}

export { SignUpForm }
