import { Component } from 'react'
import makeID from '../lib/makeID'
// include rem if needed
import { isEven, isPrime0, seqNumsArr, hexColor, isDark } from "../lib/utils"


/*

const Cell = ({ num }) => {
  const red = '#fd5e53',
    yellow = '#fddb3a',
    green = '#21bf73',
    bgColor = isPrime0(num) ? red
      : isEven(num) ? green : yellow
  // let bgColor = 'yellow'
  // if (isEven(num)) bgColor = 'green'
  // if (isPrime(num)) bgColor = 'red'

  const CellStyle = {
    backgroundColor: bgColor,
    fontSize: rem(26)
  }

  return (
    <li style={CellStyle}>
      {num}
    </li>
  )
}

const Level2a = ({len}) => {
  return (
    <div>
      <h3>Number Generator</h3>
      <ul className="numbers">
        {seqNumsArr(len).map((num) => <Cell num={num} key={'num' + num} />)}
      </ul>
    </div>
  )
}


const Color = ({ color }) => {
  const fColor = isDark(color) ? '#fff' : '#000'
  const ColorStyle = {
    backgroundColor: color,
    color: fColor,
    fontSize: rem(12)
  }

  return (
    <li style={ColorStyle}>
      {color}
    </li>
  )
}

const Level2b = ({len}) => {
  return (
    <div>
      <h3>Hexadecimal Colors</h3>
      <ul className='colors'>
        {seqNumsArr(len).map(num => <Color color={hexColor()} key={hexColor()} />)}
      </ul>
    </div>
  )
}

const Level2 = () => {
  const numLength = 32
  return (
    <section>
      <h2>Exercise level 2</h2>
      <Level2a len={numLength} />
      <Level2b len={numLength} />
    </section>
  )
}

*/


class CellComp extends Component {
  constructor(props) {
    super(props)
    this.getBgColor = (num) => {
      const red = '#fd5e53',
            yellow = '#fddb3a',
            green = '#21bf73'
      if (isPrime0(num)) return red
      if (isEven(num)) return green
      return yellow
    }
  }
  render() {
    const { num } = this.props
    /*// > below is equivalent to method in the constructor
      const getBgColor = (num) => {
        const red = '#fd5e53',
              yellow = '#fddb3a',
              green = '#21bf73'
        if (isPrime0(num)) return red
        if (isEven(num)) return green
        return yellow
      } */
    const bgColor = this.getBgColor(num)

    const CellStyle = {
      backgroundColor: bgColor,
      color: '#ffffff',
    }

    return (
      <li style={CellStyle}>{ num }</li>
    )
  }
}


class Level2aComp extends Component {
  /*// note: constructor not needed if there are no additional methods / properties to be  added */

  render() {
    const { len } = this.props
    return (
      <div>
        <h3>Number Generator</h3>
        <ul>
          {seqNumsArr(len).map(cell => <CellComp key={'num' + makeID()} num={cell} />)}
        </ul>
      </div>
    )
  }
}


class ColorComp extends Component {

  render() {
    const { clr } = this.props
    const fColor = isDark(clr) ? '#ffffff' : '#000000'

    const ColorStyle = {
      backgroundColor: clr,
      color: fColor,
      display: 'flex',
    }
    return (
      <li style={ColorStyle}>{clr}</li>
    )
  }
}

class Level2bComp extends Level2aComp {
  /*
    constructor(props) {
      super(props)
      this.getColors = (len) => [...Array(len).keys()].map(el => hexColor())
    }
  */

  render() {
    const { len } = this.props

    /* const colors = this.getColors(len) */
    const colors = Array(len).fill().map(el => hexColor())
    return (
      <div>
        <h3>Hexadecimal Color</h3>
        <ul>
          {colors.map(color => <ColorComp key={color} clr={color} />)}
        </ul>
      </div>
    )
  }
}


class Level2Comp extends Component {
  // maxLength = 32 /* private variable (property) */

  render() {
    // const maxLength = this.maxLength
    const maxLength = 32
    return (
      <section>
        <h2>Exercise Level 2</h2>
        <Level2aComp len={maxLength} />
        <Level2bComp len={maxLength} />
      </section>
    )
  }
}

export default Level2Comp
