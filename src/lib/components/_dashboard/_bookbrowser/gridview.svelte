<script lang="ts">
	let { books } = $props();
	import Book from './_books/book-entry.svelte';
</script>

<div class="book-grid">
	{#each books as book}
		<Book {...book}/>
	{/each}
</div>

<style>
	.book-grid {
		display: flex;
		justify-content: center;
		align-items: flex-start;
		flex-wrap: wrap;
		gap: 12px;
	}
</style>
