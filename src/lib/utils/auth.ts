import { goto } from '$app/navigation';
import { authClient } from '$src/auth-client';

export async function signUp(email: string, password: string, name: string) {
	return await authClient.signUp.email(
		{
			email,
			password,
			name,
		},
		{
			onRequest: (ctx) => {
				//show loading
			},
			onSuccess: (ctx) => {
				goto('/login');
			},
			onError: (ctx) => {
				// toast
			},
		},
	);
}

export async function signIn(email: string, password: string, rememberMe: boolean) {
	return await authClient.signIn.email(
		{
			email,
			password,
			rememberMe,
		},
		{
			onRequest: (ctx) => {
				//show loading
			},
			onSuccess: (ctx) => {
				goto('/');
			},
			onError: (ctx) => {
				// toast
			},
		},
	);
}

export async function signOut() {
	return await authClient.signOut({
		fetchOptions: {
			onRequest: (ctx) => {
				//show loading
			},
			onSuccess: () => {
				goto('/login');
			},
			onError: (ctx) => {
				// toast
			},
		},
	});
}
