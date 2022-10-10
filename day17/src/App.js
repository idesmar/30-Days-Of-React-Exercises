import {
  // NavRoutes, /* //? Uncomment to use JSX form of Routes and comment NavRoutesObject */
  NavRoutesObject,
} from './routes/NavRoutes'
import { MainNav } from './navigation/MainNav'
// import { BlogRoutes } from './routes/BlogRoutes' /* //? Uncomment to see console warning */
// import appStyle from './App.module.css'
import './App.module.css'
import { useState } from 'react'
import URApp from './useRoutes/URApp'
import { withContainer } from './hoc/sharedWrapper'


/* //> IMPORTANT: Resource Material samples are based from v4 and the current
  REACT-ROUTER-DOM IS CURRENTLY IN V6
  Due to the outdated version, v6 of React Router will be used instead

  ! Using multiple <Routes> appear to work in the UI but it generates a warning on the console whenever the current location is not the path specified inside <Route>
  ie. <Route path="/blog/*" element={<BlogNav />} />
  above generates a warning `No routes matched location "/${insert current pathName if not main dir}"`
*/

/* //* Transferred to ./hoc/sharedWrapper.js
  const { pageWrapper } = appStyle
  const withContainer = (Comp) => {
    return () => (
      <div className={pageWrapper} >
        <Comp />
      </div>
    )
  }
*/

/* //? JSX way of creating Routes -- Uncomment this and comment out ALtMainContent if desired */
// const MainContent = withContainer(NavRoutes)

/* Routing with useRoutes */
const AltMainContent = withContainer(NavRoutesObject)

const App = () => {
  const [isPrimary, setIsPrimary] = useState(true)

  const handleUIChange = () => {
    setIsPrimary(prev => !prev)
  }

  /* //> THIS ternary + state SETUP WILL PREVENT GOING TO `/useRoutes/*` via the URL;
    because the initial isPrimary state is false (each page reload will reset state) */
  return isPrimary
    ? (
      <>
        <MainNav handleUIChange={handleUIChange} />

        {/* //> BlogRoutes contains a separate <Routes>
            generates a console warning whenever current location is not '/blog/*'
            //* `No routes matched location "/${insert current pathName if not main dir}`
            still appears to work though in the UI
            //? Uncomment to see console warning */}
        {/* <BlogRoutes /> */}

        {/* //? Uncomment if JSX Routes desired and comment out AltMainContent */}
        {/* <MainContent /> */}

        <AltMainContent />
      </>
    ) : (
      <URApp handleUIChange={handleUIChange} />
    )
}


export default App
