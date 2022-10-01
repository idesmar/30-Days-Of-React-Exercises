import { useParams } from "react-router-dom"

/* //NOTE:  useParams hook takes no parameters  */

const Challenge1 = () => {
  return (
    <div>Challenge 1</div>
  )
}

const Challenge2 = () => {
  return (
    <div>Challenge 2</div>
  )
}

const OtherChallenges = () => {
  /* Dynamic Route using useParams and :id */
  const { id } = useParams()
  return (
    <div>
      Challenge with id: {id}
    </div>
  )
}

const Challenges = () => {
  return (
    <div>Challenges</div>
  )
}



export {
  Challenges,
  Challenge1,
  Challenge2,
  OtherChallenges,
}
