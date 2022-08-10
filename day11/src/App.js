import { Component } from 'react'
import { Level2Class } from './Level2'

class App extends Component {

  render() {

    // 30 days of React: Day 10 | React Project Folder Structure
    const Header = () => (
      <header>
        <h1>30 Days of React: Day 11 | Events</h1>
      </header>
    )

    return (
      <>
        <Header />
        <Level2Class />
      </>
    )
  }
}

export default App