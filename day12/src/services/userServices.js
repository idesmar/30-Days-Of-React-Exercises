const userServices = {

  getQna: async () => {
    const res = await fetch('./data/level1qna.json')
    return await res.json()
  },

  getAllCountries: async () => {
    const res = await fetch('https://restcountries.com/v3.1/all')
    /*
      ! Create an error handler for fetching data
      Note: data being fetched is an array of objects
    */
    const countries = await res.json()
    return countries
  }

  // more services here
}

export { userServices }