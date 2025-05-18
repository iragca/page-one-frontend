export interface SearchResult {
    title: string;
    author: string;
    description?: string;
    isbn_issn?: string;
    score: number;
    year_published?: string | number;
    // Add any other properties from your book items
}