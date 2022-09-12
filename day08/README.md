<!-- omit in TOC -->
# [30 Days of React](../README.md#readme): Day 08 | [States](https://github.com/Asabeneh/30-Days-Of-React/blob/master/08_Day_States/08_states.md)

<!-- omit in TOC -->
## Table of Contents
- [Dev Notes](#dev-notes)
- [Encountered Error](#encountered-error)

### Dev Notes
* [CSS reset - version 1.7.2](https://github.com/elad2412/the-new-css-reset) by [@elad2412](https://github.com/elad2412) used
* Styling done mostly inline (javascript)
* Q&A incorporated to CRA page using [level1qna.js](./src/data/level1qna.js)
* Added a custom function *hasCode.js* to personal library
* Utilized **hooks** on functional components:\
`useState` and `useEffect`  for fetching flags .svg

<div align="right"><sub><a href="#table-of-contents">[ Go to Table of Contents ]</a></sub></div>

### Encountered Error
* **Error**:
  * 404 on flags URL in data provided
* **Solution**:
  * Used [https://restcountries.com](https://restcountries.com) to fetch flags .svg and used a default image if flag cannot be found due to country name difference (data name and fetch url path)
  ```javascript
  const url = `https://restcountries.com/v3.1/name/${name.toLowerCase()}`

  fetchFlag(url).catch(() => console.log(`Error fetching from ${url}`))
  ```
  * Done by using fetch API accompanied with `{ useState, useEffect } from 'react'`

<div align="right"><sub><a href="#table-of-contents">[ Go to Table of Contents ]</a></sub></div>
