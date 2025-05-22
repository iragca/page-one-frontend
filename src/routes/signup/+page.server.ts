import type { PageServerLoad } from './$types';
import { signup } from '$lib/server/signup';
import { redirect, fail } from '@sveltejs/kit';

export const load = (async () => {
    return {};
}) satisfies PageServerLoad;


export const actions = {
    default: async ({ request, fetch }) => {
        const data = await request.formData();

        // Prepare the submitted values for preservation
        const preservedData = {
            username: data.get('username'),
            email: data.get('email'),
            password: data.get('password'),
            confirmPassword: data.get('confirmPassword')
        };

        try {
            const response = await signup(
                data.get('username') as string,
                data.get('email') as string,
                data.get('password') as string,
                fetch
            );

        } catch (error: any) {

            // Handle specific error messages
            if (error.message === 'User already exists') {
                return fail(409, {
                    error: error.message,
                    data: preservedData
                });
            }
            // Handle other errors
            return fail(422, {
                error: error.message,
                data: preservedData
            });
        }

        redirect(303, '/login');

    }
};