import { toProperCase } from "../../utils/misc"

const Input = ({
  input: {
    type,
    label,
    value,
    name,
  },
  handleChange
}) => {

  return (
    <div>
      <label htmlFor={name}>{toProperCase(label)}: </label>
      <input
        name={name}
        id={name}
        type={type}
        value={value}
        onChange={handleChange}
      />
    </div>
  )
}

export { Input }
