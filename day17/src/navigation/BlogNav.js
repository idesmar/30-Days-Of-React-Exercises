import { Link } from 'react-router-dom'
import navigationStyles from './navigation.module.css'


const { sideNav } = navigationStyles

const BlogNav = () => {
  return (
    <aside className={sideNav}>
      <nav>
        <ul>
          <li>
            <Link to='1'>Blog 1</Link>
          </li>
          <li>
            <Link to='2'>Blog 2</Link>
          </li>
          <li>
            <Link to='3'>Blog 3</Link>
          </li>
        </ul>
      </nav>
    </aside>
  )
}


export { BlogNav }
