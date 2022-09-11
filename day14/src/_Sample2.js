import { Component } from 'react'
import { themeColor } from './App'
import { Button } from './_shared/Button'

/* //* DEV NOTES
  amendments on sample
  - Button component used
  - console.log additional text
  - repositioned elements
*/


class Sample2 extends Component {
  constructor(props) {
    super(props)
    console.log('constructor: 1st')
    this.state = {
      day: 1,
      congratulate: '',
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log(nextProps, nextState, 'nextProps, nextState | shouldComponentUpdate')
    console.log(nextState.day, 'nextState.day | shouldComponentUpdate')

    /* dev refactored code */
    return !(nextState.day > 4)

    /* //* code block from source material
      if (nextState.day > 31) {
        return false
      } else {
        return true
      }
    */
  }

  doChallenge = () => {
    this.setState({
      day: this.state.day + 1,
    })
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.day === 3) {
      this.setState({
        congratulate: 'Congratulations! Challenge has been completed',
      })
    }
    console.log(prevState, prevProps, 'prevState, prevProps | componentDidUpdate')
  }

  render() {
    return (
      <div>
        <h2>3 Day Challenge</h2>
        {this.state.congratulate && <h2>{this.state.congratulate}</h2>}
        <Button
          innerText={'Do Challenge'}
          handleClick={this.doChallenge}
          style={{ backgroundColor: themeColor }}
        />
        {/* <button onClick={this.doChallenge}>Do Challenge</button> */}
        <span style={{ paddingLeft: '1rem' }}>
          Challenge: Day {this.state.day}
        </span>
      </div>
    )
  }
}


export { Sample2 }
