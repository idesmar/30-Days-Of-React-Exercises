<!-- omit in toc -->
# [30 Days of React](../README.md#readme): Day 17 | [React Router](https://github.com/Asabeneh/30-Days-Of-React/blob/master/17_React_Router/17_react_router.md#readme)

<!-- omit in toc -->
## Table of Contents
- [Dev Notes](#dev-notes)
- [Learnings](#learnings)
- [Third Party Resources](#third-party-resources)
  - [Packages Used](#packages-used)
  - [React Router v6 Learning Material](#react-router-v6-learning-material)
- [Other References](#other-references)

### Dev Notes
* [CSS reset - version 1.7.3](https://github.com/elad2412/the-new-css-reset) by [@elad2412](https://github.com/elad2412) used

<div align="right"><sub><a href="#table-of-contents">[ Go to Table of Contents ]</a></sub></div>

### Learnings
* Different Routing
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
  * [ ] Routing Priority
  * [ ] Multiple Routes
  * [ ] useRoutes Hook

<div align="right"><sub><a href="#table-of-contents">[ Go to Table of Contents ]</a></sub></div>

### Third Party Resources

#### Packages Used
<!-- cspell:disable -->
| Package | Installation | Website | Github |
|:--------|:-------------|:--------|:-------|
| react router dom | `npm i react-router-dom` | [reactrouter.com](https://reactrouter.com/) | [remix-run/react-router](https://github.com/remix-run/react-router#readme)
<!-- cspell:enable -->

<div align="right"><sub><a href="#table-of-contents">[ Go to Table of Contents ]</a></sub></div>

#### React Router v6 Learning Material
  * [Ultimate React Router v6 Guide](https://blog.webdevsimplified.com/2022-07/react-router/) by [Web Dev Simplified](https://twitter.com/DevSimplified)

<div align="right"><sub><a href="#table-of-contents">[ Go to Table of Contents ]</a></sub></div>

### Other References
*

<div align="right"><sub><a href="#table-of-contents">[ Go to Table of Contents ]</a></sub></div>
