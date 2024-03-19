// import { useNavigate } from '@remix-run/react'
// import { observer } from 'mobx-react-lite'
import { cn } from '~/utils/cn'
// import { defConfig } from '~/config'

// import { Logo } from '~/components'

interface SidebarHeaderProps {
	isCollapsed: boolean
}

const SidebarHeader = ({ isCollapsed }: SidebarHeaderProps) => {
	// const navigate = useNavigate()

	// const logoClickHandler = () => {
	// 	navigate(defConfig.workspaceHomeRedirect)
	// }

	return (
		<div className={cn('sidebar-header', isCollapsed && 'toggled')}>
			<h2>{isCollapsed ? 'M' : 'MarketMount'}</h2>
			{/* <Logo
				className='logo-dashboard'
				onClick={logoClickHandler}
			/> */}
		</div>
	)
}

SidebarHeader.displayName = 'SidebarHeader'
export default SidebarHeader
