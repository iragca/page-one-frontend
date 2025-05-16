import { BACKEND_API_URL } from '$env/static/private';

export const udpatePassword = async (username: string, oldPassword: string, newPassword: string, svelte_fetch: Function) => {
    const response = await svelte_fetch(`${BACKEND_API_URL}/authentication/update-password`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username,
            oldPassword,
            newPassword
        })
    });

    if (response.ok) {
        return await response.json();
    } else if (response.status === 401) {
        throw new Error('Invalid password');
    } else if (response.status === 404) {
        throw new Error('User not found');
    } else {
        throw new Error('Signup failed');
    }
};
