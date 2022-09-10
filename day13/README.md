<!-- omit in toc -->
# 30 Days of React: Day 13 | Uncontrolled Components

<!-- omit in toc -->
## Table of Contents
- [Dev Notes](#dev-notes)
- [Learnings](#learnings)
- [Third Party Resources](#third-party-resources)

### Dev Notes
* [utils](./src/utils/) folder addition
  * [qnaJSON_builder.js](./src/utils/qnaJSON_builder.js) to generate content for level1qna.json
* `getPatternFromRegEx` function in ***customValidation.js*** to extract pattern which can be used in `pattern` attribute of input element

<div align="right">[<a href="#table-of-contents">Go to Table of Contents</a>]</div>

### Learnings
* `pattern` attribute for validating `input` value
  ```jsx
  <input
    type="text"
    name="firstName"
    id="firstName"
    ref={firstName}
    pattern={nameRegEx}
    required
  />
  ```
* naming an imported image asset
```js
import loader from '../assets/bean_eater_animated.svg'

const loadingStyle = {
  height: rem(360),
  width: '100%',
  backgroundImage: `url(${loader})`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'contain',
  backgroundPosition: 'center',
}
```

<div align="right">[<a href="#table-of-contents">Go to Table of Contents</a>]</div>

### Third Party Resources
* [loader.io](https://loader.io) - used for [loader](./src/assets/bean_eater_animated.svg)
* [fakefiller](https://fakefiller.com/) - browser extension that fills form inputs automatically; making form testing faster
* Rest Countries API: https://[restcountries.com](https://restcountries.com)/v3.1/all

<div align="right">[<a href="#table-of-contents">Go to Table of Contents</a>]</div>
