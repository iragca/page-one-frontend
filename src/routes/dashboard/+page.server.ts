import { BACKEND_API_URL } from '$env/static/private';
import { fail, redirect } from '@sveltejs/kit';
import { editBook } from '$lib/server/editBook';
import { uploadNewBook } from '$lib/server/uploadNewBook';
import { addbook, removebook } from '$lib/server/userbook';
import type { PageServerLoad, Actions } from './$types';

export const load = (async ({ cookies }) => {

    // Fetch the list of all books from the backend
    try {
        const username = cookies.get('username') as string;

        const response = await fetch(`${BACKEND_API_URL}/books?username=${username}`)

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
    },
    addBookToUser: async ({ request, cookies }) => {
        const data = await request.formData();
        const isbn_issn = data.get('isbn_issn') as string;
        const username = cookies.get('username') as string;

        try {
            const result = await addbook(username, isbn_issn);
            // Assuming addbook returns a JSON object with a success field
            if (result.success) {
                return { success: true };
            }
        } catch (error: any) {
            // Handle specific error messages based on the error thrown
            if (error.message === 'Book already exists in your collection.') {
                return fail(409, {
                    error: error.message
                });
            } else if (error.message === 'Book not found.') {
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
    },
    removeBookFromUser: async ({ request, cookies }) => {
        const data = await request.formData();
        const isbn_issn = data.get('isbn_issn') as string;
        const username = cookies.get('username') as string;

        try {
            const result = await removebook(username, isbn_issn);
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


    },
    uploadNewBook: async ({ request }) => {
        const data = await request.formData();

        try {
            const response = await uploadNewBook({
                title: data.get('title') as string,
                author: data.get('author') as string,
                genre: data.get('GENRE') as string,
                year_published: data.get('PUBLISHED') as string,
                publisher: data.get('PUBLISHER') as string,
                isbn_issn: data.get('ISBN') as string,
                cover_photo: data.get('cover_photo') as string,
                description: data.get('description') as string,
            })

        } catch (error: any) {
            // Handle specific error messages
            if (error.message === 'Bad Request: Invalid book data') {
                return fail(400, {
                    error: error.message
                });
            }
            // Handle other errors
            return fail(422, {
                error: error.message
            });

        }
    }
} satisfies Actions;