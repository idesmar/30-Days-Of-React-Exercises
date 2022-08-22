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

  const [dataChecker, setDataChecker] = useState({
    firstName: {
      touched: false,
      error: '',
    },
    lastName: {
      touched: false,
      error: '',
    },
    email: {
      touched: false,
      error: '',
    },
    username: {
      touched: false,
      error: '',
    },
    password2: {
      touched: false,
      error: '',
    },
  })

  const errorMsgs = {
    firstName: 'first name format is invalid',
    lastName: 'last name format is invalid',
    email: 'email is invalid',
    username: 'username must be at least 6 characters and can only contain letters, numbers, -, and _',
    password2: 'passwords do not match',
  }

  const handleBlur = (e) => {
    const { name, value, } = e.target
    const isNameFormatValid = (name) => {
      // source: https://stackoverflow.com/questions/2385701/regular-expression-for-first-and-last-name
      const nameRegEx = /^[^0-9_!¡?÷?¿/\\+=@#$%^&*(){}|~<>;:[\]]{2,}$/ // ! test more
      return nameRegEx.test(name)
    }
    const isEmailValid = (email = '') => {
      const emailRegEx = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(.\w{2,3})+$/
      return emailRegEx.test(email)
    }
    const isUsernameValid = (username = '') => {
      const usernameRegEx = /\w+/
      return usernameRegEx.test(username) && username.length >= 6
    }
    const isPasswordMatching = (password = '', password2 = '') => {
      return password && password2 && password === password2
    }

    const validationList = Object.keys(dataChecker)
    if (validationList.includes(name) && !dataChecker[name].touched) {
      setDataChecker(prev => {
        const snapshot = { ...prev }
        snapshot[name].touched = true
        return { ...prev, ...snapshot }
      })
    }

    let isValid = true
    if (name === 'firstName' || name === 'lastName') {
      isValid = isNameFormatValid(value)
      // * format value appropriately
    }
    if (name === 'email') {
      isValid = isEmailValid(value)
      // * format value appropriately
    }
    if (name === 'username') {
      isValid = isUsernameValid(value)
    }
    if (name === 'password2') {
      isValid = isPasswordMatching(data.password, value)
    }

    !isValid && setDataChecker(prev => {
      const snapshot = { ...prev }
      snapshot[name].error = errorMsgs[name]
      return {...prev, ...snapshot}
    })

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

        <PersonalInformation
          field={personal}
          handleChange={handleChange}
          handleBlur={handleBlur}
          dataChecker={dataChecker}
        />
        <SubscriptionDetails
          field={subscription}
          handleChange={handleChange}
          handleBlur={handleBlur} // ? Optional, currently data in this section do not require validation
          dataChecker={dataChecker}
        />
        <SetupCredentials
          field={credentials}
          handleChange={handleChange}
          handleBlur={handleBlur}
          dataChecker={dataChecker}
        />

        { // NOTE: for TESTING purposes only
          // console.log(data)
          // console.count('render')
          // console.log(dataChecker)
        }

        <button>Submit</button>
      </form>
    </div>
  )
}

export { SignUpForm }
