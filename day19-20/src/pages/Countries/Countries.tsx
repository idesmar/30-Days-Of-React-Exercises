import { useState } from 'react'
import { useOutletContext, useSearchParams } from "react-router-dom"
import { LoadingDiv } from '../../shared/Loading/Loading'
import { toProperCaseDelimited } from '../../utils/misc'
import '../pages.module.css'
import styles from './countries.module.css'

/**
 * search query should display on the url via useParams
 * use data from context to display origin countries
 * fetch image by getting id from Context - (EVEN THOUGH context already has that available)
 */


const { queryContainer } = styles

const TIMER_TO_SHOW_RESULT = 2000

/* Possible improvement: Prevent consecutive spaces */
function Countries() {
  const cats = useOutletContext<Cat[]>()
  const [searchParams, setSearchParams] = useSearchParams({ q: '' })
  const query = searchParams.get('q')?.toLowerCase() ?? ''
  const [searchString, setSearchString] = useState<string>(toProperCaseDelimited(query))

  const handleSearchChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const { value: searchValue } = e.target
    setSearchParams(prev => ({ ...prev, q: searchValue.toLowerCase() }))
    setSearchString(prev => toProperCaseDelimited(searchValue))
  }

  const handleBlur = () => {
    /* guard clause if searchString does not require trimming */
    if (searchString === searchString.trim()) return

    const searchValue = searchString.trim()
    setSearchString(prev => searchValue)
    setSearchParams(prev => ({ ...prev, q: searchValue.toLowerCase() }))
  }

  /* Component has to be inside so it will re-render on any changes in the search string */
  function SearchResult() {
    const filterResult: Cat[] = cats.filter(cat =>
      cat.name.toLowerCase() === query?.trim())

    if (filterResult.length) {
      const [{ name, origin, description }] = filterResult
      return <>
        <p>Cat Breed: {name}</p>
        <p>Country: {origin}</p>
        <p>Description: {description}</p>
      </>
    }

    /* if query has more than one string and no result found */
    if (query?.length && !filterResult.length) {
      return <LoadingDiv
        timer={TIMER_TO_SHOW_RESULT}
        timerOutMessage={`No results found for ${toProperCaseDelimited(query)}`}
      />
    }

    return null
  }

  return <>
    <form
      className={queryContainer}
      onSubmit={e => e.preventDefault()}
    >
      <label htmlFor="cat-input">Search Cat Breed: </label>
      <input
        id='cat-input'
        type="text"
        onChange={handleSearchChange}
        onBlur={handleBlur}
        value={searchString}
      />
    </form>
    {
      query
        ? <SearchResult />
        : null
    }
  </>
}


export { Countries }
