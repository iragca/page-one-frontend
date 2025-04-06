<script>
	import NavBar from '$lib/components/navbar.svelte';
	import Dashboard from './dashboard.svelte';

	let response = $props();

</script>

<div class="background">
	<NavBar />
	<Dashboard {response} />
</div>

<style>
	.background {
		background-color: var(--background-color);
	}
</style>
