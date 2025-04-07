<script lang="ts">
	import Shelves from './shelves.svelte';

	let { categoryName } = $props();
</script>

<div class="category">
	<div class="category-name">{categoryName.toUpperCase()}</div>
	<slot {Shelves} />
</div>

<style>
    .category {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        text-align: left;
        gap: 0.5rem;
        margin: 20px;
    }

    .category-name {
        padding: 0.5rem 0 0 0.5rem;
        font-weight: bold;
        color: var(--gray);
    }
</style>
