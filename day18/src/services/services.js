
const userServices = {
  fetchQna: async (signal) => {
    const URL = '../data/level1qna.json'
    const res = await fetch(URL, { signal: signal })
    return await res.json()
  },
}


export { userServices }
