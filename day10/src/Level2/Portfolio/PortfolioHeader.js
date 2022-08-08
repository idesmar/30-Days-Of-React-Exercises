import { Button } from '../../shared/Button/Button'
import makeID from '../../utils/makeID'
import { rem4, rem } from '../../utils/unitConvert'
import { useState } from 'react'
import { colors } from '../../assets/globalStyles'

const Buttons = ({ buttons, theme }) => {

  const buttonStyle = {
    padding: rem4(0, 10),
    borderRadius: rem(5),
    border: '1px solid',
    backgroundColor: colors.buttonBgColor[theme],
    color: colors.buttonFColor[theme]
  }

  return (
    <div style={{ display: 'flex', justifyContent: 'center', gap: rem(5), marginTop: '1rem' }}>
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
}


const PortfolioHeader = ({ theme, handleChangeTheme }) => {

  const [ greet, setGreet ] = useState('')
  const [ time, setTime] = useState('')

  const message = greet || time

  const buttons = [
    {
      text: 'Show Time',
      onClick: () => {
        const newTime = time ? '' : (new Date()).toLocaleTimeString()
        setGreet('')
        setTime(newTime)
      },
    },
    {
      text: 'Greet me',
      onClick: () => {
        const newGreet = greet ? '' : 'Hello There'
        setTime('')
        setGreet(newGreet)
      },
    },
    {
      text: `Change Theme: ${theme === 'dark' ? 'Light' : 'Dark'}`,
      onClick: handleChangeTheme,
    },
  ]

  const headerStyle = {
    padding: rem4(20, 8),
    border: '1px solid',
    marginBottom: rem(24),
    backgroundColor: colors.headerBgColor[theme],
  }

  const messageContainerStyle = {
    height: !message ? '1em' : '',
    lineHeight: '1',
    textAlign: 'center',
    marginTop: '1rem',
  }

  return (
    <header style={headerStyle}>
      <h2>Welcome to my mock portfolio</h2>
      <Buttons buttons={buttons} theme={theme} />
      <div
        style={messageContainerStyle}
        aria-hidden={!message}
      >
        {message && <p>{message}</p> }
      </div>
    </header>
  )
}

export { PortfolioHeader }