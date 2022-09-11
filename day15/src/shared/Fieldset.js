import {
  InputText,
  InputRadios,
  InputDate,
  InputSelect,
  InputCheckboxes,
  InputEmail,
  InputPassword,
} from "./Inputs"
import { toTitleCase } from "../utils/misc" // ? Remove to use manual string format


const Fieldset = ({
  field: {
    legend,
    body,
  },
  handleChange,
  handleBlur,
  dataChecker,
  missingDataOnSubmit,
}) => {

  const parts = Object.keys(body)

  /* // ? Broader browser support using for...in
    const _parts = []
    for (const _part in body) {
      _parts.push(_part)
    }
  */


  /* handleBlur on input types:
    text        :  firstName, lastName
    email       :  email
    password    :  password2
  */

  return (
    <fieldset>
      <legend>{toTitleCase(legend)}</legend>
      {
        parts.map((part, idx) => {
          const { type, contents } = body[part]
          const key = part + type + idx

          switch (type) {
            case 'text': {
              return (
                <InputText
                  key={key}
                  contents={contents}
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                  dataChecker={dataChecker}
                  missingDataOnSubmit={missingDataOnSubmit}
                />
              )
            }
            case 'radio': {
              return (
                <InputRadios
                  key={key}
                  contents={contents}
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                  dataChecker={dataChecker}
                  missingDataOnSubmit={missingDataOnSubmit}
                />
              )
            }
            case 'date': {
              return (
                <InputDate
                  key={key}
                  contents={contents}
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                  dataChecker={dataChecker}
                  missingDataOnSubmit={missingDataOnSubmit}
                />
              )
            }
            case 'select': {
              return (
                <InputSelect
                  key={key}
                  contents={contents}
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                  dataChecker={dataChecker}
                  missingDataOnSubmit={missingDataOnSubmit}
                />
              )
            }
            case 'checkbox': {
              return (
                <InputCheckboxes
                  key={key}
                  contents={contents}
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                  dataChecker={dataChecker}
                  missingDataOnSubmit={missingDataOnSubmit}
                />
              )
            }
            case 'email': {
              return (
                <InputEmail
                  key={key}
                  contents={contents}
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                  dataChecker={dataChecker}
                  missingDataOnSubmit={missingDataOnSubmit}
                />
              )
            }
            case 'password': {
              return (
                <InputPassword
                  key={key}
                  contents={contents}
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                  dataChecker={dataChecker}
                  missingDataOnSubmit={missingDataOnSubmit}
                />
              )
            }
            default: {
              // > Uncomment below once all Input Components in this project is created
              // console.error(`No component for ${body[part].type || 'part type'} in ${part}`)
              return null
            }
          }
        })
      }
    </fieldset>
  )
}

export { Fieldset }
