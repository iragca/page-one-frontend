<script lang="ts">
	import ViewToggle from './view-toggle.svelte';
	import SortOptions from './sort-options.svelte';

    let { toggleView, viewMode } = $props();
</script>

<div class="background">
    <SortOptions />
    <ViewToggle {toggleView} {viewMode} />
</div>
