import makeID from './makeID'

const Coded = ({ content }) => {
  return (
    <pre
      style={{tabSize: '2'}}
    >
      <code
        style={{ fontStyle: 'italic' }}
      >
        {content}
      </code>
    </pre>
  )
}

// Note: return value is a fragment so it still needs to be enclosed in an element once imported
const hasCode = (str = '') => {
  const arr = str.split('`')
  // get all odd array and pass it to coded
  return (
    <>
      {
        arr.map((el, idx) => {
          return (idx % 2 === 1)
            ? <Coded key={'code' + makeID()} content={el} />
            : el
        })
      }
    </>
  )
}


export default hasCode