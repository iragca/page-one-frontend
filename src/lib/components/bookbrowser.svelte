<script lang="ts">
	import '../../app.css';
	let { books } = $props();
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
			{#each books as book}
				<div class="book-container">
					<div class="book">
						<img class="book" src={book.cover_photo} alt={book.title} />
					</div>
					<div class="book-title">{book.title}</div>
					<div class="book-author">{book.author}</div>
				</div>
			{/each}
		</div>
	</div>
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
		font-weight: bold;
		padding-left: 5px;
		max-width: 100%;
	}

	.book-author {
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		opacity: 0.45;
	}

	.grid {
		display: grid;
		grid-template-rows: minmax(0, 100px) 1fr;
	}

	.book-grid {
		display: flex;
		flex-wrap: wrap;
		gap: 10px;
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

	.background {
		height: 100vh;
		margin: 0;
		background:
			radial-gradient(circle at 30% 30%, var(--background-color-2), transparent 70%),
			radial-gradient(circle at 70% 70%, var(--background-color-3), transparent 70%);
	}
</style>
