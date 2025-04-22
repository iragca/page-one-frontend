<script lang="ts">
	import ViewToggle from './view-toggle.svelte';
	import SortOptions from './sort-options.svelte';
    import UploadBook from './upload-book.svelte';
</script>

<div class="background">
    <UploadBook />
    <ViewToggle />
    <SortOptions />
</div>

<style>
    .background {
        display: inline-flex;
        background-color: var(--background-color-1);
        gap: 12px
    }

</style>
