import { useState } from "react"
import { Outlet } from "react-router-dom"
import { ChallengesNav } from "../navigation/ChallengesNav"
import sharedLayoutStyle from './shared/layout.module.css'
import outletStyle from './shared/outlet.module.css'


const { layout, layout_centerElement } = sharedLayoutStyle
const { outletContext, outletContainer } = outletStyle

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
      <aside className={layout_centerElement}>
        <ChallengesNav />
      </aside>

      {/* //? added an outlet container to visualize location of outlet in app */}
      <div className={outletContainer} >
        {/* //> Outlet
          - allows the entire component to be always visible on selected Routes */}
        <Outlet context={{ name, click }} />
      </div>

      {/* //> Code below collects input data from user and passes it to `Outlet`'s context value */}
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

    </div>
  )
}


export { ChallengesLayout }
