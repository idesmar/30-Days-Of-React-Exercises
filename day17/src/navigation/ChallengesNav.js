import { Link } from "react-router-dom"

/** //> DEV NOTES:
  * No set styling here
    Styling is set on parent component where this module is imported
    //* Refer to ../layouts/ChallengesLayout.js
  * Commented out properties after testing behavior
    * `replace`
    * `reloadDocument`
  */


const ChallengesNav = () => {
  return (
    <nav>
      <ul>

        {/* //> Link to absolute path */}
        <li><Link
          to="/challenges/1"
          // replace
        >
          Challenge 1
        </Link></li>

        {/* //> Link to relative path of current path/location
            similar to appending "2" to current path */}
        <li><Link
          to="2"
          // replace
          // reloadDocument /* //TEST: document reloaded resulting to state resetting -- ChallengesLayout has a dataChallenge state {name, click} */
        >
          Challenge 2
        </Link></li>

        {/* //> Link to relative path using directory-like navigation */}
        <li><Link
          to='../../'
          // replace
        >
          Back to home
        </Link></li>

      </ul>
    </nav>
  )
}
export { ChallengesNav }
