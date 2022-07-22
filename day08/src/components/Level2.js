import { useState } from "react"
import makeID from "../lib/makeID"
import idesmar from './assets/idesmar.jpg'

const Banner = ({ headers }) => {

  const bannerStyle = {
    outline: '1px solid blue',
  }
  return (
    <header style={bannerStyle} >
      {
        headers.map(header => <p key={'header'+ makeID()} >{header}</p>)
      }
    </header>
  )
}


const Level2a = ({
  defaultHeaders,
  user: { firstName, LastName, img },
  changeTheme
}) => {
  const fullName = [firstName, LastName].join(' ')
  const headers = [...defaultHeaders, fullName]

  return (
    <div>
      <Banner headers={headers} />
      <img width={120} src={img} alt="" />
      <h3>{fullName}</h3>
      <div>
        <button>Greet People</button>
        <button>Show Time</button>
        <button onClick={changeTheme}>Change Background</button>
      </div>
    </div>
  )
}


const Level2 = () => {

  const defaultHeaders = [
    '30 Days of React',
    'Getting Started',
    'JavaScript Library',
  ]

  const [theme, setTheme] = useState('light')

  const changeTheme = () => {
    const change = theme === 'light' ? 'dark' : 'light'
    setTheme(change)
  }

  /*
    changing theme solution: using className or
    changing value in style.propertyName = value
  */

  const user = {
    firstName: 'idesmar',
    LastName: 'siege',
    img: idesmar,
  }

  return (
    <section>
      <h2>Exercise Level 2</h2>
      {/* log theme --- checker */}
      {console.log(theme)}
      <Level2a defaultHeaders={defaultHeaders} user={user} changeTheme={changeTheme} />
    </section>
  )
}


export default Level2
