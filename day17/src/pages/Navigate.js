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
    // console.count('useEffect')
    if (countdown > 0) {
      // TODO: setInterval vs setTimeout
      // !Testing
      const interval = setInterval(() => setCountdown(prev => --prev), 1000)

      /* //> return a cleanup function to ensure useEffect is only ran ONCE */
      return () => clearInterval(interval)
    }
  }, [countdown])

  const handleBackButton = () => {
    /* // @param {} is optional
      and can (?) only accept `replace` and `state` properties */
    navigate(-1, { replace: false, state: 'hello' })
  }

  return (
    <div>
      <h3>Navigation Sample</h3>
      <p>You will be redirected to the Home page in {countdown}s</p>

      <button
        style={backButtonStyle}
        onClick={handleBackButton}
      >
        Go Back instead?
      </button>
      { /* //> Insert Navigate component once countdown reaches 0 */
        !countdown && <Navigate to='/' />
      }
    </div>
  )
}


export { NavigateSample }
