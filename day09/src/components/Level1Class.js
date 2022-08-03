import { Component,  } from 'react'
import { headingStyle } from './__globalStyle'
import makeID from '../lib/makeID'
import { colorMe, rem, rem4, em } from '../lib/utils'

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

/* https://caniuse.com/css-backdrop-filter
   better accessibility but only at 88.21% globally as of 3/24/22
   backgroundColor: '#ffffff80' used as fallback */
const detailsContentStyle = {
  backgroundColor: '#ffffff80',
  backdropFilter: `blur(${rem(22)})`,
  padding: rem4(8, 16, 16),
  marginInline: em(8),
  borderRadius: rem4(0, 0, 12, 12),
  border: '1px solid #ffffff80',
}

const QNA = ({ q }) => {
  const { question, answer, list } = q
  // const [ open, setFold ] = useState(false)
  const List = list && <ol style={olStyle}>{list.map(el => <li key={el}>{el}</li>)}</ol>

  return (
    <li>
      <details
        // open={open}
      >
        <summary
          style={summaryStyle}
          // onClick={() => setFold(!open)}
        >
          {question}
        </summary>
        <div style={detailsContentStyle}>
          <p>{answer}</p>
          {List}
        </div>
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