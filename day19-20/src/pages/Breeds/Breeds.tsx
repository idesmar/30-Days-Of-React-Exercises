import '../pages.module.css'
import { useOutletContext } from 'react-router-dom'
import { FaCat as CatIcon } from 'react-icons/fa'
import { getAverageFromDelimitedString } from '../../helpers/catHelpers'
import styles from './breeds.module.css'


const { blankImg, catCard, catCardCollection, catCardDesc, label } = styles

const labelBlock = { display: 'block' }

function Breeds() {
  const cats: Cat[] = useOutletContext()

  return (
    <div className={catCardCollection}>
      {
        cats.map(({ id, image, name, origin, temperament, life_span, weight, description }) =>
          <div key={id} className={catCard}>
            {
              image
                ? <div><img src={image.url} alt="" loading="lazy" /></div>
                : <div className={blankImg}><CatIcon /></div>
            }
            <h4>{name}</h4>
            <div className={catCardDesc}>
              <p><span className={label}>Country:</span> {origin}</p>
              <p><span style={labelBlock} className={label}>Temperament:</span> {temperament}</p>
              <p><span className={label}>Average Life Span:</span> {getAverageFromDelimitedString(life_span)} yrs</p>
              <p><span className={label}>Average Metric Weight:</span> {getAverageFromDelimitedString(weight.metric)} kg</p>
              <p><span style={labelBlock} className={label}>Description:</span> {description}</p>
            </div>
          </div>
        )
      }
    </div>
  )
}


export { Breeds }
