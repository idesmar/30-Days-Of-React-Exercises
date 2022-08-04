import { Component } from 'react'
import Loading from './assets/loading'

class Level3Class extends Component {

  state = {
    loading: true,
  }

  componentDidMount() {
    setTimeout(() => {
      // console.log('loaded')
      this.setState({loading: false})
    }, 5000)
  }

  render() {
    const {
      style, headingStyle
    } = this.props

    const { loading } = this.state

    return (
      <section style={style}>
        <h2 style={headingStyle}>Level 3</h2>
        <div>
          { loading ? <Loading /> : <p>Loaded</p>}
        </div>
      </section>
    )
  }
}

export default Level3Class
