import makeID from './makeID'

const Coded = ({ content }) => {
  return (
    <code style={{fontStyle: 'italic'}}>{content}</code>
  )
}

const hasCode = (str = '') => {
  const arr = str.split('`')
  // get all odd array and pass it to coded
  return (
    <p>
      {
        arr.map((el, idx) => {
          return (idx % 2 === 1)
            ? <Coded key={'code' + makeID()} content={el} />
            : el
        })
      }
    </p>
  )
}


export default hasCode