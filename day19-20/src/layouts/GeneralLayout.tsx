import { Outlet } from 'react-router-dom'
import { LoadingDiv } from '../shared/Loading/Loading'
import { useCatsQuery } from '../hooks/useCatsQuery'
import { getCatsGenInfo } from '../helpers/catHelpers'
import { FaCat as CatIcon } from 'react-icons/fa'
import styles from './generalLayout.module.css'


const { catsGenInfo, iconWrapper, largeText, importantData } = styles

function GeneralLayout() {

  const { isLoading, isError, error, data: cats } = useCatsQuery()

  if (isLoading) return <LoadingDiv />

  if (isError) console.log(error)

  if (cats) {
    const { count, aveWeight, aveLifeSpan } = getCatsGenInfo(cats)
    return (
      <>
        <div className={catsGenInfo}>
          <div className={iconWrapper}>
            <CatIcon />
          </div>
          <div>
            <p className={largeText}>There are {count} Cat Breeds</p>
            <p>On average, a cat can weigh about <span className={importantData}>{aveWeight} kg</span> and live about <span className={importantData}>{aveLifeSpan} years</span>.</p>
          </div>
        </div>

        <Outlet context={cats} />
      </>
    )
  }

  return null
}


export { GeneralLayout }
