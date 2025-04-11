import type { PageServerLoad } from './$types';
import { signup } from '$lib/server/signup';
import { redirect, fail } from '@sveltejs/kit';

export const load = (async () => {
    return {};
}) satisfies PageServerLoad;


export const actions = {
    default: async ({ request }) => {
        const data = await request.formData();

        try {
            const response = await signup(
                data.get('username') as string,
                data.get('email') as string,
                data.get('password') as string
            );

        } catch (error: any) {

            // Handle specific error messages
            if (error.message === 'User already exists') {
                return fail(409, {
                    error: error.message
                });
            }
            // Handle other errors
            return fail(422, {
                error: error.message
            });
        }

        redirect(303, '/login');

    }
};