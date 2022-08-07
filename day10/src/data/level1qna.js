/** // NOTE: This file is not used in Day10
 * What is the importance of React Folder Structure and File Naming
 * How do you export file
 * How do you import file
 * Make a component of module and export it as named or default export
 * Make a component or module and import it
 * Change all the components you have to different folder structure
 */

const level1qna = [
  {
    question: 'What is the importance of React Folder Structure and File Naming?',
    answer: 'Folder structure and file naming is important to ensure E.L.E.R. (Easy to Locate, Easy to Relate).',
  },
  {
    question: 'How do you export file?',
    answer: [
      'Exporting file can either be a default or named export.',
      'Note that there can only be one default export; and multiple named exports.',
      'Samples below are the author\'s preferred format',
    ],
    samples: [
      '`export default DataName`',
      'export { DataName }',
    ]
  },
  {
    question: 'How do you import file?',
    answer: 'Files are imported based on how they are exported. Note: named exports can be renamed by using the keyword `as`.',
    samples: [
      'default export: `import DataName from \'./path/to/file\'`',
      'named export: `import { DataName } from \'./path/to/file\'`',
    ]
  },
  {
    question: 'Make a component of module and export it as named or default export.',
    answer: 'This has been implemented in previous CRA',
  },
  {
    question: 'Make a component or module and import it.',
    answer: 'This has been implemented in previous CRA',
  },
  {
    question: 'Change all the components you have to different folder structure.',
    answer: 'Done',
  },
]

export default level1qna