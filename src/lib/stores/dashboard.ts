import { writable } from 'svelte/store';

// Store for the currently chosen book
export const chosenBook = writable({
    _id: '',
    title: '',
    owned: false,
    isbn_issn: ''
});

// Store for showing book details popup
export const showBookDetails = writable(false);

// Store for showing book upload popup
export const showBookUpload = writable(false);

// Store for edit mode
export const editMode = writable(false);

// Store for library view (catalog/my-books)
export const library = writable('catalog'); 