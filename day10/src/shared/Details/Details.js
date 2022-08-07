import hasCode from '../../utils/hasCode'
import makeID from '../../utils/makeID'
import { em, rem4 } from '../../utils/unitConvert'
import './DetailsStyle.css'

/**
 * This is not really a shared component and in reality should be inside the Level1 folder
 * NOTE: This is included inside the shared folder FOR PRACTICES ONLY
 */

const Details = ({ summary, content: { answer, samples }, backgroundColor }) => {

  const Answer = answer && Array.isArray(answer)
    ? answer.map(ans => <p key={'answer' + makeID()}>{ans}</p>)
    : <p>{answer}</p>

  const Samples = samples && samples.map(sample => (
    <ul key={'sample' + makeID()}>
      <li>{hasCode(sample)}</li>
    </ul>
  ))

  const summaryStyles = {
    backgroundColor,
    cursor: 'pointer',
    padding: rem4(8, 12),
    borderRadius: em(8),
  }

  return (
    <details>
      <summary style={summaryStyles} >
        {summary}
      </summary>
      {Answer}
      {Samples}
    </details>
  )
}

export { Details }