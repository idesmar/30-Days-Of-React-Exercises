import { useState, useRef, useEffect } from 'react'
import { userServices } from '../../services/userServices'
import { namePattern } from '../../utils/customValidation'
import { Button } from '../../shared/Button'

/* //* Personal information
  firstName       --- text alphanumeric only
  lastName        --- text alphanumeric only
  gender          --- radio button [ male, female, non-binary ]
  date of birth   --- date
  country         --- country list: options select
*/

const Personal = ({
  updateUserData
}) => {

  const personalInfo = {
    firstName: useRef(),
    lastName: useRef(),
    gender: useRef(),
    dob: useRef(),
    country: useRef(),
  }

  const {
    firstName,
    lastName,
    gender,
    dob,
    country,
  } = personalInfo

  const COUNTRY_PLACEHOLDER = 'Select a country'
  const [countries, setCountries] = useState([])

  useEffect(() => {
    const fetchCountries = async () => {
      const allCountries = await userServices.getCountries()
      const countryNames = allCountries.map(country => country.name.common)
      const sortedCountries = [...countryNames].sort()

      setCountries(prev => [
        ...sortedCountries
      ])
    }
    fetchCountries()
  }, [])

  const handleFormSubmit = (e) => {
    e.preventDefault()
    /* alt to passing argument "formDescription" to userUpdateData
      * opted to hardcoding "formDescription" since data-* is exposed in html and unsure if it can be a DevSec risk
      const { dataset } = e.target
      const formDescription = Object.keys(dataset).toString() */
    updateUserData(personalInfo, 'personal')
  }

  return (
    <form onSubmit={handleFormSubmit} data-personal>
      <fieldset>
        <legend><h3>Personal Information</h3></legend>
        <div>
          <label htmlFor="firstName">First Name: </label>
          <input
            type="text"
            name="firstName"
            id="firstName"
            ref={firstName}
            pattern={namePattern}
            required
          />
        </div>
        <div>
          <label htmlFor="lastName">Last Name: </label>
          <input
            type="text"
            name="lastName"
            id="lastName"
            ref={lastName}
            pattern={namePattern}
            required
          />
        </div>
        <div>
          <p>Please specify your gender</p>
          <div>
            <input
              type="radio"
              name="gender"
              id="male"
              value="male"
              ref={gender}
              required
            />
            <label htmlFor="male"> Male</label>
          </div>
          <div>
            <input
              type="radio"
              name="gender"
              id="female"
              value="female"
              ref={gender}
              required
            />
            <label htmlFor="female"> Female</label>
          </div>
          <div>
            <input
              type="radio"
              name="gender"
              id="non-binary"
              value="non-binary"
              ref={gender}
              required
            />
            <label htmlFor="non-binary"> Non-binary</label>
          </div>
        </div>
        <div>
          <label htmlFor="dob">Date of Birth: </label>
          <input
            type="date"
            name="dob"
            id="dob"
            ref={dob}
            required
          />
        </div>
        <div>
          <label htmlFor="country">Country: </label>
          <select
            name="country"
            id="country"
            ref={country}
            defaultValue={COUNTRY_PLACEHOLDER}
            required
          >
            <option disabled>
              {COUNTRY_PLACEHOLDER}
            </option>
            {
              countries.map(country => (
                <option
                  key={'countryOption' + country}
                  value={country}
                >
                  {country}
                </option>
              ))
            }
          </select>
        </div>
      </fieldset>
      <Button innerText='Next' />
    </form>
  )
}

export { Personal }
