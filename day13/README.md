<!-- omit in toc -->
# 30 Days of React: Day 13 | Uncontrolled Components

<!-- omit in toc -->
## Table of Contents
- [Dev Notes](#dev-notes)
- [Learnings](#learnings)

### Dev Notes
* [utils](./src/utils/) folder addition
  * [qnaJSON_builder.js](./src/utils/qnaJSON_builder.js) to generate content for level1qna.json

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
