<script lang="ts">
	import NavBar from '$lib/components/navbar.svelte';
	import Gridview from './_bookbrowser/gridview.svelte';
	import Listview from './_bookbrowser/listview.svelte';
	import Options from './_bookbrowser/_options/options.svelte';
	import SimpleSearchBar from '../bars/SimpleSearchBar.svelte';

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
			<div class="container left"><slot /></div>
			<div class="container middle"><SimpleSearchBar /></div>
			<div class="container right"><Options {toggleView} {viewMode} /></div>
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
	.background {
		display: flex;
		justify-content: center;
		align-items: flex-start;
		margin: 0px;
		background:
			radial-gradient(circle at 30% 30%, var(--background-color-2), transparent 70%),
			radial-gradient(circle at 70% 70%, var(--background-color-3), transparent 70%);
	}
	.grid {
		display: grid;
		grid-template-rows: minmax(0, 100px) 1fr;
		gap: 18px;
	}

	.navbar-container {
		display: flex;
		justify-content: space-evenly;
		align-items: center;
	}

	.container {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 12px;
	}

	.left {
		position: absolute;
		left: 8%;
		flex: 1;
	}
	.middle {
		flex: 2;
	}
	.right {
		position: absolute;
		right: 8%;
		flex: 1;
	}

	@media (max-width: 768px) {
		.left,
		.right {
			position: static;
			flex: 1;
		}

		.left {
			justify-content: left;
		}

		.right {
			justify-content: right;
		}
	}

	@media (max-width: 480px) {
		.left,
		.right {
			position: static;
			flex: 1;
		}

		.left {
			justify-content: left;
		}

		.right {
			justify-content: right;
		}
	}
</style>
