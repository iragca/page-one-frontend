import type { LayoutServerLoad } from './$types';
import { redirect } from '@sveltejs/kit';

export const load = (async ({ cookies }: { cookies: any }) => {

    // Check if the user is logged in
    // If not, redirect to the login page
    const loggedIn = cookies.get('loggedIn') || false;
    if (!loggedIn) {
        redirect(303, '/login');
    }

    return {
        username: cookies.get('username') || null,
        profile_picture: cookies.get('profile_picture') || null,
        role: cookies.get('role') || 'user'
    };
}) satisfies LayoutServerLoad;
