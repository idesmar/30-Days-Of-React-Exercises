import { AiOutlineLoading3Quarters as Spinner } from "react-icons/ai"
import styles from './loading.module.css'


const { loadingDivContainer, loadingDiv, spinner } = styles

function LoadingDiv({ message = '' }): JSX.Element {
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
