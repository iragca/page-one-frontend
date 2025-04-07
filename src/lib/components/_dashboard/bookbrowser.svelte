<script lang="ts">
	import NavBar from '$lib/components/navbar.svelte';
	import Gridview from './_bookbrowser/gridview.svelte';
	import Listview from './_bookbrowser/listview.svelte';
	let { response } = $props();

	let viewMode = $state('grid');
	let toggleView = () => {
		viewMode = viewMode === 'grid' ? 'list' : 'grid';
	};

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
		<div class="navbar-container">
			<NavBar />
		</div>
		<div>
			<div class="sort-buttons">
				<button class="sort-button">Sort by Title</button>
				<button class="sort-button">Sort by Author</button>
				<button class="sort-button">Sort by Date</button>
				<button class="sort-button">Sort by Genre</button>
			</div>
			<div class="view-toggle">
				<button class="toggle-button" onclick={toggleView}>
					{viewMode === 'grid' ? 'Switch to List View' : 'Switch to Grid View'}
				</button>
			</div>
		</div>

		{#if fetchFailed}
			<div class="error-message">{errorMessage}</div>
		{:else if books.length === 0}
			<div class="no-books">No books available</div>
		{:else if viewMode === 'list'}
			<Listview {books} />
		{:else}
			<Gridview {books} />
		{/if}
	</div>
</div>

<style>
	.grid {
		display: grid;
		grid-template-rows: minmax(0, 100px) 1fr;
	}

	.background {
		height: 100vh;
		margin: 0px;
		overflow: auto;
		background:
			radial-gradient(circle at 30% 30%, var(--background-color-2), transparent 70%),
			radial-gradient(circle at 70% 70%, var(--background-color-3), transparent 70%);
	}

	.navbar-container {
		display: flex;
		justify-content: center;
		align-items: center;
	}
</style>
