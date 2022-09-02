import { useState, useEffect } from 'react'
import {
  PersonalInformation,
  SubscriptionDetails,
  SetupCredentials,
} from './_FormSections_Validator'
import { userServices } from '../../../services/userServices'
import {
  isNameFormatValid,
  // isEmailValid, // replaced by validator package
  isUsernameValid,
  isPasswordMatching,
} from '../../../utils/customValidation'
import { toTitleCase } from '../../../utils/misc'
import isEmail from 'validator/es/lib/isEmail'


/* // > FINDINGS: noValidate w/ required, required for radio and checkbox, username
  refer to notes in _Level2Custom/Level2Custom.js
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
        /*  deep copy prev to snapshot,
            use snapshot to change desired state property value,
            then combine; essentially snapshot will replace prev  */
        const snapshot = { ...prev }
        snapshot[name][value] = checked
        return { ...prev, ...snapshot }
      })
      /* // > Make sure to include return to prevent reaching default setData() */
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
    password2,  /* will not passed to db */
  } = data

  /* ////////////////////////////////
    > INPUT TEMPLATE OBJECTS
  //////////////////////////////// */

  const personal = {
    legend: 'personal information',
    body: {
      firstName: {
        type: 'text',
        contents: {
          value: firstName,
          name: 'firstName',
          id: '_firstName',
          label: 'first name',
          required: true,
        }
      },
      lastName: {
        type: 'text',
        contents: {
          value: lastName,
          name: 'lastName',
          id: '_lastName',
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
              id: '_male',
              label: 'male',
              value: 'male',
            },
            female: {
              id: '_female',
              label: 'female',
              value: 'female',
            },
            nonBinary: {
              id: '_non-binary',
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
          id: '_dob',
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
          id: '_country',
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
              id: '_free',
              label: 'free',
              value: 'free',
            },
            freePlus: {
              id: '_freePlus',
              label: 'free+',
              value: 'freePlus',
            },
            freePlusPlus: {
              id: '_freePlusPlus',
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
              id: '_promotions',
              label: 'promotions',
              value: 'promotions',
            },
            newsletter: {
              id: '_newsletter',
              label: 'newsletter',
              value: 'newsletter',
            },
            updates: {
              id: '_updates',
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
          id: '_email',
          required: true,
        },
      },
      username: {
        type: 'text',
        contents: {
          name: 'username',
          value: username,
          label: 'username',
          id: '_username',
          required: true,
        },
      },
      password: {
        type: 'password',
        contents: {
          name: 'password',
          value: password,
          label: 'password',
          id: '_password',
          required: true,
        }
      },
      password2: {
        type: 'password',
        contents: {
          name: 'password2',
          value: password2,
          label: 're-type password',
          id: '_password2',
          required: true,
        }
      },
    },
  }

  /* ////////////////////////////////
    * END OF INPUT TEMPLATE OBJECTS
  //////////////////////////////// */

  const errorMsgs = {
    _EMPTY:       'cannot be blank',
    firstName:    'first name format is invalid',
    lastName:     'last name format is invalid',
    country:      'select a country',
    email:        'email is invalid',
    username:     'username must be at least 6 characters and can only contain letters, numbers, -, and _',
    password2:    'passwords do not match',
  }

  /* dataChecker used onBLur */
  const [dataChecker, setDataChecker] = useState({
    _EMPTY: errorMsgs._EMPTY,
    firstName: {
      touched: false,
      error: '',
    },
    lastName: {
      touched: false,
      error: '',
    },
    country: {
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
    gender: {
      touched: false,
      error: '',
    },
    plan: {
      touched: false,
      error: '',
    },
  })


  const handleBlur = (e) => {
    const { name, value, } = e.target

    const validationList = Object.keys(dataChecker)

    /* used for verifying controlled or uncontrolled input
      console.log(e.target.name, e.target._wrapperState.controlled)
      console.dir(e.target)
    */

    // > guard clause in case any named input that does not have a validation is passed
    if (!validationList.includes(name)) {
      /* dev remarks:
        * 'password' triggers error hence did not proceed on using
        console.error(`${name} is not included in validation list. Include to proceed.`)
      */
      return
    }

    if (!dataChecker[name].touched) {
      setDataChecker(prev => {
        const snapshot = { ...prev }
        snapshot[name].touched = true
        return { ...prev, ...snapshot }
      })
    }

    let isValid = false

    /* // note: A switch statement may be more appropriate here */

    if (name === 'gender' || name === 'plan') isValid = true
    if (name === 'firstName' || name === 'lastName') {
      isValid = isNameFormatValid(value)
      /* format before passing back to state data */
      isValid && setData(prev => {
        const snapshot = { ...prev }
        snapshot[name] = toTitleCase(snapshot[name])
        return { ...prev, ...snapshot }
      })
    }
    if (name === 'country') {
      isValid = value !== countryOptionsPlaceholder
    }
    if (name === 'email') {
      /* // * validator.js */
      isValid = isEmail(value)

      /* format before passing back to state data */
      isValid && setData(prev => {
        const snapshot = { ...prev }
        snapshot[name] = snapshot[name].toLowerCase()
        return { ...prev, ...snapshot }
      })
    }
    if (name === 'username') {
      isValid = isUsernameValid(value)
      /* format before passing back to state data */
      isValid && setData(prev => {
        const snapshot = { ...prev }
        snapshot[name] = snapshot[name].toLowerCase()
        return { ...prev, ...snapshot }
      })
    }
    if (name === 'password2') {
      isValid = isPasswordMatching(data.password, value)
    }

    /* // ? How is this reachable even if it doesn't pass the guard clause */
    // if (name === 'password') {
    //   console.log(`reached using ${name}`)
    //   isValid = isPasswordMatching(data.password2, value)
    // }

    if (isValid) {
      /* remove error message */
      setDataChecker(prev => {
        const snapshot = { ...prev }
        snapshot[name].error = ''
        return { ...prev, ...snapshot }
      })

      missingDataOnSubmit.includes(name) && setMissingDataOnSubmit(prev => {
        const snapshot = [...prev]
        /* mutation on snapshot */
        snapshot.splice(snapshot.indexOf(name), 1)
        return snapshot
      })
    } else {
      /* assign error message */
      setDataChecker(prev => {

        const displayError = (value === '' || (name === 'country' && value === countryOptionsPlaceholder))
          ? errorMsgs._EMPTY
          : errorMsgs[name]

        const snapshot = { ...prev }
        snapshot[name].error = displayError
        return { ...prev, ...snapshot }
      })
    }
  }

  const [missingDataOnSubmit, setMissingDataOnSubmit] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()

    const missingData = []
    for (const key in data) {
      /* skip notifications -- input not required */
      if (key === 'notifications') continue
      if (data[key] === '') missingData.push(key)
    }

    setMissingDataOnSubmit(() => [...missingData])

    if (!missingDataOnSubmit.length) {

      const formattedNotifications = []
      // const { notifications } = data
      for (const key in data.notifications) {
        data.notifications[key] && formattedNotifications.push(key)
      }
      const notifications = [...formattedNotifications]
      const dataToSubmit = { ...data, notifications }
      // delete dataToSubmit.notifications
      delete dataToSubmit.password2

      console.log(dataToSubmit, 'dataToSubmit')

      /* //> send dataToSubmit to database */
    }
  }

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        noValidate
      >

        <PersonalInformation
          field={personal}
          handleChange={handleChange}
          handleBlur={handleBlur}
          dataChecker={dataChecker}
          missingDataOnSubmit={missingDataOnSubmit}
        />

        <SubscriptionDetails
          field={subscription}
          handleChange={handleChange}
          handleBlur={handleBlur}
          /* // ? handleBLur is OPTIONAL in this section,
            no data here requires validation */
          dataChecker={dataChecker}
          missingDataOnSubmit={missingDataOnSubmit}
        />

        <SetupCredentials
          field={credentials}
          handleChange={handleChange}
          handleBlur={handleBlur}
          dataChecker={dataChecker}
          missingDataOnSubmit={missingDataOnSubmit}
        />

        { // NOTE: for TESTING purposes only
          // console.log(data)
          // console.count('render')
          // console.log(dataChecker)
          // console.log(missingDataOnSubmit)
        }

        <button>
          Submit
        </button>
      </form>
    </div>
  )
}

export { SignUpForm }
