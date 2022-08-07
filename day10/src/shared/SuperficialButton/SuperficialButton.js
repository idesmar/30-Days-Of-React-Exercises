import { rem4, rem, em } from '../../utils/unitConvert'

const SuperficialButton = ({ content }) => {

  const buttonStyle = {
    padding: rem4(3, 10),
    backgroundColor: 'blue', // ? this should change based on the theme
    color: '#ffffff',
    fontSize: rem(12),
    borderRadius: em(8),
  }

  return (
    <li style={buttonStyle}>
      { content }
    </li>
 )
}

export { SuperficialButton }