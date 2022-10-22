import { useEffect, useState } from "react"
import { getTimestamp, refGenerator } from "../utils/loggerAssist"
import { qnaServices } from "../services/services"
import hasCode from '../utils/hasCode'
import level1Styles from './styles/Level1.module.css'
import sharedStyles from './styles/shared.module.css'
import { LoadingDiv } from "./shared/Loading"

/* //> DEV NOTES
  AbortController - used to cancel initial fetch and allow only the 2nd
  setTimeout - delay the fetch to allow a (3 sec) loading state to appear
  2 cleaner functions were used. 1.) AbortController 2.) clearTimeOut
    - only having clearTimeout appear to suffice with ensuring fetch is only ran once
  As expected, using getTimestamp along with refGen, confirms that the first fetch is being cancelled

  > useEffect Observations
  * On page visit, React fetches questions from internal data/*.json
  * Fetch is enclosed in useEffect

  | User Action          |    Timestamp     | Label                       | Component State       | Remarks           |
  | :------------------- | :--------------: | :-------------------------- | :-------------------- | :---------------- |
  | Page Load            | [03:40]-[48.586] | [Rendered]                  | Render                |                   |
  |                      | [03:40]-[48.605] | [useEffect Start: Ref-[1]]  | componentDidMount     | 1st run useEffect |
  |                      | [03:40]-[48.609] | [useEffect End: Ref-[1]]    | shouldComponentUpdate | 1st end useEffect |
  |                      | [03:40]-[48.610] | [Abort req Ref-[1]]         |                       | Cleanup function  |
  |                      | [03:40]-[48.611] | [useEffect Start: Ref-[2]]  |                       | 2nd run useEffect |
  |                      | [03:40]-[48.614] | [error on L1-Ref-[1]]       |                       | Catch (Error)     |
  |                      | [03:40]-[49.312] | [setState success: Ref-[2]] | shouldComponentUpdate | setState Success  |
  |                      | [03:40]-[49.343] | [Rendered]                  | Render                |                   |
  | Navigate Out of Page | [03:41]-[55.690] | [Abort req Ref-[2]]         | componentWillUnmount  | Cleanup function  |

  * Cleanup function is invoked after useEffect completion (`shouldComponentUpdate`) and when navigating out (`componentWillUnmount`)
  * 2nd useEffect did not reach ***useEffect End*** probably because of successful setState
  * Catch (error) caused by try-catch; appears to be residual error that was only caught on the 2nd fetch when it entered the try-catch chain
*/


/* Creates a refGen specific to this page/module */
const refGen = refGenerator('L1')

const { level1 } = level1Styles
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
        <p>{hasCode(answer)}</p>
        {
          list && (
            <ul>
              {
                list.map((li, idx) =>
                  <li key={_id + 'list' + idx}>{hasCode(li)}</li>
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
const delayMessage = `Fetching Data with a set delay of ${delay} ms`

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
    console.log(getTimestamp(`useEffect Start: ${refGenValue}`))
    const controller = new AbortController()
    console.log(controller)
    const getQna = async () => {
      try {
        const signal = controller.signal
        const data = await qnaServices.fetchQna(signal)
        setQna(prev => data)
        setLoading(prev => false)
        console.log(getTimestamp(`Set states complete: ${refGenValue}`))
      } catch (err) {
        err.idesmarTime = getTimestamp(`error on ${refGenValue}`)
        console.table(err)
      }
    }
    // const timeout = setTimeout(getQna, delay)
    getQna() /* Uncomment if removing timeout feature */
    console.log(getTimestamp(`useEffect End: ${refGenValue}`))
    return () => {
      controller.abort(getTimestamp(`Abort req for ${refGenValue}`))
      // clearTimeout(timeout)
      console.log(getTimestamp(`clearTimeout for ${refGenValue}`))
    }
  }, [])

  return (
    <div className={level1}>
      {console.log(getTimestamp('Rendered'))}
      <h2 className={middleHeading}>Level 1</h2>
      <small className={small}>* Using fetch()</small>
      {
        loading
          ? <div style={fetchingStyle}>
            <LoadingDiv message={delayMessage} /> {/* remove message if not using timeout */}
          </div>
          : <div>
            {
              qna.map(q => <Details key={q._id} q={q} />)
            }
          </div>
      }
    </div>
  )
}


export { Level1 }
