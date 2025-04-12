import { writable } from 'svelte/store';

export let viewMode = writable('grid');
export let showBookDetails = writable(false);
export let chosenBook = writable(null);
export let sortBy = writable('title');
export let sortOrder = writable('asc');
