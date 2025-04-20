import { BACKEND_API_URL } from '$env/static/private';
import { fail, redirect } from '@sveltejs/kit';
import { editBook } from '$lib/server/editBook';
import type { PageServerLoad, Actions } from './$types';

export const load = (async (event) => {

    // Fetch the list of all books from the backend
    try {
        const response = await fetch(`${BACKEND_API_URL}/books`)

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
    editBook: async ({ request }) => {
        const data = await request.formData();

        try {
            const response = await editBook(
                {
                    _id: data.get('bookId') as string,
                    title: data.get('title') as string,
                    author: data.get('author') as string,
                    description: data.get('description') as string,
                    genre: data.get('GENRE') as string,
                    year_published: data.get('PUBLISHED') as string,
                    publisher: data.get('PUBLISHER') as string,
                    isbn_issn: data.get('ISBN') as string,
                    cover_photo: data.get('cover_photo') as string,
                }
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

    },

    deleteBook: async ({ request }) => {
        const data = await request.formData();
        const bookId = data.get('bookId') as string;

        try {
            const response = await fetch(`${BACKEND_API_URL}/books/${bookId}`, {
                method: 'DELETE',
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            } else if (response.status === 400) {
                throw new Error('Bad Request: Invalid book ID');
            } else if (response.status === 404) {
                throw new Error('Not Found: Book not found');
            } else if (response.status === 500) {
                throw new Error('Internal Server Error: Could not delete book');
            }
            
            return redirect(303, '/dashboard');
        } catch (error: any) {
            return fail(422, {
                error: error.message
            });
        }
    }
} satisfies Actions;