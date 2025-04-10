<script lang="ts">
	import { fade } from 'svelte/transition';
	let { title, cover_photo, _id } = $props();

	let hovering = $state(false);

	let transitionOptions = {
		duration: 80
	};
</script>

<a href={`book/${_id}`} class="book-link">
	<button
		class="book"
		onmouseenter={() => (hovering = true)}
		onmouseleave={() => (hovering = false)}
	>
		{#if hovering}
			<div class="layer book-icon" transition:fade={transitionOptions}>
				<span class="material-symbols-outlined"> menu_book </span>
			</div>
			<div class="layer vignette" transition:fade={transitionOptions}></div>
		{/if}
		<img
			class="layer book-image"
			src={cover_photo || '/images/no-cover-retrieved.png'}
			alt={title}
		/>
	</button>
</a>

<style>

	.book-link {
		all: unset;
	}
	.book {
		all: unset;
		display: grid;
		place-items: center;
		cursor: pointer;
		height: 225px;
		width: 150px;
		overflow: hidden;
		object-fit: fill;
		border-radius: 4px;
		box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.64);
	}

	.layer {
		grid-area: 1/1;
	}

	.book-icon {
		display: flex;
		background-color: var(--background-color);
		align-items: center;
		justify-content: center;
		height: 40px;
		width: 40px;
		border-radius: 50%;
		z-index: 99;
	}

	.material-symbols-outlined {
		font-size: 20px;
	}

	.vignette {
		width: 100%;
		height: 100%;
		background: radial-gradient(ellipse at center, rgba(0, 0, 0, 0) 10%, rgba(0, 0, 0, 0.7) 100%);
		z-index: 2;
		border-radius: 4px;
	}


	.book-image {
		height: 100%;
		width: 100%;
		border: 1px solid #ccc;
		overflow: hidden;
		object-fit: cover;
		z-index: 1;
		border-radius: 4px;
	}
</style>
