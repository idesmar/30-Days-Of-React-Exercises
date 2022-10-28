import React from "react"
import { MainRoutes } from "../routes/routes"
import { Footer } from "./components/Footer"
import { Navigation } from "./components/Navigation"


const App = () => {
	return (
		<>
			<header>
				<Navigation />
			</header>
			<main>
				<MainRoutes />
			</main>
			<footer>
				<Footer />
			</footer>
		</>
	)
}


export { App }
