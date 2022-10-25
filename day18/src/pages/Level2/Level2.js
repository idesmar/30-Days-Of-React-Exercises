import { useEffect, useState } from 'react'
import { catServices } from '../../services/services'
import { getTimestamp, refGenerator } from '../../utils/loggerAssist'
import { FaCat } from 'react-icons/fa'
import { LoadingDiv } from '../shared/Loading'
import level2Styles from './Level2.module.css'
import sharedStyles from '../shared/shared.module.css'

/* //> DEV NOTES
  * .toJSON() to get error in a more readable view.
    -- ONLY applies to Axios
    -- Not applicable to errors not coming from data fetching eg. Cannot get property of undefined
*/


/* Creates a refGen specific to this page/module */
const refGen = refGenerator('L2')

const { level2, blankImgStyle, catCardStyle, catCardCollection, catCardDesc } = level2Styles
const { middleHeading, small, loadingDivContainer } = sharedStyles

const idealImgWidth = '200px'

const CatCard = ({
  cat: {
    name,
    image,
    aveWeight,
    aveLifeSpan,
  }
}) => {
  const blankImg = {
    width: idealImgWidth,
    height: idealImgWidth,
  }
  return (
    <div className={catCardStyle}>
      {
        image
          ? <img src={image.url} alt="" width={idealImgWidth} loading='lazy' />
          : <div className={blankImgStyle} style={blankImg}><FaCat /></div>
      }
      <h4>{name}</h4>
      <div className={catCardDesc}>
        <p>Ave Weight: {aveWeight} kg</p>
        <p>Ave Life Span: {aveLifeSpan} yrs</p>
      </div>
    </div>
  )
}

/* Function */
const getCatsWithAverages = (cats) => {
  /* get average based on string range (eg '3 - 5') */
  const getAverage = (strRange = '') => {
    const arr = strRange.split(' - ')
    return arr.reduce((acc, curr) => acc + +curr, 0) / 2
  }
  /* build object that contains needed data */
  return cats.map(cat => {
    const aveWeight = getAverage(cat.weight.metric)
    const aveLifeSpan = getAverage(cat.life_span)
    const { id, name, image } = cat
    return { id, name, image, aveWeight, aveLifeSpan }
  })
}

const Level2 = () => {
  const [loading, setLoading] = useState(true)
  const [computedCats, setComputedCats] = useState([
    {
      id: '',
      name: '',
      imgURL: '',
      aveWeight: 0,
      aveLifeSpan: 0,
    }
  ])

  useEffect(() => {
    const refGenValue = refGen.next().value
    console.log(getTimestamp(`useEffect start: ${refGenValue}`))
    const controller = new AbortController()

    const getCats = async () => {
      try {
        const data = await catServices.axiosCats(controller.signal)
        const computed = getCatsWithAverages(data)
        setComputedCats(prev => computed)
        setLoading(prev => false)
        console.log(getTimestamp(`Set states complete: ${refGenValue}`))
      }
      catch (err) {
        /* //> .toJSON() to get error in a more readable view. Only applies to axios
          Not applicable to errors not coming from data fetching eg. Cannot get property of undefined */
        console.log(err)
      }
    }
    getCats()

    console.log(getTimestamp(`useEffect end: ${refGenValue}`))
    return () => {
      controller.abort(getTimestamp(`Abort req for ${refGenValue}`))
    }
  }, [])

  return (
    <div className={level2}>
      <h2 className={middleHeading}>Level 2</h2>
      <small className={small}>* Using axios.get()</small>
      <div>
        <h3>Average metric weight and life span of cats</h3>
        {
          loading
            ? <div className={loadingDivContainer}>
              <LoadingDiv message='Getting cat data using axios and computing desired averages' />
            </div>
            : <div className={catCardCollection}>{
              computedCats.map(cat => <CatCard key={cat.id} cat={cat} />)}</div>
        }
      </div>
    </div>
  )
}


export { Level2 }
