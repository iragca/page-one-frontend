<script lang="ts">
	import PopupBookNavBar from '../bars/PopupBookNavBar.svelte';
	import BookInfoCardUploadMode from '../books/BookInfoCardUploadMode.svelte';
	import { showBookUpload } from '$lib/stores/dashboard';

	function closeBookUpload() {
		$showBookUpload = false;
	}

</script>

<div class="book-info-card-bg">
	<div class="book-info-card-location">
		<div class="book-info-card">
			<PopupBookNavBar let:SimpleButton>
				<button onclick={closeBookUpload} aria-label="Close">
					<SimpleButton iconName="close" />
				</button>
				<div class="bookTitle">Add a new book</div>
				<button type="submit" form="uploadBookForm"><SimpleButton iconName="check" /></button>
			</PopupBookNavBar>
			<form action="?/uploadNewBook" method="POST" id="uploadBookForm">
				<BookInfoCardUploadMode />
			</form>
		</div>
	</div>
</div>

<style>
	.book-info-card-bg {
		display: flex;
		justify-content: center;
		align-items: start;
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
		position: sticky;
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

	.bookTitle {
		display: flex;
		justify-content: flex-start;
		align-items: center;
		width: 100%;
		color: var(--light-gray);
		text-align: center;
	}
</style>
