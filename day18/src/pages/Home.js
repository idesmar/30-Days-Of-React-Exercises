import homeStyles from './styles/Home.module.css'


const { levels, li, home } = homeStyles

const Home = () => {
  return (
    <div className={home}>
      <h2>Welcome to Day 18 of 30 Days of React where we dig deep into Fetch and Axios.</h2>
      <small>* Use the navigation to switch between Exercise Levels and Home</small>

      <h3>Exercises:</h3>

      <div className={levels}>
        <h4>Level 1</h4>
        <ul>
          <li>What is HTTP request?</li>
          <li>What are the most common HTTP requests?</li>
          <li>What is fetch?</li>
          <li>What is axios?</li>
          <li>What is the difference between fetch and axios?</li>
          <li>Do you prefer fetch to axios for make HTTP requests?</li>
        </ul>
      </div>

      <div className={levels}>
        <h4>Level 2</h4>
        <p className={li}>Find the average metric weight and life span of cats in the following API. There are 67 breeds of cats in the API.</p>
      </div>

      <div className={levels}>
        <h4>Level 3</h4>
        <ul>
          <li>How many countries do have cat breeds?</li>
          <li>Which country has the highest number of cat breeds?</li>
          <li>Arrange countries in ascending order based on the number of cat breeds they have?</li>
        </ul>
      </div>

    </div>
  )
}


export { Home }
