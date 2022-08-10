import { Component } from 'react'
import { rem } from './utils/unitConvert'

const Modal = ({ pos }) => {
  // alt argument is { pos: {x, y} }
  // position will be determined by top left corner of the element
  const defaultStyle = {
    textAlign: 'center',
    backgroundColor: 'blue',
    width: 'max-content',
    padding: '1rem',
    borderRadius: '0.3rem',
    position: 'absolute',
    top: pos.y,
    left: pos.x,
  }

  return (
    <div style={defaultStyle}>
      <p>30Days of React</p>
    </div>
  )
}


class Container extends Component {

  state = {
    pos: { x: 0, y: 0, }
  }

  handlePos = (e) => {
    console.log(e.offsetX, e.offsetY)
    this.setState({ pos: {x: e.clientX, y: e.clientY,} })
  }

  render() {

    const { pos } = this.state

    const defaultStyle = {
      border: '1px solid yellow',
      height: rem(500),
      position: 'relative',
    }

    return (
      <div
        style={defaultStyle}
        onMouseEnter={this.handlePos}
      >
        <Modal
          pos={pos}
        />
      </div>
    )
  }
}

class Level2Class extends Component {

  render() {

    return (
      <section>
        <h2>Level 2</h2>
        <Container />
      </section>
    )
  }
}

export { Level2Class }