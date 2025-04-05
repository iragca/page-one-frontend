<script>
	import NavBar from '$lib/components/navbar.svelte';
	import Dashboard from './dashboard.svelte';

	let response = $props();

	let books = response.data.books

</script>

<NavBar />
<Dashboard {books} />

<style>
	:global(body) {
		margin: 0;
	}
</style>
