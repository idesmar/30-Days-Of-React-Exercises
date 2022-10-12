import { useEffect, useState } from "react"
import { getTimeStamp } from "../../utils/misc"

/* //> DEV NOTES
  * Tested use of AbortController to only fetch data ONCE
    - Successful in only getting data ONCE
    - 1st fetch was aborted (abort() at useEffect end catches up to 1st fetch)
    - 2nd fetch (due to useEffect running a second time) is persisting
    ! useEffect still triggered twice which means that cleanup function may be inefficient
    ? TEST with react-query
*/


const Level1 = () => {
  const [qna, setQna] = useState([
    {
      _id: '',
      question: '',
      answer: '',
      list: [''],
    }
  ])

  useEffect(() => {
    /* //> NOTICE that fetch URL is one directory up
      Reason: current location when fetching is `{baseURL}/exercises/level1` */
    const URL = '../data/level1qna.json'

    /* ========================================================================= */

    console.count('useEffect')
    console.log(getTimeStamp('useEffect'))

    const controller = new AbortController()
    console.table(controller.signal, controller.signal.idesmarTimeStamp = getTimeStamp())

    /* //> fetch using promise chaining
    fetch(URL, { signal: controller.signal })
      .then(res => res.json())
      .then(data => {
        console.count('fetched data in promise chaining')
        setQna(prev => data)
      })
      .catch(err => console.log(err))
    */

    const fetchData = async () => {
      try {
        const res = await fetch(URL, { signal: controller.signal })
        console.log(getTimeStamp('--- FETCHED DATA ---'),'in async function')
        const data = await res.json()
        setQna(prev => data)
      }
      catch (err) {
        /* aborted fetch */
        // throw err
        console.log(getTimeStamp('err'), err)
      }
    }

    fetchData()

    return () => {
      /* //> timestamp comparison to prove abort is applied to 1st useEffect
        timestamp below and the UPDATED controller.signal.reason (on FIRST useEffect) which contains a getTimeStamp --- shows that the abort method was applied to it */
      console.log(getTimeStamp('return cleanup function'))

      /* //> aborts the initial fetch so it is only ran once
        ! Does not stop double useEffect trigger
        ? Because it is not a real cleanup function */
      controller.abort(`${getTimeStamp('Run only once')}`)
    }

    /* ========================================================================= */
  }, [])

  return (
    <div>
      <h1>Level 1</h1>
      {console.log(qna)}
    </div>
  )
}


export { Level1 }
