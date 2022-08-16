const userServices = {

  getQna: async () => {
    const res = await fetch('./data/level1qna.json')
    return await res.json()
  },

  // more services here
}

export { userServices }