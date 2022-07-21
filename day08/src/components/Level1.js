import level1qna from '../data/level1qna'
import hasCode from '../lib/hasCode'


const Level1 = () => {
  const qna = [...level1qna]

  return (
    <ul>
      {qna.map((q, idx) => {
        return (
          <li key={'q' + idx}>
            <details open>
              <summary>{q.question}</summary>
              {hasCode(q.answer)}
            </details>
          </li>
        )
      })}
    </ul>
  )
}

export default Level1