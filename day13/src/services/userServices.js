
const userServices = {

  getQna: async () => {
    const res = await fetch('./data/level1qna.json')
    return await res.json()
  },

  getCountries: async () => {
    const res = await fetch('https://restcountries.com/v3.1/all')
    if (!res.ok) {
      const { status, statusText } = res
      console.log(`Received status ${status}: ${statusText}`)
      /* return expected data format but with no value */
      return []
    }
    return await res.json()
  },

}

export { userServices }
