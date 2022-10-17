import { useEffect, useState } from "react"
import { getTimestamp, refGen } from "../utils/misc"
import { userServices } from "../services/services"
import Level1Styles from './styles/Level1.module.css'
import sharedStyles from './styles/shared.module.css'

/* //> DEV NOTES
  AbortController - used to cancel initial fetch and allow only the 2nd
  setTimeout - delay the fetch to allow a (3 sec) loading state to appear
  2 cleaner functions were used. 1.) AbortController 2.) clearTimeOut
    - only having clearTimeout appear to suffice with ensuring fetch is only ran once
  As expected, using getTimestamp along with refGen, confirms that the first fetch is being cancelled
*/

const { level1 } = Level1Styles
const { middleHeading, small } = sharedStyles
const fetchingStyle = {
  height: '30vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}

const Details = ({
  q: {
    _id,
    question,
    answer,
    list,
  }
}) => {

  return (
    <details>
      <summary>{question}</summary>
      <div>
        <p>{answer}</p>
        {
          list && (
            <ul>
              {
                list.map((el, idx) =>
                  <li key={_id + 'list' + idx}>{el}</li>
                )
              }
            </ul>
          )
        }
      </div>
    </details>
  )
}

const delay = 2000

const Level1 = () => {
  const [loading, setLoading] = useState(true)
  const [qna, setQna] = useState([
    {
      _id: '',
      question: '',
      answer: '',
      list: [
        ''
      ],
    }
  ])

  useEffect(() => {
    const refGenValue = refGen.next().value
    console.log(getTimestamp(`useEffect Start: L1-${refGenValue}`))
    const controller = new AbortController()
    console.log(controller)
    const getQna = async () => {
      try {
        const signal = controller.signal
        const data = await userServices.fetchQna(signal)
        setQna(prev => data)
        setLoading(prev => false)
        console.log(getTimestamp(`Set states complete: L1-${refGenValue}`))
      } catch (err) {
        err.idesmarTime = getTimestamp(`error on L1-${refGenValue}`)
        console.table(err)
      }
    }
    const timeout = setTimeout(getQna, delay)
    console.log(getTimestamp(`useEffect End: L1-${refGenValue}`))
    return () => {
      controller.abort(getTimestamp(`Abort req for L1-${refGenValue}`))
      clearTimeout(timeout)
      console.log(getTimestamp(`clearTimeout for L1-${refGenValue}`))
    }
  }, [])

  return (
    <div className={level1}>
      <h2 className={middleHeading}>Level 1</h2>
      <small className={small}>* Using fetch()</small>
      {
        loading
          ? <p style={fetchingStyle}>Fetching Data with a set delay of {delay}ms</p>
          : qna.map(q => <Details key={q._id} q={q} />)
      }
    </div>
  )
}


export { Level1 }
