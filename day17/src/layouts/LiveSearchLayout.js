// import { useState } from "react"
import { Outlet, useSearchParams } from "react-router-dom"
import sharedLayoutStyle from './shared/layout.module.css'
// import outletStyle from './shared/outlet.module.css'


const { layout, searchInput, inputContainer } = sharedLayoutStyle

const LiveSearchLayout = () => {
  const [searchParams, setSearchParams] = useSearchParams({ q: null })
  const search = searchParams.get('q')
  const handleSearchChange = (e) => {
    const { value } = e.target
    setSearchParams(prev => ({ ...prev, q: value }))
  }
  return (
    <div className={layout}>
      <Outlet context={search} />
      <div className={inputContainer}>
        <label htmlFor="live-search">Search: </label>
        <input
          type="search"
          id="live-search"
          className={searchInput}
          onChange={handleSearchChange}
        />
      </div>
    </div>
  )
}

export { LiveSearchLayout }
