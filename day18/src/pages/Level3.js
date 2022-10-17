import sharedStyles from './styles/shared.module.css'


const { middleHeading, small } = sharedStyles

const Level3 = () => {
  return (
    <div>
      <h2 className={middleHeading}>Level 3</h2>
      <small className={small}>* Using @tanstack/react-query</small>
    </div>
  )
}


export { Level3 }
