import { Routes, Route } from "react-router-dom"
import { About } from "../components/About"
import { Home } from "../components/Home"
import { Contact, SomeContact, SomeOtherContact } from "../components/Contact"
import { NotFound } from "../components/NotFound"
import {
  Challenges,
  Challenge1,
  Challenge2,
  OtherChallenges,
} from "../components/Challenges"

const NavRoutes = () => {
  /* Returning Navigation Nested Route */
  return (
    <Routes>
      <Route path="/">
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />

        {/* Nested route for challenges with dynamic route :id */}
        <Route path="challenges">
          <Route index element={<Challenges />} />
          <Route path="1" element={<Challenge1 />} />
          <Route path="2" element={<Challenge2 />} />
          <Route path=":id" element={<OtherChallenges />} />
        </Route>

        {/* * :id can be replaced by another variable (ie :contactId)
            * using :id here also works; even if it is used in challenges Route
            * Use only one :id (params) in Route closure in the same [directory] LEVEL
              - Multiple :ids in the same LEVEL will not result in an error BUT
                any succeeding dynamic route will be IGNORED
              - (:id !== upper/:id) so using path=":id/:id" is acceptable but confusing
                so using an appropriate name is advised
                (eg. path=":user/:office" --- /contact/user/office) */}
        <Route path="contact">
          <Route index element={<Contact />} />
          <Route path=":contactId" element={<SomeContact />} />
          <Route path=":contactId/:contactId" element={<SomeOtherContact />} />
        </Route>

      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
export { NavRoutes }
