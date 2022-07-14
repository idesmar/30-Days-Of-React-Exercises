
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


// * hexColor from 30Days of React
const hexColor = () => {
  let str = '0123456789abcdef'
  let color = ''
  for (let i = 0; i < 6; i++) {
    let index = Math.floor(Math.random() * str.length)
    color += str[index]
  }
  return '#' + color
}

// * modified version of https://awik.io/determine-color-bright-dark-using-javascript/
const isDark = (clr) => {
  /* hex to RGB Conversion http://gist.github.com/983661 */
  const comp = +("0x" + clr.slice(1).replace(clr.length < 5 && /./g, '$&$&'))

  /* // [Read more] Right shift (>>), Bitwise AND (&)
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Right_shift
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_AND */
  const r = comp >> 16
  const g = (comp >> 8) & 255
  const b = comp & 255

  /* HSP (Highly Sensitive Poo 💩) equation from http://alienryderflex.com/hsp.html
    https://www.nbdtech.com/Blog/archive/2008/04/27/Calculating-the-Perceived-Brightness-of-a-Color.aspx  */
  const hsp = Math.sqrt(
    0.299 * r**2 +
    0.587 * g**2 +
    0.114 * b**2
  )

  /*    [DARK]     black     =  0
                 * middle    =  127.5
                 > personal  =  150
       [LIGHT]     white     =  255        */
  /* modify to preferred threshold */
  return hsp < 150
}


const rem = (int) => {
  if (isNaN(int)) return int
  return +int / 16 + 'rem'
}

export { isPrime, isPrime0, isEven, isOdd, seqNumsArr, hexColor, isDark, rem }