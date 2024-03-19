export const defConfig = {
	appName: 'MarketMount',
	appSlug: 'marketmount',
	sessionName: '__session',
	sessionTokenKey: 'token',
	verificationCodeLen: 4, // min 3, max 6
	currency: 'USD',
	lang: 'en',
	darkMode: false,
	emailPlaceholder: 'name@email.com',
	mainSiteUrl:
		process.env.NODE_ENV === 'production'
			? 'https://app.marketmount.com'
			: 'http://localhost:5173',
	signInRedirect: '/signin',
	signUpRedirect: '/signup',
	signOutRedirect: '/',
	homeRedirect: '/applications',
	webHooksAuthHeader: 'X-MM-Auth',
	apiVersion: 'v1'
}

export const sessionCookieMaxAge = 60 * 60 * 24 * 30
