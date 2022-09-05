import { useState, useEffect } from 'react'
import hasCode from '../utils/hasCode'
import hasLink from '../utils/hasLink'


const List = ({ list }) => {
  return (
    <ul>
      {
        list.map((li, liIdx) => <li key={'qnaList' + liIdx}>{hasCode(li)}</li>)
      }
    </ul>
  )
}

const Footnote = ({ footnote }) => {
  return (
    <ul>
      {
        footnote.map((li, liIdx) => <li key={'qnaFootnote' + liIdx}>{hasLink(li)}</li>)
      }
    </ul>
  )
}


const QnaDetails = ({ q }) => {
  const {
    question,
    answer,
    list,
    footnote,
  } = q

  return (
    <details open>
      <summary>{question}</summary>
      <div>
        <p>{hasCode(answer)}</p>
        {
          list && <List list={list} />
        }
        {
          footnote && <Footnote footnote={footnote} />
        }
      </div>
    </details>
  )
}

const Qna = () => {
  const [qna, setQna] = useState(
    [
      {
        _id: '',
        question: '',
        answer: '',
        list: [],
        footnote: []
      }
    ]
  )

  useEffect(() => {
    const fetchQna = async () => {
      const res = await fetch('./data/level1qna.json')
      const data = await res.json()
      setQna(prev => [...data])
    }
    fetchQna()
  }, [])

  return (
    <div>
      {qna.map(q => <QnaDetails key={q._id} q={q} /> )}
    </div>
  )
}


const Heading2 = () => <h2>Level 1</h2>
const Level1 = () => {

  return (
    <section>
      <Heading2 />
      <Qna />
    </section>
  )
}


export { Level1 }
