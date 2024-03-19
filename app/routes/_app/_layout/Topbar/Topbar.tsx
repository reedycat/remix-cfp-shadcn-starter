// import { observer } from 'mobx-react-lite'
// import { useLocation } from '@remix-run/react'
// import { useTitle } from '~/hooks'

// import { AvatarTrigger, Notifications, LangSelector } from '.'
import { ChevronsLeft, ChevronsRight } from 'lucide-react'
import { Button, buttonVariants } from '~/components/ui/button'
import { cn } from '~/utils/cn'

interface TopbarProps {
	isCollapsed: boolean
	toggleSidebar: () => void
}

const Topbar = ({ isCollapsed, toggleSidebar }: TopbarProps) => {
	const ToggleIcon = isCollapsed ? ChevronsRight : ChevronsLeft
	// const location = useLocation()
	// const pageTitle = useTitle(location.pathname)
	// const pageTitle = 'Dashboard'

	return (
		<div className='topbar'>
			<Button
				className={cn(buttonVariants({ variant: 'outline' }), 'toggle-btn')}
				onClick={toggleSidebar}
			>
				<ToggleIcon />
			</Button>

			{/* <div>
				<h1 className='text-xl font-bold leading-none'>{pageTitle}</h1>
			</div> */}

			<div className='flex items-center justify-between gap-8'>
				{/* <LangSelector />
				<Notifications />
				<AvatarTrigger /> */}
			</div>
		</div>
	)
}

Topbar.displayName = 'Topbar'
export default Topbar
