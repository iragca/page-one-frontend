<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { LayoutData } from '../$types';

	import OpenSidebarButton from '$lib/components/buttons/OpenSidebarButton.svelte';
	import CloseSidebarButton from '$lib/components/buttons/CloseSidebarButton.svelte';

	import SideBar from '$lib/components/_dashboard/sidebar.svelte';
	import { closeSidebar } from '$lib/stores/sidebar';
	import { user } from '$lib/stores/user';

	let { data, children }: { data: LayoutData; children: Snippet } = $props();

	$user = { ...data };
</script>

<div class="background">
	<div class="grid-container">
		{#if !$closeSidebar}
			<div class="grid-item sidebar">
				<SideBar />
			</div>
		{/if}
		<div class="grid-item bookbrowser">{@render children()}</div>
	</div>
</div>

<style>
	.background {
		height: 100%;
		min-height: 100vh;
	}

	.grid-container {
		display: flex;
		height: 100%;
		min-height: 100vh;

	}

	.grid-item {
		position: relative;
		text-align: center;
	}

	.grid-item.sidebar {
		flex: 0 0 250px; /* Fixed width for sidebar */
	}
	.grid-item.bookbrowser {
		flex: 1; /* Takes the remaining space */
	}
</style>
