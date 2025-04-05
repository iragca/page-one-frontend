<script lang="ts">
	let { books } = $props();
</script>

<grid class="book-grid" columns="repeat(auto-fit, minmax(80px, 1fr))" gap="10px">
	{#each books as book}
		<div class="book">
			<img class="book" src={book.cover_photo} alt={book.title}/>
		</div>
	{/each}
</grid>

<style>

	.book-grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
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
</style>
