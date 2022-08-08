# 30 Days of React: Day 08 | States

### Dev Notes
* [CSS reset - version 1.7.2](https://github.com/elad2412/the-new-css-reset) by [@elad2412](https://github.com/elad2412) used
* Styling done mostly inline (javascript)
* Q&A incorporated to CRA page using [level1qna.js](./src/data/level1qna.js)
* Added a custom function *hasCode.js* to personal library
* Utilized **hooks** on functional components:\
`useState` and `useEffect`  for fetching flags .svg

### 404 on flags URL in provided data
Solution:
* Used [https://restcountries.com](https://restcountries.com) to fetch flags .svg and used a default image if flag cannot be found due to country name difference (data name and fetch url path).
```javascript
const url = `https://restcountries.com/v3.1/name/${name.toLowerCase()}`

fetchFlag(url).catch(() => console.log(`Error fetching from ${url}`))
```
* Done by using fetch API accompanied with `{ useState, useEffect } from 'react'`\