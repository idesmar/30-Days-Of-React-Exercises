<!-- TODO: create individual markdowns for important packages -->

<!-- omit in toc -->
# [30 Days of React](../README.md#readme): Day 15 | [Third Party Packages](https://github.com/Asabeneh/30-Days-Of-React/blob/master/15_Third_Party_Packages/15_third_party_packages.md)

<!-- omit in toc -->
## Table of Contents
- [Dev Notes](#dev-notes)
- [Learnings](#learnings)
  - [CSS Modules](#css-modules)
    - [Naming](#naming)
    - [Importing](#importing)
    - [Extracting Class Names](#extracting-class-names)
  - [Classnames w/ CSS Modules](#classnames-w-css-modules)
- [Third Party Resources](#third-party-resources)
- [Other References](#other-references)
- [Footnote](#footnote)

### Dev Notes
* [CSS reset - version 1.7.3](https://github.com/elad2412/the-new-css-reset) by [@elad2412](https://github.com/elad2412) used
* Package Knowledge Progress

| Before | After | Package |
|:------:|:-----:|:--------|
| ❌ | ✔️ | axios |
| ❌ | ✔️ | classnames |
| ❌ | ✔️ | css modules <sub><small>react built-in</small></sub> |
| ❌ | ❌ | lodash |
| ❌ | ✔️ | moment |
| ❌ | ✔️ | react-icons |
| ❌ | ❌ | reactstrap |
| ✔️ | ✔️ | sass [ scss ] <sub><small>node-sass deprecated</small></sub> |
| ❌ | ✔️ | styled-components |
| ❌ | ❌ | uuid |
| ✔️ | ✔️ | validator <sub><small>minimal use in [day12](../day12/README.md#readme)</small></sub> |

<div align="right"><sub><a href="#table-of-contents">[ Go to Table of Contents ]</a></sub></div>

### Learnings
#### CSS Modules
##### Naming
```
moduleName.module.css
```
##### Importing
```js
/* class/es will be extracted */
import moduleName from './moduleName.module.css'

/* using an alternative name */
import altName from './moduleName.module.css'

/* direct import (not extracting class/es) */
import './moduleName.module.css'
```
##### Extracting Class Names
```js
/* Destructuring imported style to extract class name/s */
const { className1, className2 } = moduleName
```
#### Classnames w/ CSS Modules
To prevent conflict in possible duplicate class names from other css files
> * Button example should be used for ***practicing only*** because it can be easily solved with pure css (ie. `.button:hover`).
> * Example can be found in [ClassNamesModuleEx](./src/ClassNamesModuleEx/CnModuleEx.js)
```js
import cn from 'classnames'
import cnModule from './cn.module.css'

const Button = () => {
  /*  ... states and eventHandlers here */
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
<!-- cspell:disable -->
| Package | Size <sup><a href="#1">[1]</a></sup> | npm | Website | Github |
|:--------|-------------------------------------:|:----|:--------|:-------|
| axios | 38.7k | `npm i axios` | [axios-http.com](https://axios-http.com/docs/intro) | [axios](https://github.com/axios/axios#readme) |
| classnames | 1.2k | `npm i classnames` | none | [JedWatson/classnames](https://github.com/JedWatson/classnames#readme) |
| lodash | --- | `npm i lodash` | [lodash.com](https://lodash.com/) | [lodash](https://github.com/lodash/lodash#readme) |
| moment <sup>[[2]](#2)</sup> | 61.0k | `npm i moment` | [momentjs.com](https://momentjs.com/) | [moment](https://github.com/moment/moment#readme) |
| react-icons | ??? <sup>[[3]](#3)</sup> | `npm i react-icons` | [react-icons.github.io](https://react-icons.github.io/react-icons) | [react-icons](https://github.com/react-icons/react-icons#readme) |
| reactstrap | --- | `npm i reactstrap` | [reactstrap.github.io](https://reactstrap.github.io) | [reactstrap](https://github.com/reactstrap/reactstrap#readme) |
| sass | --- | `npm i sass` | [sass-lang.com](https://sass-lang.com/) | [sass](https://github.com/sass/sass#readme) |
| styled-components | 33.0k | `npm i styled-components` | [styled-components.com](https://styled-components.com/) | [styled-components](https://github.com/styled-components/styled-components#readme) |
| uuid | ??? <sup>[[3]](#3)</sup> | `npm i uuid` | [uuidgenerator.net](https://www.uuidgenerator.net/dev-corner/javascript) | [uuidjs](https://github.com/uuidjs/uuid#readme) |
| validator | ??? <sup>[[3]](#3)</sup> | `npm i validator` | none | [validatorjs](https://github.com/validatorjs/validator.js#readme) |
<!-- cspell:enable -->

<div align="right"><sub><a href="#table-of-contents">[ Go to Table of Contents ]</a></sub></div>

### Other References
* [import cost](https://github.com/wix/import-cost) to determine size of imported package <sup id="1">[1]</sup>
* ***moment*** display format [reference](https://momentjs.com/docs/#/displaying/) <sup id="2">[2]</sup>
* [npmjs.com](https://www.npmjs.com/)

<div align="right"><sub><a href="#table-of-contents">[ Go to Table of Contents ]</a></sub></div>

### Footnote
* import cost for some packages are dependent on the module/variable being imported; reason for ***???*** mark <sup id="3">[3]</sup>
  > also, majority are relatively small

<div align="right"><sub><a href="#table-of-contents">[ Go to Table of Contents ]</a></sub></div>
