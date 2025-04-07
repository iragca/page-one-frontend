<script lang="ts">
	let { toggleView, viewMode } = $props();
</script>

<div class="view-toggle">
	<button class="toggle-button" onclick={toggleView}>
		{#if viewMode === 'grid'}
			<span class="material-symbols-outlined"> view_list </span>
		{:else}
			<span class="material-symbols-outlined"> grid_view </span>
		{/if}
	</button>
</div>

<style>
	.view-toggle {
		border: 1px solid var(--light-gray);
        border-radius: 8px;

        width: 40px;
        height: 40px;

        background-color: rgba(31, 31, 31, 0.5);
	}
	.view-toggle:hover {
		box-shadow: 0px 0px 12px var(--dark-black);
        transition: 0.24s;

	}
	.toggle-button {
		all: unset;
		cursor: pointer;

		display: flex;
		justify-content: center;
		align-items: center;

        width: 100%;
        height: 100%;
        border-radius: 8px;
	}

</style>
