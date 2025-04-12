<script lang="ts">
	let { book } = $props();
	import Book from './book.svelte';
</script>

<div class="book-container">
	<div class="book-image">
		<slot {Book} />
	</div>
	<div class="book-title">{book.title}</div>
	<div class="book-author">{book.author}</div>
</div>

<style>
	.book-container {
		align-items: center;
		text-align: center;
		color: white;
		padding: 18px;
		gap: 5px;
		max-width: 150px;
	}

	.book-image {
		height: 225px;
		width: 150px;
	}

	.book-title {
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		font-weight: 600;
		margin-top: 8px;
		padding-left: 5px;
		max-width: 100%;
	}

	.book-author {
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		font-weight: 600;
		opacity: 0.45;
	}
</style>
