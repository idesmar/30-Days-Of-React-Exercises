import sharedStyles from './styles/shared.module.css'


const { middleHeading } = sharedStyles
const NotFound = () => {
  return (
    <h2 className={middleHeading}>You seem lost</h2>
  )
}


export { NotFound }
