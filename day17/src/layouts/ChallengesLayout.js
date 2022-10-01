import { Link, Outlet } from "react-router-dom"

const ChallengesLayout = () => {
  const layoutStyle = {
    padding: '1rem',
    textAlign: 'center',
    width: 'fit-content',
    margin: '0 auto',
    border: '1px solid cyan',
    borderRadius: '0.4em',
  }
  return (
    <>
      <aside style={layoutStyle}>
        <nav>
          <ul>
            <li><Link to="/challenges/1">Challenge 1</Link></li>
            <li><Link to="/challenges/2">Challenge 2</Link></li>
          </ul>
        </nav>
      </aside>

      {/* //> Outlet - placeholder */}
      <Outlet />
    </>
  )
}


export { ChallengesLayout }
