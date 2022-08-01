import { Component } from 'react'
import makeID from '../lib/makeID'
import { colorMe, rem } from '../lib/utils'

// * revert to counter reset.css
const headingStyle = {
  font: 'revert',
  textAlign: 'center',
}

const summaryStyle = {
  cursor: 'pointer',
  padding: rem(10),
  backgroundColor: colorMe(),
}

const olStyle = {
  listStyle: 'revert',
  paddingLeft: '2em'
}

const QNA = ({ q }) => {
  const { question, answer, list } = q

  const List = list && <ol style={olStyle}>{list.map(el => <li key={el}>{el}</li>)}</ol>

  return (
    <li>
      <details>
        <summary style={summaryStyle}>{question}</summary>
        <p>{answer}</p>
        {List}
      </details>
    </li>
  )
}



const qnaStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '0.3rem',
}

class Level1 extends Component {

  render() {
    const { qna, style } = this.props

    return (
      <section style={style} >
        <h2 style={headingStyle}>Level 1</h2>
        <ul style={qnaStyle}>
        {
          qna.map(q => <QNA key={'q' + makeID()} q={q} />)
        }
        </ul>
      </section>
    )
  }
}

export default Level1