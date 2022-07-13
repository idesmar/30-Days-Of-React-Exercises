import './App.css'
import htmlLogo from './assets/html5.svg'
import cssLogo from './assets/css3.svg'
import jsLogo from './assets/js.svg'
import reactLogo from './assets/react.svg'
import { hexColor, isDark } from './assets/utils'
import users from './data/users.js'
import { check, clock } from './data/svgs.js'
import qna from './data/lev1qna.js'


const Header = () => {
  return (
    <header>
      <h1>30 Days of React: Day 5 | Props</h1>
    </header>
  )
}


const Samples = ({ samples }) => {

  return (
    <ul>
      {
        samples.map((sample, sampleIdx) => {
          const { condition, code } = sample
          return (
            <li key={sampleIdx}>
              <p>{condition}</p>
              <pre><code>
                {
                  !Array.isArray(code)
                    ? code
                    : code.join('\n')
                }
              </code></pre>
            </li>
          )
        })
      }
    </ul>
  )
}

const QNA = ({q: { question, qCorrection, answer, samples }}) => {
  return (
    <li>
      <details>
        <summary>{question}</summary>
        {
          qCorrection
            ? <p className='q-correction'>{qCorrection}</p>
            : ''
        }
        <p>{answer}</p>
        {
          samples
            ? <Samples samples={samples} />
            : ''
        }
    </details>
    </li>
  )
}

const Level1 = () => {

  const note = {
    display: 'block',
    padding: '0 1rem 1rem',
    textAlign: 'start',
    fontStyle: 'italic'
  }
  const link = {
    color: 'blue',
  }
  return (
    <section>
      <h2>Exercise Level 1</h2>
      <small style={note}><em style={{fontWeight: '500'}}>NOTE:</em> All answers are based on the author's understanding. It is greatly appreciated if any needed corrections or clarifications is brought to the attention of the author. Fastest way to connect is twitter <a style={link} href="https://twitter.com/idesmar">@idesmar</a>. Thank you!</small>
      <ol className='qna'>
        {qna.map((q, qIdx) => (
          <QNA q={q} key={qIdx} />
        ))}
      </ol>
    </section>
  )
}


const Level2a = () => {
  return (
    <div className='level2a'>
      <h3>Front End Technologies</h3>
      <div className="logos">
        <img width={64} className='logo' src={htmlLogo} alt="html" />
        <img width={64} className='logo' src={cssLogo} alt="css" />
        <img width={64} className='logo' src={jsLogo} alt="js" />
        <img width={64} className='logo' src={reactLogo} alt="react" />
      </div>
    </div>
  )
}

const Level2b = () => {
  const onSubmit = (e) => {
    e.preventDefault()
  }
  return (
    <div className='level2b'>
      <div className='cta'>
        <h3>SUBSCRIBE</h3>
        <p>Sign up with your email address to receive news and updates</p>
        <form onSubmit={onSubmit} className='cta'>
          <div className="inputs">
            <label className='sr-only' htmlFor="first-name">First Name</label>
            <label className='sr-only' htmlFor="last-name">Last Name</label>
            <label className='sr-only' htmlFor="email">Email</label>
            <input size={0} type="text" id='first-name' placeholder='First Name' />
            <input size={0} type="text" id='last-name' placeholder='Last Name' />
            <input size={0} type="email" id='email' placeholder='Email' />
          </div>
          <button type="submit">Subscribe</button>
        </form>
      </div>
    </div>
  )
}

const Level2 = () => {
  return (
    <section>
      <h2>Exercise Level 2</h2>
      <Level2a />
      <Level2b />
    </section>
  )
}


const Level3a = () => {
  /*  Functions (hexColor & isDark) were imported from utils.js
      rather than hard coded here only to free space and
      better access in the future for review or study.
  */
  return (
    <div className='level3a'>
      {Array(6).fill().map((el, idx) => {
        const bgColor = hexColor()
        const fColor = isDark(bgColor) ? '#ffffff' : '#000000'

        return (
          <p key={idx}
            className='color'
            style={{
              backgroundColor: bgColor,
              color: fColor
            }}
          >
            {bgColor}
          </p>
        )
      })}
    </div>
  )
}


const Skills = ({ skills }) => {
   return (
     <ul className='skills'>
      {skills.map((skill, skillIdx) => {
        return (
          <li key={skillIdx} className='skill'>
            <a href="./">{skill}</a>
          </li>
        )
      })}
    </ul>
  )
}

const User = ({
  user: { name, position, img, skills, joinDate }
}) => {

  return (
    <li className='user-card' >
      <img src={img} alt='' />
      <h3>{name.toUpperCase()}{check}</h3>
      <p>{position}</p>
      <Skills skills={skills} />
      <p>{clock}{joinDate}</p>
    </li>
  )
}

const Level3b = () => {

  return (
    <div className='level3b'>
      <ul>
        {users.map((user, userIdx) => (
          <User user={user} key={userIdx} />
        ))}
      </ul>
    </div>
  )
}

const Level3 = () => {
  return (
    <section className='level3'>
      <h2>Exercise Level 3</h2>
      <Level3a />
      <Level3b />
    </section>
  )
}

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Level1 />
        <Level2 />
        <Level3 />
      </main>
    </>
  )
}

export default App
