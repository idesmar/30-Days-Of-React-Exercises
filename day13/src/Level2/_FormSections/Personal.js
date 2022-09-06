import { useState, useRef, useEffect } from 'react'
import { userServices } from '../../services/userServices'

/*
* Personal information
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
    console.log('Passing data object to parent. Object to lifted', personalInfo)
    updateUserData(personalInfo)
  }

  return (
    <form onSubmit={handleFormSubmit}>
      <fieldset>
        <legend>Personal Information</legend>
        <div>
          <label htmlFor="firstName">First Name: </label>
          <input
            type="text"
            name="firstName"
            id="firstName"
            ref={firstName}
          />
        </div>
        <div>
          <label htmlFor="lastName">Last Name: </label>
          <input
            type="text"
            name="lastName"
            id="lastName"
            ref={lastName}
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
          />
        </div>
        <div>
          <label htmlFor="country">Country: </label>
          <select
            name="country"
            id="country"
            ref={country}
            defaultValue={COUNTRY_PLACEHOLDER}
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
      <button>Submit</button>
    </form>
  )
}

export { Personal }
