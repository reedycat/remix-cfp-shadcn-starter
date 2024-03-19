import { cn } from '~/utils/cn'

import { SidebarHeader, SidebarFooter, SidebarContent } from './'

interface SidebarProps {
	isCollapsed: boolean
}

const Sidebar = ({ isCollapsed }: SidebarProps) => {
	return (
		<div
			data-collapsed={isCollapsed}
			className={cn('sidebar', isCollapsed && 'toggled')}
		>
			<SidebarHeader isCollapsed={isCollapsed} />
			<div className='devider-y' />
			<SidebarContent isCollapsed={isCollapsed} />
			<div className='devider-y' />
			<SidebarFooter />
		</div>
	)
}

Sidebar.displayName = 'Sidebar'
export default Sidebar
