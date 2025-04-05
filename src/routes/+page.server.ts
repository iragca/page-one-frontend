import type { PageServerLoad } from './$types';

export const load = (async (event) => {

    const response = await fetch("http://localhost:5000/books")
    const responseBody = await response.json();

    return {
        books: responseBody,
    };
}) satisfies PageServerLoad;