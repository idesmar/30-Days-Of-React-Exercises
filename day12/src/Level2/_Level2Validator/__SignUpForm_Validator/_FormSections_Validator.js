import { Fieldset } from "../../../shared/Fieldset"

/* // > DEV NOTES
  refer to notes in _Level2Custom/Level2Custom.sj
*/

const PersonalInformation = ({
  field,
  handleChange,
  handleBlur,
  dataChecker,
  missingDataOnSubmit
}) => (

  <Fieldset
    field={field}
    handleChange={handleChange}
    handleBlur={handleBlur}
    dataChecker={dataChecker}
    missingDataOnSubmit={missingDataOnSubmit}
  />
)

const SubscriptionDetails = ({
  field,
  handleChange,
  handleBlur,
  dataChecker,
  missingDataOnSubmit
}) => (

  <Fieldset
    field={field}
    handleChange={handleChange}
    handleBlur={handleBlur}
    dataChecker={dataChecker}
    missingDataOnSubmit={missingDataOnSubmit}
  />
)

const SetupCredentials = ({
  field,
  handleChange,
  handleBlur,
  dataChecker,
  missingDataOnSubmit
}) => (

  <Fieldset
    field={field}
    handleChange={handleChange}
    handleBlur={handleBlur}
    dataChecker={dataChecker}
    missingDataOnSubmit={missingDataOnSubmit}
  />
)

export {
  PersonalInformation,
  SubscriptionDetails,
  SetupCredentials,
}
