import React, { Component } from 'react'
import { headingStyle } from './components/globalStyle'
import Level1Class from './components/Level1Class'
import Level2Class from './components/Level2Class'
import level1qna from './data/level1qna'
import './App.css'
import { rem } from './lib/utils'
import winterBg from './assets/undraw_winter_walk_re_rx25.svg'
import springBg from './assets/undraw_blooming_re_2kc4.svg'
import summerBg from './assets/undraw_beach_day_oyfc.svg'
import fallBg from './assets/undraw_autumn_re_rwy0.svg'

const sectionLimit = {
  width: rem(600),
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
      background: winterBg,
    },
    {
      name: 'spring',
      months: [3, 4, 5],
      background: springBg,
    },
    {
      name: 'summer',
      months: [6, 7, 8],
      background: summerBg,
    },
    {
      name: 'fall',
      months: [9, 10, 11],
      background: fallBg,
    },
  ]

  getCurrentSeasonIdx = () => {
    const date = new Date()
    const month = date.getMonth() + 1

    const seasonIdx = this.seasons.findIndex(season => season.months.includes(month))
    return seasonIdx
  }

  state = {
    userInputSeason: false,
    season: this.seasons[this.getCurrentSeasonIdx()].name,
  }

  changeUserInputSeason = () => {
    this.setState({userInputSeason: !this.state.userInputSeason})
  }

  changeSeason = (e) => {
    const newSeason = e.target.value
    this.setState({ season: newSeason })
  }

  render() {
    const qna = [...level1qna]
    const { userInputSeason, season } = this.state

    const seasons = this.seasons
    const seasonIdx = seasons.findIndex(season => season.name === this.state.season)

    const backgroundImg = seasons[seasonIdx].background
    const appStyle = {
      backgroundImage: `url(${backgroundImg})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'contain',
      backgroundPosition: 'center',
      minHeight: '100vh',
    }

    const seasonNames = seasons.map(season => season.name)
    const currentSeason = seasonNames[this.getCurrentSeasonIdx()]
    return (
      <div style={appStyle}>
        <Header />
        <Level1Class style={sectionLimit} qna={qna} />
        <Level2Class
          style={sectionLimit}
          seasons={seasonNames}
          currentSeason={currentSeason}
          existingSeason={season}
          userInputSeason={userInputSeason}
          handleSeasonInput={this.changeUserInputSeason}
          handleSeasonChange={this.changeSeason}
        />
      </div>
    )
  }
}

export default App
