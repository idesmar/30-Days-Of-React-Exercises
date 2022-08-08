import { Component } from 'react'
import idesmar from './assets/idesmar.jpg'
import { rem } from '../lib/utils'
import makeID from '../lib/makeID'
import { countriesData } from '../data/countries'

const glob = {
  light: {
    fColor: '#0f172a',
    bgColor: '#60dbfc',
  },
  dark: {
    fColor: '#0f172a',
    bgColor: '#60dbfc',
  },
}

/* ////////////////////////////////////////////////////////
  > REUSABLE COMPONENTS
//////////////////////////////////////////////////////// */

const Header = ({ headers, theme }) => {

  const defaultHeaderStyle = {
    backgroundColor: glob.light.bgColor,
    color: glob.light.fColor,
  }

  const themeName = theme === undefined ? '' : theme.name
  const headerStyle = themeName !== 'dark' ? defaultHeaderStyle : theme

  return (
    <header style={headerStyle}>
      <div className="container">
        {headers.map((text, textIdx) => {
          if (!textIdx) return <h4 key={'header' + makeID()} style={{ fontSize: '2.5rem' }}>{text}</h4>
          return <p key={'header' + makeID()}>{text}</p>
        })}
      </div>
    </header>
  )
}

const Button = ({ text, onClick, addStyle }) => {
  const defaultButtonStyle = {
    padding: rem(3) + ' ' + rem(8), // rem4 integrated in the next project
    borderRadius: '0.3em',
    backgroundColor: glob.light.bgColor,
    color: glob.dark.fColor,
    fontSize: rem(12),
  }

  const buttonStyle = {...defaultButtonStyle, ...addStyle }
  return (
    <button
      style={buttonStyle}
      onClick={onClick}
    >
      {text}
    </button>
  )
}


/* ////////////////////////////////////////////////////////
  > Level2a
  data={data}
  defaultHeaders={defaultHeaders}
//////////////////////////////////////////////////////// */

class Level2aClass extends Component {
  light = {
    backgroundColor: '#ffffff',
    color: '#000000',
    name: 'light', // > used only for determining the theme name. will NOT show on style as no such style attribute exist
  }
  dark = {
    backgroundColor: '#0f172a',
    color: '#60dbfc',
    name: 'dark', // > used only for determining the theme name. will NOT show on style as no such style attribute exist
  }
  state = {
    theme: this.light,
    time: '',
  }

  changeTheme = () => {
    // compare if current theme is same as light
    (JSON.stringify(this.state.theme) === JSON.stringify(this.light))
      ? this.setState({ theme: this.dark })
      : this.setState({ theme: this.light })
  }

  showTime = () => {
    const timeNow = !this.state.time ? (new Date()).toLocaleTimeString() : ''
    this.setState({ time: timeNow })
  }

  render() {
    const {
      userData: { fullName, dateToday, img },
      defaultHeaders
    } = this.props

    const buttons = [
      {
        text: 'Greet People',
        onClick: function () { alert(`Hi there! I'm ${fullName}!`) },
      },
      {
        text: 'Show Time',
        onClick: this.showTime,
      },
      {
        text: 'Change Background',
        onClick: this.changeTheme,
      }
    ]

    const time = this.state.time
    const headers = [...defaultHeaders, dateToday, fullName]

    const imgStyle = {
      width: rem(200),
      aspectRatio: '1/1',
      borderRadius: '100%',
    }

    return (
      <div style={this.state.theme}>
        <h3>Level2a</h3>
        <Header headers={headers} theme={this.state.theme} />
        <div className="container">
          <img style={imgStyle} src={img} alt="" />
          <p>{fullName}</p>
          {
            time
              ? <p>{time}</p>
              : <p style={{ height: '1.2em' }}></p>
          }
          <div style={{ display: 'flex', gap: rem(8) }}>
            {
              buttons.map(button => (
                <Button
                  key={'btn' + makeID()}
                  text={button.text}
                  onClick={button.onClick}
                />
              ))
            }
          </div>
        </div>
      </div>
    )
  }
}


/* ////////////////////////////////////////////////////////
  > Level2b
  data={data}
  defaultHeaders={defaultHeaders}
//////////////////////////////////////////////////////// */


const CountryDetails = ({ title, desc }) => {

  const pStyle = {
    marginBottom: rem(6),
  }
  const titleStyle = {
    fontWeight: '700',
  }
  return (
    <p style={pStyle}>
      <span style={titleStyle}>{title}: </span>
      {desc}
    </p>
  )
}


