
// source: https://tobiasljungstrom.net/blog/2019-07-26-array-of-sequential-numbers-in-js/
/* // * replacement for using the format below where idx is used because all elements are undefined
        Array(len).fill().< Array method >((el, idx) => idx)    */
const seqNumsArr = (len) => {
  return [...Array(len).keys()]
}

/* Maybe a bit complicated but it looks cool to me */
const isPrime = (num) => {
  const isExemption = (x) => [0, 1].includes(x)

  if (isExemption(num)) return false
  /* if (num === 2) return true // could make things slower if it needs to be checked every time */

  /*  situation: num = 4
      length must be 5 to include idx 4
      [0:'', 1:'',2:'',3:'',4:'']
      hence num/2 + 1                       */
  return !seqNumsArr(Math.floor(num / 2 + 1))
    .some((el) => isExemption(el) ? false : num % (el) === 0)

  // return !Array(Math.floor(num / 2 + 1)).fill()
  //     .some((el, idx) => isExemption(idx) ? false : num % (idx) === 0)
}


/* Simpler way of checking prime */
const isPrime0 = (num) => {
  if ([0, 1].includes(num)) return false
  if (num === 2) return true

  for (let i = 2; i <= Math.floor(num / 2 + 1); i++) {
    if (num % i === 0) return false
  }
  return true
}


const isEven = (num) => num % 2 === 0
const isOdd = (num) => num % 2 === 1


const toTitleCase = (str = '') => {
  return (
    str
      ? str.split(' ')
        .map(subStr => (subStr[0].toUpperCase() + subStr.slice(1).toLowerCase()))
        .join(' ')
      : str
  )
}

const toProperCase = (str = '') => str[0].toUpperCase() + str.slice(1).toLowerCase()

const toProperCaseDelimited = (str = '') => {
  const arr = str.split(' ')
  const ret = []
  for (const subStr of arr) {
    ret.push(toProperCase(subStr))
  }
  return ret.join(' ')
}

const strDigit = (num, len = 2) => {
  const str = num.toString()
  const length = str.length
  return length < len ? '0'.repeat(len - length) + str : str
}

const getTimestamp = (label = '') => {
  const curr = new Date()
  const hh = strDigit(curr.getHours())
  const mm = strDigit(curr.getMinutes())
  const ss = strDigit(curr.getSeconds())
  const ms = strDigit(curr.getMilliseconds(), 3)
  const extraMsg = label && ` [${label}]`
  return `[${hh}:${mm}]-[${ss}.${ms}]${extraMsg}`
}

/* Creates a Reference to be used for logs and time tracking */
function* refGenerator() {
  let idx = 0
  while (true) {
    yield `Ref-[${++idx}]`
  }
}

/* Creates a GLOBAL Reference for the app */
const refGlobal = refGenerator()

export {
  seqNumsArr,
  isPrime, isPrime0, isEven, isOdd,
  toTitleCase, toProperCase, toProperCaseDelimited,
  getTimestamp, refGlobal, refGenerator
}
