/** //> Build basic QNA json using an array of questions
 * run code below
   node [this_file_name]
 * copy the printed text in the console and paste to your json file
 * make sure that copied text was not wrapped; should be in one line only
 * format JSON document with default JSON language feature
 */

const questionsArr = [
  'What is a controlled input?',
  'What is an uncontrolled input?',
  'How do you get a content of a certain HTML element in React?',
  'Why it is not a good idea to touch the DOM directly in React?',
  'What is most frequently used in React? Controlled or Uncontrolled input?',
  'What do you need to write uncontrolled input?',
  'Does state require to write uncontrolled input?',
  'When do you use uncontrolled input?',
  'When do you use controlled input?',
  'Do you use a controlled or uncontrolled input to validate form input fields?'
]
/* //> making use of thisArg object in array.prototype.map */
const buildQNA2 = (arr = []) => {

  return arr.map(function (q, qIdx) {
    const temp = { ...this }
    temp._id = 'q' + ++qIdx
    temp.question = q
    return temp
  }, { _id: '', question: '', answer: '' })

  /* ONLY USE ARROW FUNCTION version if running in node
  NOTE: if this is ran in the browser, `this` will refer to the window object
  return arr.map((question, qIdx) => {
    const temp = { ...this }
    temp._id = 'q' + ++qIdx
    temp.question = question
    return temp
  }, { _id: '', question: '', answer: '' })
  */
}

const qnaObject = buildQNA2(questionsArr)
const stringifiedQNA = JSON.stringify(qnaObject)

console.log(stringifiedQNA)


/* ////////////////////////
  OTHER APPROACHES BELOW
//////////////////////// */

/* //* using a class
class BuildQna {
  constructor(arr) {
    this.arr = arr
  }
  print() {
    const arr = this.arr
    const obj = arr.map(function (q, qIdx) {
      const temp = { ...this }
      temp._id = 'q' + ++qIdx
      temp.question = q
      return temp
    }, { _id: '', question: '', answer: '' })

    console.log(JSON.stringify(obj))
  }
}

const buildQna = new BuildQna(questionsArr)
buildQna.print()
*/

/* //* using a template variable
const buildQNA = (arr = []) => {
  const template = {
    _id: '',
    question: '',
    answer: ''
  }

  return arr.map((q, qIdx) => {
    const copyTemplate = { ...template }
    copyTemplate._id = 'q' + ++qIdx
    copyTemplate.question = q
    return copyTemplate
  })
}
const qnaObject = buildQNA(questionsArr)
const stringifiedQNA = JSON.stringify(qnaObject)
console.log(stringifiedQNA)
*/

/* //* binding a template object to a callback function in array.prototype.map
const buildQNA3 = (arr = []) => {
  function builder(q, qIdx) {
    const temp = { ...this }
    temp._id = 'q' + ++qIdx
    temp.question = q
    return temp
  }
  return arr.map(builder.bind({ _id: '', question: '', answer: '' }))
}
const qnaObject = buildQNA3(questionsArr)
const stringifiedQNA = JSON.stringify(qnaObject)
console.log(stringifiedQNA)
*/
