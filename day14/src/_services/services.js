
const userServices = {
  getQna: async () => {
    const res = await fetch('./data/level1qna.json')
    if (!res.ok) {
      console.log(`Encountered error ${res.status}: ${res.statusText} while fetching QNA`)
      return []
    }
    return await res.json()
  }
}


export { userServices }
