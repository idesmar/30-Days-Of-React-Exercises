<!-- TODO: create individual markdowns for important packages -->

<!-- omit in toc -->
# [30 Days of React](../README.md#readme): Day 15 | [Third Party Packages](https://github.com/Asabeneh/30-Days-Of-React/blob/master/15_Third_Party_Packages/15_third_party_packages.md#readme)

<!-- omit in toc -->
## Table of Contents
- [Dev Notes](#dev-notes)
- [Learnings](#learnings)
  - [CSS Modules](#css-modules)
    - [Naming](#naming)
    - [Importing](#importing)
    - [Extracting Class Names](#extracting-class-names)
  - [Classnames w/ CSS Modules](#classnames-w-css-modules)
  - [MomentJS Alternatives](#momentjs-alternatives)
  - [UUID](#uuid)
- [Third Party Resources](#third-party-resources)
- [Other References](#other-references)
- [Footnote](#footnote)

### Dev Notes
* [CSS reset - version 1.7.3](https://github.com/elad2412/the-new-css-reset) by [@elad2412](https://github.com/elad2412) used
* Package Knowledge Progress

| Before | After | Package <sup>[[resources]](#third-party-resources)</sup> |
|:------:|:-----:|:-----------------------------------------------------------|
| ❌ | ✔️ | axios |
| ❌ | ✔️ | classnames |
| ❌ | ✔️ | css modules <sub><small>react built-in</small></sub> |
| ❌ | ❌ | lodash |
| ❌ | ✔️ | moment |
| ❌ | ✔️ | react-icons |
| ❌ | ❌ | reactstrap |
| ✔️ | ✔️ | sass [ scss ] <sub><small>node-sass deprecated</small></sub> |
| ❌ | ✔️ | styled-components |
| ❌ | ✔️ | uuid |
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
#### MomentJS Alternatives
<!-- cspell:disable -->
| Package <sup>[[read]](#f2)</sup> | Size <sup>[[r1]](#r1)</sup> | Installation | Website | Github |
|:------------------------------|------------------------:|:----|:--------|:-------|
| date-fns <sup>🌟</sup>| --- | `npm i date-fns` | [date-fns.org](https://date-fns.org/) | [date-fns](https://github.com/date-fns/date-fns#readme) |
| dayjs <sup>🌟</sup>| --- | `npm i dayjs` | [dayjs.org](https://day.js.org/) | [iamkun/dayjs](https://github.com/iamkun/dayjs#readme) |
| luxon | --- | `npm i luxon` | [moment.github.io/luxon](https://moment.github.io/luxon/#/) | [moment/luxon](https://github.com/moment/luxon/#readme) |

> 🌟<small>Preferred! Try applying on succeeding projects!</small>
#### UUID
* UUID - Universally Unique Identifier (Internet Open Standard)
* GUID - Globally Unique Identifier (Microsoft Standaard)

| Version | Reference                                       |
| :-----: | :---------------------------------------------- |
|   v1    | date-time and MAC address                       |
|   v2    | date-time and MAC address, DCE security version |
|   v3    | name-based namespace (MD5 hashing)              |
|   v4    | random                                          |
|   v5    | name-based namespace (SHA-1 hashing)            |

> [Read More about UUIDs](#f3)

<div align="right"><sub><a href="#table-of-contents">[ Go to Table of Contents ]</a></sub></div>

### Third Party Resources
| Package | Size <sup>[[r1]](#r1)</sup> | Installation | Website | Github |
|:--------|------------------------------:|:-------------|:--------|:-------|
| axios | 38.7k | `npm i axios` | [axios-http.com](https://axios-http.com/docs/intro) | [axios](https://github.com/axios/axios#readme) |
| classnames | 1.2k | `npm i classnames` | none | [JedWatson/classnames](https://github.com/JedWatson/classnames#readme) |
| lodash | --- | `npm i lodash` | [lodash.com](https://lodash.com/) | [lodash](https://github.com/lodash/lodash#readme) |
| moment <sup>[[r2]](#r2)</sup> | 61.0k <sup>[[f2]](#f2)</sup> | `npm i moment` | [momentjs.com](https://momentjs.com/) | [moment](https://github.com/moment/moment#readme) |
| react-icons | ??? <sup>[[f1]](#f1)</sup> | `npm i react-icons` | [react-icons.github.io](https://react-icons.github.io/react-icons) | [react-icons](https://github.com/react-icons/react-icons#readme) |
| reactstrap | --- | `npm i reactstrap` | [reactstrap.github.io](https://reactstrap.github.io) | [reactstrap](https://github.com/reactstrap/reactstrap#readme) |
| sass | --- | `npm i sass` | [sass-lang.com](https://sass-lang.com/) | [sass](https://github.com/sass/sass#readme) |
| styled-components | 33.0k | `npm i styled-components` | [styled-components.com](https://styled-components.com/) | [styled-components](https://github.com/styled-components/styled-components#readme) |
| uuid | ??? <sup>[[f1]](#f1)</sup> | `npm i uuid` | [uuidgenerator.net](https://www.uuidgenerator.net/dev-corner/javascript) | [uuidjs](https://github.com/uuidjs/uuid#readme) |
| validator | ??? <sup>[[f1]](#f1)</sup> | `npm i validator` | none | [validatorjs](https://github.com/validatorjs/validator.js#readme) |
<!-- cspell:enable -->

<div align="right"><sub><a href="#table-of-contents">[ Go to Table of Contents ]</a></sub></div>

### Other References
* [import cost](https://github.com/wix/import-cost) to determine size of imported package <sup id="r1">[r1]</sup>
* ***moment*** display format [reference](https://momentjs.com/docs/#/displaying/) <sup id="r2">[r2]</sup>
* [npmjs.com](https://www.npmjs.com/)

<div align="right"><sub><a href="#table-of-contents">[ Go to Table of Contents ]</a></sub></div>

### Footnote
* import cost for some packages are dependent on the module/variable being imported; reason for ***???*** mark <sup id="f1">[f1]</sup>
  > also, majority are relatively small
* use of momentjs is being discouraged due to its size -- [tree shaking](https://developer.mozilla.org/en-US/docs/Glossary/Tree_shaking) or removal of dead code is not supported. Read similar blogs: <sup id="f2">[f2]</sup>
  * [Why you shouldn't use momentjs](https://inventi.studio/en/blog/why-you-shouldnt-use-moment-js)
  * [Best momentjs alternatives](https://medium.com/swlh/best-moment-js-alternatives-5dfa6861a1eb)
* [UUID](https://en.wikipedia.org/wiki/Universally_unique_identifier) blogs: <sup id="f3">[f3]</sup>
  * [What are UUIDs and should you use them?](https://blog.boot.dev/clean-code/what-are-uuids-and-should-you-use-them/)
  * [Which UUID to use?](https://stackoverflow.com/questions/20342058/which-uuid-version-to-use)
  * [Do you really need a UUID?](https://rclayton.silvrback.com/do-you-really-need-a-uuid-guid)

<div align="right"><sub><a href="#table-of-contents">[ Go to Table of Contents ]</a></sub></div>
