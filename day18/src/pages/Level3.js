import { useQuery, QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import axios from 'axios'
import { getTimestamp, refGenerator, tracker } from '../utils/loggerAssist'
import { LoadingDiv } from './shared/Loading'
import sharedStyles from './styles/shared.module.css'

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

const CountriesFromCats = ({ countries }) => {
  return (
    <div>
      {/* {console.log(countries)} */}
      {console.log(tracker('Mounted'))}
    </div>
  )
}


const getCountriesFromCats = (cats) => {
  const origins = cats.map(cat => cat.origin)
  const countries = new Set(origins)
  const res = [...countries].map(country => ({ name: country, count: 0 }))
  return res.map(el => {
    const count = origins.reduce((acc, origin) => {
      return acc + (origin === el.name ? 1 : 0)
    }, 0)
    return { ...el, count }
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
