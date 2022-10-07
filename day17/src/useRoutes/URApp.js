import { NavLink } from 'react-router-dom'
import { URoutes } from './routes/URoutes'
import { withContainer } from '../hoc/sharedWrapper'

/* //> Borrowing styles from another module
  it would be better to restructure the shared styles file/folder
  if a similar situation is encountered
  This will do for now
*/
import navigationStyles from '../navigation/shared/navigation.module.css'


const { mainNav, specialLink } = navigationStyles
const URNavigation = ({ handleUIChange }) => {
  return (
    <nav className={mainNav}>
      <ul>
        <li><NavLink to="/useRoutes">URHome</NavLink></li>
        <li><NavLink to="/useRoutes/contact">URContact</NavLink></li>
        <li><NavLink to="/"
          onClick={handleUIChange}
          className={specialLink}
        >
          PrimaryPage
        </NavLink></li>
      </ul>
    </nav>
  )
}

const URContents = withContainer(URoutes)
const URApp = ({ handleUIChange }) => {
  return (
    <>
      <URNavigation handleUIChange={handleUIChange} />
      <URContents />
    </>
  )
}


export default URApp
