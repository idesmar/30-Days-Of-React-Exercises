import axios from "axios"

const userServices = {

  getQna: async () => {
    const QNA_URL = './data/level1qna.json'
    const res = await axios.get(QNA_URL)
    return res.data
    /* //> fetch
      const URL = './data/level1qna.json'
      const res = await fetch(URL)
      return await res.json() */
  },

  getAllCountries: async () => {
    const COUNTRIES_URL = 'https://restcountries.com/v3.1/all'
    const res = await axios.get(COUNTRIES_URL) /*
    > { config, data, headers, request, status, statusText } */
    return res.data /*
    > axios data is already in js form; hence.json() omitted
    * alternative?
    return await axios.get(URL).data */
  }

  // more services here
}

export { userServices }