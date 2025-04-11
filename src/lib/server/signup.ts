import { BACKEND_API_URL } from '$env/static/private';

export const signup = async (username: string, email: string, password: string) => {
	const response = await fetch(`${BACKEND_API_URL}/signup`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			username,
			email,
			password
		})
	});

	if (response.ok) {
		return await response.json();
	} else if (response.status === 409) {
		throw new Error('User already exists');
	} else {
		throw new Error('Signup failed');
	}
};
