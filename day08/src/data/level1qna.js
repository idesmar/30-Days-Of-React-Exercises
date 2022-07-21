const level1qna = [
  {
    question: 'What was your state today? Are you happy? I hope so. If you manage to make it this far you should be happy.',
    answer: 'I managed this far, so I am happy. 😁'
  },
  {
    question: 'What is state in React?',
    answer: 'State in React, like the word implies, is the condition of the component. It can change based on factors included in the component or other events.'
  },
  {
    question: 'What is the difference between props and state in React?',
    answer: 'props are static data that cannot change once set, while a state can with the use of `setState()`.'
  },
  {
    question: 'How do you access state in a React component?',
    answer: 'In class components, state can be accessed through `this.state.stateName`. In functional components, useState hook must be initialized then state can be accessed simply by its keyword. eg `[count, setCount] = useState(0)`. Will be further explained once Hooks are tackled extensively.'
  },
  {
    question: 'How do you set a state in a React component?',
    answer: 'A state is set in a class based React component by using the built-in setState() function. eg. `this.setState({ stateName: newState })`; newState can be anything or it can also access the original state like `this.setState({ count: this.state.count + 1 })`'
  },
]

export default level1qna