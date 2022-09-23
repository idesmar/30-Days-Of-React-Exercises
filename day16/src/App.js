import { Level1 } from './components/Level1'
import { Sample1 } from './components/Sample1'
import { Sample2 } from './components/Sample2'
import css from './app.module.css'


const { app } = css

const Heading1 = () => <h1>30 Days of React: Day 16 | Higher Order Component</h1>
const App = () => {
  return (
    <div className={app}>
      <Heading1 />
      <Level1 />
      <Sample1 />
      <Sample2 />
    </div>
  )
}


export default App
