import sharedStyles from './styles/shared.module.css'
import { userServices } from '../services/services'
import { useEffect, useState } from 'react'
import { getTimestamp, refGen } from '../utils/misc'
import level2Styles from './styles/Level2.module.css'

/* //> DEV NOTES
  * .toJSON() to get error in a more readable view.
    -- ONLY applies to Axios
*/


const { level2 } = level2Styles
const { middleHeading, small } = sharedStyles

const Level2 = () => {
  const [loading, setLoading] = useState(true)
  const [cats, setCats] = useState([
    {
      weight: {
        metric: '',
      },
      life_span: '',
    }
  ])

  useEffect(() => {
    const refGenValue = refGen.next().value
    console.log(getTimestamp(`useEffect start: L2-${refGenValue}`))
    const controller = new AbortController()
    const getCats = async () => {
      try {
        const data = await userServices.axiosCats(controller.signal)
        console.log(data)
        // setCats(prev => data)
      }
      catch (err) {
        /* //> .toJSON() to get error in a more readable view. Only applies to axios */
        console.log(err.toJSON())
      }
    }
    getCats()
    console.log(getTimestamp(`useEffect end: L2-${refGenValue}`))
    return () => {
      controller.abort(getTimestamp(`Abort req for L2-${refGenValue}`))
    }
  }, [])

  return (
    <div className={level2}>
      <h2 className={middleHeading}>Level 2</h2>
      <small className={small}>* using axios.get()</small>
    </div>
  )
}


export { Level2 }
