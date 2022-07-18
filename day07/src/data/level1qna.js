const qna = [
  {
    question: 'How do you write a pure JavaScript function?',
    answer: 'Pure JS functions are defined as: given the same input, the return output will always be the same AND it will not produce any side effects (mutation of any external data). Hence, if needed, arguments should be hard copied using destructuring and Object.assign(target, ...sources)'
  },
  {
    question: 'What is inheritance and how do you make a child from a parent class?',
    answer: 'Inheritance is one of the 4 pillars of OOP which pertains to a child class/object having access to the same properties and methods of its parent. Below is a sample of creating a child class',
    code: [
      'class ChildName extends ParentName {',
      '\tconstructor(props) {',
      '\t\tsuper(props)',
      '\t\t// code here',
      '\t}',
      '\t// methods and properties here ',
      '{'
    ]
  },
  {
    question: 'What is class based React component?',
    answer: 'Class based components allows the use of component life cycle and advanced component states After React16, these can also be done with functional based components.'
  },
  {
    question: 'What is the difference between functional React component and class based React component?',
    answer: [
      'Prior to React16, only class based components had the ability to be stateful/smart. Stateful means that the component can render different elements depending on the state --- and handle local state. Also, class based component allows advanced component life cycle methods',
      'Starting React16, however, functional React component can now do the same with the use of Hooks API.',
      'At this point, it seems that functional React component is preferred because of less boilerplate and not needing to import React from \'react\'; to access React.Component or { Component } from \'react\'; in each JS module.'
    ]
  },
  {
    question: 'When do we need to use class based components instead of functional components?',
    answer: 'Prior to React16, class based components are used if component life cycle is needed. Currently functional components can do the same.'
  },
  {
    question: 'What is the use cases of class based component?',
    answer: 'At this time, functional based component is prevalent and the only possible reason for encountering class based components is working with legacy codes.'
  },
  {
    question: 'Which type of component do you use most frequently? functional or class-based component?',
    answer: 'After React16, since class-based and functional-based components can do the same, functional-based component has a better appeal with its cleaner look.'
  },
  {
    question: 'What is React life cycle? (not covered yet)',
    answer: 'check succeeding days if it will be tackled further'
  },
  {
    question: 'What is state in React? (not covered yet)',
    answer: 'Check next day if the same question is included, if not, this question will included manually'
  }
]

export default qna