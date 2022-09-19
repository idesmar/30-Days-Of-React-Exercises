import { useState } from 'react'
import styled from 'styled-components'
import { rem, rem4, em } from '../utils/unitConvert'
import { isNameFormatValid } from '../utils/customValidation'

/* //> DEV NOTES

*/

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

const Container = styled.div`
  padding: 1rem;
  max-width: ${rem(600)};
  margin: 0 auto;
`

const Label = styled.label`
  padding-right: 1rem;
`

const InputName = styled.input.attrs(({
  value,
  name,
  // handleChange,
  isValid,
}) => ({
  type: 'text',
  value: value,
  name: name,
  // onChange: handleChange,
  isValid: isValid,
}))`
  border: ${isValid => isValid ? '1px solid' : '1px solid red'};
  background-color: ${isValid => !isValid && 'yellow'};
  color: ${isValid => !isValid && 'red'};
`

/*
const VerifyButton = styled.button.attrs(({
  isValid,
  isTouched,
}) => ({
*/

const VerifyButton = styled.button.attrs(({
  isValid,
  isTouched,
}) => ({
  disabled: (+isValid + +isTouched) < 2, // * working
  // disabled: (!isTouched && !isValid) ? true : false, // ! logic is incorrect

  /* //* debugging in styled-components */
  // log: (...args) => console.log(args),
}))`
  cursor: ${({ disabled }) => disabled ? 'not-allowed' : 'pointer'};
  padding: ${rem4(4, 12)};
  background-color: ${({ disabled }) => disabled ? '#7a7070' : '#3a0c64'};
  border-radius: ${em(6)};
  color: #ffffff;
  display: block;
  margin-top: 1rem;

  /* //* debugging in styled-components */
  // ${({ log, isTouched, isValid, disabled }) => log(isTouched, isValid, disabled)}

  &:hover {
    opacity: ${({ disabled }) => !disabled && 0.8};
  }
`

const NameVerifier = () => {
  const [nameData, setNameData] = useState({
    firstName: '',
    isTouched: false,
    isValid: false,
  })

  const {
    firstName,
    isValid,
    isTouched,
  } = nameData

  const handleChange = (e) => {
    const { value, name } = e.target
    if (!isTouched) setNameData(prev => ({ ...prev, isTouched: !isTouched }))
    const isNameValid = isNameFormatValid(value)
    setNameData(prev => ({ ...prev, isValid: isNameValid, [name]: value }))
  }

  const handleClick = () => {
    console.log(nameData)
  }

  return (
    <Container>
      <Label htmlFor='firstName'>Name:</Label>
      <InputName
        id='firstName'
        name='firstName'
        value={firstName}
        onChange={handleChange}
        isValid={isValid}
      />
      { console.log(nameData) }
      <VerifyButton
        isValid={isValid}
        isTouched={isTouched}
        onClick={handleClick}
      >
        Verify Name
      </VerifyButton>
    </Container>
  )
}


export { NameVerifier }
