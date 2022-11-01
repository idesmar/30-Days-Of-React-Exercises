import { Outlet } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { fetchCats } from '../services/services'
import { LoadingDiv } from '../shared/Loading/Loading'


const getAverage = (arr: Cat[], prop1: keyof Cat, prop2?: keyof Cat['weight']): string => {
  const total = arr?.map(el => {

    const subArr = (prop1 === 'weight' && prop2)
      ? el[prop1][prop2]
      : prop1 === 'life_span'
        ? el[prop1]
        : null

    if (!subArr) return 0

    /* API should provide only 2 values: min & max */
    return subArr.split(' - ').reduce((acc: number, curr: string) => acc + +curr, 0)
  }).reduce((acc, curr) => acc + +curr, 0)

  /* `arr.length * 2` is used because each cat has 2 values (min & max) added together */
  if (!arr?.length) return ''
  const average = (total / (arr.length * 2)).toFixed(1)
  return (+average).toLocaleString()
}

// function getCatsGenInfo({ cats }: { cats: Cat[] }): CatsGenInfo {
function getCatsGenInfo(cats: Cat[]): CatsGenInfo {

  const count = cats.length.toLocaleString()

  const aveWeight = getAverage(cats, 'weight', 'metric')
  const aveLifeSpan = getAverage(cats, 'life_span')

  return { count, aveWeight, aveLifeSpan }
}


function GeneralLayout() {
  const { isLoading, isError, error, data: cats } = useQuery(
    ['allCats'],
    fetchCats,
    {
      staleTime: Infinity
    }
  )

  if (isLoading) {
    return <LoadingDiv />
  }
  if (isError) {
    console.log(error)
  }


  if (cats) {
    const { count, aveWeight, aveLifeSpan } = getCatsGenInfo(cats)
    return (
      <>
        <div>
          <p>There are {count} cat breeds</p>
          <p>Average Weight of {aveWeight} kg</p>
          <p>Average Life Span of {aveLifeSpan} years</p>
        </div>

        {/* @ts-ignore --- Type '{ state: Cat[] | undefined; }' is not assignable to type 'IntrinsicAttributes & OutletProps'. Property 'state' does not exist on type 'IntrinsicAttributes & OutletProps'.ts(2322) */}
        <Outlet state={cats} />
      </>
    )
  }
  return null
}

export { GeneralLayout }
