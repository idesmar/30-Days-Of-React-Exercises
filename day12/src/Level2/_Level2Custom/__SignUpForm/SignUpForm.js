import { useState, useEffect } from 'react'
import {
  PersonalInformation,
  SubscriptionDetails,
  SetupCredentials,
} from './_FormSections'
import { userServices } from '../../../services/userServices'
import { toTitleCase } from '../../../utils/misc'

/* // TODO:
  see if 'required' attribute is needed
    how to apply this to [input='radio'] and [input='checkbox']
*/
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
          required: true,
        }
      },
      lastName: {
        type: 'text',
        contents: {
          value: lastName,
          name: 'lastName',
          id: 'lastName',
          label: 'last name',
          required: true,
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
          required: true,
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
          ],
          required: true,
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
          required: true,
        },
      },
      username: {
        type: 'text',
        contents: {
          name: 'username',
          value: username,
          label: 'username',
          id: 'username',
          required: true,
        },
      },
      password: {
        type: 'password',
        contents: {
          name: 'password',
          value: password,
          label: 'password',
          id: 'password',
          required: true,
        }
      },
      password2: {
        type: 'password',
        contents: {
          name: 'password2',
          value: password2,
          label: 're-type password',
          id: 'password2',
          required: true,
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
    empty: 'cannot be blank',
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

    // > guard clause in case any named input that does not have a validation is passed
    if (!validationList.includes(name)) {
      // ? 'password' triggers error
      // console.error(`${name} is not included in validation list. Include to proceed.`)
      return
    }

    if (!dataChecker[name].touched) {
      setDataChecker(prev => {
        const snapshot = { ...prev }
        snapshot[name].touched = true
        return { ...prev, ...snapshot }
      })
    }

    let isValid = true
    if (name === 'firstName' || name === 'lastName') {
      isValid = isNameFormatValid(value)
      isValid && setData(prev => {
        const snapshot = { ...prev }
        snapshot[name] = toTitleCase(snapshot[name])
        return { ...prev, ...snapshot }
      })
    }
    if (name === 'email') {
      isValid = isEmailValid(value)
      isValid && setData(prev => {
        const snapshot = { ...prev }
        snapshot[name] = snapshot[name].toLowerCase()
        return { ...prev, ...snapshot }
      })
    }
    if (name === 'username') {
      isValid = isUsernameValid(value)
      isValid && setData(prev => {
        const snapshot = { ...prev }
        snapshot[name] = snapshot[name].toLowerCase()
        return { ...prev, ...snapshot }
      })
    }
    if (name === 'password2') {
      isValid = isPasswordMatching(data.password, value)
    }

    !isValid
      /* assign error message */
      ? setDataChecker(prev => {
        const snapshot = { ...prev }
        snapshot[name].error = value === ''
          ? errorMsgs.empty
          : errorMsgs[name]
        return { ...prev, ...snapshot }
      })
      /* remove error message */
      : setDataChecker(prev => {
        const snapshot = { ...prev }
        snapshot[name].error = ''
        return { ...prev, ...snapshot }
      })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.table(data)
  }

  return (
    <div>
      <form onSubmit={handleSubmit} noValidate >

        <PersonalInformation
          field={personal}
          handleChange={handleChange}
          handleBlur={handleBlur}
          dataChecker={dataChecker}
        />

        <SubscriptionDetails
          field={subscription}
          handleChange={handleChange}
          handleBlur={handleBlur}
          /* // ? handleBLur is OPTIONAL in this section,
            no data here requires validation */
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
