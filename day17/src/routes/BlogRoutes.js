import { Routes, Route } from "react-router-dom";
import { BlogNav } from "../navigation/BlogNav";
import { Blog, Blog1, Blog2, Blog3 } from "../pages/Blog";


const BlogRoutes = () => {

  return (
    <div>blog route placeholder</div>
    // <Routes path='/blog'>
    //   <Route path="/blog" element={<BlogNav />} />
    // </Routes>
  )
}

/*
<Route path="/blog">
  <Route index element={<Blog />} />
  <Route path="1" element={<Blog1 />} />
  <Route path="2" element={<Blog2 />} />
  <Route path="3" element={<Blog3 />} />
</Route>
*/

export { BlogRoutes }
