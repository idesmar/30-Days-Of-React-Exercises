import React from "react"
import { MainRoutes } from "../routes/routes"
import { Footer } from "./Footer/Footer"
import { Navigation } from "./Navigation/Navigation"
import styles from './app.module.css'


const { header, main, footer } = styles

const App = () => {
	return (
		<>
			<header className={header}>
				<Navigation />
			</header>
			<main className={main}>
				<MainRoutes />
			</main>
			<footer className={footer}>
				<Footer />
			</footer>
		</>
	)
}


export { App }
