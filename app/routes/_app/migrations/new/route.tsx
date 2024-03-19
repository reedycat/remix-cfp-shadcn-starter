import type { MetaFunction } from '@remix-run/cloudflare'

export const meta: MetaFunction = () => {
	return [{ title: 'MarketMount: New Migration' }]
}

const NewMigration = () => {
	return (
		<>
			<div className='app-content__header'>
				<h1>New Migration</h1>
			</div>
		</>
	)
}

NewMigration.displayName = 'NewMigration'
export default NewMigration
