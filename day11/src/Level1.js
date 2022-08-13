import { Component } from "react"
import hasLink from './utils/hasLink'
import hasCode from './utils/hasCode'
import makeID from "./utils/makeID"
import { colorMe } from './utils/colorFunc'
import { rem, rem4 } from "./utils/unitConvert"


const Details = ({
  q: { question, answer, note, list, footnote },
  backgroundColor
}) => {

  const Summary = () => (
    <summary style={{
      cursor: 'pointer',
      backgroundColor,
      padding: rem4(6, 14),
      borderRadius: rem(6),
      color: '#ffffff',
    }}
    >
      {question}
    </summary>
  )

  const Note = () => note && <p>{note}</p>
  const Answer = () => <p>{hasCode(answer)}</p>

  const List = () => (
    list && (
      <ul>
        {list.map(li => (
          <li
            key={'list' + makeID()}
          >
            {hasCode(li)}
          </li>
        ))}
      </ul>
    )
  )

  const Footnote = () => footnote
    && footnote.map((fNote, fNoteIdx) => (
      <p
        key={'fNote' + makeID()}
      >
        <span>
          {`[${fNoteIdx + 1}] `}
        </span>
        {hasLink(fNote)}
      </p>
    ))

  const divStyle = {
    padding: rem4(8, 16),
  }

  return (
    <details>
      <Summary />
      <div style={divStyle}>
        <Note />
        <Answer />
        <List />
        <Footnote />
      </div>
    </details>
  )
}


const Qna = ({ qna, loading }) => {

  const backgroundColor = colorMe('dark')

  const divStyle = loading
    ? {
      height: rem(402),
      backgroundColor: '#222222',
      position: 'relative',
      overflow: 'hidden',
      borderRadius: rem(10),
    }
    : {
      height: 'auto',
    }

  const Glimmer = () => (
    <div className="glimmer">
    </div>
  )

  return (
    <div style={divStyle}>
      {
        loading && <Glimmer />
      }
      {
        qna.map(q => (
          <Details
            key={q._id}
            q={q}
            backgroundColor={backgroundColor}
          />
        ))
      }
    </div>
  )
}


class Level1Class extends Component {

  state = {
    loading: true,
    qna: []
  }

  componentDidMount() {
    const getQna = async () => {
      const res = await fetch('./data/level1qna.json')
      const data = await res.json()
      this.setState({ qna: data, loading: false })
    }
    getQna()
  }

  render() {

    const { qna, loading } = this.state

    const Heading = () => <h2>Level 1</h2>

    const Small = () => (
      <small style={{ textAlign: 'center', display: 'block' }}><em style={{ fontWeight: '500' }}>NOTE:</em> All answers are based on the author's understanding. It is greatly appreciated if any needed corrections or clarifications is brought to the attention of the author. Fastest way to connect is twitter <a  href="https://twitter.com/idesmar">@idesmar</a>. Thank you!</small>
    )

    const sectionStyle = {
      width: rem(600),
      maxWidth: '100%',
      margin: '0 auto',
    }

    return (
      <section style={sectionStyle}>
        <Heading />
        <Small />
        <Qna qna={qna} loading={loading} />
      </section>
    )
  }
}

export { Level1Class }