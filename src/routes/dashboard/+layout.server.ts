import type { LayoutServerLoad } from './$types';

export const load = (async ({ cookies }: { cookies: any }) => {
    return {
        username: cookies.get('username') || null,
        profile_picture: cookies.get('profile_picture') || null
    };
}) satisfies LayoutServerLoad;