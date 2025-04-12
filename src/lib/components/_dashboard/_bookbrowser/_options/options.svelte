<script lang="ts">
	import ViewToggle from './view-toggle.svelte';
	import SortOptions from './sort-options.svelte';
</script>

<div class="background">
    <ViewToggle />
    <SortOptions />
</div>

<style>
    .background {
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        padding: 10px;
        background-color: var(--background-color-1);
        gap: 12px
    }

</style>
