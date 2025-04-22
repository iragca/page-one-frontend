import type { PageServerLoad } from './$types';
import { redirect } from '@sveltejs/kit';

export const load = (async () => {

    redirect(303, '/settings/profile');
    return {};
}) satisfies PageServerLoad;