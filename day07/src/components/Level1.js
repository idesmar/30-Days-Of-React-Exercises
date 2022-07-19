import { Component } from 'react'
import makeID from '../lib/makeID'
import { rem, isContrastPassing, hexColor } from '../lib/utils'
import * as glob from './globalVars' // ! look into optimizing
import qna from '../data/level1qna'


// > This is the only functional based component in day07
const QNA = ({ q: { question, answer, code }, fColor, bgColor, idxFromLast }) => {

  const summaryStyle = {
    cursor: 'pointer',
    backgroundColor: bgColor,
    color: fColor,
    borderRadius: '0.4em',
    padding: rem(8),
  }
  const liStyle = {
    marginBottom: !idxFromLast ? '0' : glob.gap,
  }
  return (
    <li style={liStyle}>
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

// NOTE: this class uses private variables (_qna, olStyle)
class Level1 extends Component {

  _qna = [...qna].map(q => Object.assign({}, q, { _id: makeID() }))

  olStyle = {
    margin: '0 auto',
    width: glob.idealWidth,
    maxWidth: '100%',
  }

  render() {

    const bgColors = []
    /*  RECURSIVE FUNCTION
        note: recursion returns output from last to first result/computed
        hence result is stored to bgColors array
        and extracted //> bgColors[0]
    */
    const getDarkBgColor = (fColor) => {
      const bgColor = hexColor()
      if (!isContrastPassing(fColor, bgColor)) getDarkBgColor(fColor)
      bgColors.push(bgColor)
    }

    const fColor = '#ffffff'

    getDarkBgColor(fColor)
    const bgColor = bgColors[0]

    const aStyle = {
      backgroundColor: bgColor,
      color: fColor,
      paddingInline: '0.7em',
      borderRadius: '100vw',
    }

    return (
      <section style={glob.section}>
        <h2 style={glob.header2}>Exercise Level 1</h2>

        <small style={{...glob.centerText, display: 'block', marginBottom: '0.5rem'}}><em style={{ fontWeight: '500' }}>NOTE:</em> All answers are based on the author's understanding. It is greatly appreciated if any needed corrections or clarifications is brought to the attention of the author. Fastest way to connect is twitter <a style={aStyle} href="https://twitter.com/idesmar">@idesmar</a>. Thank you!</small>

        <ol style={this.olStyle} className='qna' >
          {this._qna.map((q, qIdx) => (
            <QNA
              key={q._id}
              q={q}
              idxFromLast={this._qna.length - 1 - qIdx}
              bgColor={bgColor}
              fColor={fColor}
            />
            )
          )}
        </ol>
      </section>
    )
  }
}

export default Level1