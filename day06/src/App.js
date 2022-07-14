import './App.scss'
import Level1 from './components/Level1'
import Level2 from './components/Level2'

const Header = () => {

  return (
    <h1 className='header'>30 Days Of React: Day 6 | Mapping Arrays</h1>
  )
}

function App() {
  return (
    <>
      <Header />
      <Level1 />
      <Level2 />
    </>
  )
}

export default App
