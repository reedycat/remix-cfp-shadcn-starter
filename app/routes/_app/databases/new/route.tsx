import type { MetaFunction } from '@remix-run/cloudflare'

export const meta: MetaFunction = () => {
	return [{ title: 'MarketMount: New Database' }]
}

const NewDatabase = () => {
	return (
		<>
			<div className='app-content__header'>
				<h1>New Database</h1>
			</div>
		</>
	)
}

NewDatabase.displayName = 'NewDatabase'
export default NewDatabase
