import htmlLogo from './assets/html5.svg'
import cssLogo from './assets/css3.svg'
import jsLogo from './assets/js.svg'
import reactLogo from './assets/react.svg'
import './App.css'

import asabeneh from './assets/asabeneh.png'
import idesmar from './assets/idesmar.jpg'

const handleSubmit = (e) => {
  e.preventDefault()
}

const SubscriptionField = () => {
  return (
    <form onSubmit={handleSubmit}>
      <div className='inputs'>
        <label className='sr-only'
          htmlFor="firstName">First Name</label>
        <label className='sr-only'
          htmlFor="lastName">Last Name</label>
        <label className='sr-only'
          htmlFor="email">Email</label>
        <input type="text" id='firstName' placeholder='First Name'/>
        <input type="text" id='lastName' placeholder='Last Name'/>
        <input type="email" id='email' placeholder='Email' />
      </div>
      <button>Subscribe</button>
    </form>
  )
}



const Header = () => {
  const imgWidth = 128
  const headerStyle = {
    display: 'flex',
    justifyContent: 'center',
    paddingBottom: '2rem'
  }
  return (
    <header style={headerStyle}>
      <img width={imgWidth} className='logos' src={htmlLogo} alt="html logo" />
      <img width={imgWidth} className='logos' src={cssLogo} alt="css logo" />
      <img width={imgWidth} className='logos' src={jsLogo} alt="js logo" />
      <img width={imgWidth} className='logos' src={reactLogo} alt="react logo" />
    </header>
  )
}

const Main = () => {
  return (
    <div className='main-wrapper'>
      <main>
        <h2 className='h1-exercise'>SUBSCRIBE</h2>
        <p>Sign up with your email address to receive news and updates</p>
        <SubscriptionField />
      </main>
    </div>
  )
}


const users = [
  {
    name: 'Asabeneh Yetayeh',
    position: 'Senior Developer, Finland',
    img: asabeneh,
    skills: [
      'HTML', 'CSS', ' Sass', 'JS', 'React',
      'Redux', 'Node', 'MongoDB', 'Python', 'Flask',
      'Django', 'NumPy', 'Pandas', 'Data Analysis', 'MYSQL',
      'GraphicQL', 'D3.js', 'Gatsby', 'Docker', 'Heroku', 'Git'
    ],
    joinDate: 'Aug 30, 2020'
  },
  {
    name: 'siege idesmar',
    position: 'Hermit Developer',
    img: idesmar,
    skills: [
      'HTML', 'CSS', 'Sass', 'JS', 'React'
    ],
    joinDate: 'Sometime'
  }
]

const check = (
  <svg style={{
    display: 'inline-block',
    marginLeft: '0.3rem'
  }}
    aria-hidden = {true}
    xmlns="http://www.w3.org/2000/svg"
    width="1em" height="1em"
    fill="currentColor"
    viewBox="0 0 16 16">
    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
  </svg>
)

const clock = (
  <svg
    style={{
      display: 'inline-block',
      marginRight: '0.3rem'
    }}
    aria-hidden = {true}
    xmlns="http://www.w3.org/2000/svg"
    width="1em" height="1em"
    fill="currentColor"
    viewBox="0 0 16 16">
    <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"/>
    <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"/>
  </svg>
)


const UserCards = () => {
  return (
    <section className="level">
      <h1 className='level-heading'>Exercise Level 3</h1>
      <ol>
        {users.map((user, userIdx) => UserCard(user, userIdx))}
      </ol>
    </section>
  )
}

const UserCard = (user, userIdx) => {
  const { name, position, img, skills, joinDate } = user

  // this can be rewritten as sa function and injected as <skillsEl />
  const skillsEl = skills.map((skill, idx) => (
    <li
      key={idx}
    >
      <a
      className='skill'
        href="./">
        {skill}
      </a>
    </li>
  ))

  const altImg = `${name} photo`

  return (
    <li key={userIdx}>
      <section>
        <div className="card">
          <img
            className='card-photo'
            width={120}
            src={img} alt={altImg}
          />
          <h2 className='flex'>{name.toUpperCase()}{check}</h2>
          <p className="small-detail">{position}</p>
          <div>
            <h3>SKILLS</h3>
            <ul className='skills'>
              {skillsEl}
            </ul>
          </div>
          <p className='small-detail flex'>{clock}{joinDate}</p>
        </div>
      </section>
    </li>
  )
}

const App = () => {
  return (
    <>
      <section className='level'>
        <h1 className='level-heading'>Exercise Level 2</h1>
        <Header />
        <Main />
      </section>
      <UserCards />
    </>
  )
}

export default App