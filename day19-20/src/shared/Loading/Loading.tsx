import { useEffect, useState } from "react"
import { AiOutlineLoading3Quarters as Spinner } from "react-icons/ai"
import styles from './loading.module.css'


const { loadingDivContainer, loadingDiv, spinner } = styles

function LoadingDiv({ message, timer, timerOutMessage }: LoadingProps) {
  const [isLoadingEnd, setIsLoadingEnd] = useState(false)

  useEffect(() => {
    if (!timer) return

    const loadingTimeout = setTimeout(() =>
      setIsLoadingEnd(prev => true), timer)

    return () => clearTimeout(loadingTimeout)
  }, [timer])

  if (isLoadingEnd) {
    return <>
      <p>{timerOutMessage}</p>
    </>
  }

  return (
    <div className={loadingDivContainer}>
      <div className={loadingDiv}>
        <Spinner className={spinner} />
        {
          message && <p>{message}</p>
        }
      </div>
    </div>
  )
}


export { LoadingDiv }
