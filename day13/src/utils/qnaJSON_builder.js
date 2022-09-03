/** //> Build basic QNA json using an array of questions
 * run code below
   node [this_file_name]
 * copy the printed text in console and paste to your json file
 * make sure that copied text was not wrapped; should be one line
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

/* using a class
class BuildQna {
  constructor(arr) {
    this.arr = arr
  }
  print() {
    const arr = this.arr
    const obj = arr.map(function (question) {
      const temp = { ...this }
      temp.question = question
      return temp
    }, { question: '', answer: '' })

    console.log(obj)
  }
}

const buildQna = new BuildQna(questionsArr)
buildQna.print()
*/

/* using a template variable
const buildQNA = (arr = []) => {
  const template = {
    question: '',
    answer: ''
  }

  return arr.map(el => {
    const copyTemplate = { ...template }
    copyTemplate.question = el
    return copyTemplate
  })
}
const qnaObject = buildQNA(questionsArr)
const stringifiedQNA = JSON.stringify(qnaObject)
console.log(stringifiedQNA)
*/

/* binding an template object to a callback function in array.prototype.map
const buildQNA3 = (arr = []) => {
  function builder(question) {
    const temp = { ...this }
    console.log(temp)
    temp.question = question
    return temp
  }
  return arr.map(builder.bind({ question: '', answer: '' }))
}
const qnaObject = buildQNA3(questionsArr)
const stringifiedQNA = JSON.stringify(qnaObject)
console.log(stringifiedQNA)
*/

// > making use of thisArg object in array.prototype.map
const buildQNA2 = (arr = []) => {

  // * arrow function will not work with the use of 'this' here
  return arr.map(function (question) {
    const temp = { ...this }
    temp.question = question
    return temp
  }, { question: '', answer: '' })
}

const qnaObject = buildQNA2(questionsArr)
const stringifiedQNA = JSON.stringify(qnaObject)

console.log(stringifiedQNA)
