import { Outlet } from '@remix-run/react'

import { cn } from '~/utils/cn'

import '~/styles/routes/app.css'

const AuthLayout = () => {
	return (
		<div className='wrapper-m md:wrapper'>
			<header>LOGO</header>
			<div className='app-content'>
				<Outlet />
			</div>
		</div>
	)
}

AuthLayout.displayName = 'AuthLayout'
export default AuthLayout
