import { Component } from 'react'
import './App.css'
import Level1 from './components/Level1'
import Level2Comp from './components/Level2'

class Header extends Component {
  render() {
    return (
      <header>
        <h1>30 days of React: Day 07 | Class Components</h1>
      </header>
    )
  }
}

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Level1 />
        <Level2Comp />
      </>
    )
  }
}

export default App
