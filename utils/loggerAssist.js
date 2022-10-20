const getTimestamp = (label = '') => {
  const strDigit = (num, len = 2) => {
    const str = num.toString()
    const length = str.length
    return length < len ? '0'.repeat(len - length) + str : str
  }
  const curr = new Date()
  const hh = strDigit(curr.getHours())
  const mm = strDigit(curr.getMinutes())
  const ss = strDigit(curr.getSeconds())
  const ms = strDigit(curr.getMilliseconds(), 3)
  const extraMsg = label && ` [${label}]`
  return `[${hh}:${mm}]-[${ss}.${ms}]${extraMsg}`
}

/* Creates a Reference to be used for logs and time tracking */
function* refGenerator(label = '') {
  const prefix = label ? `${label}-` : ''
  let idx = 0
  while (true) {
    yield `${prefix}Ref-[${++idx}]`
  }
}

/* Creates a GLOBAL Reference for the app */
const refGlobal = refGenerator()

/**
 *
 * @param {label of logger} label
 * @param {reference: null | refGenerator} ref
 * @param {log or return string value} log
 * @returns returns either a console.log() or string value based on input
 */
const logger = (label = '', ref = '', log = true) => {
  const suffix = ref ? ` ${ref.next().value}` : ''
  return log
    ? console.log(`${getTimestamp(label + suffix)}`)
    : getTimestamp(label + suffix)
}

/* Uncomment to check what logger returns */
// logger('Testing Global Reference', refGlobal)

export {
  getTimestamp,
  refGenerator,
  refGlobal,
  logger,
}
