const Button = ({ onClick, text, style }) => {
  return (
    <button onClick={onClick} style={style}>
      {text}
    </button>
  )
}

const buttonWithStyle = (CompParam) => {
  const buttonStyles = {
    backgroundColor: '#61dbfb',
    padding: '10px 25px',
    border: 'none',
    borderRadius: 5,
    margin: 3,
    cursor: 'pointer',
    fontSize: 18,
    color: 'white',
  }
  return (props) => {
    return <CompParam {...props} style={buttonStyles} />
  }
}

const NewButton = buttonWithStyle(Button)

const Heading2 = () => <h2>Sample 1</h2>
const Sample1 = () => {
  return (
    <div>
      <Heading2 />
      <Button text='No Style' />
      <NewButton text='Styled Button' />
    </div>
  )
}


export { Sample1 }
