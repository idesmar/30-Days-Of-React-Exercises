import { useState } from "react"
import { Personal } from "./__Personal"
// import { Subscription } from "./__Subscription"
// import { Credentials } from "./__Credentials"


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


const Form = () => {

  const [data, setData] = useState(
    {
      personal: {},
      subscription: {},
      credentials: {}
    }
  )

  const handleComponentChange = (newObj, property) => {

    // console.log(newObj, property)
    // console.log(data.personal)
    // console.log(newObj)

    // setData((prev) => (
    //   { ...prev, newObj }
    // ))

  }

  const handleSubmit = (e) => {
    e.preventDefault()
    /* format object to be passed to backend (database) */
  }

  const SubmitBtn = () => <button>Submit</button>
  return (
    <form
      onSubmit={handleSubmit}
      noValidate
    >

      <Personal onComponentChange={handleComponentChange} />
      {/* <Subscription onComponentChange={handleComponentChange} />
      <Credentials onComponentChange={handleComponentChange} /> */}

      <SubmitBtn />
    </form>
  )
}





const Heading = () => <h3>Custom Validation</h3>
const Level2Custom = () => {

  return (
    <div>
      <Heading />
      <Form />
    </div>
  )
}

export { Level2Custom }
