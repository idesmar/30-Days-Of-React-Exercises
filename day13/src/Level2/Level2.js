import { useState } from 'react'
import { rem, rem4 } from '../utils/unitConvert'
import { Personal } from './_FormSections/Personal'
import { Subscription } from './_FormSections/Subscription'


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
username        --- text with rules: alphanumeric + special characters ( _- )
password        --- password (no rules - simple learning exercise)
verify password --- password (no rules - simple learning exercise)

submit
*/

/* //> DEV NOTES
  Since one form contains an ob

  ! RESTRUCTURE TO
  FORM
    personalInfo fieldset
      button.onClick = lift data to state
    subscriptionInfo fieldset
      button.onClick = lift data to state
    credentials fieldset
      button.onClick = lift data to state
*/



const Heading2 = () => <h2>Level 2</h2>
const Disclaimer = () => (
  <div style={
    {
      backgroundColor: '#000',
      padding: rem4(8, 12),
      marginBlock: rem(8),
      borderRadius: '0.8em'
    }
  }>
    <h3>Disclaimer</h3>
    <ul>
      <li>Note that this is only and exercise and may not be applicable in a production environment; such as the handling of credentials (username, passwords)</li>
      <li>Since the form inputs are uncontrolled, validation is set to be handled by form element</li>
    </ul>
  </div>
)
const Level2 = () => {

  const [
    userData,
    setUserData
  ] = useState(
    {
      firstName: '',
      lastName: '',
      gender: '',
      dob: '',
      country: '',
      plan: '',
      notifications: [],
      userName: '',
      password: '',
    }
  )

  const handleSignUp = () => {
    console.log(userData)
  }

  /* pass prop to child component to be used to raise data here (this parent component) */
  const handleDataFromForm = (formInfo) => {

    /* initiate a new object which will be filled by the "formatted" formInfo
    extract the value from the ref objects from formInfo */
    const userFormData = {}

    for (const key in formInfo) {

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
  }

  return (
    <section>
      <Heading2 />
      <Disclaimer />
      <div>
        <Personal updateUserData={handleDataFromForm} />
        <Subscription updateUserData={handleDataFromForm} />
        <button onClick={handleSignUp}>Sign up</button>
      </div>
    </section>
  )
}

export { Level2 }
