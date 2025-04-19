<script lang="ts">
	let { book } = $props();
</script>

{#snippet metadataPair(key: string, value: string)}
	<div class="pair">
		<div class="key">{key}</div>
		<input type="text" class="value" name={key} placeholder={value} {value} />
	</div>
{/snippet}

<div class="background">
	<div>
		<img class="cover" src={book.cover_photo} alt={book.title + ' (image)'} />
		<input type="text" class="cover" name="cover_photo" value={book.cover_photo} />
	</div>

	<div class="details">
		<div class="header">
			<div class="left">
				<input
					type="text"
					class="title"
					name="title"
					placeholder={book.title}
					value={book.title}
				/>
				<input
					type="text"
					class="author"
					name="author"
					placeholder={book.author}
					value={book.author}
				/>
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
			<!-- TODO: FIX THE OVERFLOW ISSUE of the textarea -->
			<textarea
				class="description"
				name="description"
				value={book.description}
				placeholder={book.description}
			></textarea>
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
		width: 100%;
	}

	input {
		all: unset;
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
		display: block;
		resize: both;

		min-height: 100px;
		min-width: 300px;

		max-width: 1200px;

		max-height: fit-content;
		padding-right: 12px;
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
