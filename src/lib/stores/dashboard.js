import { writable } from 'svelte/store';

export let viewMode = writable('grid');
export let showBookDetails = writable(false);
export let books = writable([]);
export let chosenBook = writable({
    _id: null,
    title: 'No title',
    isbn_issn: 'No ISBN',
    owned: false,
});
export let sortBy = writable('title');
export let sortOrder = writable('asc');
export let editMode = writable(false);
