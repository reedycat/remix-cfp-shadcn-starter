import {
	type MetaFunction,
	type LoaderFunction,
	type LoaderFunctionArgs,
	json
} from '@remix-run/cloudflare'
import { NavLink, useLoaderData } from '@remix-run/react'

import { buttonVariants } from '~/components/ui'
import { Plus } from 'lucide-react'
import { cn } from '~/utils/cn'

// import { type Env } from '~/@types'

export const meta: MetaFunction = () => {
	return [{ title: 'MarketMount: Applications' }]
}

export const loader: LoaderFunction = async ({
	context
}: LoaderFunctionArgs) => {
	const { env } = context
	// context.ctx.waitUntil
	// context.cf
	// context.cache

	const kvData = await env.KV_DATABASES.get('abc')

	const now = new Date()
	const ts = now.getMilliseconds().toString()

	// await env.KV_DATABASES.put('abc', ts)

	// if (!kvData) {
	// 	await env.KV_DATABASES.put('abc', 'local kv dbs 2')
	// 	console.log('write to kv')
	// }

	context.ctx.waitUntil(env.KV_DATABASES.put('abc', ts))

	const apiReq = await fetch(`${env.API_GATEWAY_URL}/r2/v1/buckets`, {
		headers: {
			Authorization: `Bearer ${env.API_GATEWAY_TOKEN}`
		}
	})
	const buckets = await apiReq.json()

	return json({ kvData, buckets })
}

const ApplicationsIndex = () => {
	const { kvData, buckets }: any = useLoaderData<typeof loader>()

	return (
		<>
			<div className='app-content__header'>
				<h1>Applications List</h1>
				<NavLink
					to='/applications/new'
					className={cn(buttonVariants({ variant: 'default', size: 'sm' }))}
				>
					<Plus className='mr-1 w-5' />
					CREATE APPLICATION
				</NavLink>
			</div>
			<div>{JSON.stringify(kvData)}</div>
			<div>{JSON.stringify(buckets)}</div>
		</>
	)
}

ApplicationsIndex.displayName = 'ApplicationsIndex'
export default ApplicationsIndex
