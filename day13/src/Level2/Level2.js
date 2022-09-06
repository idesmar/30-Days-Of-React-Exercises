import { Personal } from './_FormSections/Personal'
import { useState } from 'react'

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

const Heading2 = () => <h2>Level 2</h2>
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
    const userFormData = {}
    for (const key in formInfo) {
      userFormData[key] = formInfo[key].current.value
    }
    setUserData(prev => ({ ...prev, ...userFormData }))
  }

  return (
    <section>
      <Heading2 />
      <div>
        <Personal updateUserData={handleDataFromForm} />

        <button
          onClick={handleSignUp}
        >
          Sign up
        </button>
      </div>
    </section>
  )
}

export { Level2 }
