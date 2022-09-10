/* // sorta based from
  https://stackoverflow.com/questions/1349404/generate-random-string-characters-in-javascript
*/

const makeID = (len = 8) => {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  return Array(len).fill()
    .map(() => chars[Math.floor(Math.random() * chars.length)])
    .join('')
}

export default makeID
