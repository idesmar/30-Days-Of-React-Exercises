import { toTitleCase } from '../../utils/misc'


const InputText = ({
  contents: {
    name,
    label,
    value,
  },
  handleChange
}) => {

  return (
    <div>
      {console.log('rendered InputText')}
      <label htmlFor={name}>{toTitleCase(label)}: </label>
      <input
        type="text"
        name={name}
        id={name}
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
  }
}) => {

  return (
    <div>
      <label htmlFor="">{label}</label>
      <input type="radio" name={name} id={id} />
    </div>
  )
}

const InputRadios = ({
  contents: {
    name,
    radios: {
      male,
      female,
      nonBinary,
    }
  }
}) => {

  return (
    <div>
      <InputRadio name={name} contents={male} />
      <InputRadio name={name} contents={female} />
      <InputRadio name={name} contents={nonBinary} />
    </div>
  )
}

export { InputText, InputRadios }
