import type { PageServerLoad } from './$types';
import { redirect } from '@sveltejs/kit';

export const load = (async ({ cookies }) => {

    // Check if the user is logged in
    // If not, redirect to the login page
    const loggedIn = cookies.get('loggedIn') || false;
    if (!loggedIn) {
        redirect(303, '/login');
    }

    // If the user is logged in, redirect to the dashboard
    redirect(303, '/dashboard');
}) satisfies PageServerLoad;