<script lang="ts">
	import BookEntry from './_books/book-entry.svelte';
	let { books } = $props();
</script>

<div class="book-grid">
	{#each books as book}
		<BookEntry let:Book {...book}>
			<Book {...book}></Book>
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
		gap: 12px;
	}
</style>
