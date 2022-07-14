import makeID from "../lib/makeID"

const lev1qna = [
  {
    ques: 'Why you need to map an array?',
    ans: 'Mapping an array is done to make the code concise and DRY; and to enclose the array elements in a JSX Element (and/or use its destructured parts into child JSX elements)'
  },
  {
    ques: 'Why we need keys during mapping an array?',
    ans: 'Keys are needed so React can track if an element has been added, changed, or removed. This means that keys should be unique to each element.'
  },
  {
    ques: 'What is the importance of destructuring your code?',
    ans: 'Destructuring creates a *hard copy* and *prevents mutation* of the original data. Also, destructuring makes the code cleaner and easier to understand. ie non-use of props.propertyName in different parts of the code.'
  },
  {
    ques: 'Does destructuring make your code clean and easy to read?',
    ans: 'Yes, destructuring makes the code DRY and very understandable.'
  },
]

/* // > destructured el --> {...el} creates a HARD COPY and prevents mutation of el
  Object.assign(target, ...sources) returns the target object combined with ...sources */
const qna = lev1qna.map(el => Object.assign({ ...el }, { _id: makeID() }))

export default qna