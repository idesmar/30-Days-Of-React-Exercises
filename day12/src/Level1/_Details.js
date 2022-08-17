import hasLink from "../utils/hasLink"

const Details = ({ q }) => {

  const {
    _id,
    question,
    answer,
    list,
    footnote,
  } = q

  const Question = () => question && <summary>{question}</summary>
  const Answer = () => answer && <p>{answer}</p>

  const ListElement = ({ content }) => <li>{content}</li>
  const List = () => list && list.length && (
    <ul>
      {
        list.map((li, liIdx) => (
          <ListElement
            key={_id + 'li' + liIdx}
            content={li} />
        ))
      }
    </ul>
  )

  const FNoteElement = ({ content }) => <li>{hasLink(content)}</li>
  const Footnote = () => footnote && footnote.length && (
    <ul>
      {
        footnote.map((fNote, fNoteIdx) => (
          <FNoteElement
            key={_id + 'fNote' + fNoteIdx}
            content={fNote} />
        ))
      }
    </ul>
  )

  return (
    <details>
      <Question />
      <Answer />
      <List />
      <Footnote />
    </details>
  )
}


export { Details }
