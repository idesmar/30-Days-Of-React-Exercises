
// source: https://tobiasljungstrom.net/blog/2019-07-26-array-of-sequential-numbers-in-js/
/* // * replacement for using the format below where idx is used because all elements are undefined
        Array(len).fill('').< Array method >((el, idx) => idx)    */
const seqNumsArr = (len: number) => {
  // return [...(Array(len)).keys()] /* not applicable for typescript target of es5 */
  return Array(len).fill('').map((el, idx) => idx)
}

/* Maybe a bit complicated but it looks cool to me */
const isPrime = (num: number) => {
  const isExemption = (x: number) => [0, 1].includes(x)

  if (isExemption(num)) return false
  /* if (num === 2) return true // could make things slower if it needs to be checked every time */

  /*  situation: num = 4
      length must be 5 to include idx 4
      [0:'', 1:'',2:'',3:'',4:'']
      hence num/2 + 1                       */
  return !seqNumsArr(Math.floor(num / 2 + 1))
    .some(el => isExemption(el) ? false : num % (el) === 0)

  // return !Array(Math.floor(num / 2 + 1)).fill()
  //     .some((el, idx) => isExemption(idx) ? false : num % (idx) === 0)
}


/* Simpler way of checking prime */
const isPrime0 = (num: number) => {
  if ([0, 1].includes(num)) return false
  if (num === 2) return true

  for (let i = 2; i <= Math.floor(num / 2 + 1); i++) {
    if (num % i === 0) return false
  }
  return true
}


const isEven = (num: number) => num % 2 === 0
const isOdd = (num: number) => num % 2 === 1


const toTitleCase = (str: string = '') => {
  return (
    str
      ? str.split(' ')
        .map(subStr => (subStr[0].toUpperCase() + subStr.slice(1).toLowerCase()))
        .join(' ')
      : str
  )
}

const toProperCase = (str: string = '') => str[0].toUpperCase() + str.slice(1).toLowerCase()

const toProperCaseDelimited = (str: string = '', trim: (boolean | undefined) = false): string => {
  const arr = str.split(' ')
  const ret = []
  for (const subStr of arr) {
    (subStr)
      ? ret.push(toProperCase(subStr))
      : ret.push(subStr)
  }
  if (!trim) return ret.join(' ')

  const trimmed = []
  for (let i = 0; i < ret.length; i++) {
    if (!ret[i]) continue
    trimmed.push(ret[i])
  }
  return trimmed.join(' ')
}

export {
  seqNumsArr,
  isPrime, isPrime0, isEven, isOdd,
  toTitleCase, toProperCase, toProperCaseDelimited,
}
