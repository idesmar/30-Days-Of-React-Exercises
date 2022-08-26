import { SignUpForm } from "./__SignUpForm_Validator/SignUpForm_Validator"

const Heading = () => <h3>Validation using validator.js</h3>
const Level2Validator = () => {

  return (
    <div>
      <Heading />
      <SignUpForm />
    </div>
  )
}

export { Level2Validator }