import sharedStyles from '../shared/shared.module.css'


const { middleHeading } = sharedStyles
const NotFound = () => {
  return (
    <h2 className={middleHeading}>You seem lost</h2>
  )
}


export { NotFound }
