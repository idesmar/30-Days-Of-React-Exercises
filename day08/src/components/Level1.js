import level1qna from '../data/level1qna'
import hasCode from '../lib/hasCode'
import makeID from '../lib/makeID'

const Level1 = () => {
  const qna = [...level1qna]

  return (
    <section>
      <h2>Exercise Level 1</h2>

      <small style={{ display: 'block', textAlign: 'center', marginBottom: '0.5rem' }}><em style={{ fontWeight: '500' }}>NOTE:</em> All answers are based on the author's understanding. It is greatly appreciated if any needed corrections or clarifications is brought to the attention of the author. Fastest way to connect is twitter <a style={{ backgroundColor: 'green', color: '#fff', paddingInline: '0.6rem', borderRadius: '100vw' }} href="https://twitter.com/idesmar">@idesmar</a>. Thank you!</small>

      <ul className='QNA'>
        {qna.map(q => {
          return (
            <li key={'q' + makeID()}>
              <details>
                <summary>{q.question}</summary>
                {hasCode(q.answer)}
              </details>
            </li>
          )
        })}
      </ul>
    </section>
  )
}

export default Level1