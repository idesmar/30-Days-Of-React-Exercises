import { toProperCase} from '../utils/misc' // ? Remove to use manual string format


const InputText = ({
  contents: {
    value,
    name,
    id,
    label,
  },
  handleChange
}) => {

  return (
    <div>
      <label htmlFor={id}>{toProperCase(label)}: </label>
      <input
        type="text"
        name={name}
        id={id}
        value={value}
        onChange={handleChange}
      />
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
  handleChange
}) => {

  const radios = Object.keys(radioOptions)

  /* // ? Broader browser support using for...in
    const _radios = []
    for (key in radioOptions) {
      _radios.push(key)
    }
  */

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
  handleChange
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
  },
  handleChange
}) => {

  return (
    <div>
      <label htmlFor={id}>{label}: </label>
      <input
        type="date"
        name={name}
        id={id}
        onChange={handleChange}
      />
    </div>
  )
}


const InputSelect = ({
  contents: {
    label,
    name,
    id,
    options,
  },
  handleChange
}) => {

  return (
    <div>
      <label htmlFor={id}>{label}: </label>
      <select
        name={name}
        id={id}
        onChange={handleChange}
      >
        {
          options.map((option,) => {
            return (
              <option
                key={name + option}
                value={option}
              >
                {option}
              </option>
            )
          })
        }
      </select>
    </div>
  )
}


export {
  InputText,
  InputRadios,
  InputDate,
  InputSelect,
  InputCheckboxes
}
