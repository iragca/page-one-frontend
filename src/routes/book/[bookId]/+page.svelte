<script lang="ts">
	import type { PageData } from './$types';

	import BookNavBar from '$lib/components/bars/BookNavBar.svelte';

	let { data }: { data: PageData } = $props();

	const book = data.book;
</script>

<div class="background">
	<div class="container">
		<div class="header">
            <BookNavBar {bookTitle} />
        </div>
		<div class="body">
			<img src={book.cover_photo} alt={book.title + ' (image)'} class="book-cover" />
		</div>
	</div>
</div>


{#snippet bookTitle()}
{book.title}
{/snippet}

{#snippet bookCover()}
    <img src={book.cover_photo} alt={book.title + ' (image)'} class="book-cover" />
{/snippet}

<style>
	.container {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		border: 1px solid #ccc;
	}

    .header {
        width: 100%;
        display: flex;
        justify-content: center;
    }

</style>
