import { themeColor } from '../App'
import { em, rem4 } from '../utils/unitConvert'

const Button = ({
  innerText,
  style,
  handleClick,
}) => {

  const defaultButtonStyle = {
    cursor: 'pointer',
    padding: rem4(4, 12),
    borderRadius: em(8),
    backgroundColor: 'green',
    margin: '1rem 0',
    marginLeft: 'auto',
  }

  const backgroundColor = themeColor

  const buttonStyle = { ...defaultButtonStyle, ...style, backgroundColor }

  return (
    <button
      style={buttonStyle}
      onClick={handleClick}
    >
      {innerText}
    </button>
  )
}


export { Button }
