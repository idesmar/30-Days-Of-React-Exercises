<!-- omit in toc -->
# [30 Days of React](../README.md#readme): Day 17 | [React Router](https://github.com/Asabeneh/30-Days-Of-React/blob/master/17_React_Router/17_react_router.md#readme)

<!-- omit in toc -->
## Table of Contents
- [Dev Notes](#dev-notes)
- [Learnings](#learnings)
  - [Routing](#routing)
    - [Nested Routes](#nested-routes)
    - [Dynamic Routing](#dynamic-routing)
    - [Routing Priority](#routing-priority)
    - [Multiple Routes](#multiple-routes)
    - [useRoutes Hook](#useroutes-hook)
  - [Not Found](#not-found)
  - [Outlet](#outlet)
    - [Shared Layouts](#shared-layouts)
      - [With Common Path](#with-common-path)
      - [No Common Path](#no-common-path)
    - [Context / useOutletContext Hook](#context--useoutletcontext-hook)
  - [CSS Modules](#css-modules)
- [Third Party Resources](#third-party-resources)
  - [Packages Used](#packages-used)
  - [React Router v6 Learning Material](#react-router-v6-learning-material)
- [Other References](#other-references)

### Dev Notes
* [CSS reset - version 1.7.3](https://github.com/elad2412/the-new-css-reset) by [@elad2412](https://github.com/elad2412) used
* included ***experimental*** [chromiumAutofill.css](./src/styles/chromiumAutofill.css) <sup>[w/ notes & attribution]</sup> to somewhat "sanitize/reset" autofill style on chromium.
* used EXPERIMENTAL :has() selector in [navigation.module.css](./src/navigation/shared/navigation.module.css)
  ```css
  /* apply declaration block to div if it contains a ".sideNav" element
    (note: .sideNav has float: left; declaration) */
  div:has(.sideNav) {
    display: flow-root;
  }
  ```

<div align="right"><sub><a href="#table-of-contents">[ Go to Table of Contents ]</a></sub></div>

### Learnings

#### Routing
##### Nested Routes
  ```js
  <Route path="/">
    <Route index element={<Home />} />
    <Route path="contact" element={<ContactMe />} />
  </Route>
  ```
##### Dynamic Routing
  ```js
  const { id } = useParams()
  /* no argument required in useParams */
  ```
##### Routing Priority
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
##### Multiple Routes
* Using multiple `<Routes>` where some will only be displayed in specific path/s.
  * Other `<Route>`s pertaining to blog in ([NavRoutes.js](./src/routes/NavRoutes.js)
  * Code snippets from [BlogRoutes.js](./src/routes/BlogRoutes.js))
  * `Routes` can take a `location` property which allows the `Route` to be displayed anywhere bypassing the requirement set by `Route path="/blog/*"
```js
/* routes/BlogRoutes.js */
{/* <Routes location="/blog"> to show in all pages */}
<Routes>

{/* display BlogNav only if in path /blog, /blog/1, /blog/2 etc */}
  <Route path="/blog/*" element={<BlogNav />} />
</Routes>
```
> The above code works, however, a console warning is displayed when current location does not match the specified path
> ```
> No routes matched location "/${insert current pathName if not root path}"
> ```
* Nested `<Routes>`
  * To help clean up code, especially if there are many `<Route>`s, `<Route>`s that have a similar `path` can be placed in a different file and exported to the main `<Routes>`.
  * Code snippet from [UpdatesRoutes.js](./src/routes/UpdatesRoutes.js) and [NavRoutes.js](./src/routes/NavRoutes.js)
```js
/* routes/UpdatesRoutes.js */
<Routes>

  {/* NOTICE that inner <Route>'s have path relative to updates
      this is because the parent path should be declared in the main <Route>
      ie. in NavRoutes.js */}
  <Route element={<UpdatesLayout />}>
    <Route index element={<Updates />} />
    <Route path="1" element={<Updates1/>} />
    <Route path="2" element={<Updates2/>} />
  </Route>
</Routes>
```
```js
/* routes/NavRoutes.js */
<Routes>
  {/* ... other Routes */}

  {/* NOTICE how path is written with trailing "/*"
      this is to cover other paths contained in path "updates" */}
  <Route path="updates/*" element={<UpdatesRoutes />} />

  {/* ... other Routes */}
</Routes>
```
##### useRoutes Hook

<div align="right"><sub><a href="#table-of-contents">[ Go to Table of Contents ]</a></sub></div>

#### Not Found
Use `path="*"` for any routes/page that do not match the existing declared routes
```js
{/* At the same level as path="/" or one level below if nested inside
  Unless a different and more specific NotFound element is needed */}
<Route path="*" element={<NotFound />} />
```

<div align="right"><sub><a href="#table-of-contents">[ Go to Table of Contents ]</a></sub></div>

#### Outlet
##### Shared Layouts
Layouts can be shared by using `Outlet` and including it in the Layout component. Code snippet from [layouts/ChallengesLayout.js](./src/layouts/ChallengesLayout.js)
> Caveat of sharing layouts in ***nested routes*** by passing the layout component to the "parent" `Route`'s `element` attribute is that it's default position is at the top of the "page" component. This makes repositioning of the shared layout a bit tricky. Refer to [layouts/shared/layout.module.css](./src/layouts/shared/layout.module.css) on the attempts to reposition shared layout (`float`, `position: absolute;`)
```js
import { Outlet } from "react-router-dom"

const ChallengesLayout = () => {
  /* ... some code */
  return (
    <>
      {/* ... some JSX elements and code */}
      <Outlet />
    </>
  )
}
```
###### With Common Path
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
###### No Common Path
Sharing a layout between Routes that have **NO common path** can be done by wrapping the Routes in a *Parent* `Route` that has ***NO PATH*** with the layout component as the `element` attribute. Code snippet from [NavRoutes.js](./src/routes/NavRoutes.js)
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
##### Context / useOutletContext Hook
* `context` property allows data to be available on all pages where `Outlet` layout is visible. See code in [layouts/ChallengesLayout.js](./src/layouts/ChallengesLayout.js)
* `useOutletContext` hook is used to extract the `context` object from `Outlet`. See code in [pages/Challenges.js](./src/pages/Challenges.js)

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

<div align="right"><sub><a href="#table-of-contents">[ Go to Table of Contents ]</a></sub></div>

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
