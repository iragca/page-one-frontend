<script lang="ts">
	import OpenSidebarButton from './buttons/OpenSidebarButton.svelte';
	import CloseSidebarButton from './buttons/CloseSidebarButton.svelte';
	import ButtonWithIcon from '$lib/components/buttons/ButtonWithIcon.svelte';
	import SideBar from '$lib/components/_dashboard/sidebar.svelte';
	import BookBrowser from '$lib/components/_dashboard/bookbrowser.svelte';
	import ButtonWithIconBg from './buttons/ButtonWithIconBG.svelte';

	let { response } = $props();
	let closeSidebar = $state(false);

	let toggleSidebar = () => {
		closeSidebar = !closeSidebar;
	};
</script>

<div class="grid-container">
	{#if !closeSidebar}
		<div class="grid-item sidebar">
			<SideBar />
		</div>
	{/if}
	<div class="grid-item bookbrowser">
		<BookBrowser {response}>
			<button class="close-sidebar" onclick={toggleSidebar}>
				<ButtonWithIcon>menu</ButtonWithIcon>
			</button>
		</BookBrowser>
	</div>
</div>

<style>
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
</style>
