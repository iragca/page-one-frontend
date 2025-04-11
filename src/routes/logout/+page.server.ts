import type { PageServerLoad } from './$types';
import { redirect } from '@sveltejs/kit';

export const load = (async ({ cookies }) => {

    // Clear the cookies to log out the user
    cookies.delete('loggedIn', { path: '/' });
    cookies.delete('username', { path: '/' });
    cookies.delete('profile_picture', { path: '/' });

    // Redirect the user to the login page
    redirect(303, '/login');

}) satisfies PageServerLoad;
