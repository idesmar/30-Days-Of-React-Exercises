import { useState } from 'react'
import { useOutletContext, useSearchParams } from "react-router-dom"
import { LoadingDiv } from '../../shared/Loading/Loading'
import { toProperCaseDelimited } from '../../utils/misc'
import '../pages.module.css'

/**
 * search query should display on the url via useParams
 * use data from context to display origin countries
 * fetch image by getting id from Context - (EVEN THOUGH context already has that available)
 */


function SearchResult({ cats, query }: SearchResultProps) {
  const filterResult: Cat[] = cats.filter(cat =>
    cat.name.toLocaleLowerCase() === query?.trim())

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
    return <LoadingDiv />
  }

  return null
}

/*
  Possible improvement: Do not allow continuous spaces
 */
function Countries() {
  const cats = useOutletContext<Cat[]>()
  const [searchString, setSearchString] = useState('')
  const [searchParams, setSearchParams] = useSearchParams({ q: '' })
  const query = searchParams.get('q')?.toLocaleLowerCase()

  const handleSearchChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const { value: searchValue } = e.target
    setSearchParams(prev => ({ ...prev, q: searchValue.toLowerCase() }))
    setSearchString(prev => toProperCaseDelimited(searchValue))
  }

  const handleBlur = () => {
    const searchValue = searchString.trim()
    setSearchString(prev => searchValue)
    setSearchParams(prev => ({ ...prev, q: searchValue.toLowerCase() }))
  }

  return <>
    <form style={{ paddingTop: '2rem' }}>
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
        ? <SearchResult cats={cats} query={query} />
        : null
    }
  </>
}


export { Countries }
