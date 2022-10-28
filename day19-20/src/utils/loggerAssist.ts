const getTimestamp = (label = '') => {
  const strDigit = (num: number, len: number = 2) => {
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
 * @param {label of tracker} label
 * @param {reference: null | refGenerator} ref
 * @returns returns value to be logged
 * initially has an option to immediately log based on the arguments
 * but logs are reflecting as "called in logAssist"
 * which can make it difficult to track
 * if the supplied label is not descriptive
 */
const tracker = (label = '', ref = '') => {
  const suffix = !ref
    ? ''
    : (typeof ref === 'object')
      /* @ts-ignore */
      ? ` ${ref.next().value}`
      : ` ${ref}`
  return getTimestamp(label + suffix)
}

/* Uncomment to check what tracker returns */
// console.log(tracker('Testing Global Reference', refGlobal))


export {
  getTimestamp,
  refGenerator,
  refGlobal,
  tracker,
}
