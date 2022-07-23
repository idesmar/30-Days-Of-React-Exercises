import Level1 from './components/Level1'
import Level2Func from './components/Level2Func'
// import AppSample from './sample/sample'
import './App.css'


function App() {
  const year = (new Date()).getFullYear()

  return (
    <>
      <header>
        <h1>30 days of React: Day 08 | States</h1>
      </header>
      <Level1 />
      <Level2Func />
      {/* <AppSample /> */}
      <footer>Copyright {year}</footer>
    </>
  )
}

export default App
