import { SidebarNavGroup } from '.'
import { sidebarNavGroups } from './data'

interface SidebarContentProps {
	isCollapsed: boolean
}

const SidebarContent = ({ isCollapsed }: SidebarContentProps) => {
	return (
		<div className='sidebar-content'>
			<SidebarNavGroup
				isCollapsed={isCollapsed}
				items={sidebarNavGroups.group_1}
			/>

			<div className='devider-y' />

			<SidebarNavGroup
				isCollapsed={isCollapsed}
				items={sidebarNavGroups.group_2}
			/>

			<div className='devider-y' />

			<SidebarNavGroup
				isCollapsed={isCollapsed}
				items={sidebarNavGroups.group_3}
			/>
		</div>
	)
}

SidebarContent.displayName = 'SidebarContent'
export default SidebarContent
