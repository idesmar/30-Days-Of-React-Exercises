import axios from "axios"


const qnaServices = {
  fetchQna: async (signal) => {
    const URL = '../data/level1qna.json'
    const res = await fetch(URL, { signal: signal })
    return await res.json()
  },
}

const catServices = {
  axiosCats: async (signal) => {
    const URL = 'https://api.thecatapi.com/v1/breeds'
    const res = await axios.get(URL, { signal: signal })
    return res.data
  },
}


export { qnaServices, catServices }
