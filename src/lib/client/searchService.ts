import Fuse from 'fuse.js';

const fuseOptions = {
    keys: [
        { name: 'title', weight: 0.4 },
        { name: 'author', weight: 0.3 },
        { name: 'description', weight: 0.2 },
        { name: 'isbn_issn', weight: 0.1 }
    ],
    threshold: 0.3,
    includeScore: true
};

export function createSearchIndex(books: any[]) {
    return new Fuse(books, fuseOptions);
}

export function searchBooks(fuse: Fuse<any>, query: string) {
    if (!query.trim()) {
        return [];
    }
    return fuse.search(query);
}