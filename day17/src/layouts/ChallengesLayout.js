import { useState } from "react"
import { Link, Outlet } from "react-router-dom"
import sharedLayoutStyle from './shared/layout.module.css'
import challengesLayoutStyle from './ChallengesLayout.module.css'


const { layout, outletSibling } = sharedLayoutStyle
const { outletContext } = challengesLayoutStyle

const ChallengesLayout = () => {
  const [dataChallenge, setDataChallenge] = useState({
    name: '',
    click: 0,
  })

  const { name, click } = dataChallenge

  const handleEvent = (e) => {
    const { name, value } = e.target
    if (name === 'name') return setDataChallenge(prev => ({ ...prev, [name]: value }))
    return setDataChallenge(prev => ({...prev, [name]: +value + 1 }))
  }

  return (
    <div className={layout}>
      <aside className={outletSibling}>
        <nav>
          <ul>
            <li><Link to="/challenges/1">Challenge 1</Link></li>
            <li><Link to="/challenges/2">Challenge 2</Link></li>
          </ul>
        </nav>
      </aside>

      <div className={outletContext}>
        <div>
          <label htmlFor="inputName">Name: </label>
          <input
            id="inputName"
            type="text"
            name="name"
            value={name}
            onChange={handleEvent}
          />
        </div>
        <button
          name="click"
          value={click}
          onClick={handleEvent}
        >
          Clicked {click} times
        </button>
      </div>

      {/* //> Outlet
        - allows the entire component to be always visible on selected Routes */}
      <Outlet context={{ name, click }} />
    </div>
  )
}


export { ChallengesLayout }
