import { NavRoutes } from './routes/NavRoutes'
import { MainNav } from './navigation/MainNav'
import { BlogRoutes } from './routes/BlogRoutes'
import appStyle from './App.module.css'

/* //> IMPORTANT: Resource Material samples are based from v4 and the current
  REACT-ROUTER-DOM IS CURRENTLY IN V6
  Due to the outdated version, v6 of React Router will be used instead

  ! Using multiple <Routes> appear to work in the UI but it generates a warning on the console whenever the current location is not the path specified inside <Route>
  ie. <Route path="/blog/*" element={<BlogNav />} />
  above generates a warning `No routes matched location "/${insert current pathName if not main dir}"`
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
const MainContent = withContainer(NavRoutes)

const App = () => {
  return (
    <>
      <MainNav />

      {/* //> BlogRoutes contains a separate <Routes>
          generates a console warning whenever current location is not '/blog/*'
          //* `No routes matched location "/${insert current pathName if not main dir}`
          still appears to work though in the UI */}
      <BlogRoutes />

      <MainContent />
    </>
  )
}


export default App
