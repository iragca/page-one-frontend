<script lang="ts">
	import '../../app.css';
	import Gridview from './_bookbrowser/gridview.svelte';
	import GridView from './_bookbrowser/gridview.svelte';
	let { response } = $props();

	let books = $state(response.data.books);
	let fetchFailed = $state(false);
	let errorMessage = $state('');

	if (response.data.status > 400) {
		fetchFailed = true;
		errorMessage = response.data.error;
	}
</script>

<div class="background">
	<div class="grid">
		<div class="sort-buttons">
			<button class="sort-button">Sort by Title</button>
			<button class="sort-button">Sort by Author</button>
			<button class="sort-button">Sort by Date</button>
			<button class="sort-button">Sort by Genre</button>
		</div>
		<div class="book-grid">
			{#if fetchFailed}
				<div class="error-message">{errorMessage}</div>
			{:else if books.length === 0}
				<div class="no-books">No books available</div>
			{:else}
				<Gridview {books} />
			{/if}
		</div>
	</div>
</div>

<style>
	.grid {
		display: grid;
		grid-template-rows: minmax(0, 100px) 1fr;
	}

	.book-grid {
		display: flex;
		flex-wrap: wrap;
		gap: 10px;
	}

	.background {
		height: 100vh;
		margin: 0px;
		background:
			radial-gradient(circle at 30% 30%, var(--background-color-2), transparent 70%),
			radial-gradient(circle at 70% 70%, var(--background-color-3), transparent 70%);
	}
</style>
