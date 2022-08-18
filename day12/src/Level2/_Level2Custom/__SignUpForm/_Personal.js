import { InputText } from "../../../shared/Inputs/Inputs"

const Personal = ({ contents, handleChange }) => {

  const {
    firstName,
    lastName,
    gender,
    dob,
    country,
  } = contents

  const inputs = {
    firstName: {
      type: 'text',
      name: 'firstName',
      value: firstName,
      label: 'first name',
    },
    lastName: {
      type: 'text',
      name: 'lastName',
      value: lastName,
      label: 'last name',
    },
    gender: {
      type: 'radio',
      name: 'gender',
      value: gender,
      radios: {
        male: {
          id: 'male',
          value: '',
          checked: '',
          label: 'male',
        },
        female: {
          id: 'female',
          value: '',
          checked: '',
          label: 'female',
        },
        nonBinary: {
          id: 'non-binary',
          value: '',
          checked: '',
          label: 'non-binary',
        },
      }
    },
    dob: {
      type: 'date',
      name: 'dob',
      value: dob,
      label: 'date of birth',
    },
    country: {
      type: 'select',
      name: 'country',
      value: country,
      label: 'country',
      options: []
    }
  }

  const Legend = () => <legend>Personal Information</legend>
  const FirstName = () => <InputText contents={inputs.firstName} handleChange={handleChange} />
  const LastName = () => <InputText contents={inputs.lastName} handleChange={handleChange} />
  // const Gender = () => <InputRadios contents={inputs.gender} handleChange={handleChange} />

  return (
    <fieldset>
      <Legend />
      <FirstName />
      <LastName />
      {/* <Gender /> */}
    </fieldset>
  )
}

export { Personal }
