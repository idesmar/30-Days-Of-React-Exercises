import { Component } from 'react'
import { Details } from '../shared/Details'

/**
 * NOTE: the json file used in this component was manually copied to the public folder
 * ! This is only used to emulate fetching data from an API and may not be used in production
 */


const Qna = ({ qna }) => {
  return (
    <>
      {
        qna.map(q => <Details key={q._id} object={q} />)
      }
    </>
  )
}


class Level1Class extends Component {

  state = {
    qna: '',
  }

  getData = () => {
    const url = '../data/level1qna.json'
    const fetchData = async () => {
      const res = await fetch(url)
      const data = await res.json()
      this.setState({ qna: data })
    }
    fetchData()
  }

  componentDidMount() {
    this.getData()
  }

  render() {

    const { qna } = this.state

    return (
      <section>
        <h2>Level 1</h2>
        {
          qna && <Qna qna={qna} />
        }
      </section>
    )
  }
}

export default Level1Class