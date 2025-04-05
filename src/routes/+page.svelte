<script>
	import NavBar from '$lib/components/navbar.svelte';
	import Dashboard from './dashboard.svelte';

	let response = $props();

	let books = response.data.books;
</script>

<div class="background">
	<NavBar />
	<Dashboard {books} />
</div>

<style>
	.background {
		background-color: var(--background-color);
	}
</style>
