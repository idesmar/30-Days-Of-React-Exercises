import { Component } from 'react'
import { Level1Class } from './Level1'
import { Level2Class } from './Level2'

class App extends Component {

  render() {

    const Header = () => (
      <header>
        <h1>30 Days of React: Day 11 | Events</h1>
      </header>
    )

    return (
      <>
        <Header />
        <Level1Class />
        <Level2Class />
      </>
    )
  }
}

export default App