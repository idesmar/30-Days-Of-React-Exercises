import { em } from './unitConvert'

const Code = ({ content }) => {
  const defaultCodeStyle = {
    fontStyle: 'italic',
  }
  const defaultSpanStyle = {
    padding: `0 ${em(8)}`,
    margin: `0 ${em(4)}`,
    outline: `1px dashed`,
    borderRadius: em(4),
  }
  return (
    <span style={defaultSpanStyle}>
      <code style={defaultCodeStyle}>
        {content}
      </code>
    </span>
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
            ? <Code key={'code' + idx} content={el} />
            : el
        })
      }
    </>
  )
}


export default hasCode