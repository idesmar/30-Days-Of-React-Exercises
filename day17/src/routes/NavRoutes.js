import { Routes, Route, useRoutes } from "react-router-dom"
import { About } from "../pages/About"
import { Home } from "../pages/Home"
import { Blog, Blog1, Blog2, Blog3 } from "../pages/Blog"
import { NotFound } from "../pages/NotFound"
import {
  Contact,
  SomeContact,
  SomeOtherContact,
} from "../pages/Contact"
import {
  Challenges,
  Challenge1,
  Challenge2,
  OtherChallenges,
} from "../pages/Challenges"
import { ChallengesLayout } from "../layouts/ChallengesLayout"
import { SharedLayout } from "../layouts/SharedLayout"
import { UpdatesRoutes } from "./UpdatesRoutes"
import { NavigateSample } from "../pages/Navigate"
import { LiveSearch } from "../pages/LiveSearch"
import { LiveSearchLayout } from "../layouts/LiveSearchLayout"
import { ExercisesRoutes } from "../pages/Exercises/ExercisesRoutes"
// import { Updates, Updates1, Updates2 } from "../pages/Updates" /* Uncomment this and routes in NavRoutesObject */

/* //> see code near bottom of module to view Routes without comments  */


const NavRoutes = () => {
  /* Returning Navigation Nested Route */
  return (
    <Routes>
      <Route path="/">
        <Route index element={<Home />} />
        <Route path="navigate" element={<NavigateSample />} />

        {/* //> Clean version; BlogRoutes was not imported due to console warning */}
        <Route path="blog">
          <Route index element={<Blog />} />
          <Route path="1" element={<Blog1 />} />
          <Route path="2" element={<Blog2 />} />
          <Route path="3" element={<Blog3 />} />
        </Route>

        {/* //* Separated Route with path="updates/*" as part Nested Routes
          //> Imported { UpdatesRoutes } from "./UpdatesRoutes" which contains
            <Routes>
              <Route element={<UpdatesNav />} >
                <Route index element={<Updates />} />
                <Route path="1" element={<Updates1/>} />
                <Route path="2" element={<Updates2/>} />
              </Route>
            </Routes> */}
        <Route path="updates/*" element={<UpdatesRoutes />} />

        {/* =============================================================
          //> Layout appears in all path within challenges
          //? done by passing layout component as an element in PARENT Route
        ----------- */}

        {/* //> Nested route for challenges with dynamic route :id */}
        <Route path="challenges" element={<ChallengesLayout />}>
          <Route index element={<Challenges />} />

          {/* //* Routes below have more priority than Dynamic Route */}
          <Route path="1" element={<Challenge1 />} />
          <Route path="2" element={<Challenge2 />} />

          {/* //* Dynamic Route */}
          <Route path=":id" element={<OtherChallenges />} />
        </Route>
        {/* ============================================================= */}

        {/* =============================================================
          //> Shared layout for multiple Routes that do not have a similar path
          //? done by wrapping multiple Routes in a PARENT route that has NO PATH
              but with an element attribute containing the layout component
        ----------- */}
        <Route element={<SharedLayout />}>

          {/* //* About Route */}
          <Route path="/about" element={<About />} />

          {/* //* Contact Route */}
          {/* //> Nested route for contact with dynamic route tests
            * :id can be replaced by another variable (ie :contactId)
            * using :id here also works; even if it is used in challenges Route
            * Use only one :id (params) in Route closure in the same [directory] LEVEL
              - Multiple :ids in the same LEVEL will not result in an error BUT
                any succeeding dynamic route will be IGNORED
              - (:id !== upper/:id) so using path=":id/:id" is acceptable but confusing
                so using an appropriate name is advised
                (eg. path=":user/:office" --- /contact/user/office) */}
          <Route path="/contact">
            <Route index element={<Contact />} />

            {/* //* Dynamic Routes */}
            <Route path=":contactId" element={<SomeContact />} />
            <Route path=":contactId/:contactId" element={<SomeOtherContact />} />
          </Route>
        </Route>
        {/* ============================================================= */}

        <Route path="search" element={<LiveSearchLayout />} >
          <Route index element={<LiveSearch />} />
        </Route>
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

/* //> code above with NO COMMENTS

const NavRoutes = () => {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<Home />} />
        <Route path="navigate" element={<NavigateSample/>} />
        <Route path="blog">
          <Route index element={<Blog />} />
          <Route path="1" element={<Blog1 />} />
          <Route path="2" element={<Blog2 />} />
          <Route path="3" element={<Blog3 />} />
        </Route>
        <Route path="updates/*" element={<UpdatesRoutes />} />
        <Route path="challenges" element={<ChallengesLayout />}>
          <Route index element={<Challenges />} />
          <Route path="1" element={<Challenge1 />} />
          <Route path="2" element={<Challenge2 />} />
          <Route path=":id" element={<OtherChallenges />} />
        </Route>
        <Route element={<SharedLayout />}>
          <Route path="/about" element={<About />} />
          <Route path="/contact">
            <Route index element={<Contact />} />
            <Route path=":contactId" element={<SomeContact />} />
            <Route path=":contactId/:contactId" element={<SomeOtherContact />} />
          </Route>
        </Route>
        <Route path="search" element={<LiveSearchLayout />} >
          <Route index element={<LiveSearch />} />
        </Route>
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

*/


const NavRoutesObject = () => {
  const element = useRoutes([
    {
      path: '*',
      element: <NotFound />
    },
    {
      path: '/',
      children: [
        {
          index: true,
          element: <Home />
        },
        {
          path: 'challenges',
          element: <ChallengesLayout />,
          children: [
            {
              index: true,
              element: <Challenges />
            },
            {
              path: '1',
              element: <Challenge1 />
            },
            {
              path: '2',
              element: <Challenge2 />
            },
            {
              path: ':id',
              element: <OtherChallenges />
            }
          ]
        },
        {
          // path: '', /* //* This property can be removed completely */
          element: <SharedLayout />,
          children: [
            {
              path: 'about',
              element: <About />
            },
            {
              path: 'contact',
              element: <Contact />
            }
          ]
        },
        {
          path: 'blog',
          children: [
            {
              index: true,
              element: <Blog />
            },
            {
              path: '1',
              element: <Blog1 />
            },
            {
              path: '2',
              element: <Blog2 />
            },
            {
              path: '3',
              element: <Blog3 />
            }
          ]
        },
        // { /* //* all routes in /updates -- not importing routes from UpdatesRoutes.js */
        //   path: 'updates',
        //   children: [
        //     {
        //       index: true,
        //       element: <Updates />
        //     },
        //     {
        //       path: '1',
        //       element: <Updates1 />
        //     },
        //     {
        //       path: '2',
        //       element: <Updates2 />
        //     }
        //   ]
        // },
        {
          path: 'updates/*',
          element: <UpdatesRoutes />
        },
        {
          path: 'navigate',
          element: <NavigateSample />
        },
        {
          path: 'search',
          element: <LiveSearchLayout />,
          children: [
            {
              index: true,
              element: <LiveSearch />
            }
          ]
        },
        {
          path: 'exercises/*',
          element: <ExercisesRoutes />
        },
      ]
    },
  ])

  return element
}

export { NavRoutes, NavRoutesObject }
