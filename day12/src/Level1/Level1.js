import { useState, useEffect } from "react"
import { userServices } from "../services/userServices"
import hasLink from '../utils/hasLink'


const Disclaimer = () => {
  return (
    <small style={{ textAlign: 'center', display: 'block' }}>
      <em style={{ fontWeight: '500' }}>NOTE:</em>
      All answers are based on the author's understanding. It is greatly appreciated if any needed corrections or clarifications are brought to the attention of the author. Fastest way to connect is twitter
      <a href="https://twitter.com/idesmar">@idesmar</a>.
      Thank you!
    </small>
  )
}

const Details = ({ q }) => {

  const {
    _id,
    question,
    answer,
    list,
    footnote,
  } = q

  const Question = () => question && <summary>{question}</summary>
  const Answer = () => answer && <p>{answer}</p>

  const ListElement = ({ content }) => <li>{content}</li>
  const List = () => list && list.length && (
    <ul>
      {
        list.map((li, liIdx) => (
          <ListElement
            key={_id + 'li' + liIdx}
            content={li} />
        ))
      }
    </ul>
  )

  const FNoteElement = ({ content }) => <li>{hasLink(content)}</li>
  const Footnote = () => footnote && footnote.length && (
    <ul>
      {
        footnote.map((fNote, fNoteIdx) => (
          <FNoteElement
            key={_id + 'fNote' + fNoteIdx}
            content={fNote} />
        ))
      }
    </ul>
  )

  return (
    <details>
      <Question />
      <Answer />
      <List />
      <Footnote />
    </details>
  )
}

const QNA = () => {

  const [qna, setQna] = useState([{
    _id: '',
    question: '',
    answer: '',
    list: [],
    footnote: [],
  }])

  // const getQna = async () => {
  //   const res = await fetch('./data/level1qna.json')
  //   const data = await res.json()
  //   setQna(data)
  // }

  useEffect(() => {
    console.count('useEffect')
    // getQna()

    const getData = async () => {
      const data = await userServices.getQna()
      setQna(data)
    }
    getData()
  }, [])

  return (
    <div>
      {qna.map(q => (<Details key={q._id} q={q} />))}
    </div>
  )
}

const Heading = () => <h2>Level 1</h2>
const Level1Func = () => {

  return (
    <section>
      <Heading />
      <Disclaimer />
      <QNA />
    </section>
  )
}


export { Level1Func }
