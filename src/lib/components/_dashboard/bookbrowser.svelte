<script lang="ts">
	import Gridview from './_bookbrowser/gridview.svelte';
	import Listview from './_bookbrowser/listview.svelte';
	import Options from './_bookbrowser/_options/options.svelte';
	import SimpleSearchBar from '../bars/SimpleSearchBar.svelte';
	import { showBookDetails, viewMode } from '$lib/stores/dashboard';
	import PopupBookDetails from '../popups/PopupBookDetails.svelte';

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
	<div class="gradient">
		<div class="navbar-container">
			<div class="container left"><slot /></div>
			<div class="container middle"><SimpleSearchBar /></div>
			<div class="container right"><Options /></div>
		</div>
	</div>
	<div class="grid">
		{#if fetchFailed}
			<div class="error-message">{errorMessage}</div>
		{:else if books.length === 0}
			<div class="no-books">No books available</div>
		{:else if $viewMode === 'list'}
			<Listview {books} />
		{:else}
			<Gridview {books} />
		{/if}
		{#if $showBookDetails}
			<PopupBookDetails {books} />
		{/if}
	</div>
</div>

<style>
	.background {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		height: 100%;
		margin: 0px;
	}
	.grid {
		grid-template-rows: minmax(0, 100px) 1fr;
		gap: 18px;
		height: 100%;
	}

	.navbar-container {
		position: sticky;
		top: 0;
		display: flex;
		justify-content: space-evenly;
		align-items: flex-start;

		width: 100%;
		height: 150px;
		padding-top: 20px;
		padding-bottom: 20px;
		background: linear-gradient(
			to bottom,
			rgba(31, 31, 31, 1),
			rgba(31, 31, 31, 0.8),
			rgba(31, 31, 31, 0.4),
			rgba(31, 31, 31, 0.1),
			rgba(31, 31, 31, 0)
		);
	}
	.gradient {
		overflow: visible;
		width: 100%;
		position: sticky;
		top: 0;
		z-index: 3;
		max-height: 100px;
	}

	.container {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 12px;
	}

	.left {
		position: absolute;
		left: 4%;
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
