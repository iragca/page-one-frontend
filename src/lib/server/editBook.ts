import { BACKEND_API_URL } from '$env/static/private';

export const editBook = async (book: any) => {

    const { _id, ...details } = book

    console.log('bookId', _id)
    console.log('details', details)

    const response = await fetch(`${BACKEND_API_URL}/books/${_id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(details)
    });

    if (response.ok) {
        return await response.json();
    } else if (response.status === 404) {
        throw new Error('Book not found');
    } else {
        throw new Error('Something went wrong while editing the book');
    }
};
