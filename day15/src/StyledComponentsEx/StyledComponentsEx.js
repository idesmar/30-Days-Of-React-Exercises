import { useState } from 'react'
import styled from 'styled-components'
// import { rem4 } from '../utils/unitConvert'
import { isNameFormatValid } from '../utils/customValidation'

/*
  name: input[type='text']
    pattern: isNameValid
    - change input styling if input value becomes invalid
      - red border
      - yellow background-color

  button:
    - grayed out, not clickable on initial
    - light up and turn green if at least 2 valid character is inputted
    - if name input becomes invalid, go back to being greyed out
*/


// const InputName = styled.input.attrs(({ value, handleChange }) => (
const InputName = styled.input.attrs(({ name, id, nameValue, handleChange }) => (
  {
    type: 'text',
    name: name,
    id: id,
    value: nameValue,
    onChange: handleChange,
  }
))`
border: 1px solid #1e1ec8;
`
// border: 1px solid ${isValid ? 'blue' : 'red'};


// const SubmitButton = styled.button.attrs(({ isValid, isStart }) => (
//   {disabled: isStart || !isValid}
// ))`
//   cursor: pointer;
//   padding: ${rem4(6, 14)};
//   display: block;
//   color: grey;
//   `
  // color: ${!isValid || isStart ? 'grey' : 'blue'};


const NameForm = () => {

  const [inputName, setInputName] = useState({
    nameValue: '',
    isValid: false,
    isStart: true,
  })

  const {
    nameValue,
    // isValid,
    isStart,
  } = inputName

  /*
    type="text"
    name="name"
    id="name"
    value={value}
    onChange={handleChange}

    <SubmitButton
      disabled={isStart || !isValid}
    >
      Submit Name
    </SubmitButton>
  */

  const handleChange = (e) => {
    if (isStart) setInputName(prev => ({ ...prev, isStart: !isStart }))
    const { name, value } = e.target
    console.log(inputName) // ! TESTING
    const isNameValid = isNameFormatValid(value)
    setInputName(prev => ({ ...prev, [name]: value, isValid: isNameValid }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(JSON.stringify(nameValue))
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name: </label>
      {/* <input
        type="text"
        name="name"
        id="name"
        value={value}
        onChange={handleChange}
        /> */}

      {console.log(nameValue)}

      <InputName
        name='nameValue'
        id='name'
        value={nameValue}
        handleChange={handleChange}
      />

      {/* <SubmitButton>
        Submit Name
      </SubmitButton> */}
    </form>
  )
}


export { NameForm }
