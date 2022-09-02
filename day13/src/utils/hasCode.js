import makeID from './makeID'

const Code = ({ content }) => {
  return (
    <code
      style={{ fontStyle: 'italic' }}
    >
      {content}
    </code>
  )
}

// Note: return value is a fragment
const hasCode = (str = '') => {
  // NOTE: create a separate checker if the string has a code: hasCodeChecker
  const arr = str.split('`')

  // ? Look into combining with code block (```codeBlock```)
  return (
    <>
      {
        // all odd idx are to be coded
        arr.map((el, idx) => {
          return (idx % 2 === 1)
            ? <Code key={'code' + makeID()} content={el} />
            : el
        })
      }
    </>
  )
}


export default hasCode