import { Component } from 'react'
import makeID from '../lib/makeID'
import { isEven, isPrime0, seqNumsArr, hexColor, isContrastPassing, rem } from "../lib/utils"
import * as glob from './globalVars' // ! look into optimizing


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
    this.tabStyle = glob.tab
  }
  render() {
    // > num passed from Level2aComp
    const { num } = this.props
    // > below is equivalent to method in constructor. Opted to use constructor so it can be used by child class (ColorComp)
    /*  const getBgColor = (num) => {
          const red = '#fd5e53',
                yellow = '#fddb3a',
                green = '#21bf73'
          if (isPrime0(num)) return red
          if (isEven(num)) return green
          return yellow
        } */
    const bgColor = this.getBgColor(num)

    const cellStyle = {
      backgroundColor: bgColor,
      color: '#ffffff',
    }
    const CellStyle = Object.assign({}, cellStyle, this.tabStyle, {fontSize: rem(26)})
    return (
      <li style={CellStyle}>{ num }</li>
    )
  }
}


class Level2aComp extends Component {

  // > constructor created to be accessed by child class (Level2bComp)
  constructor(props) {
    super(props)
    this.ulStyle = {
      display: 'flex',
      flexWrap: 'wrap',
      gap: glob.gap,
      maxWidth: '100%',
      width: glob.idealWidth,
      margin: '0 auto',
    }
  }

  render() {
    // > passed from Level2Comp
    const { len } = this.props
    // > from constructor
    const ulStyle = this.ulStyle
    return (
      <div>
        <h3 style={glob.header3}>Number Generator</h3>
        <ul style={ulStyle}>
          {seqNumsArr(len).map(cell => <CellComp key={'num' + makeID()} num={cell} />)}
        </ul>
      </div>
    )
  }
}


class ColorComp extends CellComp {
  // note: constructor not needed if there are no methods / properties that can be inherited by a child class

  render() {
    // > this is a child class of CellComp, therefore it has access to this.tabStyle
    const tabStyle = this.tabStyle

    // > this.props is passed from Level2aComp
    const { fColor } = this.props

    const bgColors = []
    /*  RECURSIVE FUNCTION
        note: recursion returns output from last to first result/computed
        hence result is stored to bgColors array
        and extracted //> bgColors[0]
    */
    const getDarkBgColor = (fColor) => {
      const bgColor = hexColor()
      if (!isContrastPassing(fColor, bgColor)) getDarkBgColor(fColor)
      bgColors.push(bgColor)
    }

    getDarkBgColor(fColor)
    const bgColor = bgColors[0]

    const clrStyle = {
      backgroundColor: bgColor,
      color: fColor,
    }
    const ColorStyle = Object.assign({}, clrStyle, tabStyle)

    return (
      <li style={ColorStyle}>{bgColor}</li>
    )
  }
}

class Level2bComp extends Level2aComp {

  render() {
    // > len passed from Level2Comp
    const { len } = this.props

    // > ulStyle comes from parent class Level2aComp
    const ulStyle = this.ulStyle

    const fColorRefs = ['#ffffff', '#000000']
    const getFColor = () => fColorRefs[Math.floor(Math.random() * 2)]

    const fColors = Array(len).fill().map(el => getFColor())
    return (
      <div>
        <h3 style={glob.header3}>Hexadecimal Color</h3>
        <ul style={ulStyle} >
          {fColors.map(fColor => <ColorComp key={'color' + makeID()} fColor={fColor} />)}
        </ul>
      </div>
    )
  }
}


class Level2Comp extends Component {
  // NOTE: private variable --- THEORY: Could be optimized if there are other class methods other than render
  maxLength = 32 // * using private class variables

  render() {
    const maxLength = this.maxLength // * using private class variables
    // const maxLength = 32
    return (
      <section style={glob.section}>
        <h2 style={glob.header2}>Exercise Level 2</h2>
        <p style={glob.centerText}>Recreated Level 2 from Day06 using <em>class components</em></p>
        <Level2aComp len={maxLength} />
        <Level2bComp len={maxLength} />
      </section>
    )
  }
}

export default Level2Comp
