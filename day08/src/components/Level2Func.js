import { useState } from "react"
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


const Banner = ({ headers, theme }) => {
  const defaultBannerStyle = {
    backgroundColor: glob.light.bgColor,
    color: glob.light.fColor,
  }

  const themeName = theme === undefined ? '' : theme.name

  return (
    // theme.name used to identify if defaultBannerStyle will be used or follow the [dark] theme colors
    <header style={themeName !== 'dark' ? defaultBannerStyle : theme} >
      {
        headers.map(header => <p key={'header'+ makeID()} >{header}</p>)
      }
    </header>
  )
}


const Button = ({ text, onClick }) => {
  const buttonStyle = {
    padding: rem(3) + ' ' + rem(8), // TODO: integrate created sass function rem4 to javascript
    borderRadius: '0.3em',
    backgroundColor: glob.light.bgColor,
    color: glob.dark.fColor,
    fontSize: rem(12),
  }
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

  const [theme, setTheme] = useState(light)

  const changeTheme = () => {
    /*
      > JSON.stringify() allows the comparison of POJOs
      caveat: JSON.stringify() cannot convert circular reference
        eg: const circularReference = {otherData: 123};
            circularReference.myself = circularReference;
            JSON.stringify(circularReference);
            // TypeError: cyclic object value
      source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Cyclic_object_value
    */
    const newTheme = (
      // compare current theme to light (theme)
      JSON.stringify(theme) === JSON.stringify(light)
        ? dark
        : light
    )
    setTheme(newTheme)
  }

  /*  Changing theme solution:
    * changing style object (ie. as used here with light and dark style object)
    * using className or data then styling in css
       className={'styleName-' + theme} || data-theme={'dark'})
       .styleName-theme || [data-theme='dark']
  */

  const headers = [...defaultHeaders, fullName, dateToday]

  const imgStyle = {
    width: rem(200),
    aspectRatio: '1/1',
    borderRadius: '100%',
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
      <Banner headers={headers} theme={theme} />
      <img style={imgStyle} width={120} src={img} alt="" />
      <h4>{fullName}</h4>
      {
        time ? <p>{time}</p> : ''
      }
      <div style={{ display: 'flex', gap: rem(6) }} >
        {buttons.map(button => {
          const {text, onClick} = button
          return <Button key={'btn' + makeID()} text={text} handleClick={onClick} />
        })}
      </div>
    </div>
  )
}


/* ////////////////////////////////////////////////////////
  > Level2b
//////////////////////////////////////////////////////// */


const CountryCard = ({ country: { name, capital, languages, population, flag, currency } }) => {
  return (
    <div>
      <img src={flag} alt="" />
      <h4>{name.toUpperCase()}</h4>
      <p>Capital: {capital}</p>
      <p>Language: {languages.join(', ')}</p>
      <p>Population: {population.toLocaleString()}</p>
      <p>Currency: {currency}</p>
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
      <Banner headers={headers}/>
      <CountryCard country={countries[countryIdx]} />
      <Button text={'Select country'} onClick={changeCountry} />
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
    <section >
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
