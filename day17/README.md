<!-- NOTE: Link to TOC after every end of h3 (###) and h4 (####) -->

<!-- omit in toc -->
# [30 Days of React](../README.md#readme): Day 17 | [React Router](https://github.com/Asabeneh/30-Days-Of-React/blob/master/17_React_Router/17_react_router.md#readme)

<details>
  <summary style='cursor: pointer;' >Click for Table of Contents</summary>

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
    - [Outlet / Shared Layouts](#outlet--shared-layouts)
      - [With Common Path](#with-common-path)
      - [No Common Path](#no-common-path)
    - [Context / useOutletContext Hook](#context--useoutletcontext-hook)
  - [Navigation](#navigation)
    - [Link](#link)
      - [to](#to)
      - [replace](#replace)
      - [reloadDocument](#reloaddocument)
      - [state](#state)
    - [NavLink](#navlink)
      - [end](#end)
    - [Navigate / useNavigation Hook](#navigate--usenavigation-hook)
  - [CSS Modules](#css-modules)
- [Third Party Resources](#third-party-resources)
  - [Packages Used](#packages-used)
  - [React Router v6 Learning Material](#react-router-v6-learning-material)
</details>

### Dev Notes
* Since the [original resource](https://github.com/Asabeneh/30-Days-Of-React/blob/master/17_React_Router/17_react_router.md#readme) material is outdated (react-router-dom@4) and the current version is at v6, an [external resource](#react-router-v6-learning-material) material is used for this sub-repo.
* Created a [CustomNavLink](./src/navigation/shared/customNavLink.js) based on code snippet from [react-router official docs](https://reactrouter.com/en/main/components/nav-link).
* [CSS reset - version 1.7.3](https://github.com/elad2412/the-new-css-reset) by [@elad2412](https://github.com/elad2412) used
* included ***experimental*** [chromiumAutofill.css](./src/styles/chromiumAutofill.css) <sup>[w/ notes & attribution]</sup> to somewhat "sanitize/reset" autofill style on chromium.
* used ***experimental*** :has() selector in [navigation.module.css](./src/navigation/shared/navigation.module.css)
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
/* routes/NavRoutes.js */
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
  * Other `<Route>`s pertaining to blog in [NavRoutes.js](./src/routes/NavRoutes.js)
  * `Routes` can take a `location` property which allows the `Route` to be displayed anywhere bypassing the requirement set by `Route path="/blog/*"`
> Code snippet from [BlogRoutes.js](./src/routes/BlogRoutes.js)
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
> Code snippets from [routes/UpdatesRoutes.js](./src/routes/UpdatesRoutes.js) and [routes/NavRoutes.js](./src/routes/NavRoutes.js)
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
Instead of using JSX, a Javascript object representing the logic of what element to display/render can be used as an argument to `useRoutes()` hook. Using this method can remove ***repetition*** like writing the template for `Route` ie. `<Route />`
> Code snippet from [useRoutes/routes/URoutes.js](./src/useRoutes/routes/URoutes.js)
```js
/* URoutes.js */
const URoutes = () => {
  const element = useRoutes([
    {
      path: '/useRoutes',              /* <Route path='/useRoutes'> */
      children: [
        {
          index: true,                      /* <Route index */
          element: <URHome />,              /*   element={<URHome />} /> */
        },
        {
          path: 'contact',                  /* <Route path='contact' */
          element: <URContact />,           /*   element={<URContact/>} /> */
        },
      ]
    }                                   /* </Route> */
  ])
  return element
}
```

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
##### Outlet / Shared Layouts
* Layouts can be shared by passing a ***layout component*** to ***parent*** `Route`'s `element`.
* Ensure that the ***layout component*** has an `<Outlet>` inside that will serve as a ***placeholder*** for the `children` `<Route>`s.
> Code snippet from [layouts/ChallengesLayout.js](./src/layouts/ChallengesLayout.js) and [routes/navRoutes.js](./src/routes/NavRoutes.js)

```js
/* layouts/ChallengesLayout.js */
import { Outlet } from "react-router-dom"

const ChallengesLayout = () => {
  /* ... some code */
  return (
    <>
      {/* ... some JSX elements and code */}
      <Outlet />
      {/* ... some JSX elements and code */}
    </>
  )
}
```
```js
/* routes/NavRoutes.js */
{/* ... other `Route`s */}

{/* ChallengesLayout passed as element on parent route to display layout */}
<Route path="challenges" element={<ChallengesLayout />}>
  <Route index element={<Challenges />} />
  <Route path="1" element={<Challenge1 />} />
  <Route path="2" element={<Challenge2 />} />
  <Route path=":id" element={<OtherChallenges />} />
</Route>

{/* ... other `Route`s */}
```
###### With Common Path
**Nested Routes** that have a **common path** can share a layout by passing the layout component to the *Parent* `Route`'s `element` attribute.
> Code snippet from [routes/NavRoutes.js](./src/routes/NavRoutes.js)
```js
<Route path="challenges" element={<ChallengesLayout />}>
  <Route index element={<Challenges />} />
  <Route path="1" element={<Challenge1 />} />
  <Route path="2" element={<Challenge2 />} />
  <Route path=":id" element={<OtherChallenges />} />
</Route>
```
###### No Common Path
Sharing a layout between Routes that have **NO common path** can be done by wrapping the Routes in a *Parent* `Route` that has ***NO PATH*** with the ***layout component*** as the `element` value.
> Code snippet from [routes/NavRoutes.js](./src/routes/NavRoutes.js)
```js
{/* Parent Route should not have path property because they enclosed route do not share a common path */}
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
* `context` property allows data to be passed from ***layout component*** where `Outlet` is declared. See code in [layouts/ChallengesLayout.js](./src/layouts/ChallengesLayout.js)
* `useOutletContext` hook is used to extract the `context` object from `Outlet`. See code in [pages/Challenges.js](./src/pages/Challenges.js) and displayed on the ***child*** `Route` element.

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

#### Navigation
##### Link
`Link` is the simplest form of navigation. Underneath, this is a simple anchor tag. <br/>
Below are the properties available in `<Link>`
###### to
Accepts the path where to redirect. The path can either be one of the ff:
* absolute path
* relative path
  * appending the path to the current path displayed
  * using directory-like navigation eg. `../` or `../../`
> Code snippet from [navigation/ChallengesNav.js](./src/navigation/ChallengesNav.js)
```js
/* navigation/ChallengesNav.js */

{/* //> Link to absolute path */}
<li><Link to="/challenges/1">Challenge 1</Link></li>

{/* //> Link to relative path */}
<li><Link to="2">Challenge 2</Link></li>

{/* //> Link to relative path using directory-lik navigation */}
<li><Link to='../../'>Back to home</Link></li>
```
###### replace
`replace` is a boolean property that when present (default value is `true`) will replace the previous path -- ***after clicking `<Link>`*** -- in memory. See example below.
```bash
# history before clicking <Link>
/ > /challenges > /challenges/1

# history after clicking <Link> going to /challenges/2
# <Link to='/challenges/2' replace>Challenge 2</Link>
/ > /challenges > /challenges/2

# notice that /challenges/2 replaced /challenges/1 in history
# this means that clicking on the back button will direct the page to /challenges
```
###### reloadDocument
`reloadDocument` is a boolean property that when present (default value is `true`) will reload the entire document.
> Note that reload will reset `state`s not stored (eg. localStorage, sessionStorage, cache, etc.)
###### state
<!-- add a link to special section in page -->
TBD
##### NavLink
`NavLink` is similar to `Link` with more customization.
> All properties available in `<Link>` is available in `<NavLink>`
###### end
`end` is a boolean property that when present (default value is `true`) will only apply the 'active' className if the current path is ***exactly*** as what's specified in the `to` property.
> Common use:
> ```jsx
> <NavLink to='/' end>
>   Home
> </NavLink>
> ```
> If above not used, navigating to any other path will not remove the `active` className in `Home` resulting to multiple `NavLink` appearing as 'active'

> There are multiple ways of styling active `NavLink`s from **inline styles** to using **classNames** creatively, and even creating a [CustomNavLink](./src/navigation/shared/customNavLink.js)
> Refer to [MainNav.js](./src/navigation/MainNav.js) for different styling used
##### Navigate / useNavigation Hook



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

  {/* ... rest of code */}
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
    > Read on [Github](https://github.com/WebDevSimplified/Web-Dev-Simplified-Official-Blog/blob/master/src/pages/2022-07/react-router/index.md)

<div align="right"><sub><a href="#table-of-contents">[ Go to Table of Contents ]</a></sub></div>
