import { Component } from "react"
import hasLink from './utils/hasLink'
import hasCode from './utils/hasCode'
import makeID from "./utils/makeID"
import {colorMe} from './utils/colorFunc'


const Details = ({
  q: { question, answer, note, list, footnote },
  backgroundColor
}) => {

  const Summary = () => (
    <summary style={{cursor: 'pointer', backgroundColor}}>
      {question}
    </summary>
  )

  const Note = () => note && <p>{note}</p>
  const Answer = () => <p>{hasLink(answer)}</p>

  const List = () => (
    list && (
      <ul>
        {list.map(li => (
          <li key={'list' + makeID()}>
            {hasCode(li)}
          </li>
        ))}
      </ul>
    )
  )

  const Footnote = () => footnote
    && footnote.map(fNote => (
      <p key={'fNote' + makeID()}>
        {hasLink(fNote)}
      </p>
    ))

  return (
    <details open>
      <Summary />
      <div>
        <Note />
        <List />
        <Answer />
        <Footnote />
      </div>
    </details>
  )
}


const Qna = ({ qna }) => {

  const backgroundColor = colorMe()
  return (
    <div>
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
    qna: []
  }

  componentDidMount() {
    const getQna = async () => {
      const res = await fetch('./data/level1qna.json')
      const data = await res.json()
      this.setState({ qna: data })
    }
    getQna()
  }

  render() {

    const { qna } = this.state
    const Heading = () => <h2>Level 1</h2>
    return (
      <section>
        <Heading />
        <Qna qna={qna} />
      </section>
    )
  }
}

export { Level1Class }