import type { PageServerLoad, Actions } from './$types';
import { BACKEND_API_URL } from '$env/static/private';
import { removebook } from '$lib/server/userbook';
import { fail } from '@sveltejs/kit'

export const load = (async ({ cookies, fetch }) => {
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

export const actions = {
    removeBookFromUser: async ({ request, cookies, fetch }) => {
        const data = await request.formData();
        const isbn_issn = data.get('isbn_issn') as string;
        const username = cookies.get('username') as string;

        try {
            const result = await removebook(username, isbn_issn, fetch);
            // Assuming removebook returns a JSON object with a success field
            if (result.success) {
                return { success: true };
            }
        } catch (error: any) {
            // Handle specific error messages based on the error thrown
            if (error.message === 'Book not found in your collection.') {
                return fail(404, {
                    error: error.message
                });
            } else if (error.message === 'Invalid ISBN/ISSN.') {
                return fail(422, {
                    error: error.message
                });
            }
            // Handle other unexpected errors
            return fail(500, {
                error: 'An unexpected error occurred.'
            });
        }
    }
} satisfies Actions;