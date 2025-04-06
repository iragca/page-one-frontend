<script lang="ts">
	let { books } = $props();
</script>

<div class="book-grid">
	{#each books as book}
		<div class="book-container">
			<div class="book">
				<!-- <img class="book" src={book.cover_photo} alt={book.title} /> -->
				<img class="book" src="https://placehold.co/400x600" alt={book.title} />
			</div>
			<div class="book-title">{book.title}</div>
			<div class="book-author">{book.author}</div>
		</div>
	{/each}
</div>

<style>
	.book-grid {
		display: flex;
		flex-wrap: wrap;
		gap: 10px;
	}

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

	div.book {
		height: 225px;
		width: 150px;
		border: 1px solid #ccc;
		overflow: hidden;
		object-fit: fill;
	}

	img.book {
		height: 100%;
		width: 100%;
		border: 1px solid #ccc;
		overflow: hidden;
		object-fit: cover;
	}
</style>
