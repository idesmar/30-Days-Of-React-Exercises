import { Routes, Route } from "react-router-dom"
import { About } from "../pages/About"
import { Home } from "../pages/Home"
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


const NavRoutes = () => {
  /* Returning Navigation Nested Route */
  return (
    <Routes>
      <Route path="/">

        <Route index element={<Home />} />

        {/* //> Nested route for challenges with dynamic route :id */}
        {/* //> Layout that shows an aside > nav is passed as an element
          that allows the layout element to show on every page that matches the Route path */}
        <Route path="challenges" element={<ChallengesLayout />}>
          <Route index element={<Challenges />} />
          {/* //? Routes below have more priority than Dynamic Route */}
          <Route path="1" element={<Challenge1 />} />
          <Route path="2" element={<Challenge2 />} />
          {/* //? Dynamic Route */}
          <Route path=":id" element={<OtherChallenges />} />
        </Route>




        <Route element={<SharedLayout />}>
          <Route path="/about" element={<About />} />

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
            {/* //? Dynamic Routes */}
            <Route path=":contactId" element={<SomeContact />} />
            <Route path=":contactId/:contactId" element={<SomeOtherContact />} />
          </Route>
        </Route>




      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}


export { NavRoutes }
