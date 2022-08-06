const Details = ({ object }) => {

  return (
    <details>
      <summary>{ object.question }</summary>
      { object.answer }
    </details>
  )
}



export { Details }