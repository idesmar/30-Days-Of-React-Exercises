
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
const isDark = (clr, percentCloseToBlack = 50) => {
  /* hex to RGB Conversion http://gist.github.com/983661 */
  const comp = +("0x" + clr.slice(1).replace(clr.length < 5 && /./g, '$&$&'))

  /* // [Read more]
    > [ >> ] Right Shift
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Right_shift
    > [ & ] Bitwise AND
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
                 > personal  =  150 // previous setting; func now accepts argument: percentCloseToBlack
       [LIGHT]     white     =  255        */
  /* modify to preferred threshold */
  /* new version  */
  return hsp < (percentCloseToBlack / 100 * 255)
}


// source: modified from https://dev.to/alvaromontoro/building-your-own-color-contrast-checker-4j7o
const isContrastPassing = (fColor, bgColor, AAA_Level = false, Large_18ptAbove = false) => {
  // this is similar to conversion in isDark() --- // TODO: refactor to keep it DRY
  const hexToRGB = (clr) => {
    const comp = +( '0x' + clr.slice(1).replace(clr.length < 5 && /./g, '$&$&'))
    const r = comp >> 16,
          g = (comp >> 8) & 255,
          b = comp & 255
    return { r, g, b }
  }

  const luminance = ({ r, g, b }) => {
    const a = [r, g, b].map(v => {
      v /= 255

      return (
        v <= 0.03928
          ? v / 12.92
          : ((v + 0.055) / 1.055)**2.4
      )
    })
    // returns value 0-1 inclusive
    return a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722;
  }

  /*
  =================================================
                              CONTRAST LEVEL
  Component	                AA-level	AAA-level
  -------------------------------------------------
  Small text
  (<18pt or >=14pt bold)	  4.5:1     7:1
  -------------------------------------------------
  Large text
  (>=18pt)	                3:1     	4.5:1
  -------------------------------------------------
  */

  const ratioRef = [
    [4.5, 7],
    [3, 4.5]
  ]

  const minRatio = ratioRef[+AAA_Level][+Large_18ptAbove]
  const fLum = luminance(hexToRGB(fColor)),
        bgLum = luminance(hexToRGB(bgColor))

  const compRatio = (
    fLum < bgLum
      ? (bgLum + 0.05) / (fLum + 0.05)
      : (fLum + 0.05) / (bgLum + 0.05)
  )

  return compRatio >= minRatio
}


const rem = (px) => {
  if (isNaN(px)) return px
  return +px / 16 + 'rem'
}

const deRem = (rem) => {
  const lastDigit = rem.length - 3
  return +rem.slice(0, lastDigit) * 16
}


export {
  seqNumsArr,
  isPrime, isPrime0, isEven, isOdd,
  hexColor, isDark, isContrastPassing,
  rem, deRem
}
