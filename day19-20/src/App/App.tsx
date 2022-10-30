import React, { useEffect, useState } from "react"
import { MainRoutes } from "../routes/routes"
import { Footer } from "./Footer/Footer"
import { Navigation } from "./Navigation/Navigation"
import styles from './app.module.css'
import { rem } from "../utils/unitConvert"


const { header, main, footer } = styles

const App = () => {
	/* Ensure `main` is visible even with resizing;
		NOTE: footer contains data-fixed-inner-footer
		which can block `main` if there is no space to cover overlap
	*/
	const [footerHeight, setFooterHeight] = useState('0')

	useEffect(() => {
		/* console.count('useEffect') */
		const footer = document.querySelector('[data-fixed-inner-footer]')

		const getHeightOfFooter = () => {
			/* console.count('getHeightOfFooter') */

			if (footerHeight !== footer?.clientHeight + 'px') {
				setFooterHeight(prev => rem(footer?.clientHeight))
				// setFooterHeight(prev => footer?.clientHeight + 'px')
				/* console.count('set state') */
			}
		}

		/* //! runs getHeightOfFooter only once on initial mount but it's SO HACKY */
		const timeoutHack = setTimeout(getHeightOfFooter)
		window.addEventListener('resize', getHeightOfFooter)

		/* cleanup function */
		return () => {
			clearTimeout(timeoutHack)
			window.removeEventListener('resize', getHeightOfFooter)
		}
	}, [footerHeight])

	return (
		<>
			<header className={header}>
				<Navigation />
			</header>
			<main className={main}>
				<MainRoutes />
			</main>
			<footer className={footer} style={{ height: footerHeight }}>
				<div data-fixed-inner-footer>
					<Footer />
				</div>
			</footer>
		</>
	)
}


export { App }
