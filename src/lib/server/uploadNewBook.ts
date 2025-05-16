import { BACKEND_API_URL } from '$env/static/private';

export const uploadNewBook = async (book: any, svelte_fetch: Function) => {

    const response = await svelte_fetch(`${BACKEND_API_URL}/books`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(book)
    });

    if (response.ok) {
        return await response.json();
    } else if (response.status === 400) {
        throw new Error('Bad Request: Invalid book data');
    } else {
        throw new Error('Something went wrong');
    }
};
