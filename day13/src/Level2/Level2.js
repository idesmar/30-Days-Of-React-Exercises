import { useState } from 'react'
import { rem, rem4 } from '../utils/unitConvert'
import { Personal } from './_FormSections/Personal'
import { Subscription } from './_FormSections/Subscription'
import { Credentials } from './_FormSections/Credentials'
import { Confirmation } from './_Confirmation'
import { themeColor } from '../App'

/* Sign up form format:

* Personal information
firstName       --- text alphanumeric only
lastName        --- text alphanumeric only
gender          --- radio button [ male, female, non-binary ]
date of birth   --- date
country         --- country list: options select

* Subscription details
Plan             --- radio button [ free, free+, free++ ]
Notifications    --- checkbox [ promotions, newsletter, updates ]

* Credentials
email           --- email address
username        --- text with rules: alphanumeric + special characters ( _- )
password        --- password (no rules - simple learning exercise)
verify password --- password (no rules - simple learning exercise)

submit
*/

const Heading2 = () => <h2>Level 2</h2>
const Disclaimer = () => (
  <div style={
    {
      backgroundColor: themeColor,
      padding: rem4(8, 12),
      marginBlock: rem(8),
      borderRadius: '0.8em',
    }
  }>
    <h3>Disclaimer</h3>
    <ul>
      <li>Note that this is only an exercise and may not be applicable in a production environment such as:
        <ul>
          <li>handling of credentials (username, passwords)</li>
          <li>form structure</li>
        </ul>
      </li>
      <li>Since inputs are uncontrolled, validation is set to be handled by form element</li>
    </ul>
  </div>
)


const Final = () => {

  return (
    <>
      <h3>Thank You for Signing Up!</h3>
      <p>Check the console to see data that is being sent to imaginary database</p>
    </>
  )
}


const Level2 = () => {

  const [userData, setUserData] = useState(
    {
      firstName: '',
      lastName: '',
      gender: '',
      dob: '',
      country: '',
      plan: '',
      notifications: [],
      email: '',
      username: '',
      password: '',
    }
  )

  const [visibleComponent, setVisibleComponent] = useState({
    personal: true,
    subscription: false,
    credentials: false,
    confirmation: false,
    final: false,
  })

  const {
    personal,
    subscription,
    credentials,
    confirmation,
    final,
  } = visibleComponent

  const handleSignUp = () => {
    setVisibleComponent(prev => {
      const snapshot = { ...prev }
      for (const key in snapshot) {
        snapshot[key] = false
      }
      snapshot.final = true
      return { ...prev, ...snapshot }
    })

    console.log(userData)
    resetState()
  }

  const resetState = () => {
    setUserData({
      firstName: '',
      lastName: '',
      gender: '',
      dob: '',
      country: '',
      plan: '',
      notifications: [],
      email: '',
      username: '',
      password: '',
    })
  }

  /* pass prop to child component to be used to raise data here (this parent component) */
  const handleDataFromForm = (formInfo = {}, formDescription = '') => {

    /* initiate a new object which will be filled by the "formatted" formInfo
    extract the value from the ref objects from formInfo */
    const userFormData = {}
    const userDataKeys = Object.keys(userData)

    for (const key in formInfo) {

      /* guard clause to skip; if property is not being tracked by userData */
      if (!userDataKeys.includes(key)) continue

      /* guard clause for properties that do not contain a ref
      but an object of refs; ie. a collection of input[type="checkbox"] */
      if (!formInfo[key].current) {

        const formatted = []
        const obj = formInfo[key]

        /* traverse through the object extracting values of input[type="checkbox"]:checked */
        for (const objKey in obj) {
          obj[objKey].current.checked && formatted.push(obj[objKey].current.value)
        }

        /* add a new entry to userFormData using key and formatted array */
        userFormData[key] = formatted

        /* skip the default userFormData[kay] after "if" code block */
        continue
      }
      userFormData[key] = formInfo[key].current.value
    }

    /* peek at userFormData */
    // console.log(userFormData)
    setUserData(prev => ({ ...prev, ...userFormData }))

    setVisibleComponent(prev => {
      const snapshot = { ...prev }

      let toggler = false
      for (const key in snapshot) {
        snapshot[key] = toggler
        if (toggler) toggler = !toggler

        /* trigger toggler to make next key visible */
        if (key === formDescription) toggler = true
      }
      return { ...prev, ...snapshot }
    })
  }

  return (
    <section>
      <Heading2 />
      <Disclaimer />
      <div>
        {personal && <Personal updateUserData={handleDataFromForm} />}
        {subscription && <Subscription updateUserData={handleDataFromForm} />}
        {credentials && <Credentials updateUserData={handleDataFromForm} />}
        {confirmation && <Confirmation userData={userData} handleSignUp={handleSignUp} />}
        {final && <Final />}
      </div>
    </section>
  )
}


export { Level2 }
