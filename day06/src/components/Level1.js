import qna from '../data/lev1qna'
import './Level1.scss'

const QNA = ({q: {ques, ans}}) => {
  return (
    <li>
      <details>
        <summary>{ques}</summary>
        <p>{ans}</p>
      </details>
    </li>
  )
}

const QNAs = () => {
  return (
    <ol className='qna'>
      {qna.map((el) => <QNA key={el._id} q={el} />)}
    </ol>
  )
}

const Level1 = () => {
  return (
    <section>
      <h2>Exercise Level 1</h2>
      <QNAs />
    </section>
  )
}

export default Level1