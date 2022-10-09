import { useRef } from "react"
import { useParams, useOutletContext, useNavigate } from "react-router-dom"

/* //NOTE:  useParams hook and useOutletContext takes no parameters  */


const fromLayoutOutletStyle = {
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

/* //> Component receiving Outlet context
to be displayed in other Challenges page */
const FromLayoutOutlet = () => {
  const { name, click } = useOutletContext()
  return (
    <div style={fromLayoutOutletStyle}>
      <h6>From Context passed in ChallengesLayout &lt;Outlet /&gt;</h6>
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
      <FromLayoutOutlet />
    </div>
  )
}

const Challenge2 = () => {
  const backgroundColor = '#481c6d'
  return (
    <div style={{ ...challengeContainerStyle, backgroundColor }}>
      <h2>Challenge 2</h2>
      <FromLayoutOutlet />
    </div>
  )
}

const OtherChallenges = () => {
  /* Dynamic Route using useParams and :id */
  const { id } = useParams()
  return (
    <div style={challengeContainerStyle}>
      <div style={{paddingBottom: '1rem'}}>
        <h1>Challenge with id: {id}</h1>
        <p>You have been routed here using the magic of useRef() and useNavigate() </p>
      </div>

      {/* //NOTE: manually typing url will trigger the web app to re-render
                  which will cause the Outlet state to revert to initial state
          //* SOLUTION: use other means to record state
          //*           localStorage, sessionStorage, cache, etc */}
      <FromLayoutOutlet />
    </div>
  )
}


const borderRadius = '0.4em'
const inputSearchStyle = {
  display: 'block',
  border: '1px solid gray',
  borderRadius,
  marginBlock: '0.5rem',
  padding: '0.4em 0.9em',
}

const goToButtonStyle = {
  padding: '0.4em 0.9em',
  borderRadius,
  backgroundColor: 'green',
  display: 'block',
}

const SearchChallenges = () => {
  const inputSearch = useRef()
  const navigate = useNavigate()

  const handleClickToNavigate = (e) => {
    e.preventDefault()
    // console.log(inputSearch.current.value)
    navigate(`./${inputSearch.current.value.toLowerCase()}`)
  }

  return (
    <form onSubmit={handleClickToNavigate}>
      <label htmlFor="inputSearch">Challenge Name: </label>
      <input
        type="search"
        style={inputSearchStyle}
        ref={inputSearch}
      />
      <button
        style={goToButtonStyle}
      >
        Go to Challenge
      </button>
    </form>
  )
}

const Challenges = () => {
  const backgroundColor = ''  /* in case backgroundColor for this component is desired */
  return (
    <div style={{ ...challengeContainerStyle, backgroundColor }}>
      <h2>Challenges</h2>

      <div
        style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', }}
      >
        <FromLayoutOutlet />
        <SearchChallenges />
      </div>
    </div>
  )
}


export {
  Challenges,
  Challenge1,
  Challenge2,
  OtherChallenges,
}
