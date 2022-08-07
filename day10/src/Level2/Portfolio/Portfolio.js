import { Component } from 'react'
import { rem } from '../../utils/unitConvert'
import { wMax } from '../../assets/globalStyles'
import idesmar from '../../assets/idesmar.jpg'
import { icons } from '../../assets/icons'
// import makeID from '../../utils/makeID'
import { SuperficialButton } from '../../shared/SuperficialButton/SuperficialButton'
import { Header } from './Header'

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


const Skills = ({ skills }) => {

  return (
    <>
      <h4 style={{...headingStyle, fontWeight: '500'}}>SKILLS</h4>
      <ul style={skillsContainer}>
        {
          skills.map(skill => (
            <SuperficialButton key={skill} content={skill} />
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

  render() {

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
    return (
      <div style={wMax}>
        <Header />
        <Image />
        <FullName />
        <Position />
        <Skills skills={skills} />
        <JoinedDate />
      </div>
    )
  }
}

export { PortfolioClass }