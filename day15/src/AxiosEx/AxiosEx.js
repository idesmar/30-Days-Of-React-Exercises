import { useState, useEffect } from 'react'
// import axios from 'axios'
import { userServices } from '../services/userServices'
import './axiosEx.module.css'

/** Public API source
 * https://github.com/public-apis/public-apis#readme
 * prospect: https://docs.api.jikan.moe/
 */


const CountryInfo = ({
  country: {
    name,
    capital,
    flags,
    languages,
    population,
  }
}) => {
  const languagesList = []
  for (const key in languages) {
    languagesList.push(languages[key])
  }

  return (
    <div>
      <img width='400' src={flags.svg} alt={name.common} />
      <h4>{name.common}</h4>
      <p>Population: {population.toLocaleString()}</p>
      <p>Capital: {capital.join(', ')}</p>
      <p>Languages: {languagesList.join(', ')}</p>
    </div>
  )
}

const Heading3 = () => <h3>axios</h3>

const DropdownAxios = () => {
  const [countries, setCountries] = useState([])
  const [country, setCountry] = useState(
    {
      name: {
        common: '',
        official: '',
      },
      capital: [],
      flags: {
        png: '',
        svg: '',
      },
      languages: {},
      population: 0,
    }
  )

  const handleSelectCountry = (e) => {
    const { value } = e.target
    const [selectedCountry] = countries.filter(country => country.name.common === value)
    setCountry(prev => ({ ...prev, ...selectedCountry }))
  }

  useEffect(() => {
    const getCountries = async () => {
      const data = await userServices.getAllCountries()
      const sortedData = [...data].sort((a, b) => {
        if (a.name.common < b.name.common) return -1
        // if (a.name.common > b.name.common) return 1
        return 1
      })
      setCountries(prev => sortedData)
    }
    getCountries()
    /* //> standalone; consolidating requests in userServices is preferable, though
      const URL = 'https://restcountries.com/v3.1/all'
      const getCountries = async () => {
        const res = await axios.get(URL)
        console.log(res)
        > { config, data, headers, request, status, statusText }
        const data = res.data
        > axios data is already in js form; hence.json() omitted
        const sortedData = [...data].sort((a, b) => {
          if (a.name.common < b.name.common) return -1
          // if (a.name.common > b.name.common) return 1
          return 1
        })
        setCountries(prev => sortedData)
      }
      getCountries() */
  }, [])

  const defaultOption = 'Choose a country'

  return (
    <div>
      <Heading3 />

      <select
        defaultValue={defaultOption}
        onChange={handleSelectCountry}
      >
        <option value={defaultOption} disabled>
          {defaultOption}
        </option>
        {
          countries.map(country => {
            const commonName = country.name.common
            return (
              <option value={commonName} key={commonName}>
                {commonName}
              </option>
            )
          })
        }
      </select>

      {country.name.common && <CountryInfo country={country} />}
    </div>
  )
}


export { DropdownAxios }
