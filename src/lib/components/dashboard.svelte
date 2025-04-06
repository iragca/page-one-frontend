<script lang="ts">
	import SideBar from '$lib/components/_dashboard/sidebar.svelte';
	import BookBrowser from '$lib/components/_dashboard/bookbrowser.svelte';
	let { response } = $props();
	let closeSidebar = $state(false);

	let toggleSidebar = () => {
		closeSidebar = !closeSidebar;
	};
</script>

<div class="grid-container">
	{#if !closeSidebar}
		<button class="close-sidebar" onclick={toggleSidebar}>
			<span class="material-symbols-outlined"> arrow_menu_close </span>
		</button>
		<div class="grid-item sidebar"><SideBar /></div>
	{:else}
		<button class="open-sidebar" onclick={toggleSidebar}>
			<span class="material-symbols-outlined"> arrow_menu_open</span>
		</button>
	{/if}
	<div class="grid-item bookbrowser"><BookBrowser {response} /></div>
</div>

<style>
	.grid-container {
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
		position: absolute;
		top: 10px;
		left: 224px;
		width: 40px;
		height: 40px;
		cursor: pointer; /* Change cursor to pointer */
		background-color: rgb(83, 82, 82);
		border: 2px solid var(--dark-gray);
		border-radius: 20%;
		box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
		z-index: 10;
	}

	.close-sidebar:hover {
		background-color: rgb(31, 31, 31);
		transition: background-color 0.3s ease;
	}

	.open-sidebar {
		position: absolute;
		top: 10px;
		left: 10px;
		width: 40px;
		height: 40px;
		cursor: pointer; /* Change cursor to pointer */
		background-color: rgb(83, 82, 82);
		border: 2px solid var(--dark-gray);
		border-radius: 20%;
		box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
		z-index: 10;
	}

	.material-symbols-outlined {
		color: var(--icon-color);
	}
</style>
