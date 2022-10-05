import { Routes, Route } from "react-router-dom";
import { BlogNav } from "../navigation/BlogNav";

/* //> Multiple <Routes> WARNING
  ! Using multiple <Routes> appear to work in the UI but it generates a warning on the console whenever the current location is not the path specified inside <Route>
  ie. <Route path="/blog/*" element={<BlogNav />} />
  above generates a warning:
  `No routes matched location "/${insert current pathName if not root path}"`
*/


const BlogRoutes = () => {
  return (
    <Routes>
      {/* Display BlogNav in all location with path starting (and including) with /blog
          eg. /blog, /blog/1, etc
          //? COMMENT OUT IF UNCOMMENTING ROUTE with path="/blog" */}
      <Route path="/blog/*" element={<BlogNav />} />

      {/* //? UNCOMMENT CODE BELOW to see result */}
      {/* <Route path="/blog" element={<BlogNav />} /> */}
    </Routes>
  )
}

export { BlogRoutes }
