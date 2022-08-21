import { Fieldset } from "../../../shared/Fieldset"

const PersonalInformation = ({ field, handleChange }) => (
  <Fieldset
    field={field}
    handleChange={handleChange}
  />
)

const SubscriptionDetails = ({ field, handleChange }) => (
  <Fieldset
    field={field}
    handleChange={handleChange}
  />
)

const SetupCredentials = ({ field, handleChange }) => (
  <Fieldset
    field={field}
    handleChange={handleChange}
  />
)

export {
  PersonalInformation,
  SubscriptionDetails,
  SetupCredentials,
}
