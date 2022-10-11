import { useOutletContext } from "react-router-dom"


const LiveSearch = () => {
  const search = useOutletContext()
  return (
    <div>
      <p>index element of '/search' -- data passed from Outlet to this component (useOutletContext)</p>
      <p>Searching for <span style={{ borderBottom: '1px solid' }}>{search === '' ? '...' : search}</span> ?</p>
    </div>
  )
}


export { LiveSearch }
