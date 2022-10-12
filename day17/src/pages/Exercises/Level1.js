import { useEffect, useState } from "react"
import { getTimestamp } from "../../utils/misc"

/* //> DEV NOTES
  * Tested use of AbortController to fetch data only ONCE
    - Successful in only getting data ONCE
    - 1st fetch was aborted -- abort() at useEffect end catches up to 1st fetch
    - 2nd fetch (due to useEffect running a second time) is persists

        1st pre-fetch initialization       - [03:53]-[46.952] +
        abort signal reason sent/received  - [03:53]-[46.969]
        2nd pre-fetch initialization       - [03:53]-[46.990] -
        fetched data received              - [03:53]-[47.377] + 0.425 [from 1st pre-fetch]
                                                              - 0.387 [from 2nd pre-fetch]
                                                              ! 0.038 [wasted in 1st fetch]
  ? TEST with react-query if it is more efficient
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
    console.log(getTimestamp('useEffect'))

    const controller = new AbortController()
    /* adding custom timestamp */
    controller.signal.idesmarTimeStamp = getTimestamp()
    console.table(controller.signal)

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
        console.log(getTimestamp('--- FETCHED DATA ---'),'in async function')
        const data = await res.json()
        setQna(prev => data)
      }
      catch (err) {
        /* aborted fetch */
        // throw err
        console.log(getTimestamp('err'), err)
      }
    }

    fetchData()

    return () => {
      /* //> timestamp comparison to prove abort is applied to 1st useEffect
        timestamp below and the UPDATED controller.signal.reason (on FIRST useEffect) which contains a getTimestamp --- shows that the abort method was applied to it */
      console.log(getTimestamp('return cleanup function'))

      /* //> aborts the initial fetch to only fetch data ONCE */
      controller.abort(`${getTimestamp('Run only once')}`)
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
