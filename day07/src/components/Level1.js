import { Component } from 'react'
import './Level1.css'
import makeID from '../lib/makeID'
import { rem, isDark, hexColor } from '../lib/utils'
import qna from '../data/level1qna'


const QNA = ({ q: { question, answer, code }, bgColor }) => {

  const summaryStyle = {
    cursor: 'pointer',
    backgroundColor: bgColor,
    color: '#fff',
    borderRadius: '0.4em',
    padding: rem(8),
  }
  return (
    <li>
      <details>
        <summary style={summaryStyle}>{question}</summary>
        {
          Array.isArray(answer)
            ? answer.map((a, idx) => <p key={'ans' + idx}>{a}</p>)
            : <p>{answer}</p>
        }
        {
          code
            ? <pre style={{padding: '0.5rem'}}><code>{code.join('\n')}</code></pre>
            : ''
        }
      </details>
    </li>
  )
}

class Level1 extends Component {
  // NOTE: this class uses private variables (_qna, olStyle)

  _qna = [...qna].map(q => Object.assign({}, q, { _id: makeID() }))

  olStyle = {
    margin: '0 auto',
    width: '40rem',
    maxWidth: '100%',
  }

  render() {
    const getDarkBgColor = () => {
      const bgColor = hexColor()
      /*  recursive until a dark color is generated
        ! recursion NOT WORKING if the code below is used
          it's returning undefined
            if (isDark(bgColor)) return bgColor
            getDarkBgColor()
      */
      if (!isDark(bgColor)) getDarkBgColor()
      return bgColor
    }
    const darkBgColor = getDarkBgColor()
    console.log(darkBgColor, 'final')
    return (
      <section>
        <h2>Exercise Level 1</h2>
        <ol style={this.olStyle} className='qna' >
          {this._qna.map(q => <QNA key={q._id} q={q} bgColor={darkBgColor} />)}
        </ol>
      </section>
    )
  }
}

export default Level1