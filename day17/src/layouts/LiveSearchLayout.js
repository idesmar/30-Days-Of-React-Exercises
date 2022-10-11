import { useState } from "react"
import { Outlet, useSearchParams } from "react-router-dom"
import sharedLayoutStyle from './shared/layout.module.css'
import outletStyle from './shared/outlet.module.css'

/* //> DEV NOTES
  LiveSearchLayout and LiveSearch can be combined into just one component
    since LiveSearch is the only page/path that is currently using LiveSearchLayout
  If these two files/components are combined and a search result is desired,
    using the value from `onChange` can be used to fetch data from RESTfull API
    eg.
    const handleSearchChange = (e) => {
      const { value } = e.target
      setSearchParams(prev => ({ ...prev, q: value }))
      const fetchData = async () => {
        const res = await axios.get(`https://restcountries.com/v3.1/name/${value}`)
        return res.data
      }
      const data = fetchData()
      setResData(prev => ( data )) // ? setResData(prev => fetchData() ) could work? 🤷‍♂️🤷‍♂️🤷‍♂️
    }
*/

const { outletContainer } = outletStyle
const { layout, searchInput, inputContainer } = sharedLayoutStyle

const fakeReactQuery = (value) => {
  return value
}

const LiveSearchLayout = () => {
  const [searchParams, setSearchParams] = useSearchParams({ q: '' })
  const [resData, setResData] = useState({
    prop1: '',
    prop2: '',
  })

  const search = searchParams.get('q')
  const handleSearchChange = (e) => {
    const { value } = e.target
    setSearchParams(prev => ({ ...prev, q: value }))

    /* //* fake data fetching */
    const resFromFakeReactQuery = fakeReactQuery(value)
    setResData(prev => ({...prev, prop1: 'resFromFakeReactQuery', prop2: resFromFakeReactQuery }))
  }

  return (
    <div className={layout}>
      <h1>Welcome to Live Search</h1>
      <p>Just a mock page; no result will display</p>

      <div className={inputContainer}>
        <label htmlFor="live-search">Search: </label>
        <input
          type="search"
          id="live-search"
          className={searchInput}
          onChange={handleSearchChange}
        />
      </div>

      <p>useState data fetched by a fake react-query function</p>
      {
        resData.prop1 && <p>{resData.prop1}: {resData.prop2}</p>
      }
      <br />

      <div className={outletContainer}>
        <Outlet context={search} />
      </div>
    </div>
  )
}

export { LiveSearchLayout }
