import { writable, derived } from 'svelte/store';

export const user = writable({});

// Function to check if a username belongs to an admin
function isAdminUsername(username) {
    return username === 'admin' || username.startsWith('admin_');
}

// Derived store that determines if the current user is an admin
export const isAdmin = derived(user, $user => {
    return $user.username ? isAdminUsername($user.username) : false;
});
