<script lang="ts">
	import BookEntry from './_books/book-entry.svelte';
	import { books } from '$lib/stores/dashboard';
	import {searchQuery, searchResults} from '$lib/stores/search'

	$: displayedBooks = $searchQuery ? $searchResults : $books;
</script>

<div class="book-grid">
	{#each displayedBooks as book}
		<BookEntry let:Book {book}>
			<Book {book}></Book>
		</BookEntry>
	{/each}
</div>

<style>
	.book-grid {
		display: flex;
		justify-content: center;
		align-items: flex-start;
		align-content: flex-start;
		flex-wrap: wrap;
		width: 100%;
		gap: 12px;
	}
</style>
