import { Input } from './_Input'
import { toTitleCase } from '../../utils/misc'

const Fieldset = ({
  contentObject: {
    legend,
    inputs
  },
  handleChange
}) => {

  /* Object.values: NO IE Support so for...in may be used */
  const inputsArr = Object.values(inputs)

  /* alternative for IE support */
  // const inputsArr = []
  // for (let property in inputs) {
  //   inputsArr.push(inputs[property])
  // }

  const Inputs = () => (
    <>
      {
        inputsArr.map(input => {
          if (input.type === 'text') {
            return (
              <Input
                key={input.name}
                input={input}
                handleChange={handleChange}
              />
            )
          }
          return null
        })
      }
    </>
  )

  return (
    <fieldset>
      <legend>{toTitleCase(legend)}</legend>
      <Inputs />
    </fieldset>
  )
}

export { Fieldset }
