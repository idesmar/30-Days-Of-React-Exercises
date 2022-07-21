import makeID from './makeID'

const PreCode = ({ content }) => {
  return (
    <pre style={{ display: 'inline' }}>
      <code>{content}</code>
    </pre>
  )
}

const hasCode = (str = '') => {
  const arr = str.split('`')
  // get all odd array and pass it to coded
  return (
    <>
      {
        arr.map((el, idx) => {
          return (idx % 2 === 1)
            ? <PreCode key={'code' + makeID()} content={el} />
            : el
        })
      }
    </>
  )
}


export default hasCode