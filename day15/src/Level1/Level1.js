import { useState, useEffect } from 'react'
import { userServices } from '../services/userServices'
import hasLink from '../utils/hasLink'


const List = ({ li }) => {
  return (
    <li>{li}</li>
  )
}

const QnaDetails = ({
  q: {
    _id,
    question,
    answer,
    list,
  }
}) => {
  return (
    <details>
      <summary>{question}</summary>
      <p>{hasLink(answer)}</p>
      {
        list && list.map((li, liIdx) => (
          <ul>
            <List key={_id + 'list' + liIdx} li={li} />
          </ul>
        ))
      }
    </details>
  )
}

const Heading2 = () => <h2>Level 1</h2>

const Level1 = () => {
  const [qna, setQna] = useState([
    {
      _id: '',
      question: '',
      answer: '',
      list: [],
    }
  ])
  useEffect(() => {
    const fetchQna = async () => {
      const data = await userServices.getQna()
      setQna(prev => data)
    }
    fetchQna()
  }, [])
  return (
    <section>
      <Heading2 />
      {qna.map(q => <QnaDetails key={q._id} q={q} /> )}
    </section>
  )
}

export { Level1 }
