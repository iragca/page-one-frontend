<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { LayoutData } from './$types';

	import OpenSidebarButton from '$lib/components/buttons/OpenSidebarButton.svelte';
	import CloseSidebarButton from '$lib/components/buttons/CloseSidebarButton.svelte';

	import SideBar from '$lib/components/_dashboard/sidebar.svelte';
	import { closeSidebar } from '$lib/stores/sidebar';

	let { data, children }: { data: LayoutData; children: Snippet } = $props();


</script>

<div class="background">
	<div class="grid-container">
		{#if !$closeSidebar}
			<div class="grid-item sidebar">
				<SideBar />
			</div>
		{/if}
		<div class="grid-item bookbrowser">{@render children()}
        </div>
	</div>
</div>

<style>
	.background {
		background-color: var(--background-color);
		height: 100%;
		min-height: 100vh;
	}

	.grid-container {
		display: flex;
		height: 100%;
		min-height: 100vh;
		width: 100vw;
		background:
			radial-gradient(circle at 20% 20%, var(--background-color-2), transparent 70%),
			radial-gradient(circle at 70% 70%, var(--background-color-3), transparent 70%);
	}

	.grid-item {
		position: relative;
		background-color: var(--background-color);
		text-align: center;
		max-width: 100%; /* Ensures items do not exceed their fraction size */
		box-sizing: border-box; /* Ensure padding doesn't cause overflow */
		background-color: transparent;
	}

	.grid-item.sidebar {
		flex: 0 0 250px; /* Fixed width for sidebar */
	}
	.grid-item.bookbrowser {
		flex: 1; /* Takes the remaining space */
	}
</style>
