import React, { Component } from 'react'
import { headingStyle } from './components/__globalStyle'
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

const Header = () => (
  <header>
    <h1 style={headingStyle}>30 days of React: Day 09 | Conditional Rendering</h1>
  </header>
)

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
    userInputSeason: false,
    season: this.currentSeason,

    userInputTimeOfDay: false,
    timeOfDay: this.currentTimeOfDay,
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
    const qna = [...level1qna]
    const {
      userInputSeason, season,
      userInputTimeOfDay, timeOfDay
    } = this.state

    const seasons = [...this.seasons]
    const seasonIdx = seasons.findIndex(season => season.name === this.state.season)
    const backgroundImg = seasons[seasonIdx].backgroundImg

    const timeOfDays = [...this.timeOfDays]
    const todIdx = timeOfDays.findIndex(tod => tod.name === this.state.timeOfDay)
    const backgroundClr = timeOfDays[todIdx].backgroundClr

    const fColor = (timeOfDay === 'night' || timeOfDay === 'evening')
                    ? '#ffffff' : '#000000'

    const appStyle = {
      backgroundImage: `url(${backgroundImg})`,
      backgroundColor: backgroundClr,
      backgroundRepeat: 'no-repeat',
      // backgroundSize: 'contain',
      backgroundPosition: 'center',
      color: fColor,
      minHeight: '100vh',
      padding: '1rem',
    }

    const seasonNames = seasons.map(season => season.name)
    const currentSeason = this.currentSeason
    const timeOfDayNames = timeOfDays.map(tod => tod.name)
    const currentTimeOfDay = this.currentTimeOfDay

    return (
      <div style={appStyle}>
        <Header />
        <Level1Class
          style={sectionLimit}
          qna={qna}
        />


        <Level2Class
          style={sectionLimit}

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
        />
      </div>
    )
  }
}

export default App