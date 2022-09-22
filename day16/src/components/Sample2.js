const Button = ({ onClick, text, style }) => {
  return (
    <button onClick={onClick} style={style}>
      {text}
    </button>
  )
}

const buttonWithStyles = (CompParam, name = 'default') => {
  const colors = [
    {
      name: 'default',
      backgroundColor: '#e7e7e7',
      color: '#000000',
    },
    {
      name: 'react',
      backgroundColor: '#61dbfb',
      color: '#ffffff',
    },
    {
      name: 'success',
      backgroundColor: '#4CAF50',
      color: '#ffffff',
    },
    {
      name: 'info',
      backgroundColor: '#2196F3',
      color: '#ffffff',
    },
    {
      name: 'warning',
      backgroundColor: '#ff9800',
      color: '#ffffff',
    },
    {
      name: 'danger',
      backgroundColor: '#f44336',
      color: '#ffffff',
    },
  ]
  const { backgroundColor, color } = colors.find((c) => c.name === name)
  const buttonStyles = {
    backgroundColor,
    padding: '10px 45px',
    border: 'none',
    borderRadius: 3,
    margin: 3,
    cursor: 'pointer',
    fontSize: '1.25rem',
    color,
  }
  return (props) => <CompParam {...props} style={buttonStyles} />
}

const NewButton = buttonWithStyles(Button)
const ReactButton = buttonWithStyles(Button, 'react')
const InfoButton = buttonWithStyles(Button, 'info')
const SuccessButton = buttonWithStyles(Button, 'success')
const WarningButton = buttonWithStyles(Button, 'warning')
const DangerButton = buttonWithStyles(Button, 'danger')

const Heading2 = () => <h2>Sample 2</h2>
const Sample2 = () => {
  return (
    <div>
      <Heading2 />
      <Button text='No Style' onClick={() => console.log('I am not styled yet')} />
      <NewButton
        text='Styled Button'
        onClick={() => console.log('I am the default style')}
      />
      <ReactButton text='React' onClick={() => console.log('I have react color')} />
      <InfoButton
        text='Info'
        onClick={() => console.log('I am styled with info color')}
      />
      <SuccessButton text='Success' onClick={() => console.log('I am successful')} />
      <WarningButton
        text='Warning'
        onClick={() => console.log('I warn you many times')}
      />
      <DangerButton
        text='Danger'
        onClick={() => console.log('Oh no, you can not restore it')}
      />
    </div>
  )
}


export { Sample2 }
