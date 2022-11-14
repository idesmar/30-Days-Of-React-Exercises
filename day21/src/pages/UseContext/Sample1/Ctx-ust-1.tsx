import { useState, createContext, useContext } from 'react'
import { places } from '../../../db/places'
import styles from '../sample.module.scss'


const { body } = styles

const ImageContext = createContext<boolean>(false)

function CtxUst1() {
  const [isLarge, setIsLarge] = useState(false)

  return <div className={body}>
    <ImageContext.Provider value={isLarge}>
      <ImageSizeControl
        isLarge={isLarge}
        setIsLarge={setIsLarge}
      />
      <Places places={places} />
    </ImageContext.Provider>
  </div>
}

function ImageSizeControl({ isLarge, setIsLarge }: ImageSizeControlProps) {
  return <div>
    <label>
      <input
        type="checkbox"
        name="is-large"
        checked={isLarge}
        onChange={e => setIsLarge(prev => e.target.checked)}
      />
      Use Large Images
    </label>
  </div>
}

function Places({ places }: PlacesProps) {

  const isLarge = useContext(ImageContext)
  const imageSize = isLarge ? 150 : 100
  return <div>
    {
      places.map(place => {
        const { id, name, imageId, description } = place
        return <div key={id}>
          <img
            src={`https://i.imgur.com/${imageId}l.jpg`}
            width={imageSize}
            height={imageSize}
            alt=""
          />
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
      })
    }
  </div>
}


export { CtxUst1 }
