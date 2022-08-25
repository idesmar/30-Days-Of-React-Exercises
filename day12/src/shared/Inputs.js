import { useState } from 'react'
import { toProperCase} from '../utils/misc' // ? Remove to use manual string format

/* // TODO: make errorMsg DRY
  make a separate function and store result in errorMsg
  errorMsg = checkErrors() && <ErrorMessage err={checkErrors()} />
*/
const missingDataOnSubmitErrorMessage = 'Do not leave blank'

const ErrorMessage = ({ err }) => (
  <small
    style={{
      display: 'block',
    }}
  >
    {err}
  </small>
)

const InputText = ({
  contents: {
    value,
    name,
    id,
    label,
    required,
  },
  handleChange,
  handleBlur,
  dataChecker,
  missingDataOnSubmit,
}) => {

  const errorMsg = () => {
    if (dataChecker[name].touched && dataChecker[name].error) {
      return <ErrorMessage err={dataChecker[name].error} />
    }
    if (missingDataOnSubmit.includes(name)) {
      return <ErrorMessage err={missingDataOnSubmitErrorMessage} />
    }
    return null
  }

  return (
    <div>
      <label htmlFor={id}>{toProperCase(label)}:</label>
      <input
        type="text"
        name={name}
        id={id}
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
        required={required}
      />
      {errorMsg()}
    </div>
  )
}


const InputRadio = ({
  name,
  radioContents: {
    label,
    id,
    value,
  },
  handleChange,
}) => {

  return (
    <div>
      <input
        type="radio"
        name={name}
        value={value}
        id={id}
        onChange={handleChange}
      />
    <label htmlFor={id}>{label}</label>
    </div>
  )
}

const InputRadios = ({
  contents: {
    name,
    radioOptions,
    radiosLegend,
  },
  handleChange,
  missingDataOnSubmit,
}) => {

  const radios = Object.keys(radioOptions)

  /* // ? Broader browser support using for...in
    const _radios = []
    for (key in radioOptions) {
      _radios.push(key)
    }
  */

    const errorMsg = () => {
      if (missingDataOnSubmit.includes(name)) {
        return <ErrorMessage err={missingDataOnSubmitErrorMessage} />
      }
      return null
    }

  return (
    <fieldset>
      <legend>{radiosLegend}</legend>
      {
        radios.map((radio, radioIdx) => (
          <InputRadio
            key={name + 'radio' + radioIdx}
            name={name}
            radioContents={radioOptions[radio]}
            handleChange={handleChange}
          />
        ))
      }
      {errorMsg()}
    </fieldset>
  )
}


const InputCheckbox = ({
  name,
  checkboxContents: {
    label,
    id,
    value,
  },
  handleChange,
}) => {

  return (
    <div>
      <input
        type="checkbox"
        name={name}
        id={id}
        value={value}
        onChange={handleChange}
      />
      <label htmlFor={id}>{label}</label>
    </div>
  )
}

const InputCheckboxes = ({
  contents: {
    name,
    checkboxOptions,
    checkboxesLegend,
  },
  handleChange,
}) => {

  const checkboxes = Object.keys(checkboxOptions)

  /* // ? Broader browser support using for...in
    const _checkboxes = []
    for (key in checkboxOptions) {
      _checkboxes.push(key)
    }
  */

  return (
    <fieldset>
      <legend>{checkboxesLegend}</legend>
      {
        checkboxes.map((checkbox, checkboxIdx) => (
          <InputCheckbox
            key={name + 'checkbox' + checkboxIdx}
            name={name}
            checkboxContents={checkboxOptions[checkbox]}
            handleChange={handleChange}
          />
        ))
      }
    </fieldset>
  )
}


const InputDate = ({
  contents: {
    label,
    id,
    name,
    required,
  },
  handleChange,
  missingDataOnSubmit,
}) => {

  const errorMsg = () => {
     if (missingDataOnSubmit.includes(name)) {
      return <ErrorMessage err={missingDataOnSubmitErrorMessage} />
    }
    return null
  }

  return (
    <div>
      <label htmlFor={id}>{label}:</label>
      <input
        type="date"
        name={name}
        id={id}
        onChange={handleChange}
        required={required}
      />
      {errorMsg()}
    </div>
  )
}


const InputSelect = ({
  contents: {
    label,
    name,
    id,
    options,
    required,
  },
  handleChange,
  missingDataOnSubmit,
}) => {

  const errorMsg = () => {
    if (missingDataOnSubmit.includes(name)) {
      return <ErrorMessage err={missingDataOnSubmitErrorMessage} />
    }
    return null
  }

  return (
    <div>
      <label htmlFor={id}>{label}:</label>
      <select
        name={name}
        id={id}
        onChange={handleChange}
        required={required}
      >
        {
          options.map((option,) => {
            return (
              <option
                key={`${name} ${option}`}
                value={option}
              >
                {option}
              </option>
            )
          })
        }
      </select>
      {errorMsg()}
    </div>
  )
}


const InputEmail = ({
  contents: {
    name,
    label,
    id,
    value,
    required,
  },
  handleChange,
  handleBlur,
  dataChecker,
  missingDataOnSubmit,
}) => {

  const errorMsg = () => {
    if (dataChecker[name].touched && dataChecker[name].error) {
      return <ErrorMessage err={dataChecker[name].error} />
    }
    if (missingDataOnSubmit.includes(name)) {
      return <ErrorMessage err={missingDataOnSubmitErrorMessage} />
    }
    return null
  }

  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input
        type="email"
        name={name}
        id={id}
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
        required={required}
      />
      {errorMsg()}
    </div>
  )
}


const InputPassword = ({
  contents: {
    name,
    label,
    id,
    required,
  },
  handleChange,
  handleBlur,
  dataChecker,
  missingDataOnSubmit,
}) => {

  const [hiddenPassword, setHiddenPassword] = useState(true)

  const passwordCheckboxContents = {
    label: hiddenPassword ? `show password` : `hide password`,
    id: id + 'checkbox',
  }

  const handlePasswordVisibility = () => {
    setHiddenPassword(prev => !prev)
  }

  const errorMsg = () => {
    if (dataChecker.password2.touched && dataChecker.password2.error) {
      return <ErrorMessage err={dataChecker.password2.error} />
    }
    if (missingDataOnSubmit.includes(name)) {
      return <ErrorMessage err={missingDataOnSubmitErrorMessage} />
    }
    return null
  }

  return (
    <div>
      <label htmlFor={id}>{label}:</label>
      <input
        type={hiddenPassword ? 'password' : 'text'}
        name={name}
        id={id}
        onChange={handleChange}
        onBlur={handleBlur}
        required={required}
      />

      {errorMsg()}

      <InputCheckbox
        checkboxContents={passwordCheckboxContents}
        handleChange={handlePasswordVisibility}
      />

    </div>
  )
}


export {
  InputText,
  InputRadios,
  InputCheckboxes,
  InputDate,
  InputSelect,
  InputEmail,
  InputPassword,
}