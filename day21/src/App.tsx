import { NavLink } from 'react-router-dom';
import './App.scss';
import { MainRoutes } from './routes/routes';


function App() {
  return (
    <>
      <header>
        30 Days of React: Day 21 | React Hooks
        <nav>
          <ul>
            <li><NavLink to='/'>Home</NavLink></li>
            <li><NavLink to='useContext1'>useContext w/ useState Sample1</NavLink></li>
            <li><NavLink to='useContext2'>useContext w/ useState Sample2</NavLink></li>
          </ul>
        </nav>
      </header>
      <main>
        <MainRoutes />
      </main>
    </>
  );
}


export default App;
