import { useState, useEffect } from 'react'
import { userServices } from '../services/userServices'
import hasLink from '../utils/hasLink'
import styled from 'styled-components'
import { rem4, em } from '../utils/unitConvert'

/* //> DEV NOTES: styled-components
  styled-components encapsulates the css rule into a class
  - these class names are auto generated at each page reload
*/


const Summary = styled.summary`
  padding: ${rem4(4, 12)};
  border-radius: ${em(4)};
  cursor: pointer;
  background-color: blue;

  &:hover {
    background-color: yellow;
  }
`


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
      <Summary>{question}</Summary>
      <p>{hasLink(answer)}</p>
      {
        list && (
          <ul>
            {
              list.map((li, liIdx) => (
                <List key={_id + 'list' + liIdx} li={li} />
              ))
            }
          </ul>
        )
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
