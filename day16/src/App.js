import { Level1 } from './components/Level1'
import { Sample1 } from './components/Sample1'
import { Sample2 } from './components/Sample2'
import css from './app.module.css'


const { app } = css

const App = () => {
  return (
    <div className={app}>
      <Level1 />
      <Sample1 />
      <Sample2 />
    </div>
  )
}


export default App
