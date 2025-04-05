import { BACKEND_API_URL } from '$env/static/private';
import type { PageServerLoad } from './$types';

export const load = (async (event) => {

    const response = await fetch(`${BACKEND_API_URL}/books`)
    const responseBody = await response.json();

    return {
        books: responseBody,
    };
}) satisfies PageServerLoad;