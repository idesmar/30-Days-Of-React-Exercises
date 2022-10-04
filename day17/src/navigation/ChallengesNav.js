import { Link } from "react-router-dom"

/*  No set styling here.
    Styling is set on parent component where this component is imported
//* Refer to ../layouts/ChallengesLayout.js */


const ChallengesNav = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/challenges/1">Challenge 1</Link></li>
        <li><Link to="/challenges/2">Challenge 2</Link></li>
      </ul>
    </nav>
  )
}
export { ChallengesNav }
