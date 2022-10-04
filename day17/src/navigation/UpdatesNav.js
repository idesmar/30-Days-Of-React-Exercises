import { Link } from "react-router-dom"
import navigationStyles from './shared/navigation.module.css'


const { sideNav } = navigationStyles

const UpdatesNav = () => {
  return (
    <nav className={sideNav}>
      <ul>
        <li><Link to='/updates/1'>Updates 1</Link></li>
        <li><Link to='/updates/2'>Updates 2</Link></li>
      </ul>
    </nav>
  )
}
export { UpdatesNav }
