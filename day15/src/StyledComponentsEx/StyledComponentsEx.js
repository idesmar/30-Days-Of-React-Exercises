import { useState } from 'react'
import styled from 'styled-components'
import { rem, rem4, em } from '../utils/unitConvert'
import { isNameFormatValid } from '../utils/customValidation'
import { toProperCaseDelimited } from '../utils/misc'

/*
name: input[type='text']
pattern: isNameValid
- change input styling if input value becomes invalid
  - red border

button:
- grayed out, not clickable on initial
- make available if at least 2 valid characters entered
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
  isValid,
  isTouched,
}) => ({
  type: 'text',
  value: value,
  name: name,
  isError: isTouched === true && isValid === false,
}))`
  // important is needed to override focus-visible border color
  border-radius: 0.2em;
  border: ${({ isError }) => isError ? '2px solid red !important' : '2px solid black'};
  color: ${({ isError }) => isError && 'red'};
  padding: 0.25ch 1ch;

  &:focus-visible {
    border: 2px solid blue;
  }
`

const VerifyButton = styled.button.attrs(({
  isValid,
  isTouched,
}) => ({
  disabled: !isTouched || !isValid, /* isTouched === false || isTouched === false */
  // disabled: (+isValid + +isTouched) < 2, /* //* working alternative */
  /* //> debugging in styled-components */
  log: (...args) => console.log(args),
}))`
  cursor: ${({ disabled }) => disabled ? 'not-allowed' : 'pointer'};
  padding: ${rem4(4, 12)};
  background-color: ${({ disabled }) => disabled ? '#7a7070' : '#3a0c64'};
  border-radius: ${em(6)};
  color: #ffffff;
  display: block;

  /* //> debugging in styled-components
    add/remove bling ($) to add/remove effects of debugging */
  {({ log, isTouched, isValid, disabled }) => log(isTouched, isValid, disabled)}

  &:hover {
    opacity: ${({ disabled }) => !disabled && 0.8};
  }
`

const NameError = styled.p`
  padding-bottom: ${rem(4)};
  color: red;
  font-style: italic;
  line-height: 1;
  font-size: smaller;
`

/* styled-component sample from docs
const NewHeader4 = styled(Header).withConfig({
  shouldForwardProp: (prop, defaultValidatorFn) => !['customColor'].includes(prop),
})<{ customColor: string }>`
  color: ${(props) => props.customColor};
`;
*/
const NameErrorSpace = styled(NameError)`
  height: calc(1em + ${rem(4)});
  visibility: hidden;
`

const HelloBack = styled.div`
  padding: 1rem;
  background-color: green;
  color: white;
  font-weight: 700;
  margin-top: 1rem;
`

const SayHiStyled = () => {
  const [nameData, setNameData] = useState({
    firstName: '',
    isTouched: false,
    isValid: false,
    sayHiBack: false,
  })

  const {
    firstName,
    isValid,
    isTouched,
    sayHiBack,
  } = nameData

  const handleChange = (e) => {
    const { value, name } = e.target
    if (sayHiBack) setNameData(prev => ({...prev, sayHiBack: !sayHiBack}))
    if (!isTouched) setNameData(prev => ({ ...prev, isTouched: !isTouched }))
    const isNameValid = isNameFormatValid(value)
    setNameData(prev => ({ ...prev, isValid: isNameValid, [name]: value }))
  }

  const handleClick = () => {
    setNameData(prev => ({ ...prev, sayHiBack: true }))
  }

  return (
    <Container>
      <Label htmlFor='firstName'>First Name:</Label>

      <div>
        <InputName
          id='firstName'
          name='firstName'
          value={firstName}
          isValid={isValid}
          isTouched={isTouched}
          onChange={handleChange}
        />

        {
          (isTouched === true && isValid === false) ? (
            <NameError>
              At least 2 valid characters needed
            </NameError>
          ) : (
            <NameErrorSpace as='div' aria-hidden>
            </NameErrorSpace>
          )
        }
      </div>

      {/* { console.log(nameData) } */}

      <VerifyButton
        isValid={isValid}
        isTouched={isTouched}
        onClick={handleClick}
      >
        Say Hi!
      </VerifyButton>

      {
        sayHiBack && (<HelloBack>
          Hello, {toProperCaseDelimited(firstName)}!
        </HelloBack>)
      }
    </Container>
  )
}


export { SayHiStyled }
