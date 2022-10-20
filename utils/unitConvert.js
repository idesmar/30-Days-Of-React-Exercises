
const rem = (px = 0) => {
  if (isNaN(px)) return px
  return +px / 16 + 'rem'
}

/*
multiple px (up to 4) to rem conversion
  format based on top right bottom left (ie. padding, margin)
  @function rem4($px1, $px2: $px1, $px3: $px1, $px4: $px2) {
    @return rem($px1) rem($px2) rem($px3) rem($px4);
  }
*/
const rem4 = (px1 = 0, px2 = px1, px3 = px1, px4 = px2) => {
  if (isNaN(px1)) {
    console.error('invalid rem4 input')
    return 0
  }
  return `${rem(px1)} ${rem(px2)} ${rem(px3)} ${rem(px4)}`
}

const deRem = (rem = '') => {
  const lastDigit = rem.length - 3
  return +rem.slice(0, lastDigit) * 16
}

const em = (px = 0) => {
  if (isNaN(px)) return px
  return +px / 16 + 'em'
}

export { rem, rem4, deRem, em, }