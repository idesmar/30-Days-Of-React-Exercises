import { useState } from 'react'
import { Personal } from './_Personal'
import { Subscription } from './_Subscription'
import { Credentials } from './_Credentials'

/** // ! ABANDONED
 * private component causing input to lose focus after each keydown
    - PersonalInformation
    - SubscriptionDetails
    - UserCredentialDetails
  * main should have this fixed by turning previously private component to an independent component (outside of parent component and ensuring that props are properly passed)
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
    const { name, value } = e.target
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
    firstName,
    lastName,
    gender,
    dob,
    country,
  }

  const subscription = {
    plan,
    notifications,
  }

  const credentials = {
    email,
    username,
    password,
    password2,
  }

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  const PersonalInformation = () => (
    <Personal contents={personal} handleChange={handleChange} />
  )
  const SubscriptionDetails = () => (
    <Subscription contents={subscription} handleChange={handleChange} />
  )
  const UserCredentialDetails = () => (
    <Credentials contents={credentials} handleChange={handleChange} />
  )

  return (
    <div>
      <form onSubmit={handleSubmit} noValidate >
        <PersonalInformation />
        <SubscriptionDetails />
        <UserCredentialDetails />
      </form>
    </div>
  )
}

export { SignUpForm }
