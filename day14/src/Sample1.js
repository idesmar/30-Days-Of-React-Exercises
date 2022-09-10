import { Component } from 'react'

/* //* DEV NOTES
  updates
  - url
    - https://restcountries.eu/rest/v2/all -> https://restcountries.com/v3.1/all'
  - end points
    - country.name -> country.name.official
    - country.flag -> country.flags.svg
*/


class Sample1 extends Component {
  constructor(props) {
    super(props)
    console.log('constructor')
    this.state = {
      firstName: 'John',
      data: [],
    }
  }

  static getDerivedStateFromProps(props, state) {
    console.log(props, state, 'props, state | getDerivedStateFromProps')
    return { firstName: props.firstName }
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log(nextProps, nextState, 'nextProps, nextState | shouldComponentUpdate')
    /* render() will not be invoked if shouldComponentUpdate() returns false */
    return true
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(prevState, prevProps, 'prevState, prevProps | componentDidUpdate')
  }

  componentDidMount() {
    console.log('componentDidMount first line')
    const API_URL = 'https://restcountries.com/v3.1/all'
    fetch(API_URL)
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        console.log('data from fetching countries | componentDidMount')
        this.setState({
          data,
        })
      })
      .catch((error) => {
        console.log(error, 'error | componentDidMount')
      })
  }

  renderCountries = () => {
    return this.state.data.map((country) => {
      return (
        <div
          key={country.name.official}
          style={{
            border: '1px solid',
            width: 'fit-content',
            boxSizing: 'border-box',
            padding: '1rem',
            margin: '1rem 0',
            /* //* margin collapses so distance between div's will be 1rem and not 2rem */
          }}
        >
          <div>
            <img width={300} src={country.flags.svg} alt={country.name.official} />
          </div>
          <div>
            <h3>{country.name.official}</h3>
            <p>Population: {country.population}</p>
          </div>
        </div>
      )
    })
  }

  render() {
    console.log('render')
    return (
      <div className='App'>
        {console.log('return')}
        <h2>Calling Rest Counties API</h2>
        <div>
          <p>There are {this.state.data.length} countries in the API</p>
          <div>{this.renderCountries()}</div>
        </div>
      </div>
    )
  }
}


export { Sample1 }
