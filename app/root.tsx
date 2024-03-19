import {
	Links,
	Meta,
	Outlet,
	Scripts,
	ScrollRestoration,
	isRouteErrorResponse,
	useRouteError
} from '@remix-run/react'

import { GlobalPendingIndicator } from '~/components/utils/global-pending-indicator'

import '~/styles/global.css'

export function Layout({ children }: { children: React.ReactNode }) {
	const locale = 'ru' // from session
	const lang = locale ?? 'en'
	const theme = 'light' // from session
	const dataTheme = theme ? theme : 'system'

	return (
		<html
			lang={lang}
			data-theme={dataTheme}
		>
			<head>
				<meta charSet='utf-8' />
				<meta
					name='viewport'
					content='width=device-width, initial-scale=1'
				/>
				<Meta />
				<Links />
			</head>
			<body>
				<GlobalPendingIndicator />
				{children}
				<ScrollRestoration />
				<Scripts />
			</body>
		</html>
	)
}

export default function App() {
	return <Outlet />
}

export function ErrorBoundary() {
	const error = useRouteError()
	let status = 500
	let message = 'An unexpected error occurred.'
	if (isRouteErrorResponse(error)) {
		status = error.status
		switch (error.status) {
			case 404:
				message = 'Page Not Found'
				break
		}
	} else {
		console.error(error)
	}

	return (
		<Layout>
			<div className='container prose py-8'>
				<h1>{status}</h1>
				<p>{message}</p>
			</div>
		</Layout>
	)
}
