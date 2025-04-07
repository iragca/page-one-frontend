<script>
	import Dashboard from '$lib/components/dashboard.svelte';

	let response = $props();

</script>

<div class="background">
	<Dashboard {response} />
</div>

<style>
	.background {
		background-color: var(--background-color);
	}
</style>
