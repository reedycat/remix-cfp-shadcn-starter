import { NavLink } from '@remix-run/react'

import { type NavItem } from '~/@types'
import { cn } from '~/utils/cn'

import {
	buttonVariants,
	TooltipProvider,
	Tooltip,
	TooltipContent,
	TooltipTrigger
} from '~/components/ui'

interface SidebarNavProps {
	isCollapsed: boolean
	items: NavItem[]
}

const SidebarNavGroup = ({ isCollapsed, items }: SidebarNavProps) => {
	return (
		<div
			data-collapsed={isCollapsed}
			className='group flex flex-col gap-4 py-0 data-[collapsed=true]:py-0'
		>
			<nav className='grid gap-1 px-2 group-[[data-collapsed=true]]:justify-center group-[[data-collapsed=true]]:px-2'>
				{items.map((link) => {
					return isCollapsed ? (
						<TooltipProvider key={link.to}>
							<Tooltip
								key={link.to}
								delayDuration={0}
							>
								<TooltipTrigger>
									<NavLink
										key={link.to}
										to={`/${link.to}`}
										className={({ isActive }) =>
											isActive
												? cn(buttonVariants({ variant: 'basic', size: 'icon' }))
												: cn(buttonVariants({ variant: 'ghost', size: 'icon' }))
										}
									>
										<link.icon className='h-4 w-4' />
										<span className='sr-only'>{link.title}</span>
									</NavLink>
								</TooltipTrigger>
								<TooltipContent
									side='right'
									className='flex items-center gap-4'
								>
									{link.title}
									{link.label && (
										<span className='ml-auto text-primary-foreground'>
											{link.label}
										</span>
									)}
								</TooltipContent>
							</Tooltip>
						</TooltipProvider>
					) : (
						<NavLink
							key={link.to}
							to={`/${link.to}`}
							className={({ isActive }) =>
								isActive
									? cn(buttonVariants({ variant: 'basic' }), 'justify-start')
									: cn(buttonVariants({ variant: 'ghost' }), 'justify-start')
							}
						>
							<link.icon className='mr-2 h-4 w-4' />
							{link.title}
							{link.label && (
								<span className={cn('ml-auto text-xs')}>{link.label}</span>
							)}
						</NavLink>
					)
				})}
			</nav>
		</div>
	)
}

SidebarNavGroup.displayName = 'SidebarNavGroup'
export default SidebarNavGroup
