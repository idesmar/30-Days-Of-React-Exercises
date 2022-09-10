import { useState, useEffect } from 'react'
import { userServices } from './_services/services'
import hasCode from './_utils/hasCode'


const List = ({
  list,
  _id,
}) => {
  return (
    <ul>
      {list.map((li, liIdx) => (
        <li key={`${_id}-${liIdx}`}>
          {hasCode(li)}
        </li>
      ))}
    </ul>
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
      <div>
        <p>{hasCode(answer)}</p>
        {list && <List list={list} _id={_id} />}
      </div>
    </details>
  )
}

const QNA = () => {
  const [qna, setQna] = useState(
    [
      {
        _id: '',
        question: '',
        answer: '',
        list: [],
      }
    ]
  )

  useEffect(() => {
    const fetchQna = async () => {
      const data = await userServices.getQna()
      setQna(prev => data)
    }
    fetchQna()
  })

  return (
    <div>
      {
        qna.map(q => (
          <QnaDetails key={q._id} q={q} />
        ))
      }
    </div>
  )
}

const Header2 = () => <h2>Level 1</h2>

const Level1 = () => {
  return (
    <section>
      <Header2 />
      <QNA />
    </section>
  )
}

export { Level1 }
