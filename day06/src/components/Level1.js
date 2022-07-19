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
      <small style={{display: 'block', textAlign: 'center', marginBottom: '0.5rem'}}><em style={{fontWeight: '500'}}>NOTE:</em> All answers are based on the author's understanding. It is greatly appreciated if any needed corrections or clarifications is brought to the attention of the author. Fastest way to connect is twitter <a style={{backgroundColor: 'green', color: '#fff', paddingInline: '0.6rem', borderRadius: '100vw'}} href="https://twitter.com/idesmar">@idesmar</a>. Thank you!</small>
      <QNAs />
    </section>
  )
}

export default Level1