<script lang="ts">
	import BookInfoCard from '../books/BookInfoCard.svelte';
	import BookInfoCardEditMode from '../books/BookInfoCardEditMode.svelte';
	import PopupBookNavBar from '../bars/PopupBookNavBar.svelte';
	import { chosenBook, showBookDetails, editMode } from '$lib/stores/dashboard';
	import { isAdmin } from '$lib/stores/user';

	function closeBookDetails() {
		$showBookDetails = false;
	}

	function toggleEditMode() {
		$editMode = !$editMode;
	}
</script>

<div class="book-info-card-bg">
<div class="book-info-card-location">
	<div class="book-info-card">
		<PopupBookNavBar let:SimpleButton>
			<button onclick={closeBookDetails} aria-label="Close">
				<SimpleButton iconName="close" />
			</button>
			<div class="bookTitle">{$chosenBook.title}</div>
			{#if $isAdmin}
				{#if $editMode}
					<button type="submit" form="editBookForm"><SimpleButton iconName="save" /></button>
					<form action="?/deleteBook" method="POST">
						<input type="hidden" name="bookId" value={$chosenBook._id} />
						<button type="submit"><SimpleButton iconName="delete" /></button>
					</form>
				{/if}
			{/if}
			{#if $chosenBook.owned}
				<form action="?/removeBookFromUser" method="POST">
					<input type="hidden" name="isbn_issn" value={$chosenBook.isbn_issn} />
					<button type="submit"><SimpleButton iconName="playlist_remove" /></button>
				</form>
			{:else}
				<form action="?/addBookToUser" method="POST">
					<input type="hidden" name="isbn_issn" value={$chosenBook.isbn_issn} />
					<button type="submit"><SimpleButton iconName="playlist_add" /></button>
				</form>
			{/if}
			<button onclick={toggleEditMode}><SimpleButton iconName="edit" /></button>
			<button><SimpleButton iconName="download" /></button>
		</PopupBookNavBar>
		{#if $isAdmin && $editMode}
			<form id="editBookForm" method="POST" action="?/editBook">
				<input type="hidden" name="bookId" value={$chosenBook._id} />
				<BookInfoCardEditMode book={$chosenBook} />
			</form>
		{:else}
			<BookInfoCard book={$chosenBook} />
		{/if}
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
