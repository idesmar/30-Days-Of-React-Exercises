import Level1 from './components/Level1'
import Level2 from './components/Level2'
import './App.css'


function App() {
  const year = (new Date()).getFullYear()

  return (
    <>
      <header>
        <h1>30 days of React: Day 08 | States</h1>
      </header>
      <Level1 />
      <Level2 />
      <footer>Copyright &copy;{year}</footer>
    </>
  )
}

export default App
