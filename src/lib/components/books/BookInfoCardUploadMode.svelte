<script lang="ts">
	// Placeholder book data for testing purposes
	let book = $state({
		title: 'Book Title',
		author: 'Book Author',
		cover_photo: 'https://placehold.co/150x225',
		genre: 'Book Genre',
		publisher: 'Book Publisher',
		year_published: '2023',
		isbn_issn: '1234567890',
		description: 'Book Description'
	});

	function fallbackImage(event: Event) {
		const target = event.target as HTMLImageElement;
		target.onerror = null; // Prevent infinite loop
		target.src = 'images/no-cover-retrieved.png'; // Fallback image
	}
</script>

{#snippet metadataPair(key: string, value: string)}
	<div class="pair">
		<div class="key">{key}</div>
		<input type="text" class="value" name={key} placeholder={value} required/>
	</div>
{/snippet}

<div class="background">
	<div class="cover-container">
		<img class="cover" src={book.cover_photo} onerror={fallbackImage} alt={book.title + ' (image)'} />
		<input type="text" class="cover-url" name="cover_photo" bind:value={book.cover_photo} placeholder="https://placehold.co/150x225" required />
	</div>

	<div class="details">
		<div class="header">
			<div class="left">
				<input type="text" class="title" name="title" placeholder={book.title} required/>
				<input type="text" class="author" name="author" placeholder={book.author} required/>
			</div>
			<div class="right">⭐⭐⭐⭐⭐</div>
		</div>
		<hr class="divider" />
		<div class="body">
			<div class="metadata">
				{@render metadataPair('GENRE', book.genre)}
				{@render metadataPair('PUBLISHER', book.publisher)}
				{@render metadataPair('PUBLISHED', book.year_published)}
				{@render metadataPair('ISBN', book.isbn_issn)}
			</div>
			<textarea class="description" name="description" placeholder={book.description} required></textarea>
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
		width: clamp(150px, 200px, 200px);
		height: clamp(225px, 300px, 300px);
		box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.64);
	}

	.cover-container {
		display: flex;
		flex-direction: column;
		align-items: center;
		width: fit-content;
		gap: 8px;
	}

	.details {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: start;
		text-align: justify;
	}

	input {
		all: unset;
		width: fit-content;
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
	.right,
	.body {
		display: flex;
		flex-direction: column;
		padding-left: 8px;
	}

	.left {
		gap: 16px;
		width: 100%;
	}

	.right {
		align-self: flex-end;
		width: fit-content;
	}

	.title {
		all: unset;
		font-size: 1.5em;
		font-weight: bold;
		text-align: left;
		width: 100%;
	}
	.author {
		all: unset;
		font-size: 1.2em;
		font-weight: bold;
		color: var(--light-gray);
	}

	.right {
		align-self: flex-end;
	}

	.body {
		gap: 24px;
		width: 100%;
	}

	.divider {
		all: unset;
		width: 100%;
		height: 1px;
		background-color: var(--dark-gray);
		border: 1px solid var(--dark-gray);
		margin: 12px 0;
	}

	textarea {
		all: unset;
		resize: none;
		field-sizing: content;
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
	img {
		user-select: none;
	}
</style>
