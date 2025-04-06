<script lang="ts">
	// import SideBar from '$lib/components/sidebar.svelte';
	import BookBrowser from '$lib/components/bookbrowser.svelte';

	let { response } = $props();
</script>

<div class="grid-container">
	<div class="grid-item"></div>
	<div class="grid-item"><BookBrowser {response} /></div>
</div>

<style>
	.grid-container {
		display: grid;
		grid-template-columns: minmax(0, 250px) 5fr;
		height: 100vh;
		width: 100%;
		overflow: hidden; /* Prevents overflow beyond the container */

		background:
			radial-gradient(circle at 20% 20%, var(--background-color-2), transparent 70%),
			radial-gradient(circle at 70% 70%, var(--background-color-3), transparent 70%);
	}

	.grid-item {
		background-color: var(--background-color);
		text-align: center;
		color: white;
		border: 1px solid var(--icon-color);
		max-width: 100%; /* Ensures items do not exceed their fraction size */
		overflow: auto; /* Allows scroll if the content overflows */
		box-sizing: border-box; /* Ensure padding doesn't cause overflow */
		background-color: transparent;
	}
</style>
