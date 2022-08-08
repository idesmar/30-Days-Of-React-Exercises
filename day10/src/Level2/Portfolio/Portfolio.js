import { Component } from 'react'
import { rem } from '../../utils/unitConvert'
import idesmar from '../../assets/idesmar.jpg'
import { icons } from '../../assets/icons'
import { SuperficialButton } from '../../shared/SuperficialButton/SuperficialButton'
import { PortfolioHeader as Header } from './PortfolioHeader'
import { colors, wwMax } from '../../assets/globalStyles'

// * Make a simple portfolio using the components we have created so far. Implement a dark mode by using the function we wrote on day 8 challenge.

const headingStyle = {
  fontSize: '1rem',
  fontWeight: '400',
  marginBottom: '1rem',
}

const h3Style = {
  display: 'flex',
  alignItems: 'center',
  fontWeight: '500',
  marginBottom: '1rem',
  lineHeight: '1',
}

const imgContainerStyle = {
  borderRadius: '100%',
  width: rem(200),
  aspectRatio: '1/1',
  overflow: 'hidden',
  marginBottom: rem(10),
}

const imgStyle = {
  width: '100%',
}

const skillsContainer = {
  display: 'flex',
  flexWrap: 'wrap',
  gap: rem(4),
}


const Skills = ({ skills, theme }) => {

  return (
    <>
      <h4 style={{...headingStyle, fontWeight: '500'}}>SKILLS</h4>
      <ul style={skillsContainer}>
        {
          skills.map(skill => (
            <SuperficialButton
              key={skill}
              content={skill}
              theme={theme}
            />
          ))
        }
      </ul>
    </>
  )
}


const user = {
  firstName: 'siege',
  lastName: 'idesmar',
  img: idesmar,
  position: 'hermit developer',
  skills: [
    'HTML', 'CSS', 'SCSS', 'Javascript', 'React', 'Git',
  ],
  joinedDate: 'sometime'
}

class PortfolioClass extends Component {

  state = {
    theme: 'light',
  }

  handleChangeTheme = () => {
    const newTheme = this.state.theme === 'light' ? 'dark' : 'light'
    this.setState({theme: newTheme})
  }

  render() {

    const { theme } = this.state

    const {
      firstName, lastName, img, position, skills, joinedDate
    } = user

    const fullName = [firstName, lastName].join(' ')

    const Image = () => (
      <div style={imgContainerStyle}>
        <img style={imgStyle} width='100px' src={img} alt="" />
      </div>
    )
    const FullName = () => <h3 style={h3Style}>{fullName.toUpperCase()}{icons.check}</h3>
    const Position = () => <h4 style={headingStyle}>{position}</h4>
    const JoinedDate = () => (
      <p style={{ ...h3Style, margin: 'unset', marginTop: '1rem', fontWeight: '400', }}>
        {icons.clock}{joinedDate}
      </p>
    )

    const containerStyle = {
      color: colors.fColor[theme],
      backgroundColor: colors.bgColor[theme],
      boxShadow: `0 0 0 100vmax ${colors.bgColor[theme]}`,
      clipPath: 'inset(0 -100vmax)', // NOTE: Global: 96.57% https://caniuse.com/mdn-css_properties_clip-path_html
    }

    return (
      <div style={{...containerStyle, ...wwMax}}>
        <Header
          theme={theme}
          handleChangeTheme={this.handleChangeTheme}
        />
        <div style={{padding: '1rem'}}>
          <Image />
          <FullName />
          <Position />
          <Skills skills={skills} theme={theme} />
          <JoinedDate />
        </div>
      </div>
    )
  }
}

export { PortfolioClass }