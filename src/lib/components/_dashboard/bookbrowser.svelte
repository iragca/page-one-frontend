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
	<div class="grid">
		<div class="navbar-container">
			<div class="container left"><slot /></div>
			<div class="container middle"><SimpleSearchBar /></div>
			<div class="container right"><Options /></div>
		</div>
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
		justify-content: center;
		align-items: flex-start;
		height: 100%;
		margin: 0px;
	}
	.grid {
		display: grid;
		grid-template-rows: minmax(0, 100px) 1fr;
		gap: 18px;
		height: 100%;
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

	.book-info-card-bg {
		position: absolute;
		z-index: 1;

		width: 100%;
		height: 100%;
		background-color: rgba(31, 31, 31, 0.8);
		backdrop-filter: blur(4px);
	}

	.book-info-card-location {
		display: flex;
		justify-content: center;
		align-items: center;

		height: 100vh;
	}

	.book-info-card {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		gap: 16px;

		min-width: 600px;
		max-width: 80%;
		padding: 40px;

		border: 2px solid var(--dark-gray);
		border-radius: 12px;

		background-color: rgba(31, 31, 31, 0.75);
		backdrop-filter: blur(12px); /* the blur gives the frosted effect */
		-webkit-backdrop-filter: blur(12px); /* for Safari */
		box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
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
