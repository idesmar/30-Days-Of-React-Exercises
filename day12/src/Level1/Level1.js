import { useState, useEffect } from "react"
import { userServices } from "../services/userServices"
import { Details } from './_Details'

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

const QNA = () => {

  const [qna, setQna] = useState([{
    _id: '',
    question: '',
    answer: '',
    list: [],
    footnote: [],
  }])

  /* // ? alternative to using userServices - fetch w/in the component
    const getQna = async () => {
      const res = await fetch('./data/level1qna.json')
      const data = await res.json()
      setQna(data)
    }
  */

  useEffect(() => {
    console.count('getQna useEffect')
    /* // ? alternative to using userServices
      getQna()
     */

    const getQna = async () => {
      const qna = await userServices.getQna()
      setQna(qna)
    }
    getQna()
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
