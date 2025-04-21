import { BACKEND_API_URL } from '$env/static/private';

export const addbook = async (username: string, isbn_issn: string) => {

    const response = await fetch(`${BACKEND_API_URL}/books/user`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, isbn_issn })
    });

    if (response.ok) {
        return await response.json();
    } else if (response.status === 404) {
        throw new Error('Book not found.');
    } else {
        throw new Error('Something went wrong.');
    }
};

export const removebook = async (username: string, isbn_issn: string) => {

    const response = await fetch(`${BACKEND_API_URL}/books/user`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, isbn_issn })
    });

    if (response.ok) {
        return await response.json();
    } else if (response.status === 404) {
        throw new Error('Book not found.');
    } else {
        throw new Error('Something went wrong.');
    }
}