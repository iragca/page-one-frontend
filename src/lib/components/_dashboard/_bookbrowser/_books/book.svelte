<script lang="ts">
    import { fade, fly } from 'svelte/transition';
	let { title } = $props();

	let hovering = $state(false);

    let transitionOptions = {
        duration: 80
    };

</script>

<button class="book" onmouseenter={() => (hovering = true)} onmouseleave={() => (hovering = false)}>
	{#if hovering}
		<div class="layer book-icon" transition:fade={transitionOptions}><span class="material-symbols-outlined"> menu_book </span></div>
		<div class="layer vignette" transition:fade={transitionOptions}></div>
	{/if}
	<img class="layer book-image" src="https://placehold.co/400x600" alt={title} />
</button>

<style>
	.book {
		all: unset;
		display: grid;
		place-items: center;
		cursor: pointer;
		height: 225px;
		width: 150px;
		border: 1px solid #ccc;
		overflow: hidden;
		object-fit: fill;
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
        background: radial-gradient(
            ellipse at center,
            rgba(0, 0, 0, 0) 10%,
            rgba(0, 0, 0, 0.7) 100%
        );
        z-index: 2;
    }

	.book-image {
		height: 100%;
		width: 100%;
		border: 1px solid #ccc;
		overflow: hidden;
		object-fit: cover;
		z-index: 1;
	}
</style>
