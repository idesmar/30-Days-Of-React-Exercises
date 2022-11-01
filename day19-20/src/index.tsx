import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { App } from './App/App'
import './index.css'


const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
)

const queryCats = new QueryClient()

root.render(
	<React.StrictMode>
		<Router>
			<QueryClientProvider client={queryCats}>
				<App />
			</QueryClientProvider>
		</Router>
	</React.StrictMode>
)
