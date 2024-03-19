import type { MetaFunction } from '@remix-run/cloudflare'

export const meta: MetaFunction = () => {
	return [{ title: 'MarketMount: New Application' }]
}

const NewApplication = () => {
	return (
		<>
			<div className='app-content__header'>
				<h1>New Application</h1>
			</div>
		</>
	)
}

NewApplication.displayName = 'NewApplication'
export default NewApplication
