import { useQuery, QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import axios from 'axios'
import { refGenerator, logger } from '../utils/loggerAssist'
import { LoadingDiv } from './shared/Loading'
import sharedStyles from './styles/shared.module.css'


const refGen = refGenerator('L3')

const { middleHeading, small } = sharedStyles

const Cats = ({ data: cats }) => {
  return (
    <p>
      Cats acquired! Check console!
      {console.log(cats)}
      {logger('Mounted', refGen)}
    </p>
  )
}

const QueryCats = () => {
  const { isLoading, error, data: cats } = useQuery(['cats'], async () => {
    const URL = 'https://api.thecatapi.com/v1/breeds'
    const res = await axios.get(URL)
    logger('pre-return on fetch-axios', refGen)
    return await res.data
  })

  if (isLoading) return <LoadingDiv message='Fetching using React-Query and Axios' />
  if (error) return <div>{console.log(error.message)}</div>
  return <Cats data={cats} />
}

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
