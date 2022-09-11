import { em, rem4 } from '../_utils/unitConvert'

const Button = ({
  innerText,
  style,
  handleClick,
}) => {
  const defaultButtonStyle = {
    all: 'unset',
    boxSizing: 'border-box',
    cursor: 'pointer',
    padding: rem4(4, 12),
    borderRadius: em(8),
    backgroundColor: 'blue',
    color: 'white',
    margin: '1rem 0',
  }

  const buttonStyle = { ...defaultButtonStyle, ...style }

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
