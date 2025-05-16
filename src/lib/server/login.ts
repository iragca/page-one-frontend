import { BACKEND_API_URL } from '$env/static/private';

export const login = async (username: string, password: string, svelte_fetch: Function) => {
    const response = await svelte_fetch(`${BACKEND_API_URL}/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username,
            password
        })
    });

    if (response.ok) {
        return await response.json();
    } else if (response.status === 401) {
        throw new Error('Invalid password');
    } else if (response.status === 404) {
        throw new Error('User not found');
    } else if (response.status === 500) {
        throw new Error('Wrong password');
    } else {
        throw new Error('Login failed');
    }
};
