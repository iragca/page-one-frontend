import type { PageServerLoad } from './$types';
import { BACKEND_API_URL } from '$env/static/private';

export const load = (async ({ cookies }) => {
    // Fetch the list of all books from the backend
    try {
        const username = cookies.get('username') as string;
        const response = await fetch(`${BACKEND_API_URL}/books/user/${username}`)


        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const responseBody = await response.json();

        return {
            status: response.status,
            books: responseBody,
        };
    } catch (error: any) {
        return {
            status: 500,
            error: 'Could not fetch data from the server.',
        }
    }
}) satisfies PageServerLoad;