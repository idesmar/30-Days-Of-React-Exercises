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
  const outletContextWrapper = {
    padding: '0.5rem',
    minWidth: '10rem',
    width: 'fit-content',
    marginTop: '1ex',
    marginInline: 'auto',
    border: '1px solid #b9c925',
    borderRadius: '0.5em',
  }
  return (
    <div style={fromLayoutOutletStyle}>
      <h2>This section receives the context sent from &lt;Outlet /&gt;</h2>
      <div style={outletContextWrapper}>
        <p style={noMarginPStyle}>Name: {name}</p>
        <p style={noMarginPStyle}>Click: {click}</p>
      </div>
    </div>
  )
}

const Challenge1 = () => {
  const backgroundColor = '#340756'
  return (
    <div style={{ ...challengeContainerStyle, backgroundColor }}>
      <h1>Challenge 1</h1>
      <FromLayoutOutlet />
    </div>
  )
}

const Challenge2 = () => {
  const backgroundColor = '#481c6d'
  return (
    <div style={{ ...challengeContainerStyle, backgroundColor }}>
      <h1>Challenge 2</h1>
      <FromLayoutOutlet />
    </div>
  )
}

const OtherChallenges = () => {
  /* Dynamic Route using useParams and :id */
  const { id } = useParams()
  return (
    <div style={challengeContainerStyle}>
      <div style={{ paddingBottom: '1rem' }}>
        <h1>Challenge with id: {id}</h1>
        <p>You have been routed here using the magic of useRef(), useNavigate(), and useParams() coded in
          <em style={{ fontWeight: '600', fontStyle: 'italic', color: 'yellow' }}> Challenges component</em>!</p>
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
  width: '100%',
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
      <h1>Challenges</h1>

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
