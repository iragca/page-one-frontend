import type { PageServerLoad } from './$types';
import { login } from '$lib/server/login';
import { redirect, fail } from '@sveltejs/kit';

export const load = (async () => {
    return {};
}) satisfies PageServerLoad;


export const actions = {
    default: async ({ cookies, request, fetch }) => {
        const data = await request.formData();

        try {
            const response = await login(
                data.get('username') as string,
                data.get('password') as string,
                fetch
            );

            // Set the cookie to indicate the user is logged in
            cookies.set('loggedIn', 'true', { path: '/' });
            cookies.set('username', response.username, { path: '/' });
            cookies.set('profile_picture', response.profile_picture, { path: '/' });

        } catch (error: any) {

            // Handle specific error messages
            if (error.message === 'Wrong password' || error.message === 'Invalid password') {
                return fail(401, {
                    error: 'Login Failed. Incorrect username or password.'
                });
            }

            if (error.message === 'User not found') {
                return fail(404, {
                    error: error.message
                });
            }
            // Handle other errors
            return fail(422, {
                error: error.message
            });
        }

        // Redirect the user if login is successful
        redirect(303, '/dashboard');

    }
};