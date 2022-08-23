import { Fieldset } from "../../../shared/Fieldset"

/* // > DEV NOTES
! Redundant module that is only used to make the parent component look more appealing
  since rather than using FieldSet and passing the named input template object (personal, subscription, credentials) as a field prop, this module creates a component with name describing the form section.
! This may be scraped and just go with the much more direct approach
? or perhaps have the objects in an array, then map through that array and use Fieldset component inside to build individual components
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
