import './Level3.scss'
import makeID from '../lib/makeID'
import tenHighestPopulation from '../data/ten_most_highest_populations.js'
import { rem } from '../lib/utils'


const Bar = ({ worldPop, population }) => {
  /*
    Note: <meter> tag would be better rather than a <span> to create bar
    but IE doesn't support it. Yes, IE is dead but [...excuses]
  */
  const getWidthPercent = (pop) => (pop / worldPop * 100).toFixed(3) + '%'
  const barWidth = getWidthPercent(population)
  const barStyle = {
    display: 'flex',
    alignItems: 'center',
    width: barWidth,
    backgroundColor: '#ffa500',
    color: 'transparent',
    borderRadius: '0.6em',
    height: rem(20),
    fontSize: '0.3em',
  }
  return (
    <td className='bar-wrapper' >
      <span style={barStyle}>{barWidth}</span>
    </td>
  )
}


const Row = ({ population: { country, population }, worldPop }) => {
  const dataStyle = { fontSize: rem(12), fontWeight: '700', }
  // dataStyle + {textAlign: 'start'}
  const thStyle = Object.assign({}, dataStyle, {textAlign: 'start'})
  return (
    <tr>
      <th style={thStyle} >{country.toUpperCase()}</th>
      <Bar worldPop={worldPop} population={population} />
      <td style={dataStyle} >{population.toLocaleString()}</td>
    </tr>
  )
}


const Rows = ({ populations }) => {
/*
  const worldPop = populations[0].population
  return (
    populations.map(population => (
      <Row
        key={population._id}
        population={population}
        worldPop={worldPop}
      />
    ))
  )
*/
  // NOTE: In case the possibility of data not sorted; or a change that would cause one:
  const sorted = [...populations].sort((a, b) => {
    if (a.population < b.population) return 1
    if (a.population > b.population) return -1
    return 0
  })
  const worldPop = sorted[0].population
  return sorted.map((population) => (
    <Row
      key={population._id}
      population={population}
      worldPop={worldPop}
    />
  ))
}


const Level3 = () => {

  // > hard copy of data with generated id using makeID
  const topPopulations = [...tenHighestPopulation].map(obj => Object.assign(obj, { _id: makeID(7) }))

  const tableStyle = { borderSpacing: rem(6), }
  return (
    <section>
      <h2>Exercise Level 3</h2>
      <h3>World Population</h3>
      <table style={tableStyle} id='data'>
        <caption>Ten most populated countries</caption>
        <thead className='sr-only'>
          <tr>
            <th scope='col'>Country</th>
            <th scope='col'>Percent of World</th>
            <th scope='col'>Population</th>
          </tr>
        </thead>
        <tbody>
          <Rows populations={topPopulations} />
        </tbody>
      </table>
    </section>
  )
}

export default Level3