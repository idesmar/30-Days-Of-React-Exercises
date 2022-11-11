import { useState } from 'react'
import { useCatImgQuery } from '../../../hooks/useCatImgQuery'
import { FaCat as CatIcon } from 'react-icons/fa'
import styles from './searchResult.module.css'
import { LoadingDiv } from '../../../shared/Loading/Loading'


const { label, resultContainer, imgContainer, loadingContainer, catIcon } = styles

function SearchResult({ result }: SearchResultProps) {

  const { name, origin, description, id } = result
  const { isLoading, isError, error, data: catImage } = useCatImgQuery(id)
  const catImg = Array.isArray(catImage) ? catImage[0] : null

  const [showImage, setShowImage] = useState(false)
  if (isError) console.log(error)

  return <div className={resultContainer}>
    <div className={imgContainer}>
      {
        !showImage
          ? <button onClick={e => setShowImage(prev => true)}>
            Show Cat Image
          </button>
          : isLoading
            ? <div className={loadingContainer}>
              <LoadingDiv />
            </div>
            : !catImg
              ? <CatIcon className={catIcon} width='300px' />
              : <img
                width='300px'
                src={catImg.url}
                alt="" />
      }
    </div>
    <div>
      <p><span className={label}>Cat Breed:</span> {name}</p>
      <p><span className={label}>Country:</span> {origin}</p>
      <p><span className={label}>Description:</span> {description}</p>
    </div>

  </div>
}


export { SearchResult }
