import { useState, useEffect } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'


const COUNTDOWN_START = 10

const backButtonStyle = {
  backgroundColor: '#bd0404',
  color: '#ffffff',
  padding: '0.4em 0.9em',
  borderRadius: '0.4em',
  marginBlock: '1rem',
}

const NavigateSample = () => {
  const [countdown, setCountdown] = useState(COUNTDOWN_START)
  const navigate = useNavigate()

  useEffect(() => {
    /* //> Removed if (countdown) condition and useEffect dependency [countdown] to run useEffect only twice instead of 12 times (previously) */
    console.count('useEffect')

    /* // TODO: setInterval vs setTimeout */
    const interval = setInterval(() => setCountdown(prev => --prev), 1000)
    /* //> return a cleanup function to prevent memory leak and proper synchronization of timer */
    return () => clearInterval(interval)
  }, [])

  const handleBackButton = () => {
    /* // @param {} -- 2nd param of navigate() -- is optional
      and can ONLY accept `replace` and `state` properties
      // NOTE: state is tied up with location,
      //! hence, if delta (-1, etc) value is used, the state will not be passed to other page
    */
    navigate('/', { replace: false, state: 'Can you see me?' })
  }

  return (
    <div>
      <h3>Navigation Sample</h3>
      <p>You will be redirected to the Home page in {countdown}s</p>

      <button
        style={backButtonStyle}
        onClick={handleBackButton}
      >
        Back to previous page instead?
      </button>

      { /* //> Insert Navigate component once countdown reaches 0 */
        !countdown && <Navigate to='/' />
      }
    </div>
  )
}


export { NavigateSample }
