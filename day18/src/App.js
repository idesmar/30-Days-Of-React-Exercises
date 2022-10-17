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
			</ul>
		</nav>
	)
}

const App = () => {
	return (
		<>
			<header className={appHeader}>
				<h1>30 Days of React: Day 18 | Fetch and Axios</h1>
				<MainNavigation />
			</header>
			<main className={main}>
				<MainRoutes />
			</main>
		</>
	)
}


export { App }
