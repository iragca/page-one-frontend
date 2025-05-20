<script lang="ts">
	let { book } = $props();
	let { rating } = $state({rating: book.rating || 0})

	function setRating(stars: number) {
		if (rating === stars) {
			// Clicking the same star again removes the rating
			rating = 0;
			book.rating = 0;
		} else {
			rating = stars;
			book.rating = stars;
		}
	}
</script>

{#snippet metadataPair(key: string, value: string)}
	<div class="pair">
		<div class="key">{key}</div>
		<div class="value">{value}</div>
	</div>
{/snippet}

<div class="background">
	<img class="cover" src={book.cover_photo} alt={book.title + ' (image)'} />
	<div class="details">
		<div class="header">
			<div class="left">
				<h1 class="title">{book.title}</h1>
				<h2 class="author">{book.author}</h2>
			</div>
			<div class="stars">
				{#each Array(5) as _, i}
				    <button
					    class="star {i < rating ? 'active' : ''}"
						onclick={() => setRating(i + 1)}
						>★</button>
				{/each}
				<div class="rating-output">Rating is: {rating}/5</div>
			</div>
			
		</div>
		<hr class="divider" />
		<div class="body">
			<div class="metadata">
				{@render metadataPair('GENRE', book.genre)}
				{@render metadataPair('PUBLISHER', book.publisher)}
				{@render metadataPair('PUBLISHED', book.year_published)}
				{@render metadataPair('ISBN', book.isbn_issn)}
			</div>
			<div class="description">{book.description}</div>
		</div>
	</div>
</div>

<style>
	.background {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: start;
		height: fit-content;
		width: 100%;
		gap: 24px;
	}

	.cover {
		object-fit: cover;
		max-width: 200px;
		box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.64);
	}

	.details {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: start;
		text-align: justify;
	}

	.body {
		padding-left: 8px;
		padding-right: 8px;
		max-width: 100%;
	}

	.header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 100%;
		height: 100%;
		max-width: 100%;
	}

	.left,
	.body {
		display: flex;
		flex-direction: column;
		padding-left: 8px;
	}

	.left {
		gap: 16px;
	}

	.title {
		all: unset;
		font-size: 1.5em;
		font-weight: bold;
		text-align: left;
	}
	.author {
		all: unset;
		font-size: 1.2em;
		font-weight: bold;
		color: var(--light-gray);
	}

	.author::before {
		content: 'Author — ';
	}

	.star {
		align-self: flex-end;
		font-size: 1.5em;
		cursor: pointer;
		color: gray;
		transition: transform 0.2s;
	}

	.star.active {
		color: gold;
	}

	.star:hover {
		transform: scale(1.2);
	}

	.rating-output {
		margin-top: 4px;
		font-weight: bold;
	}

	.body {
		gap: 24px;
	}

	.divider {
		all: unset;
		width: 100%;
		height: 1px;
		background-color: var(--dark-gray);
		border: 1px solid var(--dark-gray);
		margin: 12px 0;
	}

	.description {
		white-space: pre-wrap;
		max-height: fit-content;
	}

	.pair {
		display: flex;
		justify-content: start;
		padding: 4px 0 4px 0px;
	}

	.key {
		font-weight: bold;
		color: var(--light-gray);
		width: 100px;
	}
</style>