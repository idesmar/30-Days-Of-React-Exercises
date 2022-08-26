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
    if (!res.ok) {
      console.log(res)
      console.log(`Error: ${res.statusText}`)
      return []
    } else {
      return await res.json()
    }
  }

  // more services here
}

export { userServices }