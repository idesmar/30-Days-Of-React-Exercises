import { Component } from 'react'
import Level1 from './components/Level1'
import level1qna from './data/level1qna'
import './App.css'
import { rem } from './lib/utils'


const headingStyle = {
  font: 'revert',
  textAlign: 'center',
}

const sectionLimit = {
  width: rem(600),
}

const Header = () => (
  <header>
    <h1 style={headingStyle}>30 days of React: Day 09 | Conditional Rendering</h1>
  </header>
)

class App extends Component {

  render() {
    const qna = [...level1qna]

    return (
      <div >
        <Header />
        <Level1 style={sectionLimit} qna={qna} />
      </div>
    )
  }
}


export default App
