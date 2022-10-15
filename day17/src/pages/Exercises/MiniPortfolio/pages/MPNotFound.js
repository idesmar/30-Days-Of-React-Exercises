import { Link, useLocation } from "react-router-dom"


const MPNotFound = () => {
  const location = useLocation()

  return (
    <div>
      <h2>You seem lost. Want to go back to <Link to={!location.state ? './' : -1}>
        {!location.state ? 'Portfolio Home' : 'Projects'}
      </Link>?</h2>
    </div>
  )
}


export { MPNotFound }
