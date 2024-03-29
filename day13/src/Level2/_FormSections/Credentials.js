import { useRef, useState } from "react";
import { emailPattern, isPasswordMatching, usernamePattern } from "../../utils/customValidation";
import { Button } from "../../shared/Button";

/*
  * Credentials
    email           --- email address
    username        --- text with rules: alphanumeric + special characters ( _- )
    password        --- password (no rules - simple learning exercise)
    verify password --- password (no rules - simple learning exercise)
*/

const PasswordsDoNotMatch = () => {
  return (
    <small style={{ display: 'block', }}>
      Passwords do not match
    </small>
  )
}

const Credentials = ({
updateUserData,
}) => {

  const credentialDetails = {
    email: useRef(),
    username: useRef(),
    password: useRef(),
    password2: useRef(),
  }

  const [passwordMatching, setPasswordMatching] = useState(true)

  const {
    email,
    username,
    password,
    password2,
  } = credentialDetails

  const handleFormSubmit = (e) => {
    e.preventDefault()
    const pwdMatching = isPasswordMatching(password.current.value, password2.current.value)
    setPasswordMatching(prev => pwdMatching)

    /* do NOT use state.passwordMatching;
     setState only update state AFTER COMPONENT MOUNTS */
    if (pwdMatching) {
      /* alt to passing argument "formDescription" to userUpdateData
        * opted to hardcoding "formDescription" since data-* is exposed in html and unsure if it can be a DevSec risk
        const { dataset } = e.target
        const formDescription = Object.keys(dataset).toString() */
      /* alt to removing password2 from being added to parent's state
        * opted to control data to be updated to state in updateUserData instead
        const cred = { ...credentialDetails }
        delete cred.password2 */
      updateUserData(credentialDetails, 'credentials')
    }
  }

  return (
    <form onSubmit={handleFormSubmit} data-credentials>
      <fieldset>
        <legend><h3>Setup Credentials</h3></legend>
        <div>
          <label htmlFor="email">Email: </label>
          <input
            type="email"
            name="email"
            id="email"
            ref={email}
            pattern={emailPattern} /* //* input[type="email"] has an internal validator but this gives user more control of the validation */
            required
          />
        </div>
        <div>
          <label htmlFor="username">Username: </label>
          <input
            type="text"
            name="username"
            id="username"
            ref={username}
            pattern={usernamePattern}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password: </label>
          <input
            type="password"
            name="password"
            id="password"
            ref={password}
            required
          />
          {!passwordMatching && <PasswordsDoNotMatch />}
        </div>
        <div>
          <label htmlFor="password2">Re-type password: </label>
          <input
            type="password"
            name="password2"
            id="password2"
            ref={password2}
            required
          />
          {!passwordMatching && <PasswordsDoNotMatch />}
        </div>
      </fieldset>
      <Button innerText='Next' />
    </form>
  )
}


export { Credentials }
