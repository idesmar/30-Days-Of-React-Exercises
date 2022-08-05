import { Component } from 'react'
import Loading from './assets/loading'
import PugLoaded from './assets/pugloaded'
import { colors } from './__globalStyle'
import { rem } from '../lib/utils'


/**
 * Fetching data takes some amount of time. A user has to wait until the data get loaded. Implement a loading functionality of a data is not fetched yet. You can simulate the delay using setTimeout. */

class Level3Class extends Component {

  state = {
    loading: true,
  }

  componentDidMount() {
    // change state after 5 seconds
    setTimeout(() => {
      this.setState({loading: false})
    }, 5000)
  }

  render() {
    const {
      style, headingStyle,
      // theme,
    } = this.props

    const { loading } = this.state

    const containerStyle = {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: loading ? colors.red : colors.green,
      flexDirection: !loading && 'column',
      borderRadius: rem(8),
    }

    return (
      <section style={style}>
        <h2 style={headingStyle}>Level 3</h2>
        <div style={containerStyle}>
          { loading ? <Loading /> : <><p>Loaded</p><PugLoaded style={{display: 'block'}} /></> }
        </div>
      </section>
    )
  }
}

export default Level3Class
