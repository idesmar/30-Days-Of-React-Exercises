import { useState } from 'react'
import { useOutletContext, useSearchParams } from "react-router-dom"
import { LoadingDiv } from '../../shared/Loading/Loading'
import { getCatSearchResult } from '../../helpers/catSearchHelper'
import { toProperCaseDelimited } from '../../utils/misc'
import '../pages.module.css'
import styles from './countries.module.css'

/**
 * search query should display on the url via useParams
 * use data from context to display origin countries
 * fetch image by getting id from Context - (EVEN THOUGH context already has that available)
 */


const TIMER_TO_SHOW_RESULT = 1000

const { queryContainer } = styles

function SearchResult({ query, result }: SearchResultProps) {

  if (!result) return <LoadingDiv
    timer={TIMER_TO_SHOW_RESULT}
    timerOutMessage={`No results found for ${toProperCaseDelimited(query)}`}
  />

  const { name, origin, description } = result
  return <div>
    <div>
      {/* image container */}
      <button>Show Cat Image</button>
    </div>

    <p>Cat Breed: {name}</p>
    <p>Country: {origin}</p>
    <p>Description: {description}</p>

  </div>
}


function Countries() {
  const cats = useOutletContext<Cat[]>()

  const [searchParams, setSearchParams] = useSearchParams({ q: '' })
  const query = searchParams.get('q')

  const [result, setResult] = useState(query ? getCatSearchResult(cats, query) : null)

  const [searchString, setSearchString] = useState<string>(query ? toProperCaseDelimited(query, true) : '')

  const handleSearchChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const { value: inputValue } = e.target
    setSearchString(prev => toProperCaseDelimited(inputValue))
  }

  const trimSearchStringOnBlur = () => {
    if (searchString === searchString.trim()) return
    setSearchString(prev => toProperCaseDelimited(prev, true))
  }

  const handleSearchSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault()
    if (searchString !== searchString.trim()) {
      setSearchString(prev => searchString.trim())
    }
    const query = searchString.toLowerCase().trim()
    setSearchParams(prev => ({ ...prev, q: query }))
    setResult(prev => getCatSearchResult(cats, query))
  }

  return <>
    <form
      onSubmit={handleSearchSubmit}
      className={queryContainer}
    >
      <input
        id='cat-input'
        type="text"
        onChange={handleSearchChange}
        onBlur={trimSearchStringOnBlur}
        value={searchString}
      />
      <button>Search Cat Breed</button>
    </form>
    {
      !query
        ? null
        : <SearchResult query={query} result={result} />
    }
  </>
}


export { Countries }
