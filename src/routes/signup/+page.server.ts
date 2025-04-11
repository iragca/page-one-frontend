import type { PageServerLoad } from './$types';
import { signup } from '$lib/server/signup';
import { redirect } from '@sveltejs/kit';

export const load = (async () => {
    return {};
}) satisfies PageServerLoad;


export const actions = {
    default: async ({ request }) => {
        const data = await request.formData();

        const response = await signup(
            data.get('username') as string,
            data.get('email') as string,
            data.get('password') as string
        );

        redirect(303, '/login');

    }
};