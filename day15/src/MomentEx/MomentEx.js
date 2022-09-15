import {
  // useRef,
  useState,
} from 'react'
import moment from 'moment'
import momentStyle from './momentEx.module.css'


const { momentRes } = momentStyle

const Moment = () => {
  const [data, setData] = useState({
    date: '',
    time: '',
  })

  const { date, time } = data

  const handleChange = (e) => {
    const { name, value } = e.target
    console.dir(e.target)
    console.log(name, value)
    setData(prev => ({ ...prev, [name]: value }))
  }

  return (
    <div>
      <div>
        <label htmlFor="date">Select Date: </label>
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
            <p>date: {date}</p>
            <p className={momentRes}>moment(date).format(): <span>{moment(date).format()}</span></p>
            <p className={momentRes}>moment(date).format('MMM DD, YYYY'): <span>{moment(date).format('MMM DD, YYYY')}</span></p>
          </div>
        )
      }
      <div>
        <label htmlFor="time">Select Time: </label>
        <input
          type="datetime-local"
          name="time"
          id="time"
          onChange={handleChange}
        />
      </div>
      {console.log(time)}
      {
        time && (
          <div>
            <p>Datetime-Local: {time}</p>
            <p className={momentRes}>moment(time).format(): <span>{moment(time).format()}</span></p>
            <p className={momentRes}>moment(time).format('hh:mm A'): <span>{moment(time).format('hh:mm A')}</span></p>
          </div>
        )
      }
    </div>
  )
}


export { Moment }
