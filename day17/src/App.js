import { NavRoutes } from './routes/NavRoutes'
import { BlogRoutes } from './routes/BlogRoutes'
import { MainNav } from './navigation/MainNav'
import { BlogNav } from './navigation/BlogNav'
import appStyle from './App.module.css'

/* //> IMPORTANT: Resource Material samples are based from v4 and the current
  REACT-ROUTER-DOM IS CURRENTLY IN V6
  Due to the outdated version, v6 of React Router will be used instead
*/


const { pageContainer } = appStyle

/* //> HOC practice ONLY
  this will be useful if it is used by more than one component */
const withContainer = (Comp) => {
  return () => (
    <div className={pageContainer} >
      <Comp />
    </div>
  )
}
const PageContent = withContainer(NavRoutes)
const BlogContent = withContainer(BlogRoutes)

const App = () => {
  return (
    <>
      <MainNav />
      <BlogRoutes />
      {/* <BlogNav /> */}
      <PageContent />
      {/* <BlogContent /> */}
    </>
  )
}


export default App
