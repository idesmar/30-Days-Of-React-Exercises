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


const { queryContainer, searchResultCont } = styles

const TIMER_TO_SHOW_RESULT = 2000


// function SearchResult({ cats, query }: SearchResultProps) {

//     const getResult = () => {
//         const [filterResult]: Cat[] = cats.filter(cat =>
//           cat.name.toLowerCase() === query?.trim())
//         return filterResult
//       }


//     const { name, origin, description } = getResult()
//     return <div className={searchResult}>
//       <p>Cat Breed: {name}</p>
//       <p>Country: {origin}</p>
//       <p>Description: {description}</p>
//     </div>

//   return <LoadingDiv />
//   /* if query has more than one string and no result found */
//   // if (query?.length && !filterResult.length) {
//   //
//   // }

// }

interface SearchResultProps2 {
  result: Cat
}

function SearchResult({ result }: SearchResultProps2) {
  const { name, origin, description } = result

  return <div className={searchResultCont}>
    <p>Cat Breed: {name}</p>
    <p>Country: {origin}</p>
    <p>Description: {description}</p>
  </div>

}

/* Possible improvement: Prevent consecutive spaces */
function Countries() {
  const cats = useOutletContext<Cat[]>()

  const [searchParams, setSearchParams] = useSearchParams({ q: '' })
  const query = searchParams.get('q')?.toLowerCase() ?? ''

  const [searchString, setSearchString] = useState<string>(toProperCaseDelimited(query)) // and probably trim
  const [searchResult, setSearchResult] = useState<Cat | null>(null)

  const handleSearchChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const { value: searchValue } = e.target
    setSearchParams(prev => ({ ...prev, q: searchValue.toLowerCase() }))
    setSearchString(prev => toProperCaseDelimited(searchValue))
    const [filteredResult]: Cat[] = cats.filter(cat =>
      cat.name.toLowerCase() === searchValue.toLowerCase().trim())
    console.log([filteredResult].length, filteredResult)
    if (![filteredResult].length) setSearchResult(prev => filteredResult)
  }

  const handleBlur = () => {
    /* guard clause if searchString does not require trimming */
    if (searchString === searchString.trim()) return

    const searchValue = searchString.trim()
    setSearchString(prev => searchValue)
    setSearchParams(prev => ({ ...prev, q: searchValue.toLowerCase() }))
  }


  return <>
    <form
      className={queryContainer}
      onSubmit={e => e.preventDefault()}
    >
      <label htmlFor="cat-input">Search Cat Breed: </label>
      <input
        id='cat-input'
        type="search"
        onChange={handleSearchChange}
        onBlur={handleBlur}
        value={searchString}
      />
    </form>
    {
      (searchResult != null)
        ? <SearchResult result={searchResult} />
        : query
          ? <LoadingDiv />
          : null
    }
  </>
}


export { Countries }
