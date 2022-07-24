
### 404 on flags URL in provided data
Solution taken:
* Used [https://restcountries.com](https://restcountries.com) only for fetching flags .svg and the rest from default data provided. decision made to utilize the default data and minimize the size of data being requested from API.\
```javascript
const url = `https://restcountries.com/v3.1/name/${name.toLowerCase()}`

fetchFlag(url).catch(() => console.log(`Error fetching from ${url}`))
```
* Done by using fetch API accompanied with `{ useState, useEffect } from 'react'`\