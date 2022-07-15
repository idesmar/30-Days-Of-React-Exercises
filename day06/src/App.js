import './App.scss'
import Level1 from './components/Level1'
import Level2 from './components/Level2'

const Header = () => {

  const smallStyle = {
    display: 'block',
    fontStyle: 'italic',
    fontSize: '0.8em',
    textAlign: 'center'
  }
  return (
    <header>
      <h1 className='header'>30 Days Of React: Day 6 | Mapping Arrays</h1>
      <small style={smallStyle}>* * * Styled with SCSS * * *</small>
    </header>
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
