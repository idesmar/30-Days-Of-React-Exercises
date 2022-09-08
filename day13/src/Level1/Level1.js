import { useState, useEffect } from 'react'
import { themeColor } from '../App'
import { userServices } from '../services/userServices'
import hasCode from '../utils/hasCode'
import hasLink from '../utils/hasLink'
import { rem } from '../utils/unitConvert'
import loader from '../assets/bean_eater_animated.svg'

/* controlled loading duration */
const LOADING_DURATION = 3000


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


const QnaDetails = ({
  q: {
    question,
    answer,
    list,
    footnote,
  },
}) => {

  return (
    <details>
      <summary
        style={{ backgroundColor: themeColor }}
      >
        {question}
      </summary>
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

  const [loading, setLoading] = useState(true)
  const [qna, setQna] = useState(
    [
      {
        _id: '',
        question: '',
        answer: '',
        list: [],
        footnote: [],
      }
    ]
  )

  useEffect(() => {
    const fetchQna = async () => {
      const data = await userServices.getQna()
      setQna(prev => [...data])
      setLoading(prev => false)
    }
    /* loading state while fetching */
    setInterval(fetchQna, LOADING_DURATION)
  }, [])

  const loadingStyle = {
    height: rem(360),
    width: '100%',
    backgroundImage: `url(${loader})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
    backgroundPosition: 'center',
  }

  return loading
    ? <div style={loadingStyle}></div>
    : <div>{qna.map(q => <QnaDetails key={q._id} q={q} />)}</div>
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
