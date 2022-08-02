import { Component } from 'react'
import { headingStyle } from './globalStyle'
import makeID from '../lib/makeID'
import { colorMe, rem, em } from '../lib/utils'

const summaryStyle = {
  cursor: 'pointer',
  color: '#ffffff',
  padding: rem(10),
  backgroundColor: colorMe('dark'),
  borderRadius: em(8),
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

class Level1Class extends Component {

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

export default Level1Class