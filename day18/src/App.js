import { NavLink } from "react-router-dom"
import { MainRoutes } from "./routes/routes"
import AppStyles from './styles/App.module.css'


const {
	appHeader, main,
	navLink, activeNavLink,
} = AppStyles

const MainNavigation = () => {
	return (
		<nav>
			<ul>
				<li>
					<NavLink
						to='/'
						end
						className={({ isActive }) => isActive ? activeNavLink : navLink}
					>
						Home
					</NavLink>
				</li>
				<li>
					<NavLink
						to='level1'
						className={({ isActive }) => isActive ? activeNavLink : navLink}
					>
						Level 1
					</NavLink>
				</li>
				<li>
					<NavLink
						to='level2'
						className={({ isActive }) => isActive ? activeNavLink : navLink}
					>
						Level 2
					</NavLink>
				</li>
				<li>
					<NavLink
						to='level3'
						className={({ isActive }) => isActive ? activeNavLink : navLink}
					>
						Level 3
					</NavLink>
				</li>
				<li>
					<NavLink
						to='temp'
						className={({ isActive }) => isActive ? activeNavLink : navLink}
					>
						Temporary Tab
					</NavLink>
				</li>
			</ul>
		</nav>
	)
}


const smallStyle = {
	display: 'block',
	textAlign: 'center',
	fontSize: '0.7em',
	color: '#a10000',
	backgroundColor: '#41c050',
}

const App = () => {
	return (
		<>
			<header className={appHeader}>
				<h1>
					30 Days of React: Day 18 | Fetch and Axios
					<small style={smallStyle}>TEMP BRANCH FOR LEARNING REACT-QUERY</small>
				</h1>
				<MainNavigation />
			</header>
			<main className={main}>
				<MainRoutes />
			</main>
		</>
	)
}


export { App }
