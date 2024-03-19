import type { MetaFunction } from '@remix-run/cloudflare'
import { NavLink } from '@remix-run/react'

import { buttonVariants } from '~/components/ui'
import { Plus } from 'lucide-react'
import { cn } from '~/utils/cn'

export const meta: MetaFunction = () => {
	return [{ title: 'MarketMount: Migrations' }]
}

const MigrationsIndex = () => {
	return (
		<>
			<div className='app-content__header'>
				<h1>Migrations</h1>
				<NavLink
					to='/migrations/new'
					className={cn(buttonVariants({ variant: 'default', size: 'sm' }))}
				>
					<Plus className='mr-1 w-5' />
					CREATE MIGRATION
				</NavLink>
			</div>
		</>
	)
}

MigrationsIndex.displayName = 'MigrationsIndex'
export default MigrationsIndex
