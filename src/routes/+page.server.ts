import type { PageServerLoad } from './$types';

const BACKEND_API_URL = import.meta.env.BACKEND_API_URL || 'http://localhost:5000/'

export const load = (async (event) => {

    const response = await fetch(`${BACKEND_API_URL}/books`)
    const responseBody = await response.json();

    return {
        books: responseBody,
    };
}) satisfies PageServerLoad;