// import { Level2Custom } from "./_Level2Custom/Level2Custom"
import { Level2Validator } from "./_Level2Validator/Level2Validator"

const Heading = () => <h2>Level 2</h2>
const Level2Func = () => {

  return (
    <section>
      <Heading />
      {/* <Level2Custom /> */}
      <Level2Validator />
    </section>
  )
}

export { Level2Func }
