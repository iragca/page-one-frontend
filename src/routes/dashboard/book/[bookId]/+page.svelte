<!-- 
This ROUTE is now deprecated.
Replaced by a popup component in the dashboard. 
-->

<script lang="ts">
	import type { PageData } from './$types';

	import BookNavBar from '$lib/components/bars/BookNavBar.svelte';
	import BookInfoCard from '$lib/components/books/BookInfoCard.svelte';

	let { data }: { data: PageData } = $props();

	const book = data.book;
</script>

<div class="background">
	<div class="container">
		<div class="header">
			<BookNavBar {bookTitle} />
		</div>
		<div class="body">
			<BookInfoCard {book} />
		</div>
	</div>
</div>

{#snippet bookTitle()}
	{book.title}
{/snippet}

<style>
	.background {
		display: flex;
		justify-content: center;
		align-items: start;
		height: 100vh;
		width: 100%;
	}
	.container {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 40px;
		height: fit-content;
		width: 800px;
		margin-top: 4%;
	}

	.header {
		width: 100%;
		display: flex;
		justify-content: center;
	}

	.body {
		max-width: 100%;
	}
</style>
