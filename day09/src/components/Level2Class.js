import { Component } from 'react'
import { rem, rem4, em, toTitleCase } from '../lib/utils'
import { colors } from './__globalStyle'

/*
  Make a single page application which changes the body of the background based on the season of the year(Autumn, Winter, Spring, Summer)

  Make a single page application which change the body of the background based on the time of the day(Morning, Noon, Evening, Night)
*/

/* ////////////////////////////////////////////////////////
  REUSABLE COMPONENTS
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

  // > emulating hover effect
  const mouseEnter = (e) => {
    e.target.style.transform = 'scale(1.08)'
  }
  const mouseLeave = (e) => {
    e.target.style.transform = 'scale(1)'
  }

  return (
    <button
      style={buttonStyle}
      onClick={onClick}
      onMouseEnter={mouseEnter}
      onMouseLeave={mouseLeave}
    >
      {text}
    </button>
  )
}


const Input = ({
  input,
  groupName,
  existing,
  onChange,
}) => {

  const radioStyle = { all: 'revert', }
  const labelStyle = {  cursor: 'pointer', }

  return (
    <>
      <input
        style={radioStyle}
        type="radio"
        name={groupName}
        value={input}
        id={input}
        onChange={onChange}
        checked={existing === input}
      />
      <label
        style={labelStyle}
        htmlFor={input}
      >
        {toTitleCase(input)}
      </label>
    </>
  )
}

const Fieldset = ({
  theme,
  content,
  inputs,
  groupName,
  existing,
  onChange,
  style,
}) => {

  const defaultFieldsetStyle = {
    padding: 'revert',
    borderRadius: rem(8),
    marginTop: rem(12),
    opacity: '0.9',
    backdropFilter: 'blur(1.375rem)',
    backgroundColor: theme === 'dark' ? colors.darkBlue : colors.lightBlue,
  }
  const fieldsetStyle = { ...defaultFieldsetStyle, ...style }
  const legendStyle = {
    backgroundColor: theme === 'dark' ? colors.darkBlue : colors.lightBlue,
    padding: rem4(0, 10),
    borderRadius: rem(8),
  }

  return (
    <fieldset style={fieldsetStyle}>
      <legend style={legendStyle}>
        {content}
      </legend>
      {
        inputs.map(input => (
          <Input
            key={input}
            input={input}
            groupName={groupName}
            existing={existing}
            onChange={onChange}
          />
        ))
      }
    </fieldset>
  )
}


/* ////////////////////////////////////////////////////////
  CLASS COMPONENTS
//////////////////////////////////////////////////////// */

class Level2Class extends Component {

  render() {
    const {
      style, theme, headingStyle,
      // * Level2.1 Seasons
      seasons, currentSeason, existingSeason,
      userInputSeason, handleSeasonInput,
      handleSeasonChange,
      // * Level2.2 Time of Day
      timeOfDays, currentTimeOfDay, existingTimeOfDay,
      userInputTimeOfDay, handleTimeOfDayInput,
      handleTimeOfDayChange,
    } = this.props


    const textSeason = userInputSeason
      ? `Current season: ${toTitleCase(currentSeason)}`
      : 'Choose a season?'

    const textTimeOfDay = userInputTimeOfDay
      ? `Current time of day: ${toTitleCase(currentTimeOfDay)}`
      : 'Choose a time of day?'

    const seasonFieldset = userInputSeason && (
      <Fieldset
        theme={theme}
        inputs={seasons}
        content={textSeason}
        existing={existingSeason}
        groupName={'seasons'}
        onChange={handleSeasonChange}
      />
    )

    const timeOfDayInput = userInputTimeOfDay && (
      <Fieldset
        theme={theme}
        inputs={timeOfDays}
        content={textTimeOfDay}
        existing={existingTimeOfDay}
        groupName={'timeOfDay'}
        onChange={handleTimeOfDayChange}
      />
    )

    const defaultButtonStyle = {
      minWidth: 'fit-content',
      width: rem(200),
      maxWidth: '100%',
      display: 'block',
      margin: '0 auto',
    }

    const buttonSeasonStyle = {
      ...defaultButtonStyle,
      backgroundColor: userInputSeason ? colors.red : colors.green,
    }
    const buttonTimeOfDayStyle = {
      ...defaultButtonStyle,
      backgroundColor: userInputTimeOfDay ? colors.red : colors.green,
    }

    return (
      <section style={style} >
        <h2 style={headingStyle}>Level 2</h2>

        <div>
          <h3 style={headingStyle}>Level 2.1</h3>
          <Button
            text={textSeason}
            onClick={handleSeasonInput}
            style={buttonSeasonStyle}
          />
          {seasonFieldset}
        </div>

        <div>
          <h3 style={headingStyle}>Level 2.2</h3>
          <Button
            text={textTimeOfDay}
            onClick={handleTimeOfDayInput}
            style={buttonTimeOfDayStyle}
          />
          {timeOfDayInput}
        </div>
      </section>
    )
  }
}

export default Level2Class