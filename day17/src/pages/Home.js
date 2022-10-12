import { Link, useLocation } from "react-router-dom"

const locationContainerStyle = {
  padding: '0',
}

const locationWrapperStyle = {
  fontSize: '1.1em',
  padding: '0.2em 0.9em',
  border: '2px solid #6a6e67',
  color: '#11b64e',
  borderRadius: '100vw',
}

const linkToExercises = {
  padding: '0.4em 0.9em',
  borderRadius: '0.6em',
  backgroundColor: '#3a0648',
  display: 'block',
  width: 'fit-content',
}

const Home = () => {
  const location = useLocation()

  return (
    <div>
      <h1>Welcome Home</h1>

      <div>
        <Link
          to='/exercises'
          style={linkToExercises}
        >
          Go to Answers for 30 Days of React Exercises
        </Link>
      </div>

      <div>
        {/* // TESTED: used code below to see if `state` from useNavigate is being passed
            when delta or relative path is used as 1st param
          //! RESULT: using delta WILL NOT store state in location */}
        <p
          style={locationContainerStyle}
        >
          State passed to this location: <span
            style={locationWrapperStyle}
          >{location.state}</span>
        </p>
        <small>
          State is passed from Navigate &gt; Back Button. <em>If not registering, then code has been refactored</em>
        </small>
      </div>

      {/* cspell:disable */}
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt odit cum aperiam corporis nobis culpa reiciendis atque incidunt repellat, consequatur corrupti eaque debitis cumque sint itaque rem aut perspiciatis id qui explicabo natus tenetur autem dolorem? Enim ex, explicabo tempora laborum nesciunt dicta autem voluptas vel quos.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde magni distinctio nam! Earum deserunt tempora esse mollitia veniam at repellendus nisi quas facilis. Minima aspernatur similique quasi ratione id cum voluptatem numquam laboriosam porro eaque architecto quod quidem ipsam, soluta doloribus impedit quo! Nihil, repellendus.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, a quaerat! Quidem delectus iure quam voluptatem, deleniti ducimus sunt quis veniam? Dolorem, odit! Mollitia officiis error asperiores ad ea recusandae autem ipsam, ex dolor debitis animi molestiae quibusdam eos ipsa odio vel laborum accusamus! Assumenda, commodi. Libero maiores vel debitis qui corporis, unde soluta cum necessitatibus, sequi neque distinctio quod cupiditate porro! Quas deserunt sunt, voluptas adipisci laborum atque!</p>
      {/* cspell:enable */}

    </div>
  )
}

export { Home }
