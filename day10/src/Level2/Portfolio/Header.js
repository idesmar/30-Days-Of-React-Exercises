import { Button } from '../../shared/Button/Button'
import makeID from '../../utils/makeID'
import { rem4, rem } from '../../utils/unitConvert'


const headingStyle = {
  padding: rem4(20, 8),
  outline: '1px solid'
}

const buttonStyle = {
  padding: rem4(0, 10),
  borderRadius: rem(5),
  outline: '1px solid'
}

const Header = () => {

  const buttons = [
    {
      text: 'Show Time',
      onClick: () => {},
    },
    {
      text: 'Greet me',
      onClick: () => {},
    },
    {
      text: 'Change Theme:',
      onClick: () => {},
    },
  ]

  const Buttons = () => (
    <div style={{ display: 'flex', justifyContent: 'center', gap: rem(5) }}>
      {
        buttons.map(button => {
          const { text, onClick } = button
          return (
            <Button
              key={'btn' + makeID()}
              style={buttonStyle}
              text={text}
              onClick={onClick}
            />
          )
        })
      }
    </div>
  )

  return (
    <header style={headingStyle}>
      <h2>Welcome to my mock portfolio</h2>
      <Buttons />
    </header>
  )
}

export { Header }