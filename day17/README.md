<!-- NOTE: Link to TOC at the end of every h2 (##) and h3 (###) -->

<!-- omit in toc -->
# [30 Days of React](../README.md#readme): Day 17 | [React Router](https://github.com/Asabeneh/30-Days-Of-React/blob/master/17_React_Router/17_react_router.md#readme)

<hr/>
<details id="toc">
  <summary style='cursor: pointer;'>Click for Table of Contents</summary>

<!-- omit in toc -->
## Table of Contents
- [Dev Notes](#dev-notes)
- [Learnings](#learnings)
  - [Routing](#routing)
    - [Basic Router Structure](#basic-router-structure)
    - [Nested `Route`'s](#nested-routes)
    - [Dynamic Routing / useParams Hook](#dynamic-routing--useparams-hook)
    - [Routing Priority](#routing-priority)
    - [Multiple `Routes`'s](#multiple-routess)
      - [Separate `Routes`'s](#separate-routess)
      - [Nested `Routes`'s](#nested-routess)
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
      - [state --> useLocation Hook](#state----uselocation-hook)
    - [NavLink](#navlink)
      - [end](#end)
    - [Navigate / useNavigate Hook](#navigate--usenavigate-hook)
    - [Navigation Component props Comparison](#navigation-component-props-comparison)
  - [Data Passing](#data-passing)
  - [CSS Modules](#css-modules)
- [Third Party Resources](#third-party-resources)
  - [Packages Used](#packages-used)
  - [React Router v6 Learning Material](#react-router-v6-learning-material)
</details>
<hr/>

## Dev Notes
* Since the [original source](https://github.com/Asabeneh/30-Days-Of-React/blob/master/17_React_Router/17_react_router.md#readme) material is outdated (react-router-dom@4) and the current version is at v6, an [external source](#react-router-v6-learning-material) material is used for this sub-repo.
* Created a [CustomNavLink](./src/navigation/shared/customNavLink.js) based on code snippet from [react-router official docs](https://reactrouter.com/en/main/components/nav-link).
* [CSS reset - version 1.7.3](https://github.com/elad2412/the-new-css-reset) by [@elad2412](https://github.com/elad2412) used
* included ***experimental*** [chromiumAutofill.css](./src/styles/chromiumAutofill.css) <sup>[w/ notes & attribution]</sup> to ***mask*** autofill style in chromium. <small>(Default style cannot be reset/sanitize and can only be masked or delay effect)</small>
* used ***experimental*** :has() selector in [navigation.module.css](./src/navigation/shared/navigation.module.css)
  ```css
  /* apply declaration block to div if it contains a ".sideNav" element
    (note: .sideNav has float: left; declaration) */
  div:has(.sideNav) {
    display: flow-root;
  }
  ```
* added `getTimestamp` function in [utils/misc.js](./src/utils/misc.js) to help with time-tracking
* started returning a cleanup function to ensure that enclosed function in `useEffect` is ran only once
  > Based on observation:
  > * the returned cleanup function catches up with the operation from the 1st run of `useEffect`, then cancels that operation
  > * the operation from the 2nd run of `useEffect` persists and is used to update relevant data

  > Code snippet from [NavigateSample](./src/pages/Navigate.js) component
  ```js
  /* pages/Navigate.js */
    useEffect(() => {
      const interval = setInterval(() => setCountdown(prev => --prev), 1000)
      /* cleanup function */
      return () => clearInterval(interval)
    }, [])
  ```
  > Code snippet from [Level1](./src/pages/Exercises/Level1.js) component
  ```js
  /* pages/Exercises/Level1.js */
    useEffect(() => {
      const URL = '../data/level1qna.json'
      const controller = new AbortController()
      const fetchData = async () => {
        try {
          const res = await fetch(URL, { signal: controller.signal })
          const data = await res.json()
          setQna(prev => data)
        } catch (err) {
          console.log(err)
        }
      }
      fetchData()

      /* cleanup function */
      return () => controller.abort('Run only once')
    }, [])
  ```

<div align="right"><sub><a href="#toc">[ Go to Table of Contents ]</a></sub></div>

## Learnings

### Routing

#### Basic Router Structure
```js
/* index.js */
<BrowserRouter>
  <App />
</BrowserRouter>
```
```js
/* App.js */
<Container>
  <NavigationComponent />
  <RoutesLogic />
</Container>
```
> Code structure in `App.js` can be replicated at lower levels (not root) but with the explicit rule of the **parent** `Route` `path` having ***trailing*** `/*` -- to connect/relate it with its **child** `Routes` (ie. `<RoutesLogic />`)
>
> Example:
> ```js
> /* parent `Route` */
> {
>   path: 'blog/*',    /* notice trailing marker */
>   element: <BlogRoutesLogic />
> }
> ```
> ```js
> /* child `Routes` || `<RoutesLogic />` */
> {
>   path: '/',    /* this line can be removed */
>   children: [
>     {
>       index: true,
>       element: <Blog />
>     },
>     {
>       path: '2022-10-13',
>       element: <Blog20221013 />
>     },
>   ]
> }
> ```
#### Nested `Route`'s
```js
<Route path="/">
  <Route index element={<Home />} />
  <Route path="contact" element={<ContactMe />} />
</Route>
```
#### Dynamic Routing / useParams Hook
Can be viewed by going to `{baseURL}/challenges/:id`

> Code snippet from [OtherChallenges](./src/pages/Challenges.js) component
```js
const { id } = useParams()
/* no argument required in useParams */
```
#### Routing Priority
> Code snippet from [routes/NavRoutes.js](./src/routes/NavRoutes.js)
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
  </Route>
</Routes>
```
#### Multiple `Routes`'s
##### Separate `Routes`'s
Allow multiple `Routes` to be rendered at the same time
> **WARNING**
> * ***Try to avoid*** and use layout with `Context` instead
> * [routes/BlogRoutes.js](./src/routes/BlogRoutes.js) which is used as an example in this section is currently ***NOT being imported*** in the main navigation file: [routes/NavRoutes](.src/../src/routes/NavRoutes.js).
> * The code sample works when navigating through the UI, however, a console warning is displayed when current location does not match the specified path
> ```bash
> # Console Warning
> No routes matched location "/[insert current pathName if not root path]"
> ```
```js
/* routes/BlogRoutes.js */
{/* Pass '/blog' to `location` props of `Routes` ie. `<Routes location="/blog">` to show `<BlogNav />` in all pages */}
<Routes>

  {/* display BlogNav only if in path /blog, /blog/1, /blog/2 etc */}
  <Route path="/blog/*" element={<BlogNav />} />
</Routes>
```
##### Nested `Routes`'s
To help clean up code, especially if there are many `Route`s, `Route`s that have a similar `path` can be placed in a different file and imported in main `<Routes>`.
> Code snippet from [routes/UpdatesRoutes.js](./src/routes/UpdatesRoutes.js)
```js
/* routes/UpdatesRoutes.js */

{/* NOTICE that the child `<Route>`s have relative paths to "updates"
  This is because the PARENT path is declared in the main <Route> in NavRoutes.js */}
<Routes>
  <Route element={<UpdatesLayout />}>
    <Route index element={<Updates />} />
    <Route path="1" element={<Updates1/>} />
    <Route path="2" element={<Updates2/>} />
  </Route>
</Routes>
```
> Code snippet from [routes/NavRoutes.js](./src/routes/NavRoutes.js)
```js
/* routes/NavRoutes.js */

  {/* NOTICE how path is written with trailing "/*"
      this is to cover other paths contained in "updates"
      that are being imported from routes/UpdatesRoutes.js */}
  <Route path="updates/*" element={<UpdatesRoutes />} />
```
#### useRoutes Hook
Instead of using JSX, an array of Javascript Objects representing the logic of what element to display/render can be used as an argument to `useRoutes()` hook. Using this method can remove ***repetition*** like writing the template for `Route` ie. `<Route />`
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

<div align="right"><sub><a href="#toc">[ Go to Table of Contents ]</a></sub></div>

### Not Found
Use `path="*"` for any routes/page that do not match the existing declared routes
```js
{/* At the same level as path="/" or one level below if nested inside
  Unless a different and more specific NotFound element is needed */}
<Route path="*" element={<NotFound />} />
```

<div align="right"><sub><a href="#toc">[ Go to Table of Contents ]</a></sub></div>

### Outlet

#### Outlet / Shared Layouts
* Layouts can be shared by passing a ***layout component*** to ***parent*** `Route`'s `element`.
* Ensure that the ***layout component*** has an `<Outlet>` inside that will serve as a ***placeholder*** for the `children` `<Route>`s.
> Code snippet from [layouts/ChallengesLayout.js](./src/layouts/ChallengesLayout.js)
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
> Code snippet from [routes/navRoutes.js](./src/routes/NavRoutes.js)
```js
/* routes/NavRoutes.js */

{/* ChallengesLayout passed as element on parent route to display layout */}
<Route path="challenges" element={<ChallengesLayout />}>
  <Route index element={<Challenges />} />
  <Route path="1" element={<Challenge1 />} />
  <Route path="2" element={<Challenge2 />} />
  <Route path=":id" element={<OtherChallenges />} />
</Route>
```
##### With Common Path
**Nested `Route`'s** that have a **common path** can share a layout by passing the layout component to the *Parent* `Route`'s `element` attribute.
> Code snippet from [routes/NavRoutes.js](./src/routes/NavRoutes.js)
```js
<Route path="challenges" element={<ChallengesLayout />}>
  <Route index element={<Challenges />} />
  <Route path="1" element={<Challenge1 />} />
  <Route path="2" element={<Challenge2 />} />
  <Route path=":id" element={<OtherChallenges />} />
</Route>
```
##### No Common Path
Sharing a layout between `Route`'s that have **NO common path** can be done by wrapping the Routes in a *Parent* `Route` that has ***NO PATH*** with the ***layout component*** as the `element` value.
> Code snippet from [routes/NavRoutes.js](./src/routes/NavRoutes.js)
```js
{/* PARENT `Route` should not have a path property because the enclosed `Route`s do not share a common path */}
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
#### Context / useOutletContext Hook
* `context` property allows data to be passed from ***layout component*** where `Outlet` is declared.
  > Code snippet from [layouts/ChallengesLayout.js](./src/layouts/ChallengesLayout.js)
  ```js
  /* layouts/ChallengesLayout.js */
  <Outlet context={{ name, click }} />
  ```
* `useOutletContext` hook is used to extract the `context` object from `Outlet`.
  > Code snippet from [pages/Challenges.js](./src/pages/Challenges.js)
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

<div align="right"><sub><a href="#toc">[ Go to Table of Contents ]</a></sub></div>

### Navigation

#### Link
`Link` is the simplest form of navigation. Underneath, this is a simple anchor tag. <br/>
Below are the properties available in `<Link>`
##### to
Accepts the path where to redirect. The path can either be one of the ff:
* **absolute path**
* **relative path**
  * appending the path to the current path displayed
  * using directory-like navigation eg. `./` or `../`
> Code snippet from [navigation/ChallengesNav.js](./src/navigation/ChallengesNav.js)
```js
/* navigation/ChallengesNav.js */

{/* //> Link to absolute path */}
<li><Link to="/challenges/1">Challenge 1</Link></li>

{/* //> Link to relative path */}
<li><Link to="2">Challenge 2</Link></li>

{/* //> Link to relative path using directory-lik navigation */}
<li><Link to='./'>Challenges main</Link></li>
<li><Link to='../'>Back to home</Link></li>
```
##### replace
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
##### reloadDocument
`reloadDocument` is a boolean property that when present (default value is `true`) will reload the entire document.
> Note that reload will reset `state`s not stored (eg. localStorage, sessionStorage, cache, etc.)
##### state --> useLocation Hook
* `state` can be passed from one path to another and can be accessed using `useLocation`
  ```js
  const location = useLocation()
  ```
* `useLocation` hook returns a location object (based on the URL)
  ```js
  {
    hash: "",
    key: "",
    pathname: "/",
    search: "",
    state: null
  }
  ```
#### NavLink
`NavLink` is similar to `Link` with more customization.
> All properties available in `<Link>` is available in `<NavLink>` plus `end`
##### end
`end` is a boolean property that when present (default value is `true`) will only apply the 'active' className if the current path is ***exactly*** as what's specified in the `to` property.
> Common use:
> ```jsx
> <NavLink to='/' end>
>   Home
> </NavLink>
> ```
> If above not used, navigating to any other path will not remove the `active` className in `Home` resulting to multiple `NavLink` appearing as 'active'

> There are multiple ways of styling active `NavLink`s from **inline styles** to using **classNames** creatively, and even creating a [CustomNavLink](./src/navigation/shared/customNavLink.js)
> Refer to [navigation/MainNav.js](./src/navigation/MainNav.js) for different styling used
#### Navigate / useNavigate Hook
* `Navigate` is a component that when rendered will automatically redirect the page
* `useNavigate` hook returns a function that can be used to redirect page
  ```js
  const navigate = useNavigate()

  /**
    * @params to: To ("pathName"), options?: {replace: boolean, state: any}
    * @params delta: number
    * ! if delta param used, options?: {state: any} will not be passed
      This is because state is tied in with `location`
      TRY: `const location = useLocation()` and console.log for more visual */
  navigate('/pathName', {})
  ```
  * function from `useNavigate()` accepts 2 parameters:
    * `to` which is the path where to navigate to or `delta` which is a numerical representation of the location to go to based on history (eg. `-1` for going 1 location back)
    * an object that stores `replace` : boolean and/or `state`

#### Navigation Component props Comparison
> |                   |  to   | replace | reloadDocument | state |  end  |
> | :---------------- | :---: | :-----: | :------------: | :---: | :---: |
> | **Link**          |  ✅  |   ✅   |       ✅       |  ✅  |  ◼️  |
> | **NavLink**       |  ✅  |   ✅   |       ✅       |  ✅  |  ✅  |
> | **Navigate** [^n] |  ✅  |   ✅   |       ◼️       |  ✅  |  ◼️  |

[^n]: Function from `useNavigate` also shares this. ie `navigate` generated from `useNavigate`

<div align="right"><sub><a href="#toc">[ Go to Table of Contents ]</a></sub></div>

### Data Passing
It is possible to pass data using `react-router-dom` as seen in previous sections. Here is a quick recap on how data can be passed.
* `useParams` in [Dynamic Routing / useParams Hook](#dynamic-routing--useparams-hook) -- id/endpoint can be passed to Dynamic Component. eg `const { id } = useParams()`
* `useOutletContext` in [Context / useOutletContext Hook](#context--useoutletcontext-hook) -- data from Layout can be passed to outlet by passing data *(type: any)* to `context` props of `Outlet`
* `Link`, `NavLink` and `Navigate` / `useNavigate` in [Navigation](#navigation) -- data can be maid available to next location/route by passing data to component's `state` props or `options?` param of function generated from `useNavigate`. eg `navigate('/', { replace, state })`.
  > `state` can be retrieved in new location by using `useLocation`. Look back in [state --> useLocation Hook](#state----uselocation-hook)
* `useSearchParams` which looks similar to `useState` allows query to be displayed in the URL
  > Code snippet from [layouts/LiveSearchLayout.js](./src/layouts/LiveSearchLayout.js)
  ```js
  const LiveSearchLayout = () => {
    const [searchParams, setSearchParams] = useSearchParams({ q: '' })
    const [resData, setResData] = useState({
      prop1: '',
      prop2: '',
    })

    const search = searchParams.get('q')
    const handleSearchChange = (e) => {
      const { value } = e.target
      setSearchParams(prev => ({ ...prev, q: value }))

      /* fake data fetching */
      const resFromFakeReactQuery = fakeReactQuery(value)
      setResData(prev => ({...prev, prop1: 'resFromFakeReactQuery', prop2: resFromFakeReactQuery }))
    }
  }
  ```

<div align="right"><sub><a href="#toc">[ Go to Table of Contents ]</a></sub></div>

### CSS Modules
* Parent class (style) can be used to style child elements. Example can be found in [App.module.css](./src/App.module.css) and [App.js](./src/App.js)
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
* Top level ***element*** styles have precedence over lower level ***element** styles
  > element selector in Parent module takes precedence over Child module
  > `p { color: black; }` in `App.module.css` overrides `p { color: red; }` in `component.module.css`

<div align="right"><sub><a href="#toc">[ Go to Table of Contents ]</a></sub></div>

## Third Party Resources

### Packages Used
<!-- cspell:disable -->
| Package          | Installation             | Website                                     | Github                                                                     |
| :--------------- | :----------------------- | :------------------------------------------ | :------------------------------------------------------------------------- |
| react router dom | `npm i react-router-dom` | [reactrouter.com](https://reactrouter.com/) | [remix-run/react-router](https://github.com/remix-run/react-router#readme) |
<!-- cspell:enable -->

### React Router v6 Learning Material
[Ultimate React Router v6 Guide](https://blog.webdevsimplified.com/2022-07/react-router/) by [Web Dev Simplified](https://twitter.com/DevSimplified)
> Read on [Github](https://github.com/WebDevSimplified/Web-Dev-Simplified-Official-Blog/blob/master/src/pages/2022-07/react-router/index.md)

<div align="right"><sub><a href="#toc">[ Go to Table of Contents ]</a></sub></div>
