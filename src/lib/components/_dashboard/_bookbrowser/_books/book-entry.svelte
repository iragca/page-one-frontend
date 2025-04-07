<script lang="ts">
	let { title, author } = $props();
	import Book from './book.svelte';
</script>

<div class="book-container">
	<Book {title} />
	<div class="book-title">{title}</div>
	<div class="book-author">{author}</div>
</div>

<style>
	.book-container {
		align-items: center;
		text-align: center;
		color: white;
		padding: 20px;
		gap: 5px;
		max-width: 150px;
	}

	.book-title {
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		font-weight: 600;
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
