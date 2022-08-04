import React, { Component } from 'react'
import { defaultHeadingStyle } from './components/__globalStyle'
import Level1Class from './components/Level1Class'
import Level2Class from './components/Level2Class'
import Level3Class from './components/Level3Class'
import level1qna from './data/level1qna'
import './App.css'
import { rem } from './lib/utils'
import winterBg from './assets/undraw_winter_walk_re_rx25.svg'
import springBg from './assets/undraw_blooming_re_2kc4.svg'
import summerBg from './assets/undraw_beach_day_oyfc.svg'
import fallBg from './assets/undraw_autumn_re_rwy0.svg'

const sectionLimit = {
  width: rem(600),
  maxWidth: '100%',
  marginInline: 'auto',
}

const Header = ({ theme, headingStyle }) => {

  return (
    <header>
      <h1 style={headingStyle}>30 days of React: Day 09 | Conditional Rendering</h1>
    </header>
  )
}

class App extends Component {

  seasons = [
    {
      name: 'winter',
      months: [12, 1, 2],
      backgroundImg: winterBg,
    },
    {
      name: 'spring',
      months: [3, 4, 5],
      backgroundImg: springBg,
    },
    {
      name: 'summer',
      months: [6, 7, 8],
      backgroundImg: summerBg,
    },
    {
      name: 'fall',
      months: [9, 10, 11],
      backgroundImg: fallBg,
    },
  ]

  timeOfDays = [
    {
      name: 'morning',
      minHour: 6,
      backgroundClr: '#dfffda',
    },
    {
      name: 'noon',
      minHour: 12,
      backgroundClr: '#fce684',
    },
    {
      name: 'evening',
      minHour: 18,
      backgroundClr: '#093263',
    },
    {
      name: 'night',
      minHour: 0,
      backgroundClr: '#09011f',
    },
  ]

  // > hard copy combined with an open property to use for state management of details attr "open"
  qna = level1qna.map(el => ({ ...el, open: false }))

  getCurrentSeason = () => {
    const month = new Date().getMonth() + 1
    const seasonIdx = this.seasons.findIndex(season => season.months.includes(month))
    return this.seasons[seasonIdx].name
  }
  currentSeason = this.getCurrentSeason()

  getCurrentTimeOfDay = () => {
    const hour = new Date().getHours()
    const todIdx = this.timeOfDays.findIndex(tod => {
      const { minHour } = tod
      const maxHour = minHour + 5
      return ( hour >= minHour && hour <= maxHour )
    })
    return this.timeOfDays[todIdx].name
  }
  currentTimeOfDay = this.getCurrentTimeOfDay()

  state = {
    qnaOpen: this.qna.map(q=> q.open), // > array of boolean data for details attr

    userInputSeason: false,
    season: this.currentSeason,

    userInputTimeOfDay: false,
    timeOfDay: this.currentTimeOfDay,
  }

  changeQnaOpen = (e) => {
    // note: data-idx="" stores the data as string hence unary plus is used
    const idx = +e.target.dataset.idx

    // hard copy of current state
    const newState = [...this.state.qnaOpen]
    // mutation on the hard copy reflecting change in state cause by onClick
    newState[idx] = !newState[idx]

    /* // * alternative using a bit more conventional approach (for loop can also be used)
      const current = [...this.state.qnaOpen]
      const newState = current.map((el, currIdx) => {
        if (currIdx !== idx) return el
        return !el
      })
    */


    this.setState({ qnaOpen: newState })
  }

  changeUserInputSeason = () => {
    this.setState({userInputSeason: !this.state.userInputSeason})
  }

  changeUserInputTimeOfDay = () => {
    this.setState({userInputTimeOfDay: !this.state.userInputTimeOfDay})
  }

  changeSeason = (e) => {
    this.setState({ season: e.target.value })
  }

  changeTimeOfDay = (e) => {
    this.setState({ timeOfDay: e.target.value })
  }

  render() {
    const qna = this.qna

    const {
      qnaOpen,
      userInputSeason, season,
      userInputTimeOfDay, timeOfDay
    } = this.state

    const seasons = [...this.seasons]
    const seasonIdx = seasons.findIndex(season => season.name === this.state.season)
    const backgroundImg = seasons[seasonIdx].backgroundImg

    const timeOfDays = [...this.timeOfDays]
    const todIdx = timeOfDays.findIndex(tod => tod.name === this.state.timeOfDay)
    const backgroundClr = timeOfDays[todIdx].backgroundClr

    const theme = (timeOfDay === 'night' || timeOfDay === 'evening') ? 'dark' : 'light'

    const fColor = theme === 'dark' ? '#ffffff' : '#000000'

    const appStyle = {
      backgroundColor: backgroundClr,
      color: fColor,
      minHeight: '100vh',
      padding: '1rem',
    }

    const bgStyle = {
      backgroundImage: `url(${backgroundImg})`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundSize: 'contain',
      position: 'fixed',
      top: '0',
      left: '0',
      width: '100vw',
      height: '100vh',
    }

    const seasonNames = seasons.map(season => season.name)
    const currentSeason = this.currentSeason
    const timeOfDayNames = timeOfDays.map(tod => tod.name)
    const currentTimeOfDay = this.currentTimeOfDay

    const headingStyle = {
      ...defaultHeadingStyle,
      textShadow: theme === 'dark' ? '0 0 5px #000000' : '0 0 5px #ffffff'
    }

    return (
      <div style={appStyle}>
        <div
          aria-hidden
          style={bgStyle}
        >
          {/*
            backgroundImage container
            placed as first child of the parent to ensure that succeeding nodes will be on top of this container ONCE position: relative is set

          */}
        </div>


        <div style={{ marginTop: '10vh', position: 'relative' }}>
          <Header theme={theme} headingStyle={headingStyle} />

          <Level1Class
            theme={theme} // ? in case needed in the future
            headingStyle={headingStyle}
            style={sectionLimit}
            qna={qna}
            qnaOpenArr={qnaOpen}
            handleQnaOpenChange={this.changeQnaOpen}
          />

          <Level2Class
            style={sectionLimit}
            theme={theme}
            headingStyle={headingStyle}

            seasons={seasonNames}
            currentSeason={currentSeason}
            existingSeason={season}
            userInputSeason={userInputSeason}
            handleSeasonInput={this.changeUserInputSeason}
            handleSeasonChange={this.changeSeason}

            timeOfDays={timeOfDayNames}
            currentTimeOfDay={currentTimeOfDay}
            existingTimeOfDay={timeOfDay}
            userInputTimeOfDay={userInputTimeOfDay}
            handleTimeOfDayInput={this.changeUserInputTimeOfDay}
            handleTimeOfDayChange={this.changeTimeOfDay}
          />

          <Level3Class
            style={sectionLimit}
            theme={theme} // ? in case needed in the future
            headingStyle={headingStyle}
          />
        </div>
      </div>
    )
  }
}

export default App