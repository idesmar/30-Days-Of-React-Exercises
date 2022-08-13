import { Component } from 'react'
import { colorMe } from './utils/colorFunc'
import { rem, rem4 } from './utils/unitConvert'

const Modal = ({ pos }) => {
  /* alt argument is { pos: {x, y} }
     intersection: cursor point and center of element */
  const defaultStyle = {
    width: 'max-content',
    padding: rem4(8, 16),
    borderRadius: '0.3rem',
    backgroundColor: colorMe('dark'),
    color: '#ffffff',
    boxShadow: 'rgb(0 0 0 / 73%) -3px 6px 16px 0',
    fontSize: rem(30),
    fontWeight: '700',
    textAlign: 'center',
    position: 'absolute',
    top: pos.y,
    left: pos.x,
    transform: 'translate(-50%, -50%)',
  }

  return (
    <div style={defaultStyle}>
      <p>30 Days Of React</p>
    </div>
  )
}


class Container extends Component {

  state = {
    /*
      ? initial offset needed and must be updated when document is resized to optimize calculation of new pos (preventing lag).
      > Question is HOW?
      // offset: { x: 0, y: 64 },
    */
    pos: { x: '50%', y: '50%', },
  }

  handlePos = (e) => {

    const offsetLeft = e.target.offsetLeft
    const offsetTop = e.target.offsetTop

    /**
     * e.target.offset(Top || Left) refers to the distance of the ELEMENT's nearest edges to the document's top || left boundary
     */

    const newPos = {
      x: e.clientX - offsetLeft,    // clientX or pageX can be interchangeable here
      y: e.pageY - offsetTop,       // pageY refers to top-most of document
    }

    this.setState({ pos: newPos })
  }

  render() {

    const { pos } = this.state
    const sides = rem(400)

    const defaultStyle = {
      backgroundImage: 'linear-gradient(40deg, #0f172a, #5fdbfc50)',
      boxShadow: '#00000026 -3px 15px 1rem 0px',
      borderRadius: '100%',
      height: sides,
      aspectRatio: '1/1',
      position: 'relative',
      margin: '0 auto',
      marginBottom: rem(60),
    }

    return (
      <div
        style={defaultStyle}
        onMouseEnter={this.handlePos}
        // onMouseMove={this.handlePos} // > Tester if code is optimized
        className="globe"
      >
        <Modal pos={pos} />
      </div>
    )
  }
}

class Level2Class extends Component {

  render() {
    const Heading = () => (
      <>
        <h2>Level 2</h2>
        <small style={{ textAlign: 'center', display: 'block' }}>
          Note that this solution is not optimized so the element may appear beyond the container's boundary
        </small>
      </>
    )

    return (
      <section>
        <Heading />
        <Container />
      </section>
    )
  }
}

export { Level2Class }