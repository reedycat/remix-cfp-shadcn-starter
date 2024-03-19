import type { MetaFunction } from '@remix-run/cloudflare'

export const meta: MetaFunction = () => {
	return [{ title: 'MarketMount: Edit Application' }]
}

const EditApplication = () => {
	return (
		<>
			<div className='app-content__header'>
				<h1>Edit Application</h1>
			</div>
		</>
	)
}

EditApplication.displayName = 'EditApplication'
export default EditApplication
