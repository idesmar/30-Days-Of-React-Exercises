import { Outlet } from 'react-router-dom'
import { LoadingDiv } from '../shared/Loading/Loading'
import { useCatsQuery } from '../hooks/useCatsQuery'
import { getCatsGenInfo } from '../helpers/catHelpers'


function GeneralLayout() {

  const { isLoading, isError, error, data: cats } = useCatsQuery()

  if (isLoading) return <LoadingDiv />

  if (isError) console.log(error)

  if (cats) {
    const { count, aveWeight, aveLifeSpan } = getCatsGenInfo(cats)
    return (
      <>
        <div>
          <p>There are {count} cat breeds</p>
          <p>Average Weight of {aveWeight} kg</p>
          <p>Average Life Span of {aveLifeSpan} years</p>
        </div>

        <Outlet context={cats} />
      </>
    )
  }

  return null
}


export { GeneralLayout }
