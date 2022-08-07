import { Component } from 'react'
import { Details } from '../shared/Details/Details'
import { userServices } from '../services/services'
import { colorMe } from '../utils/colorFunc'
import { wMax } from '../assets/globalStyles'

/**
 * NOTE: the json file used in this component was manually copied to the public folder
 * ! This is only used to emulate fetching data from an API and may not be used in production
 */

const Qna = ({ qna }) => {

  const backgroundColor = colorMe()

  return (
    <>
      {
        qna.map(q => {
          const { _id, question, answer, samples } = q
          return (
            <Details
              key={_id}
              summary={question}
              content={{ answer, samples }}
              backgroundColor={backgroundColor}
            />
          )
        })
      }
    </>
  )
}


class Level1Class extends Component {

  state = {
    qna: [],
  }

  /* //> transferred to services/services > userServices */
  // getData = () => {
  //   const fetchData = async () => {
  //     const res = await fetch('../data/level1qna.json')
  //     const data = await res.json()
  //     this.setState({ qna: data })
  //   }
  //   fetchData()
  // }

  componentDidMount() {
    // this.getData()
    const getData = async () => {
      const qna = await userServices.getQna()
      this.setState({qna: qna})
    }
    getData()
  }

  render() {

    const { qna } = this.state

    return (
      <section style={wMax} >
        <h2>Level 1</h2>
        <Qna qna={qna} />
      </section>
    )
  }
}

export default Level1Class