import type { MetaFunction } from '@remix-run/cloudflare'
import { NavLink } from '@remix-run/react'

import { buttonVariants } from '~/components/ui'
import { Plus } from 'lucide-react'
import { cn } from '~/utils/cn'

export const meta: MetaFunction = () => {
	return [{ title: 'MarketMount: Databases' }]
}

const DatabasesIndex = () => {
	return (
		<>
			<div className='app-content__header'>
				<h1>Databases</h1>
				<NavLink
					to='/databases/new'
					className={cn(buttonVariants({ variant: 'default', size: 'sm' }))}
				>
					<Plus className='mr-1 w-5' />
					CREATE DATABASE
				</NavLink>
			</div>
		</>
	)
}

DatabasesIndex.displayName = 'DatabasesIndex'
export default DatabasesIndex
