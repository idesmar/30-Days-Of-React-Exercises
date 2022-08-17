import { useState } from "react"
import { Fieldset } from "../shared/_Fieldset"


const Credentials = ({ onComponentChange }) => {

  const [credentials, setCredentials] = useState(
    {
      legend: 'Credentials',
      inputs: [
        {
          name: 'username',
          type: 'text',
          value: ''
        },
        {
          name: 'password',
          type: 'password',
          value: ''
        },
        {
          name: 'password-retype',
          type: 'password',
          value: ''
        },
      ]
    }
  )

  return (
    <></>
  )
}

export { Credentials }
