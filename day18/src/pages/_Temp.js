import { QueryClient, QueryClientProvider, useQuery } from '@tanstack/react-query'
import { getTimestamp } from '../utils/misc'
import { LoadingDiv } from './shared/Loading'

/*
  ! Remove file then cleanup routes.js and MainNavigation in App.js after purpose is done
*/


const queryClient = new QueryClient()

/* //> Format / structure based on https://tanstack.com/query/v4/docs/overview */
const FetchedData = () => {
  const { isLoading, error, data } = useQuery(['cats'], async () => {
    const URL = 'https://api.thecatapi.com/v1/breeds'
    const res = await fetch(URL)
    return await res.json()
  })

  if (isLoading) return <LoadingDiv message='Loading with React-Query' />

  /* 404 doesn't create an error element, rather is printed on the console */
  if (error) return 'An error has occurred: ' + error.message

  return (
    <div style={{ marginTop: '2rem' }}>
      <p>Check console for data</p>
      {console.log(data)}
      {console.log(getTimestamp('Mounted'))}
    </div>
  )
}

const Temp = () => {
  return (
    <div>
      <h2>Temporary Page</h2>
      <h3>Only used for testing @tanstack/react-query</h3>
      <p>Remove file then cleanup routes.js and MainNavigation in App.js after purpose is done</p>

      {/* QueryClientProvider needs to wrap the entire component */}
      <QueryClientProvider client={queryClient}>
        <FetchedData />
      </QueryClientProvider>
    </div>
  )
}


// const tempWrapperHOC = (Comp) => {
//   return (
//     <QueryClientProvider client={queryClient}>
//       <Comp />
//     </QueryClientProvider>
//   )
// }

// const TempWrapper = tempWrapperHOC(Temp)


export { Temp }
