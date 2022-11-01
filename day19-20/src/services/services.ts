// const catServices = {
const fetchCats = async () => {
  /* returns an array of objects */
  const URL = 'https://api.thecatapi.com/v1/breeds'
  const res = await fetch(URL)
  return await res.json() as Cat[]
}

const fetchCatImage = async (id: string) => {
  /** returns an array of object
    * sample query: https://api.thecatapi.com/v1/images/search?breed_id=abys
    * response sample below with only the important data listed
      {
        "id": "MJWtDz75E",
        "url": "https://cdn2.thecatapi.com/images/MJWtDz75E.jpg",
      }
    */
  const URL = `https://api.thecatapi.com/v1/images/search?breed_id=${id}`
  const res = await fetch(URL)
  return await res.json()
}
// }


export { fetchCats, fetchCatImage }
