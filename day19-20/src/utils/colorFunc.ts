import { FixMeLater } from "../interface/utils"


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
const isDark = (clr: string, percentCloseToBlack = 50) => {
  /* hex to RGB Conversion http://gist.github.com/983661 */
  /* @ts-ignore */
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
    0.299 * r ** 2 +
    0.587 * g ** 2 +
    0.114 * b ** 2
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
const isContrastPassing = (fColor: string, bgColor: string, AAA_Level = false, Large_18ptAbove = false) => {
  // this is similar to conversion in isDark() --- // TODO: refactor to keep it DRY
  const hexToRGB = (clr: string): FixMeLater => {
    /* @ts-ignore */
    const comp = +('0x' + clr.slice(1).replace(clr.length < 5 && /./g, '$&$&'))
    const r = comp >> 16,
      g = (comp >> 8) & 255,
      b = comp & 255

    /* @ts-ignore */
    return { r, g, b }
  }


  const luminance = ({ r, g, b }: any) => {
    const a = [r, g, b].map((v: FixMeLater) => {
      v /= 255

      return (
        v <= 0.03928
          ? v / 12.92
          : ((v + 0.055) / 1.055) ** 2.4
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

  /*
    note: AAA_Level used as 3rd parameter because it's most likely to be used compared to ^18pt
    isContrastPassing = (fColor, bgColor, AAA_Level = false, Large_18ptAbove = false)
  */
  const minRatio = ratioRef[+Large_18ptAbove][+AAA_Level]
  const fLum = luminance(hexToRGB(fColor)),
    bgLum = luminance(hexToRGB(bgColor))

  const compRatio = (
    fLum < bgLum
      ? (bgLum + 0.05) / (fLum + 0.05)
      : (fLum + 0.05) / (bgLum + 0.05)
  )

  return compRatio >= minRatio
}


const colorMe = (theme = 'light') => {
  const _fColor = theme === 'light' ? '#000000' : theme === 'dark' ? '#ffffff' : theme
  // TODO: checker if color is in hex

  const colorArr: string[] = []
  const getColor = (clr: string) => {
    const bgColor = hexColor()
    // * used AAALevel true to ensure high contrast requirement of 7
    if (!isContrastPassing(_fColor, bgColor, true)) getColor(_fColor)
    colorArr.push(bgColor)
  }
  getColor(_fColor)
  return colorArr[0]
}

export { hexColor, isDark, isContrastPassing, colorMe, }
