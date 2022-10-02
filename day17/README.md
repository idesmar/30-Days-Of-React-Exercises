<!-- omit in toc -->
# [30 Days of React](../README.md#readme): Day 17 | [React Router](https://github.com/Asabeneh/30-Days-Of-React/blob/master/17_React_Router/17_react_router.md#readme)

<!-- omit in toc -->
## Table of Contents
- [Dev Notes](#dev-notes)
- [Learnings](#learnings)
  - [Routing](#routing)
  - [Not Found](#not-found)
  - [Outlet / Shared Layouts](#outlet--shared-layouts)
    - [With Common Path](#with-common-path)
    - [No Common Path](#no-common-path)
    - [Outlet Context](#outlet-context)
  - [CSS Modules](#css-modules)
- [Third Party Resources](#third-party-resources)
  - [Packages Used](#packages-used)
  - [React Router v6 Learning Material](#react-router-v6-learning-material)
- [Other References](#other-references)

### Dev Notes
* [CSS reset - version 1.7.3](https://github.com/elad2412/the-new-css-reset) by [@elad2412](https://github.com/elad2412) used

<div align="right"><sub><a href="#table-of-contents">[ Go to Table of Contents ]</a></sub></div>

### Learnings

#### Routing
* [x] Nested Routes
  ```js
  <Route path="/">
    <Route index element={<Home />} />
    <Route path="contact" element={<ContactMe />} />
  </Route>
  ```
* [x] Dynamic Routing
  ```js
  const { id } = useParams()
  /* no argument required in useParams */
  ```
* [x] Routing Priority
  ```js
  /* NavRoutes.js */
  <Routes>
    <Route path="/">

      {/* Routes below (with absolute path)
        have more priority than Dynamic Route */}
      <Route path="1" element={<Challenge1 />} />
      <Route path="2" element={<Challenge2 />} />

      {/* Dynamic Route */}
      <Route path=":id" element={<OtherChallenges />} />

  {/* ... rest of code */}
  ```
* [ ] Multiple Routes
* [ ] useRoutes Hook

#### Not Found
Use `path="*"` for any routes/page that do not match the existing declared routes
```js
{/* At the same level as path="/" or one level below if nested inside
  Unless a different and more specific NotFound element is needed */}
<Route path="*" element={<NotFound />} />
```

#### Outlet / Shared Layouts
##### With Common Path
**Nested Routes** that have a **common path** can share a layout by passing the layout component to the *Parent* `Route`'s `element` attribute. Code snippet from [NavRoutes.js](./src/routes/NavRoutes.js)
```js
<Route path="challenges" element={<ChallengesLayout />}>
  <Route index element={<Challenges />} />

  {/* Routes below have more priority than Dynamic Route */}
  <Route path="1" element={<Challenge1 />} />
  <Route path="2" element={<Challenge2 />} />

  {/* Dynamic Route */}
  <Route path=":id" element={<OtherChallenges />} />
</Route>
```
##### No Common Path
Sharing a layout between Routes that have **NO common path** can be done by wrapping the Routes in a *Parent* `Route` that has ***NO PATH*** with the layout component as the `element` attribute.  Code snippet from [NavRoutes.js](./src/routes/NavRoutes.js)
```js
{/* Parent Route should not have path property */}
<Route element={<SharedLayout />}>
  <Route path="/about" element={<About />} />
  <Route path="/contact">
    <Route index element={<Contact />} />
    <Route path=":contactId" element={<SomeContact />} />
    {/* experimenting with :id */}
    <Route path=":contactId/:contactId" element={<SomeOtherContact />} />
  </Route>
</Route>
```
##### Outlet Context
* `context` property allows data to be available on all pages where the `Outlet` is visible.
* `useOutletContext` is used to extract the `context` object from `Outlet`


```js
/* layouts/ChallengesLayout.js */
<Outlet context={{ name, click }} />
```
```js
/* pages/Challenges.js */
const FromOutlet = () => {
  const { name, click } = useOutletContext()
  return (
    <div>
      <h6>From Context</h6>
      <p>Name: {name}</p>
      <p>Click: {click}</p>
    </div>
  )
}
```
> Go to source files
> * [layouts/ChallengesLayout.js](./src/layouts/ChallengesLayout.js)
> * [pages/Challenges.js](./src/pages/Challenges.js)

#### CSS Modules
Parent class (style) can be used to style child elements. Example can be found in [App.module.css](./src/App.module.css) and [App.js](./src/App.js)
```css
/* App.module.css */
.NavStyle { /* ... */ }
.NavStyle > ul { /* ... */ }
.NavStyle a { /* ... */ }
.NavStyle a:hover { /* ... */ }
```
```js
/* App.js */
import appStyle from './App.module.css'

const { NavStyle } = appStyle
const HomeNavigation = () => {
  return (
    <nav className={NavStyle}>

/* ... rest of code */
```

<div align="right"><sub><a href="#table-of-contents">[ Go to Table of Contents ]</a></sub></div>

### Third Party Resources

#### Packages Used
<!-- cspell:disable -->
| Package | Installation | Website | Github |
|:--------|:-------------|:--------|:-------|
| react router dom | `npm i react-router-dom` | [reactrouter.com](https://reactrouter.com/) | [remix-run/react-router](https://github.com/remix-run/react-router#readme)
<!-- cspell:enable -->

#### React Router v6 Learning Material
  * [Ultimate React Router v6 Guide](https://blog.webdevsimplified.com/2022-07/react-router/) by [Web Dev Simplified](https://twitter.com/DevSimplified)

<div align="right"><sub><a href="#table-of-contents">[ Go to Table of Contents ]</a></sub></div>

### Other References
*

<div align="right"><sub><a href="#table-of-contents">[ Go to Table of Contents ]</a></sub></div>
