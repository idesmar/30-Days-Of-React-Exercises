import { Component } from 'react'
import { rem, rem4, em, toTitleCase } from '../lib/utils'
import { headingStyle } from './globalStyle'

/*
  Make a single page application which changes the body of the background based on the season of the year(Autumn, Winter, Spring, Summer)
*/

/* ////////////////////////////////////////////////////////
  REUSABLE COMPONENT
//////////////////////////////////////////////////////// */

const defaultButtonStyle = {
  padding: rem4(5, 12),
  backgroundColor: 'green',
  color: 'white',
  borderRadius: em(8),
  textAlign: 'center',
}

const Button = ({ text, onClick, style }) => {

  const buttonStyle = {
    ...defaultButtonStyle, ...style
  }
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
  FUNCTIONAL COMPONENT
//////////////////////////////////////////////////////// */

const Season = ({ season, existingSeason, onChange }) => {

  const radioStyle = {
    all: 'revert',
  }

  const labelStyle = {
    cursor: 'pointer',
  }

  return (
    <>
      <input
        style={radioStyle}
        type="radio"
        name='season'
        value={season}
        id={season}
        onChange={onChange}
        checked={existingSeason === season}
      />
      <label
        style={labelStyle}
        htmlFor={season}
      >
        {toTitleCase(season)}
      </label>
    </>
  )
}

class SeasonsClass extends Component {

  render() {
    const { seasons, onChange, existingSeason } = this.props

    return (
      <fieldset style={{all: 'revert'}}>
        <legend>Choose the season</legend>
        {seasons.map(season => (
          <Season
            key={season}
            season={season}
            existingSeason={existingSeason}
            onChange={onChange}
          />
        ))}
      </fieldset>
    )
  }
}


/* ////////////////////////////////////////////////////////
  CLASS COMPONENTS
//////////////////////////////////////////////////////// */

class Level2Class extends Component {

  render() {
    const {
      style, seasons, currentSeason, existingSeason,
      userInputSeason, handleSeasonInput,
      handleSeasonChange
    } = this.props

    const text = userInputSeason ? `Current season: ${toTitleCase(currentSeason)}` : 'Choose a season?'
    const seasonInput = userInputSeason && (
      <SeasonsClass
        seasons={seasons}
        existingSeason={existingSeason}
        onChange={handleSeasonChange}
      />
    )

    const backgroundColor = userInputSeason ? 'red' : 'green'
    const buttonStyle = {
      minWidth: 'fit-content',
      width: rem(200),
      maxWidth: '100%',
      backgroundColor,
    }

    return (
      <section style={style} >
        <h2 style={headingStyle}>Level 2</h2>
        <Button
          text={text}
          onClick={handleSeasonInput}
          style={buttonStyle}
        />
        { seasonInput }
      </section>
    )
  }
}

export default Level2Class