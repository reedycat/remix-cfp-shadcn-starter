import { useState } from 'react'
import { Outlet } from '@remix-run/react'
// import { observer } from 'mobx-react-lite'

import { cn } from '~/utils/cn'
import { Topbar } from './_layout/Topbar'
import { Sidebar } from './_layout/Sidebar'

import '~/styles/routes/app.css'

// https://github.com/shadcn-ui/ui/blob/main/apps/www/app/examples/dashboard/page.tsx

const AppLayout = () => {
	const [isCollapsed, setIsCollapsed] = useState(false)

	const toggleSidebar = () => {
		setIsCollapsed((prev) => !prev)
	}

	return (
		<div className='wrapper-m md:wrapper'>
			<Sidebar isCollapsed={isCollapsed} />
			<div
				className={cn(isCollapsed ? 'md:ml-16' : 'md:ml-64', 'app-container')}
			>
				<Topbar
					isCollapsed={isCollapsed}
					toggleSidebar={toggleSidebar}
				/>
				<div className='app-content'>
					<Outlet />
				</div>
			</div>
		</div>
	)
}

AppLayout.displayName = 'AppLayout'
export default AppLayout
