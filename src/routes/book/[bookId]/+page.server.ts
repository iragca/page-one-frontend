import { BACKEND_API_URL } from '$env/static/private';
import type { PageServerLoad } from './$types';

export const load = (async ({params}) => {

    const { bookId } = params;

    try {
            const response = await fetch(`${BACKEND_API_URL}/books/${bookId}`)
    
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const responseBody = await response.json();
    
            return {
                status: response.status,
                book: responseBody,
            };
        } catch (error: any) {
            return {
                status: 500,
                error: 'Could not fetch data from the server.',
            }
        }
}) satisfies PageServerLoad;