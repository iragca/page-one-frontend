<script lang="ts">
    import Shelf from './shelf.svelte';
</script>


<div class="shelves">
    <slot {Shelf} />
</div>


<style>
    .shelves {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        padding: 0.5rem 0;
    }
</style>