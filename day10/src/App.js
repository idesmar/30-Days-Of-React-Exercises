import { Component } from 'react'
import Header from './Header/Header'
import Level1Class from './Level1/Level1'
import Level2Class from './Level2/Level2'

class App extends Component {

  render() {

    return (
      <div>
        <Header />
        <Level1Class />
        <Level2Class />
      </div>
    )
  }
}

export default App
