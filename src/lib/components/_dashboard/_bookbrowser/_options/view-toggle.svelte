<script lang="ts">
	import ButtonWithIcon from '$lib/components/buttons/ButtonWithIcon.svelte';
	import { viewMode } from '$lib/stores/dashboard';

	let toggleView = () => {
		$viewMode = $viewMode === 'grid' ? 'list' : 'grid';
	};
</script>

<div class="view-toggle">
	<button class="toggle-button" onclick={toggleView}>
		{#if viewMode === 'grid'}
			<ButtonWithIcon>view_list</ButtonWithIcon>
		{:else}
			<ButtonWithIcon>grid_view</ButtonWithIcon>
		{/if}
	</button>
</div>

<style>
	.toggle-button {
		all: unset;
		pointer-events: visibleFill;
	}
</style>
