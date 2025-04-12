<script lang="ts">
	import Book from './_books/book.svelte';

	import { faker } from '@faker-js/faker';
	let { books } = $props();
</script>

<div class="list-container">
	<div class="book-list">
		{#each books as book}
			<div class="book-container">
				<div class="book">
                    <Book {book} />
				</div>
				<div class="book-details">
					<div class="book-title">
                        {book.title} <span class="publish-year">({book.year_published})</span>
                    </div>
					<div class="book-author">{book.author}</div>
					<div class="star-rating">
						<!-- placeholderstar rating -->
						{#each [1, 1, 1, 1, 1] as _}
							<span>⭐</span>
						{/each}
					</div>

					<!-- placeholder description -->
					<div class="book-description">
						{book.description ||
							`No description available. ${faker.lorem.paragraph(Math.floor(Math.random() * 20) + 1)}`}
					</div>
				</div>
			</div>
		{/each}
	</div>
</div>

<style>
	.list-container {
		display: flex;
		justify-content: center;
		padding: 5%;
	}
	.book-list {
		display: flex;
		flex-direction: column;
		gap: 20px;
	}

	.book-container {
		display: flex;
		align-items: flex-start;
		gap: 12px;
		margin-left: 12px;
		margin-right: 12px;
		height: 100%;
		box-sizing: border-box;
        background-color: #cccccc3b;
		padding:8px;
		border-radius:8px;
	}

	.book {
		width: 100px;
		height: 100%;
		flex-shrink: 0;
		border-radius: 4px;
	}

	.book-img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.book-details {
		display: grid;
		grid-template-rows: minmax(0, 20px) minmax(0, 20px) minmax(0, 15px) 1fr;
		justify-items: left;
		align-items: start;
		overflow: hidden;
		width: 100%;
		height: 100%;
	}

	.book-title,
	.book-author {
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}

    .publish-year {
        font-weight: 600;
        opacity: 0.45;
    }

	.book-title {
		font-weight: 600;
		font-size: medium;
	}

	.book-author {
		font-weight: 600;
		opacity: 0.45;
		margin-bottom: 4px;
	}

	.book-description {
		text-align: left;
		overflow: hidden;
		font-weight: 400;
        margin-top: 16px;
		max-height: 100px;
		margin-right: 16px;
		line-clamp: 4;
		display: -webkit-box;
		-webkit-line-clamp: 4;
		-webkit-box-orient: vertical;
		text-overflow: ellipsis;
		max-height: 7.5em;
		white-space: normal;
	}

	@media (min-width: 1200px) {
		.book-list {
			max-width: 1200px;
		}
	}
</style>
