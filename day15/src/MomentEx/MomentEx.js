import {
  // useRef,
  useState,
} from 'react'
import moment from 'moment'
import momentStyle from './moment.module.css'


const { momentRes } = momentStyle

const Moment = () => {
  const [data, setData] = useState({
    date: '',
    time: '',
  })

  const { date, time } = data

  const handleChange = (e) => {
    const { name, value } = e.target
    setData(prev => ({ ...prev, [name]: value }))
  }

  return (
    <section className='section'>
      <h3>MomentJs - for familiarity only, use alternatives in README.md</h3>
      <div>
        <label htmlFor="date">Select Moment Date: </label>
        <input
          type="date"
          name="date"
          id="date"
          onChange={handleChange}
        />
      </div>
      {
        date && (
          <div>
            <p>input[type="date"] &amp;&amp; data.date: {date}</p>
            <p className={momentRes}>moment(date).format(): <span>{moment(date).format()}</span></p>
            <p className={momentRes}>moment(date).format('MMM DD, YYYY'): <span>{moment(date).format('MMM DD, YYYY')}</span></p>
          </div>
        )
      }
      <div>
        <label htmlFor="time">Select Moment Time: </label>
        <input
          type="datetime-local"
          name="time"
          id="time"
          onChange={handleChange}
        />
      </div>
      {
        time && (
          <div>
            <p>input[type="datetime-Local"] &amp;&amp; data.time: {time}</p>
            <p className={momentRes}>moment(time).format(): <span>{moment(time).format()}</span></p>
            <p className={momentRes}>moment(time).format('hh:mm A'): <span>{moment(time).format('hh:mm A')}</span></p>
          </div>
        )
      }
    </section>
  )
}


export { Moment }
