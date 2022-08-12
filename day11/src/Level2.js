import { Component } from 'react'
import { rem } from './utils/unitConvert'

const Modal = ({ pos }) => {
  // alt argument is { pos: {x, y} }
  // origin of position is center of element
  const defaultStyle = {
    textAlign: 'center',
    backgroundColor: 'blue',
    width: 'max-content',
    padding: '1rem',
    borderRadius: '0.3rem',
    position: 'absolute',
    top: pos.y,
    left: pos.x,
    transform: 'translate(-50%, -50%)',
  }

  return (
    <div style={defaultStyle}>
      <p>30Days of React</p>
    </div>
  )
}


class Container extends Component {

  state = {
    /*
      ? initial offset needed and must be updated when document is resized to optimize calculation of new pos (hence preventing lag).
      > Question is HOW?
      // offset: { x: 0, y: 64 },
    */
    pos: { x: '50%', y: '50%', },
  }

  handlePos = (e) => {

    const offsetLeft = e.target.offsetLeft
    const offsetTop = e.target.offsetTop

    /**
     * client refers to the distance of the CURSOR from the document's top || left edges
     * e.target.offset(Top || Left) refers to the distance of the ELEMENT's nearest edges to the document's top || left boundary
     */

    const newPos = {
      x: e.clientX - offsetLeft,
      y: e.clientY - offsetTop,
    }

    this.setState({ pos: newPos })
  }

  render() {

    const { pos } = this.state
    const sides = rem(400)

    const defaultStyle = {
      border: '1px solid yellow',
      borderRadius: '100%',
      height: sides,
      aspectRatio: '1/1',
      position: 'relative',
      margin: '0 auto',
    }

    return (
      <div
        style={defaultStyle}
        onMouseEnter={this.handlePos}
        // onMouseMove={this.handlePos} // > Test to see if code is optimized
      >
        <Modal pos={pos} />
      </div>
    )
  }
}

class Level2Class extends Component {

  render() {
    const Heading = () => <h2>Level 2</h2>

    return (
      <section>
        <Heading />
        <Container />
      </section>
    )
  }
}

export { Level2Class }