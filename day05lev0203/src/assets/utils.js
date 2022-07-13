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

  /*  black = 0 (dark)
      middle = 127.5
      white = 255 (light) */
  return hsp < 127.5
}

export { hexColor, isDark }