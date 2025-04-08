<script lang="ts">
	import ViewToggle from './view-toggle.svelte';
	import SortOptions from './sort-options.svelte';

    let { toggleView, viewMode } = $props();
</script>

<div class="background">
    <ViewToggle {toggleView} {viewMode} />
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
