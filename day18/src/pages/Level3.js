import { useQuery, QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import axios from 'axios'
import { useState } from 'react'
import { getTimestamp, refGenerator } from '../utils/loggerAssist'
import { LoadingDiv } from './shared/Loading'
import sharedStyles from './styles/shared.module.css'
import level3Styles from './styles/Level3.module.css'

/* //> DEV NOTES
  NOTE: React Query by default will refetch data when the window is "refocused"
  Below is an explanation from the website docs "aggressive but sane refetching"
  > Query instances via useQuery or useInfiniteQuery by default consider cached data as stale
  > Stale queries are refetched automatically in the background when:
  >   - New instances of the query mount
  >   - The window is refocused
  >   - The network is reconnected.
  >   - The query is optionally configured with a refetch interval.
*/


const refGen = refGenerator('L3')

const { middleHeading, small } = sharedStyles
const { hiddenAnswer, showAnswer } = level3Styles

const allCatsCount = (countries) => {
  const count = countries.reduce((acc, curr) => acc + curr.count, 0)
  return { 'Total Countries': count }
}

const AnswerTable = ({ answer }) => {
  const [isShowing, setShowing] = useState(false)
  return (
    <div>
      <button
        className={hiddenAnswer}
        onClick={() => setShowing(prev => !prev)}
      >
        {isShowing ? 'Hide' : 'Show'} Answer
      </button>
      {
        isShowing
        && <div>
          {
            answer.map(ans => <p key={ans.name + ' cat'}>{ans.name}: {ans.count}</p>)
          }
          { // cats meow count
            console.table(allCatsCount(answer))
          }
        </div>
      }
    </div>
  )
}


const Answer = ({ answer }) => {
  const [isShowing, setShowing] = useState(false)
  return <span
    onClick={() => setShowing(prev => !prev)}
    className={!isShowing ? hiddenAnswer : showAnswer}
  >
    {!isShowing ? 'Show Answer' : answer}
  </span>
}

const CountriesFromCats = ({ countries }) => {
  const getSortedCountries = (countries) => {
    return [...countries].sort((a, b) => {
      if (a.count < b.count) return -1
      if (a.count > b.count) return 1
      if (a.count === b.count) {
        if (a.name < b.name) return -1
        if (a.name > b.name) return 1
        return 0
      }
      return 0
    })
  }
  const getCountriesWithMostCatBreeds = (countries) => {
    const highestCount = [...countries].reduce((acc, curr) => {
      if (acc < curr.count) return curr.count
      return acc
    }, 0)

    /* filter array of obj that has count === highest count and return obj
      then map through new array to extract country name,
      then join array by ', ' --- in case more than one country in array */
    return countries
      .filter(country => country.count === highestCount)
      .map(country => country.name)
      .join(',')
  }

  return (
    <div style={{ marginTop: '1rem' }}>
      <p>
        How many countries have cat breeds?&nbsp; {/* Non-Breaking SPace */}
        <Answer answer={countries.length} />
      </p>
      <p>
        Which country has the highest number of cat breeds?&nbsp; {/* Non-Breaking SPace */}
        <Answer answer={getCountriesWithMostCatBreeds(countries)} />
      </p>
      <p>
        Arrange countries in ascending order based on the number of cat breeds they have:
      </p>
      <AnswerTable answer={getSortedCountries(countries)} />
    </div>
  )
}


const getCountriesFromCats = (cats) => {
  const origins = cats.map(cat => cat.origin)
  const countries = new Set(origins)
  return [...countries].map(country => {
    const count = origins.filter(origin => origin === country).length
    return { name: country, count }
  })
}

const QueryCats = () => {
  const { isLoading, isError, error, data: countries } = useQuery(
    ['countriesFromCats'],
    async () => {
      const refGenValue = refGen.next().value
      /* // NOTE: React Query by default will refetch data based on certain conditions.
        See DEV NOTES at module start */
      console.log(getTimestamp(`useQuery is Fetching Data ${refGenValue}`))
      const URL = 'https://api.thecatapi.com/v1/breeds'
      const res = await axios.get(URL)
      const cats = await res.data
      const countries = getCountriesFromCats(cats)
      return countries
    },
    { /*
        Possible options to limit data query:
        * IMPORTANT: options below may cause confusion when debugging after code refactor
          therefore, only used `refetchOnWindowsFocus: false`
          once in production, this "may" be replaced by either of the two below
        > refetchOnMount: false,
        > staleTime: Infinity,
        */
      refetchOnWindowFocus: false,
    }
  )

  if (isLoading) return <LoadingDiv message='Fetching using React-Query and Axios' />
  if (isError) return <div>
    Error: {error.message}
    {console.log(`Back up log for error: ${error}`)}
  </div>
  return <CountriesFromCats countries={countries} />
}


/* //> Alternative Structure (sample taken from react-query docs)
function Example() {
  const query = useQuery(['todos'], fetchTodos)

  return (
    <div>
      {
        query.isLoading
          ? 'Loading...'
          : query.isError
            ? 'Error!'
            : query.data
              ? query.data.map((todo) => <div key={todo.id}>{todo.title}</div>)
              : null
      }
    </div>
  )
}
*/


const queryClient = new QueryClient()

const Level3 = () => {
  return (
    <div>
      <h2 className={middleHeading}>Level 3</h2>
      <small className={small}>* Using @tanstack/react-query</small>

      <QueryClientProvider client={queryClient}>
        <QueryCats />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </div>
  )
}


export { Level3 }
