import { rem4, rem, em } from '../../utils/unitConvert'
import { colors } from '../../assets/globalStyles'

const SuperficialButton = ({ content, theme }) => {

  const buttonStyle = {
    padding: rem4(3, 10),
    backgroundColor: colors.buttonBgColor[theme],
    color: colors.buttonFColor[theme],
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