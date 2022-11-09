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

const TIMER_TO_SHOW_RESULT = 1000

interface ResultProps {
  result: Cat
}

function Result({ result }: ResultProps) {
  const { name, origin, description } = result
  return <>
    <p>Cat Breed: {name}</p>
    <p>Country: {origin}</p>
    <p>Description: {description}</p>
  </>
}


const { queryContainer } = styles


/* Possible improvement: Prevent consecutive spaces */
function Countries() {
  const cats = useOutletContext<Cat[]>()

  const [searchParams, setSearchParams] = useSearchParams({ q: '' })
  const query = searchParams.get('q')?.toLowerCase() ?? ''

  const [searchString, setSearchString] = useState<string>(toProperCaseDelimited(query))

  const [isSearching, setIsSearching] = useState(false)
  const [isSearchFound, setIsSearchFound] = useState(false)

  const [result, setResult] = useState<Cat>()
  const [notFoundMessage, setNotFoundMessage] = useState('')

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

  // : React.FormEventHandler<HTMLFormElement>
  const handleSubmitSearch = (e?: { preventDefault: () => void } | undefined) => {
    // e?.preventDefault()
    const [filterResult]: Cat[] = cats.filter(cat =>
      cat.name.toLowerCase() === query?.trim())

    if (!filterResult) {
      setIsSearching(prev => true)
      setIsSearchFound(prev => false)
      setNotFoundMessage(prev => `No result found for ${searchString}`)
      return
    }

    setIsSearchFound(prev => true)
    setIsSearching(prev => false)
    setResult(prev => filterResult)
  }

  if (query) {
    console.log(query)
  }

  return <>
    <form
      className={queryContainer}
      onSubmit={handleSubmitSearch}
    >
      <input
        type="search"
        onChange={handleSearchChange}
        onBlur={handleBlur}
        value={searchString}
      />
      <button>Search Cat Breed</button>
    </form>
    {
      (!isSearching && !isSearchFound)
        ? null
        : (!isSearching && isSearchFound && result)
          ? <Result result={result} />
          : (isSearching)
            ? <LoadingDiv timer={TIMER_TO_SHOW_RESULT} timerOutMessage={notFoundMessage} />
            : null
    }
  </>
}


export { Countries }


/*

  initial state

  if query exists
    format query and display in input
    --- is it possible to show result as well?







 */