const CountryCard = ({ country: { name, capital, languages, currency, population }, flag }) => {

  const boxShadow = 'rgb(136 136 136 / 32%) 0px 0px 5px 3px'
  const imgContainer = {
    width: rem(190),
    height: rem(100),
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }
  const cardStyle = {
    margin: '0 auto 1rem',
    borderRadius: '0.5em',
    boxShadow,
    width: rem(420),
    maxWidth: '100%',
    height: rem(300),
    display: 'flex',
    flexDirection: 'column',
    padding: rem(20),
  }
  const imgStyle = {
    boxShadow,
    height: '100%',
  }

  const countryDetails = [
    {
      title: 'Capital',
      desc: capital,
    },
    {
      title: 'Language',
      desc: languages.join(', '),
    },
    {
      title: 'Population',
      desc: population.toLocaleString(),
    },
    {
      title: 'Currency',
      desc: currency,
    },
  ]

  return (
    <div style={cardStyle}>
      <div style={ imgContainer }>
        <img style={imgStyle} src={flag} alt="" />
      </div>
      <h4 style={{ padding: '1rem', textAlign: 'center', fontWeight: 'bold',  }}>{name.toUpperCase()}</h4>
      {
        countryDetails.map(({ title, desc }) => (
          <CountryDetails
            key={'countryDetails' + makeID()}
            title={title}
            desc={desc}
          />
        ))
      }
    </div>
  )
}

class Level2bClass extends Component {

  // hard copy of countriesData
  countries = [...countriesData]
  generateIdx = () => Math.floor(Math.random() * this.countries.length)
  country = this.countries[this.generateIdx()]

  state = {
    country: this.country,
    flag: '',
  }

  fetchFlag = async (url) => {
    const res = await fetch(url)
    const [ data ] = await res.json()
    const flagUrl = data.flags.svg
    this.setState({ flag: flagUrl })
  }
  getFlag = () => {
    const name = this.state.country.name
    const url = `https://restcountries.com/v3.1/name/${name.toLowerCase()}`

    this.fetchFlag(url)
      .catch(() => {
        this.setState({ flag: idesmar })
        console.log(`Error fetching data from ${url}`)
      })
     console.log(`getFlag completed for ${name}`)
  }
  changeCountry = () => {
    const country = this.countries[this.generateIdx()]
    this.setState({ country: country })
    console.log(`changeCountry completed to ${country.name}`)
  }


  shouldComponentUpdate(nextProps, nextState) {
    console.log(nextState.country) // ? tester only
    return nextState.country
  }

  componentDidMount() {
    console.log('component did mount; line 1')
    this.getFlag()
  }

  componentDidUpdate(prevProps, prevState) {
    // NOTE: ALWAYS PROVIDE A CONDITION OR THE FUNCTION WILL RUN INFINITELY
    console.log('component did update entered; line 1')

    if (prevState.country.name !== this.state.country.name) {
      this.getFlag()
      console.log(`component did update from ${prevState.country.name} to ${this.state.country.name}, hence executed getFlag ${this.state.country.name}`)
    }
  }

  render() {
    console.log('start of render')
    const {
      userData: { fullName, dateToday },
      defaultHeaders
    } = this.props

    const headers = [
      ...defaultHeaders,
      fullName,
      dateToday,
      'Select a country for your next holiday'
    ]

    const country = this.state.country
    // * replace the invalid flag(url) with the fetched url
    const flag = this.state.flag

    return (
      <div>
        <h3>Level2b</h3>
        <Header headers={headers} />
        <div className='container'>
          <CountryCard country={country} flag={flag} />
          <Button
            text={'Select country'}
            onClick={this.changeCountry}
            addStyle={{ display: 'block', margin: '0 auto' }}
          />
        </div>
      </div>
    )
  }
}

/* ////////////////////////////////////////////////////////
  > Level2
//////////////////////////////////////////////////////// */

class Level2Class extends Component {

  // methods that run before render
  dateToday = (new Date()).toLocaleDateString()

  render() {

    const defaultHeaders = [
      '30 Days of React',
      'Getting Started',
      'JavaScript Library',
    ]

    const user = {
      firstName: 'idesmar',
      lastName: 'siege',
      img: idesmar,
    }

    const { firstName, lastName, img } = user
    const fullName = [firstName, lastName].join(' ')
    const dateToday = this.dateToday

    const userData = {
      fullName,
      dateToday,
      img,
    }

    return (
      <section>
        <h2>Exercise Level2 using Class Components</h2>
        <Level2aClass
          userData={userData}
          defaultHeaders={defaultHeaders}
        />
        <Level2bClass
          userData={userData}
          defaultHeaders={defaultHeaders}
        />
      </section >
    )
  }
}

export default Level2Class