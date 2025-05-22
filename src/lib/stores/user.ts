import { writable, derived } from 'svelte/store';
import type { User } from '$lib/types/user';

export const user = writable<User>({});

// Function to check if a username belongs to an admin
function isAdminUsername(username: string): boolean {
    return username === 'admin' || username.startsWith('admin_');
}

// Derived store that determines if the current user is an admin
export const isAdmin = derived(user, ($user) => {
    return $user.username ? isAdminUsername($user.username) : false;
}); 