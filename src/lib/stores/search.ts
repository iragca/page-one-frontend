import { writable, type Writable} from 'svelte/store';
import type { SearchResult } from '$lib/types/search.types';

export const searchQuery = writable('');
export const searchResults: Writable<SearchResult[]> = writable([]);