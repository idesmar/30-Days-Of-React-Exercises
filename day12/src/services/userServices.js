const userServices = {

  getQna: async () => {
    const res = await fetch('./data/level1qna.json')
    return await res.json()
  },

  getAllCountries: async () => {
    const res = await fetch('https://restcountries.com/v3.1/all')
    return await res.json()
  }

  // more services here
}

export { userServices }