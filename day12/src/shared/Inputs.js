import { toTitleCase } from '../utils/misc'


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
      <label htmlFor={id}>{toTitleCase(label)}: </label>
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
  contents: {
    label,
    id,
    value,
  },
  handleChange,
}) => {

  return (
    <div>
      <label htmlFor="">{label}</label>
      <input
        type="radio"
        name={name}
        value={value}
        id={id}
        onChange={handleChange}
      />
    </div>
  )
}

const InputRadios = ({
  contents: {
    name,
    radioValues,
  },
  handleChange
}) => {

  const radios = Object.keys(radioValues)
  return (
    <div>
      {
        radios.map((radio, radioIdx) => (
          <InputRadio
            key={name + radioIdx}
            name={name}
            contents={radioValues[radio]}
            handleChange={handleChange}
          />
        ))
      }
    </div>
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
}
