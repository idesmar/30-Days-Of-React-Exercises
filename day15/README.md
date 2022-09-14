<!-- omit in toc -->
# [30 Days of React](../README.md#readme): Day 15 | [Third Party Packages](https://github.com/Asabeneh/30-Days-Of-React/blob/master/15_Third_Party_Packages/15_third_party_packages.md)

<!-- omit in toc -->
## Table of Contents
- [Dev Notes](#dev-notes)
- [Learnings](#learnings)
  - [CSS Modules](#css-modules)
  - [Classnames w/ CSS Modules](#classnames-w-css-modules)
- [Third Party Resources](#third-party-resources)
- [Other References](#other-references)

### Dev Notes
* [CSS reset - version 1.7.3](https://github.com/elad2412/the-new-css-reset) by [@elad2412](https://github.com/elad2412) used
* Packages used prior to Challenge
  * [ ] axios
  * [ ] classnames
  * [ ] lodash
  * [ ] moment
  * [ ] react-icons
  * [ ] reactstrap
  * [x] sass [ scss ] <sub><small>node-sass deprecated</small></sub>
  * [ ] styled-components
  * [ ] uuid
  * [x] validator <sub><small>minimal use in [day12](../day12/README.md#readme)</small></sub>

<div align="right"><sub><a href="#table-of-contents">[ Go to Table of Contents ]</a></sub></div>

### Learnings
#### CSS Modules
* Naming
```
moduleName.module.css
```
* Importing
```js
import moduleName from './moduleName.module.css'
// import altName from './moduleName.module.css'
```
* Destructuring imported style to extract class name/s
```js
const { className1, className2 } = moduleName
```
#### Classnames w/ CSS Modules
to prevent conflict in possible duplicate class names from other css files
> This Button example should be used for ***practicing only*** since it can be easily solved with pure css (ie. `.button:hover`).
```js
import cn from 'classnames'
import cnModule from './cn.module.css'

const Button = () => {
  /*  ... states and eventHandles here */
  const { cnButton, cnButtonHover } = cnModule
  const buttonClasses = cn({
    [cnButton]: true,
    [cnButtonHover]: isHovered,
  })
  return (
    <button className={buttonClasses}>
      Click Me!
    </button>
  )
}
```

<div align="right"><sub><a href="#table-of-contents">[ Go to Table of Contents ]</a></sub></div>

### Third Party Resources
| Package | npm | Website | Github |
|:--------|:----|:--------|:-------|
| axios             | `npm i axios`             | [axios-http.com](https://axios-http.com/docs/intro)                                       | [axios](https://github.com/axios/axios#readme)                                     |
| classnames        | `npm i classnames`        | none                                                                                      | [classnames](https://github.com/JedWatson/classnames#readme)                       |
| lodash            | `npm i lodash`            | [lodash.com](https://lodash.com/)                                                         | [lodash](https://github.com/lodash/lodash#readme)                                  |
| moment            | `npm i moment`            | [momentjs.com](https://momentjs.com/)                                                     | [moment](https://github.com/moment/moment/#readme)                                 |
| react-icons       | `npm i react-icons`       | [react-icons.github.io](https://react-icons.github.io/react-icons)                        | [react-icons](https://github.com/react-icons/#readme)                              |
| reactstrap        | `npm i reactstrap`        | [reactstrap.github.io](https://reactstrap.github.io/?path=/story/home-installation--page) | [reactstrap](https://github.com/reactstrap/reactstrap#readme)                      |
| sass              | `npm i sass`              | [sass-lang.com](https://sass-lang.com/)                                                   | [sass](https://github.com/sass/sass#readme)                                        |
| styled-components | `npm i styled-components` | [styled-components.com](https://styled-components.com/)                                   | [styled-components](https://github.com/styled-components/styled-components#readme) |
| uuid              | `npm i uuid`              | [uuidgenerator.net](https://www.uuidgenerator.net/dev-corner/javascript)                  | [uuidjs](https://github.com/uuidjs/uuid#readme)                                    |
| validator         | `npm i validator`         | none                                                                                      | [validator](https://github.com/validatorjs/validator.js#readme)                    |  |


<div align="right"><sub><a href="#table-of-contents">[ Go to Table of Contents ]</a></sub></div>

### Other References
* [npmjs.com](https://www.npmjs.com/)

<div align="right"><sub><a href="#table-of-contents">[ Go to Table of Contents ]</a></sub></div>
