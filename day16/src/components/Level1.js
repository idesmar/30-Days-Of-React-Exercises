import { useState, useEffect } from 'react'
import axios from 'axios'
import { colorMe } from '../utils/colorFunc'
import { rem, rem4, em } from '../utils/unitConvert'
import { ImSpinner3 as Spinner } from 'react-icons/im'
import { IconContext } from 'react-icons'
import css from './component.module.css'

/* //> DEV NOTES
* Using axios for practice only;
  this is an overkill use case for axios
*/


const { spinnerLoad, loaderWrapper } = css

const Loading = () => {
  return (
    <div className={loaderWrapper}>
      <IconContext.Provider value={{ size: '50%' }}>
        <Spinner className={spinnerLoad} />
      </IconContext.Provider>
    </div>
  )
}

/* Higher Order Function */
const withStylingSummary = (Comp) => {
  const defaultStyles = {
    padding: rem4(8, 12),
    backgroundColor: colorMe('dark'),
    border: `1px solid ${colorMe()}`,
    color: 'cyan',
    cursor: 'pointer',
    borderRadius: em(8),
  }
  return (props) => {
    return <Comp {...props} style={defaultStyles} />
  }
}

const Summary = ({ question, style }) => <summary style={style}>{question}</summary>
const StyledSummary = withStylingSummary(Summary)

const Details = ({ q: {
  question,
  answer,
}}) => {
  const pStyle = { padding: rem(8) }
  return (
    <details style={{marginBlock: rem(8)}}>
      <StyledSummary question={question} />
      <p style={pStyle}>{answer}</p>
    </details>
  )
}

const Heading2 = () => <h2>Level 1 + Level 2</h2>
const Level1 = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [qna, setQna] = useState([
    {
      _id: '',
      question: '',
      answer: ''
    }
  ])
  useEffect(() => {
    const getQna = async () => {
      const res = await axios.get('./data/level1qna.json')
      const data = res.data
      setQna(prev => data)
      /*// NOTE: setIsLoading(prev => !prev) is valid however...
        //* Issue:
          double useEffect on development environment will result to an unexpected result.
          ie (loading: true [initial state] --> false [1st useEffect] --> true [2nd useEffect])
        //* Workaround:
          remove React.StrictMode while developing and add back when ready to deploy */
      setIsLoading(prev => false)
    }
    getQna()
  }, [])
  return (
    <section>
      <Heading2 />
      {
        !isLoading
        ? qna.map(q => <Details key={q._id} q={q} />)
        : <Loading />
      }
    </section>
  )
}


export { Level1 }
