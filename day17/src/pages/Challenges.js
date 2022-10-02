import { useParams, useOutletContext } from "react-router-dom"

/* //NOTE:  useParams hook takes no parameters  */

/* Component receiving Outlet context
to be displayed in other Challenges page */
const FromOutlet = () => {
  const { name, click } = useOutletContext()
  return (
    <div>
      <h6>From Context</h6>
      <p>Name: {name}</p>
      <p>Click: {click}</p>
    </div>
  )
}

const Challenge1 = () => {
  return (
    <div>
      Challenge 1
      <FromOutlet />
    </div>
  )
}

const Challenge2 = () => {
  return (
    <div>
      Challenge 2
      <FromOutlet />
    </div>
  )
}


const OtherChallenges = () => {
  /* Dynamic Route using useParams and :id */
  const { id } = useParams()
  return (
    <div>
      Challenge with id: {id}

      {/* //NOTE: manually typing url will trigger the web app to re-render
                  which will cause the Outlet state to revert to initial state
          //* SOLUTION: use other means to record state
          //*           localStorage, sessionStorage, cookies, etc */}
      <FromOutlet />
    </div>
  )
}

const Challenges = () => {
  return (
    <div>
      Challenges
      <FromOutlet />
    </div>
  )
}


export {
  Challenges,
  Challenge1,
  Challenge2,
  OtherChallenges,
  FromOutlet,
}
