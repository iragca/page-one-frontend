<script lang="ts">
	import BookInfoCard from '../books/BookInfoCard.svelte';
	import PopupBookNavBar from '../bars/PopupBookNavBar.svelte';
	import { chosenBook } from '$lib/stores/dashboard';
</script>

<div class="book-info-card-bg">
</div>

<div class="book-info-card-location">
	<div class="book-info-card">
		<PopupBookNavBar bookTitle={$chosenBook.title} />
		<BookInfoCard book={$chosenBook} />
	</div>
</div>
<style>
	.book-info-card-bg {
		position: absolute;
		top: 0px;
		left: 0px;
		z-index: 10;

		width: 100%;
		height: 100%;
		background-color: rgba(31, 31, 31, 0.4);
		backdrop-filter: blur(4px);
	}

	.book-info-card-location {
		position: fixed;
		top: 0px;
		display: flex;
		justify-content: center;
		align-items: center;
		z-index: 11;
		height: 100vh;
	}

	.book-info-card {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		gap: 16px;

		min-width: 600px;
		max-width: 80%;
		padding: 40px;

		border: 2px solid var(--dark-gray);
		border-radius: 12px;

		background-color: rgba(31, 31, 31, 0.75);
		backdrop-filter: blur(20px); /* the blur gives the frosted effect */
		-webkit-backdrop-filter: blur(20px); /* for Safari */
		box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
	}
</style>
