import appStyle from '../App.module.css'


const {pageWrapper} = appStyle

/* //> HOC practice ONLY
  this will be useful if it is used by more than one component */
  const withContainer = (Comp) => {
    return () => (
      <div className={pageWrapper} >
        <Comp />
      </div>
    )
  }


export { withContainer }
