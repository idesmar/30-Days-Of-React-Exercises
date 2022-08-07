/**
 * NOTE: This is a SAMPLE use of services folder ONLY
 * getQna is used once in Day10, it's not advisable to have it in a service folder
 */
const userServices = {

  getQna: async () => {
    const res = await fetch('../data/level1qna.json') // note: this url works because the mapping of the folder this is being imported to matches that of the public folder
    return res.json()
  },

}

export { userServices }