
function getSumFromDelimitedString(str: string) {
  return str.split(' - ').reduce((acc: number, curr: string) => acc + +curr, 0)
}

function getAverageFromDelimitedString(str: string) {
  return (getSumFromDelimitedString(str) / 2).toString()
}

function getCatsAverage(arr: Cat[], prop1: keyof Cat, prop2?: keyof Cat['weight']): string {
  const total = arr?.map(el => {
    const valStr = (prop1 === 'weight' && prop2)
      ? el[prop1][prop2]
      : prop1 === 'life_span'
        ? el[prop1]
        : null
    if (!valStr) return 0

    /* API should provide only 2 values: min & max */
    return getSumFromDelimitedString(valStr)
  }).reduce((acc, curr) => acc + +curr, 0)

  /* `arr.length * 2` is used because each cat has 2 values (min & max) added together */
  if (!arr?.length) return ''
  const average = (total / (arr.length * 2)).toFixed(1)
  return (+average).toLocaleString()
}


function getCatsGenInfo(cats: Cat[]): CatsGenInfo {
  const count = cats.length.toLocaleString()
  const aveWeight = getCatsAverage(cats, 'weight', 'metric')
  const aveLifeSpan = getCatsAverage(cats, 'life_span')

  return { count, aveWeight, aveLifeSpan }
}


export { getCatsGenInfo, getAverageFromDelimitedString }
