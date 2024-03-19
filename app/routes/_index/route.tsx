import {
	type LoaderFunction,
	type LoaderFunctionArgs,
	redirect
} from '@remix-run/cloudflare'
// import { getSessionData } from '~/api/services'
import { defConfig } from '~/config'

export const loader: LoaderFunction = async ({
	request
}: LoaderFunctionArgs) => {
	// const { token } = await getSessionData(request)
	const token = 'abc'
	const to = token ? defConfig.homeRedirect : defConfig.signInRedirect
	throw redirect(to)
}
