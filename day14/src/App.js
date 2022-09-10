import { useState } from 'react'
import { Level1 } from './_Level1'
import { Sample1 } from "./_Sample1"
import { Sample2 } from "./_Sample2"
import { Button } from './_shared/Button'


const SelectSample = ({
  handleChange,
}) => {

  const placeholder = 'Select a Sample'

  return (
    <select
      defaultValue={placeholder}
      onChange={handleChange}
    >
      <option value={placeholder} disabled>{placeholder}</option>
      <option value="sample1">Sample 1 | Calling Countries API</option>
      <option value="sample2">Sample 2 | 3 Day Challenge</option>
      <option value="hideSamples">Hide Samples</option>
    </select>
  )
}

const Heading1 = () => <h1>30 Days of React: Day 14 | Component Life Cycle</h1>
const Note = () => <p>Open Console to track Component Life Cycle</p>

const ClearConsoleBtn = () => {
  return (
    <Button
      innerText='Clear Console'
      handleClick={() => console.clear()}
      style={{display: 'block'}}
    />
  )
}

const App = () => {
  const [showComponent, setShowComponent] = useState({
    sample1: false,
    sample2: false,
    hideSamples: false,
  })

  const {
    sample1,
    sample2,
    hideSamples,
  } = showComponent

  const handleChange = (e) => {
    const { value } = e.target
    setShowComponent(prev => {
      const snapshot = { ...prev }
      for ( const key in snapshot ) {
        snapshot[key] = false
      }
      snapshot[value] = true
      return { ...prev, ...snapshot }
    })
  }

  return (
    <>
      <Heading1 />
      <Level1 />
      <Note />
      <ClearConsoleBtn />
      <SelectSample handleChange={handleChange}/>
      {!hideSamples && sample1 && <Sample1 />}
      {!hideSamples && sample2 && <Sample2 />}
    </>
  )
}


export default App
