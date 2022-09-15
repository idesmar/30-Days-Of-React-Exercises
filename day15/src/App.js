import { DropdownAxios } from "./AxiosEx/AxiosEx"
import { ButtonCSSModule, TestButton } from "./CSSModuleEx/CSSModuleEx"
import { ButtonClassNames } from "./ClassNamesEx/ClassNamesEx"
import { ButtonClassNamesModule } from "./ClassNamesModuleEx/CnModuleEx"
import { Moment } from "./MomentEx/MomentEx"

/* //> DEV NOTES
  Note that the Buttons are only examples.
  The class name changes are based on hover state which can be easily accomplished with CSS

  Some REAL-WORLD examples:
  * Active - input is active and being filled out
  * Error - failed input validation
  * Accepted - input filled out and passed validation
  * Disabled - submit button grayed out and un-clickable; not all form inputs are filled out
  * Processing - submit button blinking; inputs being validated by backend (which may take longer than frontend validation)
*/


const Heading1 = () => <h1>30 Days of React: Day 15 | Third Party Packages</h1>

const App = () => {
  return (
    <>
      <Heading1 />
      <DropdownAxios />
      <ButtonCSSModule />
      <TestButton />
      <ButtonClassNames />
      <ButtonClassNamesModule />
      <Moment />
    </>
  )
}


export default App
