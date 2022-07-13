const qna = [
  {
    question: 'What is props in a React component?',
    answer: 'props in a React component is an object similar to arguments in a regular function. These are arguments from the parent component passed to the child/working component where it will be used internally - as content, style, eventHandler, etc'
  },
  {
    question: 'How do you access props in a React component?',
    answer: 'props are passed from the parent JSX element (ie. <JSXElement propsName={propsValue} />). It can now be used by the React Component at this point.',
    samples: [
      {
        condition: 'passed as an object and used internally as an object',
        code: 'const JSXElement = (props) => { props.propsName; return (...) }'
      },
      {
        condition: 'passed as an object and destructured internally for lesser keyboard stroke and readability',
        code: 'const JSXElement = (props) => { const { propsName } = props; return (...) }'
      },
      {
        condition: 'destructured props as a parameter other than object',
        code: 'const JSXElement = ({ propsName }) => { propsName; return (...) }'
      },
      {
        condition: 'destructured props: combination of object & other data types',
        /*
          > basic solution to "emulating" js code
            obviously not near perfect or even decent,
            gotta find library that can help
        */
        code: [
          'const JSXElement = ({',
          '\t propObjName: { prop1, prop2, ... }, // * object',
          '\t propArr, // * array',
          '\t propStr, // * string',
          '\t propNum, // * num',
          '\t propMethod, // * method or function',
          '\t ...',
          '}) => {',
          '\t prop1, prop2',
          '\t propArr',
          '\t propStr',
          '\t propMethod',
          '}'
        ]
      }
    ]
  },
  {
    question: 'What data types can we pass as props to components?',
    answer: 'All data types can be passed'
  },
  {
    question: 'What is a propTypes?',
    answer: 'propTypes is a package that assign the data types of the props passed to a component'
  },
  {
    question: 'What is a default propTypes?',
    qCorrection: 'Perhaps question should be what is defaultProps, no default propTypes exist!',
    answer: 'defaultProps are default props if none is specified/passed'
  }
]


export default qna