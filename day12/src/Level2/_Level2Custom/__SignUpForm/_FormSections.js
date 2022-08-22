import { Fieldset } from "../../../shared/Fieldset"

const PersonalInformation = ({ field, handleChange, handleBlur, dataChecker, }) => (
  <Fieldset
    field={field}
    handleChange={handleChange}
    handleBlur={handleBlur}
    dataChecker={dataChecker}
  />
)

const SubscriptionDetails = ({ field, handleChange, handleBlur, dataChecker, }) => (
  <Fieldset
    field={field}
    handleChange={handleChange}
    handleBlur={handleBlur}
    dataChecker={dataChecker}
  />
)

const SetupCredentials = ({ field, handleChange, handleBlur, dataChecker, }) => (
  <Fieldset
    field={field}
    handleChange={handleChange}
    handleBlur={handleBlur}
    dataChecker={dataChecker}
  />
)

export {
  PersonalInformation,
  SubscriptionDetails,
  SetupCredentials,
}
