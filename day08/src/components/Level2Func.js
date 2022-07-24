import { useState, useEffect } from "react"
import makeID from "../lib/makeID"
import idesmar from './assets/idesmar.jpg'
import { rem } from '../lib/utils'
import { countriesData } from "../data/countries"


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

  return (
    // theme.name used to identify if defaultHeaderStyle will be used or follow the [dark] theme colors
    <header style={themeName !== 'dark' ? defaultHeaderStyle : theme}>
      <div className="container">
        {
          headers.map((header, headerIdx) => {
            if (headerIdx) return <p key={'header' + makeID()} >{header}</p>
            return <p key={'header' + makeID()} style={{ fontSize: '2.5rem', }} >{header}</p>
          })
        }
      </div>
    </header>
  )
}


const Button = ({ text, onClick, addStyle }) => {
  const defaultButtonStyle = {
    padding: rem(3) + ' ' + rem(8), // TODO: integrate created sass function rem4 to javascript
    borderRadius: '0.3em',
    backgroundColor: glob.light.bgColor,
    color: glob.dark.fColor,
    fontSize: rem(12),
  }

  // const buttonStyle = Object.assign({}, defaultButtonStyle, addStyle)
  const buttonStyle = {...defaultButtonStyle, ...addStyle}

  return (
    <button style={buttonStyle} onClick={onClick}>{text}</button>
  )
}


/* ////////////////////////////////////////////////////////
  > Level2a
//////////////////////////////////////////////////////// */

const Level2a = ({
  defaultHeaders,
  user: { img, fullName },
  dateToday,
}) => {

  const headers = [...defaultHeaders, fullName, dateToday]

  const imgStyle = {
    width: rem(200),
    aspectRatio: '1/1',
    borderRadius: '100%',
  }

  const light = {
    backgroundColor: '#ffffff',
    color: '#000000',
    name: 'light', // > used only for determining the theme name. will NOT show on style as no such style attribute exist
  }
  const dark = {
    backgroundColor: '#0f172a',
    color: '#60dbfc',
    name: 'dark', // > used only for determining the theme name. will NOT show on style as no such style attribute exist
  }


  /*
    > JSON.stringify() allows the comparison of POJOs
    caveat: JSON.stringify() cannot convert circular reference
      eg: const circularReference = {otherData: 123};
          circularReference.myself = circularReference;
          JSON.stringify(circularReference);
          // TypeError: cyclic object value
    source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Cyclic_object_value
  */
  /*  Changing theme solution:
    * changing style object (ie. as used here with light and dark style object)
    * using className or data then styling in css
       className={'styleName-' + theme} || data-theme={'dark'})
       .styleName-theme || [data-theme='dark']
  */

  const [theme, setTheme] = useState(light)
  const changeTheme = () => {
    const newTheme = (
      // compare current theme to light (theme)
      JSON.stringify(theme) === JSON.stringify(light)
        ? dark
        : light
    )
    setTheme(newTheme)
  }

  const [time, setTime] = useState('')
  const showTime = () => {
    const timeNow = !time ? (new Date()).toLocaleTimeString() : ''
    setTime(timeNow)
  }

  const buttons = [
    {
      text: 'Greet People',
      onClick: function () { alert(`Hi there! I'm ${fullName}!`) },
    },
    {
      text: 'Show Time',
      onClick: showTime,
    },
    {
      text: 'Change Background',
      onClick: changeTheme,
    }
  ]

  return (
    <div style={theme}>
      <h3>Level2a</h3>
      <Header headers={headers} theme={theme} />
      <div className="container">

        <img style={imgStyle} width={120} src={img} alt="" />
        <h4>{fullName}</h4>
        {
          // empty element as placeholder --- not really advisable for accessibility reasons
          time ? <p>{time}</p> : <p style={{ height: '1.2em' }}></p>
        }

        <div style={{ display: 'flex', gap: rem(6) }} >
          {buttons.map(button => {
            const { text, onClick } = button
            return <Button key={'btn' + makeID()} text={text} onClick={onClick} />
          })}
        </div>

      </div>
    </div>
  )
}


/* ////////////////////////////////////////////////////////
  > Level2b
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


const CountryCard = ({ country: { name, capital, languages, population, currency } }) => {

  const [flag, setFlag] = useState(null)

  const fetchFlag = async (url) => {
    const res = await fetch(url)
    const [ data ] = await res.json()
    const flagUrl = data.flags.svg
    setFlag(flagUrl)
  }

  useEffect(() => {
    const url = `https://restcountries.com/v3.1/name/${name.toLowerCase()}`
    fetchFlag(url)
      .catch(() => console.log(`Error fetching from ${url}`)) // catch error
  }, [name]) // dependency array: runs useEffect if dependency value changes

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
      {/* <p><span style={spanStyle}>Capital:</span> {capital}</p>
      <p><span style={spanStyle}>Language:</span> {languages.join(', ')}</p>
      <p><span style={spanStyle}>Population:</span> {population.toLocaleString()}</p>
      <p><span style={spanStyle}>Currency:</span> {currency}</p> */}
    </div>
  )
}

const Level2bFunc = ({
  user: { fullName },
  defaultHeaders,
  dateToday
}) => {

  const headers = [
    ...defaultHeaders,
    fullName,
    dateToday,
    'Select a country for your next holiday'
  ]

  // hard copy of countriesData
  const countries = [...countriesData]

  const generateIdx = () => Math.floor(Math.random() * countries.length)
  const [countryIdx, setCountryIdx] = useState(generateIdx)
  const changeCountry = () => setCountryIdx(generateIdx)

  return (
    <div>
      <h3>Level2b</h3>
      <Header headers={headers}/>
      <div className='container'>
        <CountryCard country={countries[countryIdx]} />
        <Button
          text={'Select country'}
          onClick={changeCountry}
          addStyle={{ display: 'block', margin: '0 auto' }}
        />
      </div>
    </div>
  )
}


/* ////////////////////////////////////////////////////////
  > Level2
//////////////////////////////////////////////////////// */

const Level2Func = () => {

  const dateToday = (new Date()).toLocaleDateString()

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

  const { firstName, lastName } = user
  const fullName = [firstName, lastName].join(' ')
  user.fullName = fullName

  return (

    <section>
      <h2>Exercise Level 2</h2>
      <Level2a
        user={user}
        defaultHeaders={defaultHeaders}
        dateToday={dateToday}
      />
      <Level2bFunc
        user={user}
        defaultHeaders={defaultHeaders}
        dateToday={dateToday}
        />
    </section>
  )
}


export default Level2Func
