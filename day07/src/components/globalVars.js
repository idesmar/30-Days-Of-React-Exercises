import { rem, deRem } from "../lib/utils"

const gap = rem(5)
const sides = rem(60)

const idealWidth = rem(deRem(sides) * 8 + deRem(gap) * 7)
const tab = {
  padding: rem(8),
  borderRadius: rem(8),
  fontSize: rem(12),
  width: sides,
  aspectRatio: '1/1',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}
const header3 = {
  textAlign: 'center',
  fontSize: 'revert',
  fontWeight: '700',
  padding: '0.8rem 0.5rem 0.5rem'
}
const header2 = {
  fontSize: 'revert',
  fontWeight: '700',
  padding: rem(12),
}
const section = {
  width: rem(deRem(idealWidth) + 200),
  maxWidth: '100%',
  margin: '0 auto',
}
const centerText = {
  textAlign: 'center',
}

export { idealWidth, tab, header2, header3, gap, section, centerText }