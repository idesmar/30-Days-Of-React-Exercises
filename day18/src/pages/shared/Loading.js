import { AiOutlineLoading3Quarters as Spinner } from "react-icons/ai"
import sharedStyles from '../styles/shared.module.css'


const { spinner, loadingDiv, loadingDivContainer } = sharedStyles

const LoadingDiv = ({ message = '' }) => {

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
