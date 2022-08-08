import { rem } from '../utils/unitConvert'

const wMax = {
  width: '100%',
  maxWidth: rem(700),
  marginInline: 'auto',
}

const wwMax = {
  width: '100%',
  maxWidth: rem(1440),
  marginInline: 'auto',
}

// dark blue: #0f172a
// light turquoise: #5fdbfc

const colors = {
  fColor: {
    light: '#000000',
    dark: '#5fdbfc',
  },
  bgColor: {
    light: '#ffffff',
    dark: '#0f172a',
  },
  headerBgColor: {
    light: '#5fdbfc',
    dark: '#0f172a',
  },
  buttonBgColor: {
    light: '#0f172a',
    dark: '#5fdbfc',
  },
  buttonFColor: {
    light: '#5fdbfc',
    dark: '#0f172a',
  },
}

export { wMax, wwMax, colors }