import { auth } from '$src/auth';

export async function authenticate(email: string, password: string) {
	return await auth.api.signInEmail({
		body: {
			email,
			password,
		},
		asResponse: true,
	});
}
