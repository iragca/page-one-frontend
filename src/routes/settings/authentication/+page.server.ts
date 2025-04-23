import type { PageServerLoad, Actions } from './$types';
import { udpatePassword } from '$lib/server/updatepassword';

export const load = (async () => {
    return {};
}) satisfies PageServerLoad;

export const actions = {
    udpatePassword: async ({ request }) => {
        const data = await request.formData();

        const username = data.get('username') as string;
        const oldPassword = data.get('old-password') as string;
        const newPassword = data.get('new-password') as string;
        const confirmPassword = data.get('confirm-password') as string;

        try {

            // Data validation for confirming password is not yet implemented on the backend
            if (newPassword !== confirmPassword) {
                return {
                    status: 400,
                    error: 'New password and confirm password do not match'
                };
            }

            const response = await udpatePassword(username, oldPassword, newPassword);

        } catch (error: any) {

            if (error.message === 'Invalid password') {
                return {
                    status: 401,
                    error: 'Invalid password'
                };
            } else if (error.message === 'User not found') {
                return {
                    status: 404,
                    error: 'User not found'
                };
            } else {
                return {
                    status: 500,
                    error: 'An unexpected error occurred'
                };
            }
        }
    }
} satisfies Actions;