import { useParams, useOutletContext } from "react-router-dom"

/* //NOTE:  useParams hook and useOutletContext takes no parameters  */


const fromOutletContainerStyle = {
  width: 'fit-content',
  margin: '0 auto',
  backgroundColor: '#840c0c',
  padding: '0.5rem',
  borderRadius: '0.4em',
}

const challengeContainerStyle = {
  backgroundColor: '#1c042e',
  padding: '1rem',
  borderRadius: '0.4em',
}

const noMarginPStyle = {
  margin: '0',
}

/* Component receiving Outlet context
to be displayed in other Challenges page */
const FromOutlet = () => {
  const { name, click } = useOutletContext()
  return (
    <div style={fromOutletContainerStyle}>
      <h6>From Context</h6>
      <p style={noMarginPStyle}>Name: {name}</p>
      <p style={noMarginPStyle}>Click: {click}</p>
    </div>
  )
}

const Challenge1 = () => {
  const backgroundColor = '#340756'
  return (
    <div style={{ ...challengeContainerStyle, backgroundColor }}>
      <h2>Challenge 1</h2>
      <FromOutlet />
    </div>
  )
}

const Challenge2 = () => {
  const backgroundColor = '#2b262f'
  return (
    <div style={{ ...challengeContainerStyle, backgroundColor }}>
      <h2>Challenge 2</h2>
      <FromOutlet />
    </div>
  )
}

const OtherChallenges = () => {
  /* Dynamic Route using useParams and :id */
  const { id } = useParams()
  return (
    <div style={challengeContainerStyle}>
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
  const backgroundColor = ''
  return (
    <div style={{ ...challengeContainerStyle, backgroundColor }}>
      <h2>Challenges</h2>
      <FromOutlet />
    </div>
  )
}


export {
  Challenges,
  Challenge1,
  Challenge2,
  OtherChallenges,
}
