<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { LayoutData } from './$types';

	import OpenSidebarButton from '$lib/components/buttons/OpenSidebarButton.svelte';
	import CloseSidebarButton from '$lib/components/buttons/CloseSidebarButton.svelte';

	import SideBar from '$lib/components/_dashboard/sidebar.svelte';

	let { data, children }: { data: LayoutData; children: Snippet } = $props();

	let closeSidebar = $state(false);

	let toggleSidebar = () => {
		closeSidebar = !closeSidebar;
	};
</script>

<div class="background">
	<div class="grid-container">
		{#if !closeSidebar}
			<button class="close-sidebar" onclick={toggleSidebar}>
				<CloseSidebarButton />
			</button>
			<div class="grid-item sidebar">
				<SideBar />
			</div>
		{:else}
			<button class="open-sidebar" onclick={toggleSidebar}>
				<OpenSidebarButton />
			</button>
		{/if}
		<div class="grid-item bookbrowser">{@render children()}
        </div>
	</div>
</div>

<style>
	.background {
		background-color: var(--background-color);
	}

	.grid-container {
		position: relative;
		display: flex;
		height: 100vh;
		width: 100vw;
		overflow: hidden; /* Prevents overflow beyond the container */
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

	.close-sidebar {
		all: unset;
	}

	.open-sidebar {
		all: unset;
	}
</style>
