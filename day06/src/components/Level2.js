import { isEven, isPrime0, seqNumsArr, hexColor, isDark, rem } from "../lib/utils"
import './Level2.scss'

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

export default Level2
