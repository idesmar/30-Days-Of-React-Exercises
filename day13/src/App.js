// import Sample from "./Sample/Sample"
import { Level1 } from "./Level1/Level1"
import { Level2 } from "./Level2/Level2"
import { colorMe } from "./utils/colorFunc"
import { rem } from "./utils/unitConvert"

const Heading1 = () => <h1>30 Days Of React: Day 13 | Uncontrolled Component</h1>
const App = () => {
  const exercisesStyle = {
    maxWidth: rem(600),
    margin: '0 auto',
  }

  return (
    <>
      <Heading1 />
      {/* <Sample /> */}
      <div style={exercisesStyle}>
        <Level1 />
        <Level2 />
      </div>
    </>
  )
}

const themeColor = colorMe('dark')

export default App
export { themeColor }
