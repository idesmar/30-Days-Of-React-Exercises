import { useState } from "react"
import { Outlet } from "react-router-dom"
import { ChallengesNav } from "../navigation/ChallengesNav"
import sharedLayoutStyle from './shared/layout.module.css'
import outletStyle from './shared/outlet.module.css'


const { layout, layout_centerElement } = sharedLayoutStyle
const { contextCollectorContainer, outletContainer } = outletStyle

/* //> Collects input data from user and passes it to `Outlet`'s context value */
const ContextCollector = ({
  dataChallenge: { name, click },
  handleEvent,
}) => {

  return (
      <div className={contextCollectorContainer}>
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
  )
}



const ChallengesLayout = () => {
  const [dataChallenge, setDataChallenge] = useState({
    name: '',
    click: 0,
  })

  const { name, click } = dataChallenge

  const handleEvent = (e) => {
    const { name, value } = e.target
    if (name === 'name') return setDataChallenge(prev => ({ ...prev, [name]: value }))
    return setDataChallenge(prev => ({ ...prev, [name]: +value + 1 }))
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

      {/* //> updates the Outlet's context based on user input data */}
      <ContextCollector
        dataChallenge={dataChallenge}
        handleEvent={handleEvent}
      />

    </div>
  )
}


export { ChallengesLayout }
