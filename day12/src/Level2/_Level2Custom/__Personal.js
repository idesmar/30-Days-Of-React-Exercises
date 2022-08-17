import { useState } from "react"
import { Fieldset } from "../shared/_Fieldset"


const Personal = ({ onComponentChange }) => {

  const [personal, setPersonal] = useState(
    {
      legend: 'personal information',
      inputs: {
        firstName: {
          name: 'firstName',
          label: 'first name',
          type: 'text',
          value: '',
        },
        lastName: {
          name: 'lastName',
          label: 'last name',
          type: 'text',
          value: '',
        },
        gender: {
          name: 'gender',
          label: 'gender',
          type: 'radio',
          values: ['male', 'female', 'non-binary'],
          value: '',
        },
        DOB: {
          name: 'DOB',
          type: 'date',
          value: '',
        },
        country: {
          name: 'country',
          type: 'select',
          value: '',
        },
      }
    }
  )

  const handleChange = (e) => {
    const { name, value } = e.target

    setPersonal((prev) => {
      const newPersonal = { ...prev }
      newPersonal.inputs[name].value = value
      newPersonal.inputs[name].selected = true
      return newPersonal
    })

    e.target.selectionStart = e.target.selectionEnd = value.length
    console.dir(e.target)

    // onComponentChange(personal, 'personal') // !TESTING
  }

  return (
    <>
      <Fieldset
        contentObject={personal}
        handleChange={handleChange}
      />
    </>
  )
}

export { Personal }
