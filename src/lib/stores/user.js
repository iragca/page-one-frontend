import { writable } from 'svelte/store';

export let user = writable({
    username: null,
    profile_picture: null
});
